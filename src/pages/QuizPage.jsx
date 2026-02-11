import { useEffect, useState } from 'react';
import VectorField from '../components/VectorField';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';

const QUESTIONS = [
  { id: 'q1', label: '01', question: 'How do you go from idea to shipped product?', placeholder: 'Describe your typical workflow from concept to launch...' },
  { id: 'q2', label: '02', question: 'What happens between design and implementation?', placeholder: 'Is there a handoff? A spec? A conversation? Nothing?' },
  { id: 'q3', label: '03', question: 'How do you use AI in your workflow?', placeholder: 'Do you use AI agents? For what? How much direction do you give them?' },
  { id: 'q4', label: '04', question: 'How many people or roles touch a feature before it ships?', placeholder: 'Designer, engineer, PM, QA... who is in the chain?' },
  { id: 'q5', label: '05', question: 'What is your biggest frustration with your current process?', placeholder: 'Where does signal get lost? What makes you want to scream?' },
];

function QuizPage() {
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    document.title = 'Am I Vibe Coding? — Zero-Vector Design';
  }, []);

  const updateAnswer = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const filledCount = QUESTIONS.filter(q => answers[q.id]?.trim()).length;

  const submit = async () => {
    if (filledCount < 3 || loading) return;
    setLoading(true);

    try {
      const res = await fetch('/.netlify/functions/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers }),
      });

      const data = await res.json();

      if (res.status === 429) {
        setResult({ score: 0, title: 'Rate Limited', summary: 'Transmission frequency exceeded. Wait a few minutes before trying again.', strengths: [], friction: [], nextStep: '' });
      } else if (data.score !== undefined) {
        setResult(data);
      } else {
        setResult({ score: 0, title: 'Error', summary: 'Assessment failed. Try again.', strengths: [], friction: [], nextStep: '' });
      }
    } catch {
      setResult({ score: 0, title: 'Error', summary: 'Transmission failed. Try again.', strengths: [], friction: [], nextStep: '' });
    }

    setLoading(false);
  };

  const reset = () => {
    setAnswers({});
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="zv-page">
      <VectorField />
      <Nav />

      <PageHero
        eyebrow="Assessment"
        title="Am I Vibe Coding?"
        subtitle="Answer five questions about your workflow. The manifesto will tell you where you stand."
      />

      <section className="zv-section" style={{ paddingTop: 0 }}>
        <div className="zv-container">
          {!result ? (
            <div className="zv-quiz">
              {QUESTIONS.map((q) => (
                <div key={q.id} className="zv-quiz-question">
                  <div className="zv-quiz-label">{q.label}</div>
                  <label className="zv-quiz-text" htmlFor={q.id}>{q.question}</label>
                  <textarea
                    id={q.id}
                    className="zv-quiz-input"
                    value={answers[q.id] || ''}
                    onChange={(e) => updateAnswer(q.id, e.target.value)}
                    placeholder={q.placeholder}
                    rows={3}
                    disabled={loading}
                  />
                </div>
              ))}
              <div className="zv-quiz-submit-row">
                <button
                  className="zv-cta"
                  onClick={submit}
                  disabled={filledCount < 3 || loading}
                  style={{ opacity: filledCount < 3 ? 0.4 : 1 }}
                >
                  {loading ? 'Analyzing...' : 'Assess My Process'}
                </button>
                <span className="zv-quiz-counter">{filledCount}/5 answered {filledCount < 3 && '(min 3)'}</span>
              </div>
            </div>
          ) : (
            <div className="zv-quiz-result">
              <div className="zv-quiz-score-row">
                <div className="zv-quiz-score">{result.score}</div>
                <div className="zv-quiz-score-label">/100</div>
              </div>
              <div className="zv-quiz-title">{result.title}</div>
              <p className="zv-quiz-summary">{result.summary}</p>

              {result.strengths?.length > 0 && (
                <div className="zv-quiz-section">
                  <div className="zv-quiz-section-label">Strengths</div>
                  {result.strengths.map((s, i) => (
                    <p key={i} className="zv-quiz-item zv-quiz-item--strength">{s}</p>
                  ))}
                </div>
              )}

              {result.friction?.length > 0 && (
                <div className="zv-quiz-section">
                  <div className="zv-quiz-section-label">Friction Points</div>
                  {result.friction.map((f, i) => (
                    <p key={i} className="zv-quiz-item zv-quiz-item--friction">{f}</p>
                  ))}
                </div>
              )}

              {result.nextStep && (
                <div className="zv-quiz-section">
                  <div className="zv-quiz-section-label">Next Step</div>
                  <p className="zv-quiz-next">{result.nextStep}</p>
                </div>
              )}

              <button className="zv-cta zv-cta-outline" onClick={reset} style={{ marginTop: 48 }}>
                Take It Again
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default QuizPage;
