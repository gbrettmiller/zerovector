# Zero-Vector Design

**[zerovector.design](https://zerovector.design)**

A new discipline for going from concept to customer with zero intermediaries. Not a tool. Not a framework. A fundamental shift in what it means to make things in a world where AI agents are crew.

---

## What Is Zero-Vector Design?

For thirty years, design has been an act of translation. We draw pictures of things and hand them to other people who build fifty percent of the vision. We call this a process. We call this collaboration. We call this the way it has always been done.

It does not have to be this way.

Zero-Vector Design is a discipline, a philosophy, and a practical approach to making things. It consists of seven principles that guide decision-making, an eight-phase approach that covers everything from the seed of an idea to shipping it, an open curriculum that anyone can follow, and a growing community of practitioners who build real things with AI agents as crew.

## The Seven Principles

| # | Principle | Core Idea |
|---|-----------|-----------|
| I | **Work in the Medium** | Build in the real material, not a representation of it. A chef does not draw a picture of a meal. |
| II | **Boundaryless by Nature** | No lanes. No disciplines. No artificial walls between thinking and making. |
| III | **The Medium is the Message** | The tool shapes the thinking. Change the medium, change the mind. |
| IV | **The Purpose of a System is What It Does** | Do not look at what a process claims to produce. Look at what it actually produces. |
| V | **Design and Build are the Same Act** | Not measure twice, cut once. Measure and cut simultaneously. The design is the build. |
| VI | **Dissolve the Hyperspecialization** | Specialization is for insects. Your role is not designer or developer. Your role is auteur. |
| VII | **Venture Past the Possible** | The only way to discover the limits of the possible is to venture past them into the impossible. |

## This Is an Open Source Movement

Zero-Vector Design is not a product. It is not a company. It is a movement — and movements are built in the open.

This repository contains the entire Zero-Vector website: the philosophy, the approach, the curriculum, the resources. All of it. We are treating this the way we treat any open source project: the ideas belong to everyone, and the best way to make them better is to invite the world to contribute.

The knowledge to become a Zero-Vector practitioner is free. It will always be free. No paywall. No premium tier. No "sign up for the good stuff." If someone puts this behind a paywall, we build something better and release it open.

## Contributing

We welcome contributions of all kinds. You do not need to be a developer to contribute — in fact, the whole point of Zero-Vector is that the boundaries between disciplines are artificial.

### Ideas and Discussion

- **Open an issue** to propose new content, suggest edits, or start a discussion
- **Share your experience** practicing Zero-Vector — what worked, what did not, what you would add
- **Challenge the principles** — they are opinionated on purpose, but they should hold up to scrutiny

### Content Contributions

- **Edit existing pages** — fix typos, clarify language, improve explanations
- **Suggest new resources** — books, articles, talks, tools that align with the philosophy
- **Write case studies** — show how you applied Zero-Vector to a real project
- **Translate content** — help make Zero-Vector accessible in more languages

### Code Contributions

- **Fix bugs** — layout issues, broken links, accessibility improvements
- **Improve performance** — faster load times, better mobile experience
- **Add features** — propose and build new interactive elements

### How to Contribute

1. Fork this repository
2. Create a feature branch (`git checkout -b content/your-change`)
3. Make your changes
4. Submit a pull request with a clear description of what you changed and why

All content lives in `src/content/en.js` — the single source of truth for every word on the site. Page structure lives in `src/pages/`. Styles in `src/styles/site.css`.

## Tech Stack

- **React 19** + **Vite 7** — Single page application
- **Custom CSS** — No framework. Design tokens, BEM-ish naming (`zv-*` prefix)
- **Netlify** — Hosting and serverless functions
- **Claude** — AI chat and quiz features via Netlify Functions

## Local Development

```bash
# Clone the repo
git clone https://github.com/erikaflowers/zerovector.git
cd zerovector

# Install dependencies
npm install

# Start the dev server (site only)
npm run dev

# Start with Netlify Functions (for Ask + Quiz features)
netlify dev
```

The site runs on `localhost:5173` (Vite) or `localhost:3006` (Netlify dev).

## Project Structure

```
zerovector/
├── src/
│   ├── content/
│   │   └── en.js          # All site content — single source of truth
│   ├── components/         # Shared components (Nav, Footer, VectorField, etc.)
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   ├── styles/
│   │   └── site.css        # All styles
│   └── App.jsx             # Routes
├── netlify/
│   └── functions/          # Serverless functions (chat, quiz)
├── public/                 # Static assets
└── index.html
```

## Related Projects

- **[Investiture](https://github.com/erikaflowers/investiture)** — The Zero-Vector starter scaffold. Architecture that teaches your AI to write clean code.
- **[The Open Vector](https://zerovector.design/open)** — Free curriculum from "I have never opened a terminal" to "I ship my own vision."

## Connect

- **Substack:** [eflowers.substack.com](https://eflowers.substack.com) — Writing on design, AI, and building things
- **LinkedIn:** [Erika Flowers](https://www.linkedin.com/in/helloeflowers/)
- **Website:** [helloerikaflowers.com](https://helloerikaflowers.com)

## License

The content of this project is licensed under [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/). The code is licensed under [MIT](https://opensource.org/licenses/MIT).

Use it. Teach it. Build on it. Make everyone around you better. That is the job.
