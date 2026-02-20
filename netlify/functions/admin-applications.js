import { createClient } from '@supabase/supabase-js';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const VALID_STATUSES = ['new', 'viewed', 'contacted', 'accepted', 'rejected'];

const supabase = process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
  ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
  : null;

async function verifyAdmin(req) {
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) return { error: 'Unauthorized', status: 401 };
  if (!supabase) return { error: 'Server not configured', status: 500 };

  const token = authHeader.slice(7);
  const { data: { user }, error } = await supabase.auth.getUser(token);
  if (error || !user) return { error: 'Invalid token', status: 401 };
  if (user.email !== ADMIN_EMAIL) return { error: 'Forbidden', status: 403 };

  return { user };
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

export default async (req) => {
  // Auth check for all methods
  const auth = await verifyAdmin(req);
  if (auth.error) return json({ error: auth.error }, auth.status);

  // GET — list all applications
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('join_applications')
      .select('*')
      .order('submitted_at', { ascending: false });

    if (error) {
      console.error('Fetch applications error:', error);
      return json({ error: 'Failed to fetch applications' }, 500);
    }
    return json({ applications: data });
  }

  // PATCH — update application status
  if (req.method === 'PATCH') {
    const body = await req.json();
    const { id, status } = body;

    if (!id) return json({ error: 'Missing application id' }, 400);
    if (!status || !VALID_STATUSES.includes(status)) {
      return json({ error: `Invalid status. Must be one of: ${VALID_STATUSES.join(', ')}` }, 400);
    }

    const { data, error } = await supabase
      .from('join_applications')
      .update({ status, status_updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Update application error:', error);
      return json({ error: 'Failed to update application' }, 500);
    }
    return json({ application: data });
  }

  return json({ error: 'Method not allowed' }, 405);
};
