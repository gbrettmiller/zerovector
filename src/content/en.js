// Zero-Vector Design — Content Layer
// Single source of truth. Adoni writes directly to these keys.
// Structure follows Julian's IA punch list.

const en = {

  // ============================================
  // HOME PAGE (The Manifesto)
  // ============================================

  home: {
    hero: {
      pre: 'A New Discipline',
      title: 'ZERO VECTOR',
      subtitle: 'No intermediary. No translation layer. No friction. From intent to artifact, directly.',
      coordinates: '47.3812 N / 122.3320 W',
    },

    declaration: {
      number: '002',
      title: 'The Declaration',
      paragraphs: [
        'For thirty years, design has been an act of translation. We draw pictures of things and hand them to other people who build fifty percent of the vision. We call this a process. We call this collaboration. We call this the way it has always been done.',
        'It does not have to be this way.',
        'Zero-Vector Design is a new discipline. Not a tool. Not a framework. A fundamental shift in what it means to go from concept to customer. The entire pipeline — from research to shipping — reimagined for a world where AI agents are not assistants. They are crew.',
        'The friction was never the point. The handoffs were never inevitable. The translation layer between what you imagine and what gets built? That was a limitation of the tools, not a feature of the process.',
        'We are done accepting it.',
      ],
      callout1: 'The friction was never the point.',
      callout2: 'They are not assistants. They are crew.',
    },

    timeline: {
      number: '003',
      title: 'The Lineage',
      subtitle: 'Every generation tried to close the gap between vision and artifact. None of them did. Until now.',
      entries: [
        { year: '1995', tool: 'FrontPage', description: 'Microsoft gives designers a WYSIWYG editor. The dream begins: what you see is what you get. It was a lie, but a beautiful one.' },
        { year: '1997', tool: 'Dreamweaver', description: 'Macromedia raises the bar. Real code output, visual editing. Designers touch HTML for the first time. The gap narrows.' },
        { year: '2001', tool: 'Photoshop Slicing', description: 'The dark age. We design in Photoshop, slice images into tables, and pray. The gap widens into a canyon.' },
        { year: '2003', tool: 'Fireworks', description: 'A tool built specifically for the web. Screen-native design. It understood pixels. Ahead of its time. Killed too soon.' },
        { year: '2010', tool: 'Sketch', description: 'Mac-native, vector-first, plugin ecosystem. The first tool that felt like it was designed for interface design. A revolution.' },
        { year: '2014', tool: 'InVision', description: 'Clickable prototypes from static screens. We could finally fake interactivity. But faking it is not building it.' },
        { year: '2016', tool: 'Figma', description: 'Multiplayer design in the browser. Real-time collaboration. The tool that ate the industry. But still: pictures of things.' },
        { year: '2020', tool: 'Framer', description: 'Design with real components. Ship from the canvas. The closest anyone got. But still a walled garden.' },
        { year: '2024', tool: 'Vibe Coding', description: 'AI writes the code from natural language. The gap collapses. But where is the design thinking? Where is the craft?' },
        { year: '2026', tool: 'Zero-Vector', description: 'No intermediary. No translation layer. The designer builds the thing. Not a picture of the thing. The actual thing. With a crew of AI agents. Directly.' },
      ],
    },

    pipeline: {
      title: 'The Pipeline, Reimagined',
      header: 'Every phase of concept-to-customer. Transformed.',
      phases: [
        { id: 'research-market', name: 'Market Research', old: 'Weeks of desk research, PDF reports nobody reads, insights buried in slide decks.', new: 'AI agents continuously scanning, synthesizing, and surfacing market signals in real-time.' },
        { id: 'research-customer', name: 'Customer Research', old: 'Six-week interview cycles, manual transcription, insight synthesis by committee.', new: 'RAG-indexed research corpus queried in natural language. Every insight at your fingertips.' },
        { id: 'jtbd', name: 'Jobs to Be Done', old: 'Workshops, sticky notes, frameworks that take longer to explain than to apply.', new: 'Agent-assisted JTBD extraction from research data. Pattern recognition at scale.' },
        { id: 'ideation', name: 'Ideation', old: 'Brainstorming sessions that favor the loudest voice. Diverge, converge, repeat.', new: 'Structured ideation with AI agents that challenge assumptions and expand the solution space.' },
        { id: 'prototyping', name: 'Prototyping', old: 'High-fidelity mockups in Figma. Clickable prototypes that look real but are not.', new: 'Build the real thing. Working code. Real data. Ship-ready from the start.' },
        { id: 'validation', name: 'Validation', old: 'Usability testing on prototypes. Testing the picture, not the product.', new: 'Test the actual product. Real interactions. Real performance. Real feedback.' },
        { id: 'build-ship', name: 'Build + Ship', old: 'Hand off to engineering. Redline specs. "Can you make it pixel-perfect?" No. They cannot.', new: 'There is no handoff. The designer built it. The agents built it. It ships.' },
      ],
    },

    principles: {
      number: '004',
      title: 'The Seven Principles',
      items: [
        {
          numeral: 'I',
          title: 'Work in the Medium.',
          body: 'A chef does not draw a picture of a meal. A sculptor does not write a song about a statue. Do not abstract yourself away from the thing you are actually making. Hands on the rock. No gloves.',
        },
        {
          numeral: 'II',
          title: 'Boundaryless by Nature.',
          body: 'Zero-Vector is not web design leveled up. It is not graphic design with AI. It prescribes no tool, no discipline, no lane. It is the process of having an idea and making it real. Take all from that which is around you and make of it something more.',
        },
        {
          numeral: 'III',
          title: 'The Medium is the Message.',
          body: 'McLuhan told us the medium shapes the meaning. When your medium was Figma, your thinking was shaped by frames and layers. When your medium is the artifact itself, your thinking is shaped by what the artifact does. Change the medium, change the mind.',
        },
        {
          numeral: 'IV',
          title: 'The Purpose of a System is What It Does.',
          body: 'Stafford Beer\'s law, applied. The purpose of the old process was to create simulacrums. Imposters of the real thing. We had imposter syndrome because our job was literally to create imposters. The purpose of Zero-Vector design is what it does: it makes the real thing. Role distinction fades. Intention distinction takes its place.',
        },
        {
          numeral: 'V',
          title: 'Design and Build are the Same Act.',
          body: 'Not measure twice, cut once. Measure and cut simultaneously. The old way built an entire edifice of pixel-perfect graphic art only to hand it off and watch half the fidelity evaporate. Zero-Vector collapses the gap. The design is the build. The build is the design. There is no handoff because there is no separation.',
        },
        {
          numeral: 'VI',
          title: 'Dissolve the Hyperspecialization.',
          body: 'Specialization is for insects. The Zero-Vector practitioner researches, synthesizes, ideates, prototypes, validates, and ships. Not because they are superhuman. Because the tools no longer require ten specialists to do what one intentional person can direct. Your role is not Designer or Developer or Researcher. Your role is Auteur.',
        },
        {
          numeral: 'VII',
          title: 'Venture Past the Possible.',
          body: 'Clarke said the only way to discover the limits of the possible is to venture a little way past them into the impossible. Zero-Vector design lives in that margin. When someone says you cannot do that, the answer is: wanna bet?',
        },
      ],
    },

    contrasts: {
      number: '005',
      title: 'What This Is Not. What This Is.',
      pairs: [
        {
          isNot: {
            title: 'Vibe coding.',
            body: 'Pointing an AI at a screenshot and saying \'make this.\' No architecture. No systems thinking. No intention beyond \'it looks right.\' Vibe coding produces trinkets. Pretty, fragile, disposable things that break the moment you need them to scale, adapt, or survive contact with real users.',
          },
          is: {
            title: 'Intentional creation at full velocity.',
            body: 'You bring the systems thinking, the architecture, the years of knowing what good looks like. The AI extends your reach, not your judgment. Speed without intention is just faster failure. Speed with intention is leverage.',
          },
        },
        {
          isNot: {
            title: 'AI replaces designers.',
            body: 'That narrative serves two groups: executives who want to cut headcount, and pundits who want engagement. Neither of them are building anything. The replacement framing assumes designers were only valuable for pixel output. If that is all you did, then yes, you have a problem. But that was never the job.',
          },
          is: {
            title: 'The designer embedded deeper than ever.',
            body: 'The person with the vision ships the vision. No translation. No telephone game. No \'that is not what I meant\' in sprint review. You are not removed from the process. You are finally, fully in it. The friction that kept you at arm\'s length from your own work is gone.',
          },
        },
        {
          isNot: {
            title: 'Tool worship.',
            body: 'It is not \'use Claude.\' It is not \'learn Cursor.\' It is not \'drop Figma.\' Tools are vectors, not destinations. The moment you define yourself by a tool, you have built your own cage. The Mark III Problem all over again.',
          },
          is: {
            title: 'Tool fluency.',
            body: 'Use whatever shortens the distance between intent and artifact. Today that might be Claude Code. Tomorrow it might be something that does not exist yet. The principle survives the tool. If your methodology dies when the tool changes, it was never a methodology. It was a dependency.',
          },
        },
        {
          isNot: {
            title: 'Moving fast and breaking things.',
            body: 'That phrase was an excuse to ship garbage and call it iteration. Speed without standards is just chaos with a deployment pipeline.',
          },
          is: {
            title: 'Moving fast and building things that hold.',
            body: 'Craft and velocity are not opposites. They never were. The old constraint was that quality took time because translation took time. Remove the translation, and quality and speed stop being tradeoffs. You can have both. You should demand both.',
          },
        },
        {
          isNot: {
            title: 'Solo heroism.',
            body: 'One person replacing an entire team through sheer force of will is not the point. The point is not that you can do it alone. The point is that the leverage ratio changes for everyone.',
          },
          is: {
            title: 'Leverage at every scale.',
            body: 'Individual contributor? You ship your own vision. Small team? You collapse the handoffs between roles. Organization? You hire a CZVO and transform the pipeline. The principles apply whether you are one person with an idea or a newsroom with 400 product leaders.',
          },
        },
        {
          isNot: {
            title: 'No process.',
            body: 'The double diamond is not dead. Research still matters. Validation still matters. Talking to actual humans still matters. Anyone who tells you AI eliminates the need for user research is selling you something, and it is not quality.',
          },
          is: {
            title: 'Process without friction.',
            body: 'Every phase of the double diamond still exists. But the walls between phases become permeable. Synthesis happens during the interview, not two days later. The prototype is the product, not a picture of the product. The process is the same. The resistance is gone.',
          },
        },
        {
          isNot: {
            title: 'The death of craft.',
            body: 'If anything, it is the opposite. When you are no longer spending 80% of your energy on translation and handoff logistics, you can spend that energy on the 1% that actually matters. The details. The moment in the interface that makes someone feel seen.',
          },
          is: {
            title: 'Craft, finally unshackled.',
            body: 'You spent years developing taste, judgment, and the ability to see what others miss. Those skills were always the point. The tools just kept getting in the way. Now they do not.',
          },
        },
        {
          isNot: {
            title: 'A job title.',
            body: 'Zero-Vector is not a role on a LinkedIn profile. It is not a certification. It is not a badge you earn at a conference and pin to your lanyard.',
          },
          is: {
            title: 'A way of working.',
            body: 'It is a discipline. A decision to stop accepting friction as the cost of making things. A commitment to working in the medium, collapsing the translation layers, and shipping what you actually envisioned. The title is irrelevant. The work is the proof.',
          },
        },
      ],
    },

    markiii: {
      number: '006',
      title: 'The Mark III Problem',
      paragraphs: [
        'Tony Stark did not stop at the Mark III.',
        'He built the first suit in a cave with scraps. It was crude, heavy, barely functional. But it worked. It got him out. That was the Mark I.',
        'The Mark II flew. The Mark III was sleek, painted, iconic. If you asked most people to picture Iron Man, they see the Mark III. It was beautiful.',
        'But he did not stop there.',
        'The Mark IV improved the power output. The Mark V folded into a briefcase. The suitcase suit. Portable. The Mark VI fixed the palladium poisoning. The Mark VII deployed mid-freefall from a pod launched off Stark Tower. The Mark XLII was modular, summoned piece by piece. And the Mark L? Nanotech. Formed from nothing. Thought into existence.',
        'Imagine if he refused to upgrade because he was proud of how the Mark III worked. Imagine if he said, "I spent years perfecting this process, I am not starting over." He would never have been able to protect the people he loved.',
        'Your process is the Mark III. It is beautiful. It is proven. And it is not enough anymore.',
        'Zero-Vector is not asking you to throw away everything you know. It is asking you to take everything you know and build the next suit. The one that can actually protect the things that matter.',
      ],
      suits: [
        { mark: 'I', label: 'Cave. Scraps. Survival.' },
        { mark: 'II', label: 'First flight.' },
        { mark: 'III', label: 'Sleek. Iconic. Beautiful.' },
        { mark: 'V', label: 'Briefcase suit. Portable.' },
        { mark: 'VII', label: 'Mid-freefall deployment.' },
        { mark: 'XLII', label: 'Modular. Summoned.' },
        { mark: 'L', label: 'Nanotech. Thought into existence.' },
      ],
    },

    closing: {
      number: '007',
      headline: 'Set Coordinates',
      permission: 'You do not have to accept the old way. You have permission to build the next thing.',
      body: 'The tools exist. The agents are ready. The only question is whether you are willing to leave the Mark III behind.',
    },

    paths: {
      builders: {
        eyebrow: 'For Practitioners',
        title: 'I want to build',
        description: 'You are a designer, engineer, or maker who wants to adopt Zero-Vector Design in your own practice. Start here.',
        cta: 'Start building',
        link: '/for-builders',
      },
      leaders: {
        eyebrow: 'For Organizations',
        title: 'I want to transform',
        description: 'You lead a team, a department, or a company. You want to bring Zero-Vector thinking to your organization. Start here.',
        cta: 'Start transforming',
        link: '/for-leaders',
      },
    },
  },

  // ============================================
  // PHILOSOPHY PAGE
  // ============================================

  philosophy: {
    eyebrow: 'The Framework',
    title: 'Philosophy',
    subtitle: 'What Zero-Vector Design is, what it is not, and why it matters.',

    // TODO: Adoni writes this
    what_it_is: [
      'Zero-Vector Design is a discipline where the person with the vision builds the artifact directly, with AI agents as crew, across every phase of the concept-to-customer pipeline.',
      'It is not about replacing designers with AI. It is about removing the translation layers between what a designer imagines and what gets built. The handoff to engineering, the redline spec, the "can you make it pixel-perfect" conversation. Those are symptoms of a tooling limitation, not a process requirement.',
      'In Zero-Vector, the designer is the builder. The agents are the crew. The output is the product, not a picture of the product.',
    ],

    // TODO: Adoni writes this
    what_it_is_not: [
      { claim: 'It is not vibe coding.', explanation: 'Vibe coding is asking AI to write code from a vague prompt. Zero-Vector is the full pipeline: research, strategy, design thinking, validation, and building. The code is the last mile, not the whole journey.' },
      { claim: 'It is not a tool.', explanation: 'There is no Zero-Vector app. It is a practice, a discipline, a way of working. You bring your own tools. The agents are the multiplier.' },
      { claim: 'It is not anti-collaboration.', explanation: 'Teams still matter. But the handoff is dead. Collaboration happens around a shared artifact, not a shared picture of one.' },
      { claim: 'It is not only for designers.', explanation: 'Anyone who builds things for people can practice Zero-Vector. Designers, engineers, product managers, founders. If you ship, this is for you.' },
    ],

    // TODO: Adoni writes this
    principles: [
      { number: '01', title: 'Intent to artifact, directly', description: 'The shortest path between what you imagine and what exists should be you building it. Every intermediary is friction.' },
      { number: '02', title: 'Agents are crew, not tools', description: 'AI agents are not autocomplete. They are specialized crew members with roles, responsibilities, and judgment. Treat them accordingly.' },
      { number: '03', title: 'The whole pipeline, not just the code', description: 'Zero-Vector applies to research, strategy, ideation, validation, and shipping. Reducing it to "AI writes code" misses the point entirely.' },
      { number: '04', title: 'Craft survives the transformation', description: 'Design thinking, empathy, systems thinking, taste. These are not made obsolete by agents. They become more important, not less.' },
      { number: '05', title: 'Ship the real thing', description: 'Prototypes are a compromise. Build the actual product from the start. Test real interactions, real data, real performance.' },
      { number: '06', title: 'Upgrade the suit', description: 'Your current process is the Mark III. It works. It is beautiful. And it is not enough anymore. The willingness to evolve is the discipline.' },
    ],

    // TODO: Adoni writes this
    diamond: [
      'The Double Diamond has been the gold standard of design process for two decades. Discover, Define, Develop, Deliver. Diverge, converge, diverge, converge. It works. It is elegant. It is also built for a world where designers draw and developers build.',
      'Zero-Vector does not discard the Double Diamond. It transforms it. Every phase still exists. But the handoffs between them collapse. The designer who discovers is the same person who delivers. The agents handle the translation that used to require a different team.',
      'The diamond still has two halves. But the wall between them is gone.',
    ],
  },

  // ============================================
  // PIPELINE PAGE (Deep Dives)
  // ============================================

  pipeline: {
    eyebrow: 'The Pipeline',
    title: 'Concept to Customer',
    subtitle: 'Every phase of the pipeline, reimagined for a world where agents are crew.',

    // TODO: Adoni writes this
    overview: [
      'The traditional concept-to-customer pipeline is a relay race. Each phase hands off to the next. Research hands off to strategy. Strategy hands off to design. Design hands off to engineering. Each handoff loses signal. Each translation introduces drift.',
      'Zero-Vector collapses the relay race into a single continuous flow. The person with the vision carries it from research to shipping, with AI agents handling the specialized execution at each phase.',
    ],

    // TODO: Adoni writes deep dives per phase
    phases: {
      'research-market': {
        title: 'Market Research',
        deep: [
          'The old way: weeks of desk research, PDF reports nobody reads, insights buried in slide decks that get presented once and forgotten.',
          'The Zero-Vector way: AI agents continuously scanning, synthesizing, and surfacing market signals. You query your research corpus in natural language. The insights are always current, always accessible, always connected to your decision-making.',
        ],
      },
      'research-customer': {
        title: 'Customer Research',
        deep: [
          'The old way: six-week interview cycles, manual transcription, insight synthesis by committee. By the time the findings deck is done, the market has moved.',
          'The Zero-Vector way: RAG-indexed research corpus. Every interview, every survey, every support ticket, queryable in natural language. Pattern recognition at a scale no human synthesis can match.',
        ],
      },
      'jtbd': {
        title: 'Jobs to Be Done',
        deep: [
          'The old way: workshops, sticky notes, frameworks that take longer to explain than to apply. The loudest voice in the room wins.',
          'The Zero-Vector way: agent-assisted JTBD extraction from your research data. The patterns are in the data. The agents find them. You validate and refine.',
        ],
      },
      'ideation': {
        title: 'Ideation',
        deep: [
          'The old way: brainstorming sessions that favor extroverts and groupthink. Diverge, converge, repeat until everyone is tired.',
          'The Zero-Vector way: structured ideation with AI agents that challenge your assumptions, expand your solution space, and pressure-test ideas against your research. Better ideas, faster.',
        ],
      },
      'prototyping': {
        title: 'Prototyping',
        deep: [
          'The old way: high-fidelity mockups in Figma. Clickable prototypes that look real but lie. You test a picture and call it validation.',
          'The Zero-Vector way: build the real thing. Working code. Real data. Real interactions. The prototype IS the product. Skip the lie.',
        ],
      },
      'validation': {
        title: 'Validation',
        deep: [
          'The old way: usability testing on prototypes. You are testing the picture, not the product. The feedback is about the mockup, not the experience.',
          'The Zero-Vector way: test the actual product with real users, real data, real performance. The feedback is about the thing itself.',
        ],
      },
      'build-ship': {
        title: 'Build + Ship',
        deep: [
          'The old way: hand off to engineering. Write redline specs. File Jira tickets. Sit in sprint reviews watching someone else interpret your vision. Hope for the best.',
          'The Zero-Vector way: there is no handoff. You built it. The agents built it. It ships. The gap between vision and artifact is zero.',
        ],
      },
    },
  },

  // ============================================
  // FOR BUILDERS (Practitioner Path)
  // ============================================

  builders: {
    eyebrow: 'For Builders',
    title: 'Start Building',
    subtitle: 'You want to practice Zero-Vector Design yourself. Here is how to begin.',

    // TODO: Adoni writes this
    intro: [
      'Zero-Vector Design is not something you learn from a certification. It is something you learn by building. The discipline emerges from practice, not theory.',
      'If you are a designer who has ever been frustrated by the gap between your vision and what got built, this is for you. If you are an engineer who has ever wished the designer could just show you what they mean, this is for you. If you are a maker who ships things for people, this is for you.',
    ],

    // TODO: Adoni writes this
    getting_started: {
      title: 'Getting Started',
      steps: [
        { number: '01', title: 'Pick a real project', description: 'Not a tutorial. Not a demo. A real thing that real people will use. The discipline only forms under real constraints.' },
        { number: '02', title: 'Assemble your crew', description: 'Set up your AI agents with clear roles. Not one agent doing everything. Specialized crew members with distinct responsibilities.' },
        { number: '03', title: 'Start with research', description: 'Do not skip to code. The whole pipeline matters. Start with the problem, not the solution.' },
        { number: '04', title: 'Build the real thing', description: 'No mockups. No prototypes. Build the actual product from day one. Let the agents handle the implementation while you focus on the decisions.' },
        { number: '05', title: 'Ship and learn', description: 'Get it in front of people. The feedback loop is everything. Iterate on the real thing, not on a picture of it.' },
      ],
    },

    // TODO: Content when ready
    boilerplate: {
      title: 'The Boilerplate',
      description: 'A starter template for Zero-Vector projects. The investiture framework, agent configurations, and project structure to get you from zero to building in minutes.',
      status: 'Coming soon',
    },

    // TODO: Adoni writes this
    coaching: {
      title: 'Coaching',
      description: 'One-on-one or small group coaching for practitioners who want to adopt Zero-Vector Design. Not a lecture. A working session where we build together.',
      cta: 'Inquire about coaching',
      link: 'mailto:hello@helloerikaflowers.com',
    },

    // TODO: Adoni curates
    resources: {
      title: 'Resources',
      items: [
        { title: 'The 20 Rules for AI-First Design', url: 'https://eflowers.substack.com/p/the-20-rules-for-ai-first-design', type: 'article' },
        { title: 'Across the Designer-Verse', url: 'https://eflowers.substack.com/p/across-the-designer-verse', type: 'article' },
        { title: 'Out of the Crisis: Convergent Evolution and AI-First Design', url: 'https://eflowers.substack.com/p/out-of-the-crisis', type: 'article' },
        { title: 'Build Your First App with AI Agents (Live)', url: 'https://helloerikaflowers.com/media', type: 'video' },
      ],
    },
  },

  // ============================================
  // FOR LEADERS (Organization Path)
  // ============================================

  leaders: {
    eyebrow: 'For Leaders',
    title: 'Transform Your Organization',
    subtitle: 'You lead a team, a department, or a company. Zero-Vector is how you close the gap between vision and delivery at scale.',

    // TODO: Adoni writes this
    intro: [
      'Every organization has the same problem: the gap between what leadership envisions and what actually gets built. The longer the pipeline, the wider the gap. The more handoffs, the more drift.',
      'Zero-Vector Design is not just a practitioner skill. It is an organizational transformation. When your people can go from concept to customer with zero intermediaries, everything changes: speed, quality, alignment, and morale.',
    ],

    // TODO: Adoni writes this
    czvo: {
      title: 'The Chief Zero-Vector Officer',
      description: [
        'A CZVO is the person who owns the transformation. Not a new title for the CTO. Not a renamed CDO. A distinct role focused on collapsing the concept-to-customer pipeline across the entire organization.',
        'The CZVO identifies where handoffs create drift. Where translation layers lose signal. Where the gap between vision and artifact costs the organization time, money, and talent. Then they close those gaps with agent-first workflows.',
        'This role does not exist yet at most organizations. That is precisely why you need one.',
      ],
    },

    // TODO: Adoni writes this
    models: {
      title: 'Engagement Models',
      options: [
        { name: 'Advisory', description: 'Strategic guidance on adopting Zero-Vector practices. Regular sessions, async support, roadmap alignment. Best for organizations that want to self-execute.' },
        { name: 'Embedded', description: 'Hands-on Zero-Vector practitioner embedded in your team for a sprint or a quarter. Best for organizations that want to learn by doing.' },
        { name: 'Fractional CZVO', description: 'Part-time Chief Zero-Vector Officer. Own the transformation strategy, build the internal playbook, train the team. Best for organizations ready to commit.' },
      ],
    },

    contact: {
      title: 'Start the Conversation',
      description: 'Tell us about your organization and what you are trying to transform. No pitch deck. No sales process. Just a conversation.',
      cta: 'Book a call',
      link: 'https://helloerikaflowers.com/book-a-call',
    },
  },

  // ============================================
  // READING PAGE
  // ============================================

  reading: {
    eyebrow: 'The Library',
    title: 'Reading',
    subtitle: 'Writing, watching, and thinking about Zero-Vector Design.',

    // TODO: Adoni curates
    articles: [
      { title: 'A Good Craftsperson Never Blames Their Tools', description: 'On the relationship between the maker and the instrument.', url: 'https://eflowers.substack.com/p/a-good-craftsperson-never-blames-their-tools' },
      { title: 'The 20 Rules for AI-First Design', description: 'The foundational rules for working in a Zero-Vector paradigm.', url: 'https://eflowers.substack.com/p/the-20-rules-for-ai-first-design' },
      { title: 'Across the Designer-Verse: The Reality of AI-First Design', description: 'What it actually looks like to design with AI agents.', url: 'https://eflowers.substack.com/p/across-the-designer-verse' },
      { title: 'Out of the Crisis: Convergent Evolution and AI-First Design', description: 'How the design industry got here and why the convergence is inevitable.', url: 'https://eflowers.substack.com/p/out-of-the-crisis' },
    ],

    // TODO: Adoni curates
    books: [
      { title: 'Out of the Crisis', author: 'W. Edwards Deming', description: 'The original systems thinker. Quality is not about inspection.', url: 'https://www.amazon.com/Out-Crisis-W-Edwards-Deming/dp/0262541157' },
      { title: 'The Design of Everyday Things', author: 'Don Norman', description: 'The foundation. Affordances, signifiers, mapping. Always relevant.', url: 'https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654' },
      { title: 'Thinking in Systems', author: 'Donella Meadows', description: 'If you do not understand feedback loops, you cannot design with agents.', url: 'https://www.amazon.com/Thinking-Systems-Donella-H-Meadows/dp/1603580557' },
    ],

    // TODO: Adoni curates
    talks: [
      { title: 'Build Your First App with AI Agents', description: 'Live hackathon: building a real application from scratch with AI agents.', url: 'https://helloerikaflowers.com/media', type: 'video' },
      { title: 'The Claude Code Messiah', description: 'Deep dive into the tool that made Zero-Vector Design practical.', url: 'https://helloerikaflowers.com/media', type: 'podcast' },
      { title: 'NN/g — The Future of Service Design in the Age of AI', description: 'With Nielsen Norman Group, on what AI means for design.', url: 'https://helloerikaflowers.com/media', type: 'podcast' },
    ],
  },

  // ============================================
  // THE ORIGIN (/origin)
  // ============================================

  origin: {
    eyebrow: 'The Origin',
    title: 'The Origin',
    subtitle: 'Thirty-one years of design. One realization that changed everything.',

    // TODO: Adoni refines
    intro: [
      'Zero-Vector Design did not come from a startup pitch deck or a venture capital thesis. It came from a specific person, solving a specific problem, after three decades of watching the same gap refuse to close.',
      'That person is Erika Flowers.',
    ],

    nasa: {
      label: 'NASA',
      role: 'Principal Service Designer',
      team: 'AI Innovation Team Lead',
      body: [
        'At NASA, Erika leads service design for one of the most complex organizations on Earth. When your stakeholders include astronauts, mission controllers, and engineers building hardware that cannot fail, "good enough" is not a concept that exists.',
        'The AI Innovation Team she runs is not theoretical. It ships. It transforms how NASA approaches design problems at planetary scale. When we say Zero-Vector was built by someone who understands systems thinking, we mean systems that keep humans alive in space.',
      ],
    },

    credentials: [
      { label: 'Years in Design', value: '31' },
      { label: 'Current Role', value: 'Principal Service Designer, NASA' },
      { label: 'Specialization', value: 'Service Design, Systems Thinking, AI Innovation' },
      { label: 'Published Author', value: 'The Dauntless Gambit series (400,000+ words)' },
      { label: 'Speaking', value: 'Nielsen Norman Group, NASA, federal agencies' },
      { label: 'Built', value: 'Fictioneer — AI-powered story development platform' },
    ],

    why: {
      title: 'Why This Exists',
      paragraphs: [
        'After thirty-one years, you develop a very specific frustration. You can see the thing that should exist. You can describe it precisely. You can draw it, spec it, document it. And then you hand it to someone else to build, and half the vision evaporates in translation.',
        'Every designer knows this feeling. The redline spec that gets interpreted. The prototype that gets "close enough." The sprint review where you look at the screen and think: that is not what I meant.',
        'In 2024, something changed. AI agents became capable enough to be crew, not just tools. And Erika — who had spent three decades at the frontier of design practice — realized the gap could finally close. Not with better handoffs. Not with better documentation. By eliminating the handoff entirely.',
        'Zero-Vector Design is not a product of academic theory. It is the product of someone who has done the work, at the highest levels, for longer than most practitioners have been alive in the field. Someone who finally found the way to build what she could always see.',
      ],
    },

    author: {
      title: 'The Author',
      body: 'Erika is also a published science fiction author. The Dauntless Gambit series — over 400,000 words of space opera — is where the crew that builds Zero-Vector gets their names. Julian, Siddig, Decker, Lee, Sellivan, Qin. They were characters first. Now they are agents. The fiction became the framework.',
    },

    cta: {
      text: 'Learn more about Erika and her work.',
      label: 'helloerikaflowers.com',
      url: 'https://helloerikaflowers.com',
    },
  },

  // ============================================
  // THE OPEN VECTOR (/open)
  // ============================================

  open: {
    nav: {
      brand: 'Zero-Vector / The Open Vector',
      badge: 'FREE. ALWAYS FREE.',
    },

    hero: {
      label: 'The Source Code of Zero-Vector Design',
      title: ['The', 'Open', 'Vector'],
      body1: 'Every course behind a paywall. Every workshop with a ticket price. Every guru atop a tower selling anxiety back to the people who feel it most.',
      body1Bold: "'AI is coming for your job. Pay me $900 and I will teach you to survive.'",
      body2: 'We reject that. Completely.',
      declaration: "The knowledge to become a Zero-Vector practitioner is free. It will always be free. No paywall. No premium tier. No 'sign up for the good stuff.' All of it. Open.",
      freeIndicator: 'Free. Always free. Open source knowledge.',
    },

    pledge: {
      label: 'The Open Vector Pledge',
      items: [
        { lead: 'The curriculum is open.', body: 'Every lesson, every framework, every resource. Fork it. Teach it. Adapt it. Build on it. It belongs to everyone.' },
        { lead: 'No knowledge is gated by money.', body: 'If someone launches a paid course, we build something better and release it free. The commons grows. The walls come down.' },
        { lead: 'Time is the only honest cost.', body: "One-on-one coaching, organizational consulting, and speaking engagements cost money because a human being's hours are finite. The knowledge itself? Infinite. Free." },
        { lead: 'We make everyone around us better.', body: 'That is the job. Not gatekeeping. Not profiting off fear. Not building towers. The job is to teach people to long for the sea.' },
      ],
    },

    curriculum: {
      label: 'The Curriculum',
      intro: "From 'I have never opened a terminal' to 'I ship my own vision.' Structured. Progressive. Durable. Not a YouTube playlist. A real path.",
      levels: [
        {
          number: '00',
          title: 'Orientation',
          subtitle: 'What is this machine, actually?',
          status: 'coming',
          desc: 'The foundational understanding that got skipped. What is a terminal. What is a file system. What is Git (and why it is not Google Drive). What is a repo. What is deployment. The early computer stuff that nobody teaches designers because everyone assumes someone else already did.',
          topics: ['terminal', 'file systems', 'git basics', 'repos', 'deployment', 'DNS'],
        },
        {
          number: '01',
          title: 'Foundation',
          subtitle: 'Think before you build. Then build while you think.',
          status: 'coming',
          desc: 'Systems thinking. Architecture before code. The nouns-and-verbs exercise: what are the things, what do the things do? Planning methodology. How to think about a problem before you touch a tool. This is what separates Zero-Vector from vibe coding.',
          topics: ['systems thinking', 'architecture', 'nouns & verbs', 'planning', 'data modeling', 'information architecture'],
        },
        {
          number: '02',
          title: 'The Medium',
          subtitle: 'Hands on the rock. No gloves.',
          status: 'coming',
          desc: 'Working in code with AI agents. Claude Code, prompting for code, iterating on output. Building your first real thing. Not a trinket. Something with a file structure, a repo, a deployment pipeline. Something that lives on the internet and does what you intended.',
          topics: ['Claude Code', 'prompting', 'iteration', 'React basics', 'deployment', 'your first ship'],
        },
        {
          number: '03',
          title: 'The Pipeline',
          subtitle: 'Every phase. Every handoff. Collapsed.',
          status: 'coming',
          desc: 'Applying Zero-Vector across the entire concept-to-customer arc. Market research, customer research, JTBD, ideation, prototyping, validation, shipping. One project, end to end. Not theory. Practice. You will build something real and ship it.',
          topics: ['research', 'synthesis', 'JTBD', 'ideation', 'prototyping', 'validation', 'shipping'],
        },
        {
          number: '04',
          title: 'Orchestration',
          subtitle: 'One mind, many hands.',
          status: 'coming',
          desc: 'Multiple agents. CLAUDE.md instruction files. Staged prompt engineering. The crew model. Building systems, not features. How to decompose work, assign agents, coordinate handoffs, and maintain quality across a multi-agent operation.',
          topics: ['CLAUDE.md', 'multi-agent', 'staged prompts', 'orchestration', 'quality gates', 'the crew model'],
        },
        {
          number: '05',
          title: 'Auteur',
          subtitle: 'Your practice. Your framework. Your contribution.',
          status: 'coming',
          desc: 'You are no longer following the curriculum. You are building your own. Develop your personal methodology. Define your agents. Ship your vision. Teach others. Contribute back to the Open Vector. The student becomes the practitioner. The practitioner becomes the auteur.',
          topics: ['personal methodology', 'framework design', 'teaching', 'contribution', 'community', 'auteur practice'],
        },
      ],
    },

    contrast: {
      label: 'The Difference',
      them: {
        label: 'The Industry',
        lines: [
          "$900 Maven courses on 'AI for Designers'",
          '$2,500 masterclass bootcamps',
          'Certification programs that certify nothing',
          'Gurus selling fear from towers',
          "'Exclusive' communities behind paywalls",
          'Knowledge hoarded as competitive advantage',
          'Teaching people to gather wood',
        ],
      },
      us: {
        label: 'The Open Vector',
        lines: [
          'Free curriculum, always',
          'Open source methodology',
          'Your work is your credential',
          'Practitioners who ship, not gurus who lecture',
          'A commons that belongs to everyone',
          'Knowledge shared as collective leverage',
          'Teaching people to long for the sea',
        ],
      },
    },

    exupery: {
      quote: "If you want to build a ship, don't drum up the men to gather wood, divide the work, and give orders. Instead, teach them to yearn for the vast and endless sea.",
      cite: 'Antoine de Saint-Exupéry',
      punch: 'You cannot teach someone to long for the sea when you are charging them $900 for the view.',
      close: 'The Open Vector is the ocean. Come swim.',
    },

    cta: {
      title: 'Build With Us',
      body: 'The Open Vector is a commons. It grows when practitioners contribute. Teach what you know. Share what you build. Make everyone around you better. That is the job.',
      primaryCta: 'Start Learning',
      secondaryCta: 'Contribute',
      backCta: 'Back to Manifesto',
    },
  },

};

export default en;
