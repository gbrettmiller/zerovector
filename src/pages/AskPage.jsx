import { useEffect, useState, useRef } from 'react';
import VectorField from '../components/VectorField';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';

function AskPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    document.title = 'Ask the Manifesto — Zero-Vector Design';
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: 'user', content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated }),
      });

      const data = await res.json();

      if (res.status === 429) {
        setMessages(prev => [...prev, { role: 'assistant', content: 'Transmission frequency exceeded. Wait a few minutes before asking again.' }]);
      } else if (data.reply) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: 'Signal lost. Try again.' }]);
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Transmission failed. Try again.' }]);
    }

    setLoading(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="zv-page">
      <VectorField />
      <Nav />

      <PageHero
        eyebrow="Interactive"
        title="Ask the Manifesto"
        subtitle="The manifesto talks back. Ask it anything about Zero-Vector Design."
      />

      <section className="zv-section" style={{ paddingTop: 0 }}>
        <div className="zv-container">
          <div className="zv-chat">
            <div className="zv-chat-messages">
              {messages.length === 0 && (
                <div className="zv-chat-empty">
                  <p>Ask a question. Challenge a principle. Describe your process and see what the manifesto thinks.</p>
                  <div className="zv-chat-suggestions">
                    {[
                      'What is the difference between Zero-Vector and vibe coding?',
                      'Our team uses Figma to design, then hands off to engineering. What would you change?',
                      'Why should I care about the Mark III Problem?',
                    ].map((suggestion, i) => (
                      <button
                        key={i}
                        className="zv-chat-suggestion"
                        onClick={() => { setInput(suggestion); inputRef.current?.focus(); }}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`zv-chat-msg zv-chat-msg--${msg.role}`}>
                  <div className="zv-chat-msg-label">
                    {msg.role === 'user' ? 'You' : 'Manifesto'}
                  </div>
                  <div className="zv-chat-msg-text">{msg.content}</div>
                </div>
              ))}
              {loading && (
                <div className="zv-chat-msg zv-chat-msg--assistant">
                  <div className="zv-chat-msg-label">Manifesto</div>
                  <div className="zv-chat-msg-text zv-chat-loading">
                    <span>.</span><span>.</span><span>.</span>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>
            <div className="zv-chat-input-row">
              <textarea
                ref={inputRef}
                className="zv-chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask the manifesto..."
                rows={1}
                disabled={loading}
              />
              <button
                className="zv-chat-send"
                onClick={send}
                disabled={loading || !input.trim()}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AskPage;
