import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../../hooks/useSEO';

const SUGGESTED_PROMPTS = [
  {
    icon: '\u00A7',
    label: 'What is vibe coding?',
    text: 'What is vibe coding and why should I avoid it?',
  },
  {
    icon: '\u00B6',
    label: 'Structure a project',
    text: 'How should I structure a project when building with Claude Code?',
  },
  {
    icon: '\u2020',
    label: 'Systems thinking',
    text: 'Explain systems thinking and why it matters for designers who build.',
  },
  {
    icon: '\u2021',
    label: 'Where to start',
    text: 'I am a designer who has never coded. What should I learn first?',
  },
  {
    icon: '\u00A4',
    label: 'AI agents',
    text: 'How do AI agents work together on a project? What is the crew model?',
  },
  {
    icon: '\u00AB',
    label: 'Design + engineering',
    text: 'What does it mean to be a design-led engineer? How is that different from a developer?',
  },
];

const MOCK_RESPONSES = {
  'What is vibe coding and why should I avoid it?': `Vibe coding is building software by feel — throwing prompts at an AI, accepting whatever comes back, and hoping it works. It is the modern equivalent of clip art: fast, easy, and completely devoid of intention.

The problem is not using AI. The problem is using AI **without understanding what it is doing**. When you vibe code, you cannot debug what breaks because you never understood how it worked. You cannot extend it because you do not know where the seams are. You cannot explain it because you were never the architect — you were just the person pressing buttons.

The Open Vector teaches the alternative: design-led engineering. You learn how things work, then you use AI to build faster with that understanding. The [Systems Thinking](/open/learn/curriculum/01-foundation/systems-thinking) lesson covers why understanding the whole system matters, and the [Claude Code](/open/learn/curriculum/02-the-medium/claude-code) lesson shows you what intentional AI-assisted building looks like in practice.

For a deeper dive into the philosophy, the [Zero Vector Manifesto](https://zerovector.design/) lays out the full argument. And Anthropic's own [Claude Code Best Practices](https://docs.anthropic.com/en/docs/claude-code/best-practices) reinforce the same principle: you get better results when you understand what you are building.`,

  'How should I structure a project when building with Claude Code?': `Start with a **CLAUDE.md** file at the root of your project. This is your project's brain — it tells Claude Code about your architecture, conventions, and constraints. The [CLAUDE.md lesson](/open/learn/curriculum/04-orchestration/claude-md) walks through exactly how to write one, with real examples from production projects.

Structure your project with separation of concerns: \`src/\` for source code, with \`pages/\`, \`components/\`, \`styles/\`, and \`content/\` as distinct directories. Each folder should have one clear responsibility. The [Architecture lesson](/open/learn/curriculum/01-foundation/architecture) covers this pattern in detail, including how component trees map to file trees.

The key insight: your file structure IS your information architecture. The [Information Architecture lesson](/open/learn/curriculum/01-foundation/information-architecture) explains how URL design, folder structure, and user mental models are all the same discipline. A well-organized project is easier for both humans and AI to navigate.

Some external references that go deeper:

- [The Twelve-Factor App](https://12factor.net/) — principles for building modern, portable apps
- [Anthropic's Claude Code Tutorials](https://docs.anthropic.com/en/docs/claude-code/tutorials) — step-by-step walkthroughs
- [Patterns.dev](https://www.patterns.dev/) — modern web development and design patterns

Start small. One page, one component, one style file. Get that working, then grow. The [Your First Ship lesson](/open/learn/curriculum/02-the-medium/your-first-ship) walks through shipping something real in a single session.`,

  'Explain systems thinking and why it matters for designers who build.': `Systems thinking is seeing the whole instead of the parts. It is the discipline of understanding how things connect, influence each other, and produce emergent behavior that no single component explains on its own.

The [Systems Thinking lesson](/open/learn/curriculum/01-foundation/systems-thinking) covers this in depth, but the core idea is simple: every design decision is a systems decision. When you change a button color, you are not just changing a button — you are affecting hierarchy, attention flow, accessibility contrast ratios, and brand consistency. Systems thinkers see these connections. Feature thinkers see the button.

For designers who build, this matters because **code is a system**. A React component tree is a system of dependencies. A CSS stylesheet is a system of cascading rules. A database schema is a system of relationships. If you cannot think in systems, you will build things that work in isolation and break in combination.

The curriculum builds this muscle across several lessons:

- [Architecture](/open/learn/curriculum/01-foundation/architecture) — how to see the structure behind applications
- [Nouns and Verbs](/open/learn/curriculum/01-foundation/nouns-and-verbs) — modeling systems as entities and actions
- [Data Modeling](/open/learn/curriculum/01-foundation/data-modeling) — designing the information structures that power everything
- [Orchestration](/open/learn/curriculum/04-orchestration/orchestration) — coordinating complex multi-part systems

For further reading, Donella Meadows' [Thinking in Systems](https://www.chelseagreen.com/product/thinking-in-systems/) is the foundational text. Her essay [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/) is shorter and immediately actionable. And [Loopy](https://ncase.me/loopy/) is an interactive tool that lets you draw system loops and watch them play out.`,

  'I am a designer who has never coded. What should I learn first?': `Start with Level 00: Orientation. It is designed exactly for you — a designer who has never opened a terminal. No prior coding knowledge assumed.

Here is the path:

1. **[The Terminal](/open/learn/curriculum/00-orientation/terminal)** — Open it, type a few commands, understand what you are looking at. This is the foundation everything else sits on.

2. **[File Systems](/open/learn/curriculum/00-orientation/file-systems)** — How files and folders actually work on a computer. You already know this intuitively from Finder or Explorer, but building requires precision.

3. **[Git Basics](/open/learn/curriculum/00-orientation/git-basics)** — Version control. Think of it as unlimited undo for your entire project. You will use this every single day.

4. **[Repositories](/open/learn/curriculum/00-orientation/repos)** — Where your code lives online. GitHub is to code what Figma is to design files.

5. **[Deployment](/open/learn/curriculum/00-orientation/deployment)** — Ship something live. Getting a real URL that anyone can visit.

6. **[DNS](/open/learn/curriculum/00-orientation/dns)** — How the internet actually finds your site when someone types a URL.

After that, Level 01: Foundation introduces [Systems Thinking](/open/learn/curriculum/01-foundation/systems-thinking), [Architecture](/open/learn/curriculum/01-foundation/architecture), and [Planning](/open/learn/curriculum/01-foundation/planning) — the design mindset applied to building.

Some external resources to supplement:

- [The Missing Semester of CS Education](https://missing.csail.mit.edu/) — MIT's course on the tools nobody teaches
- [GitHub Skills](https://skills.github.com/) — interactive, hands-on GitHub tutorials
- [Command Line Power User](https://commandlinepoweruser.com/) — free terminal video series by Wes Bos

The most important thing: do not try to learn everything at once. One lesson, one concept, one small thing built. That compounds faster than you think.`,

  'How do AI agents work together on a project? What is the crew model?': `AI agents are instances of an AI model, each given a specific role, context, and set of responsibilities. Instead of one general-purpose AI doing everything, you partition the work across specialists — the same way a well-run team operates.

The [Multi-Agent Systems lesson](/open/learn/curriculum/04-orchestration/multi-agent) explains the fundamentals, and [The Crew Model lesson](/open/learn/curriculum/04-orchestration/the-crew-model) shows how to design and coordinate a full team of agents working on a single project.

The key principles:

**Separation of concerns.** Each agent owns a domain. A backend agent handles API logic. A frontend agent handles UI. A design agent handles visual systems. They do not step on each other because their responsibilities are clearly bounded.

**Shared context, independent execution.** Agents share a common project context (usually through a CLAUDE.md file and shared codebase) but make decisions independently within their domain. The [CLAUDE.md lesson](/open/learn/curriculum/04-orchestration/claude-md) covers how to write the shared context document.

**Quality gates between stages.** Work flows through checkpoints — each agent's output is verified before becoming input for the next. The [Quality Gates lesson](/open/learn/curriculum/04-orchestration/quality-gates) covers patterns for this.

**Orchestration, not micromanagement.** You set direction and constraints. The agents execute. The [Orchestration lesson](/open/learn/curriculum/04-orchestration/orchestration) covers the meta-skill of conducting the whole ensemble.

For external context, [Team Topologies](https://teamtopologies.com/) by Skelton and Pais is the definitive book on organizing teams for fast flow — the same principles apply to agent teams. And [Anthropic's Claude Code documentation](https://docs.anthropic.com/en/docs/claude-code/overview) covers the practical mechanics.`,

  'What does it mean to be a design-led engineer? How is that different from a developer?': `A developer writes code. A design-led engineer **designs systems and uses code to build them**. The distinction is not about skill level — it is about where the thinking happens.

A developer starts with a framework and asks "how do I implement this feature?" A design-led engineer starts with a user need and asks "what system would serve this?" The code is an implementation detail, not the starting point.

The Open Vector curriculum is built around this idea:

- [Systems Thinking](/open/learn/curriculum/01-foundation/systems-thinking) teaches you to see the whole, not just features
- [Planning](/open/learn/curriculum/01-foundation/planning) shows how to scope and shape work before writing a single line of code
- [Research](/open/learn/curriculum/03-the-pipeline/research) and [JTBD](/open/learn/curriculum/03-the-pipeline/jtbd) teach you to understand what people actually need, not just what they ask for
- [Personal Methodology](/open/learn/curriculum/05-auteur/personal-methodology) helps you develop your own approach to building

The design background is your superpower, not your limitation. You already understand hierarchy, flow, user psychology, and systems. The curriculum adds the technical vocabulary and tools to express those ideas in code.

Some essential reading:

- [Don Norman's Design of Everyday Things](https://www.nngroup.com/books/design-everyday-things-revised/) — the foundational text on design thinking
- [Refactoring UI](https://www.refactoringui.com/) — practical UI design for people who build
- [The Pragmatic Programmer](https://pragprog.com/titles/tpp20/) — software craftsmanship that shares DNA with design craft
- The [Zero Vector Manifesto](https://zerovector.design/philosophy) — the full philosophy of design-led engineering

The [Auteur Practice lesson](/open/learn/curriculum/05-auteur/auteur-practice) at the end of the curriculum brings it all together: you are not a designer who codes or a developer who designs. You are an auteur — someone with a singular vision who uses every available tool to realize it.`,

  'default': `That is a great question. Let me point you to some relevant parts of the curriculum and some external resources that might help.

The Open Vector covers this across several lessons. Here are the most relevant starting points:

- [Systems Thinking](/open/learn/curriculum/01-foundation/systems-thinking) — understanding how things connect and influence each other
- [Architecture](/open/learn/curriculum/01-foundation/architecture) — the structure behind applications
- [Claude Code](/open/learn/curriculum/02-the-medium/claude-code) — building intentionally with AI tools
- [The Crew Model](/open/learn/curriculum/04-orchestration/the-crew-model) — coordinating multi-agent workflows

For external references, these are solid starting points:

- [Anthropic's Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) — official documentation on working with Claude
- [Shape Up](https://basecamp.com/shapeup) — a methodology for scoping and shipping work
- [Patterns.dev](https://www.patterns.dev/) — modern web development patterns

You can also browse the full [Go Further library](/open/learn/resources) for books, articles, courses, and tools organized by topic.

I am currently in preview mode — when fully connected, I will be able to give deeper, more contextual answers grounded in the entire curriculum. For now, the lessons themselves are the richest source.`,
};

// Renders text with markdown-style links: [text](url)
// Internal links (starting with /) use React Router <Link>
// External links use <a target="_blank">
function renderLinkedText(text) {
  const parts = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const linkText = match[1];
    const url = match[2];

    if (url.startsWith('/')) {
      parts.push(
        <Link key={match.index} to={url} className="ovl-chat-link ovl-chat-link--internal">
          {linkText}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={match.index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="ovl-chat-link ovl-chat-link--external"
        >
          {linkText}<span className="ovl-chat-link-arrow">&thinsp;&nearr;</span>
        </a>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  // Remaining text after last link
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

// Renders **bold** text
function renderBold(content) {
  if (typeof content !== 'string') return content;
  const parts = [];
  const regex = /\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(...renderLinkedText(content.slice(lastIndex, match.index)));
    }
    parts.push(<strong key={`b-${match.index}`}>{renderLinkedText(match[1])}</strong>);
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex === 0) return renderLinkedText(content);
  if (lastIndex < content.length) {
    parts.push(...renderLinkedText(content.slice(lastIndex)));
  }
  return parts;
}

// Renders inline `code`
function renderInlineCode(content) {
  if (typeof content !== 'string') return content;
  const parts = [];
  const regex = /`([^`]+)`/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(renderBold(content.slice(lastIndex, match.index)));
    }
    parts.push(<code key={`c-${match.index}`} className="ovl-chat-code">{match[1]}</code>);
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex === 0) return renderBold(content);
  if (lastIndex < content.length) {
    parts.push(renderBold(content.slice(lastIndex)));
  }
  return parts;
}

// Renders a full message body — paragraphs, lists, bold, code, links
function ChatContent({ text }) {
  const paragraphs = text.split('\n\n');

  return paragraphs.map((block, i) => {
    const lines = block.split('\n');

    // Check if this block is a list (lines starting with - or numbered)
    const isList = lines.every(l => /^[-\d]/.test(l.trim()));
    if (isList && lines.length > 1) {
      return (
        <ul key={i} className="ovl-chat-list">
          {lines.map((line, j) => {
            const cleaned = line.replace(/^[-\d]+[.)]*\s*/, '');
            return <li key={j}>{renderInlineCode(cleaned)}</li>;
          })}
        </ul>
      );
    }

    return <p key={i}>{renderInlineCode(block)}</p>;
  });
}

function LearnChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useSEO({
    title: 'Chat — The Open Vector',
    description: 'Ask the Open Vector. An AI learning companion for design-led engineering.',
    path: '/open/learn/chat',
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking]);

  const sendMessage = (text) => {
    if (!text.trim() || isThinking) return;

    const userMessage = { role: 'user', content: text.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsThinking(true);

    // Mock AI response after a delay
    setTimeout(() => {
      const response = MOCK_RESPONSES[text.trim()] || MOCK_RESPONSES['default'];
      const aiMessage = { role: 'assistant', content: response };
      setMessages(prev => [...prev, aiMessage]);
      setIsThinking(false);
    }, 1200 + Math.random() * 800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const showWelcome = messages.length === 0 && !isThinking;

  return (
    <div className="ovl-chat">
      <div className="ovl-chat-messages">
        {showWelcome ? (
          <div className="ovl-chat-welcome">
            <div className="ovl-chat-welcome-icon">
              <span className="ovl-chat-welcome-glyph">&loz;</span>
            </div>
            <h1 className="ovl-chat-welcome-title">Ask the Open Vector</h1>
            <p className="ovl-chat-welcome-subtitle">
              Your AI learning companion. Ask about design, building with AI,
              systems thinking, or anything in the curriculum.
            </p>
            <div className="ovl-chat-prompts">
              {SUGGESTED_PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  className="ovl-chat-prompt"
                  onClick={() => sendMessage(prompt.text)}
                >
                  <span className="ovl-chat-prompt-icon">{prompt.icon}</span>
                  <span className="ovl-chat-prompt-label">{prompt.label}</span>
                </button>
              ))}
            </div>
            <div className="ovl-chat-welcome-badge">
              <span className="ovl-chat-welcome-badge-dot" />
              Preview — Powered by Claude
            </div>
          </div>
        ) : (
          <div className="ovl-chat-thread">
            {messages.map((msg, i) => (
              <div key={i} className={`ovl-chat-msg ovl-chat-msg--${msg.role}`}>
                <div className="ovl-chat-msg-avatar">
                  {msg.role === 'assistant' ? (
                    <span className="ovl-chat-avatar-ai">&loz;</span>
                  ) : (
                    <span className="ovl-chat-avatar-user">You</span>
                  )}
                </div>
                <div className="ovl-chat-msg-body">
                  <div className="ovl-chat-msg-name">
                    {msg.role === 'assistant' ? 'Open Vector' : 'You'}
                  </div>
                  <div className="ovl-chat-msg-content">
                    {msg.role === 'assistant' ? (
                      <ChatContent text={msg.content} />
                    ) : (
                      <p>{msg.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="ovl-chat-msg ovl-chat-msg--assistant">
                <div className="ovl-chat-msg-avatar">
                  <span className="ovl-chat-avatar-ai">&loz;</span>
                </div>
                <div className="ovl-chat-msg-body">
                  <div className="ovl-chat-msg-name">Open Vector</div>
                  <div className="ovl-chat-thinking">
                    <span className="ovl-chat-dot" />
                    <span className="ovl-chat-dot" />
                    <span className="ovl-chat-dot" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <div className="ovl-chat-input-area">
        <form className="ovl-chat-form" onSubmit={handleSubmit}>
          <div className="ovl-chat-input-wrap">
            <textarea
              ref={inputRef}
              className="ovl-chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about design, AI tools, building, or anything in the curriculum..."
              rows={1}
              disabled={isThinking}
            />
            <button
              type="submit"
              className={`ovl-chat-send ${input.trim() && !isThinking ? 'ovl-chat-send--active' : ''}`}
              disabled={!input.trim() || isThinking}
              aria-label="Send message"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8L14 8M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="ovl-chat-disclaimer">
            Open Vector AI can make mistakes. Verify important information against the curriculum.
          </div>
        </form>
      </div>
    </div>
  );
}

export default LearnChatPage;
