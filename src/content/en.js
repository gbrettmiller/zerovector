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
      coordinates: '44.8024 N / 68.7853 W',
    },

    declaration: {
      number: '002',
      title: 'The Declaration',
      paragraphs: [
        'For thirty years, design has been an act of translation. We draw pictures of things and hand them to other people who build fifty percent of the vision. We call this a process. We call this collaboration. We call this the way it has always been done.',
        'It does not have to be this way.',
        'Zero-Vector Design is a new discipline. Not a tool. Not a framework. A fundamental shift in what it means to go from concept to customer. The entire pipeline, from research to shipping, reimagined for a world where AI agents are not assistants. They are crew.',
        'The friction was never the point. The handoffs were never inevitable. The translation layer between what you imagine and what gets built? That was a limitation of the tools, not a feature of the process.',
        'We are done accepting it.',
      ],
      callout1: 'The friction was never the point.',
      callout2: 'They are not assistants. They are crew.',
    },

    timeline: {
      number: '003',
      title: 'The Lineage',
      subtitle: 'The tools changed every decade. The process never did. Until now.',
      narrative: [
        'In 1968, Douglas Engelbart sat in front of a camera in San Francisco and showed the world what a computer could be. A mouse. Hypertext. Collaborative editing. Real-time video conferencing. He called it the Mother of All Demos. It was not a product launch. It was a declaration of intent: the computer is an instrument for augmenting human thought.',
        'Five years later, at Xerox PARC, Alan Kay and his team built the Alto, the machine that became the blueprint for every personal computer that followed. Windows. Icons. Menus. The graphical interface. Kay understood something profound: the tool shapes the thinking. Change the medium, change the mind.',
        'Every generation since has tried to close the gap between what a person envisions and what actually gets built. Desktop publishing, the web, agile, design thinking, lean, each one shortened the distance. None of them eliminated it. The translation layer survived every revolution. Until now.',
      ],
      entries: [
        { year: '1968', milestone: 'The Mother of All Demos', description: 'Engelbart shows the world what computers could be. The mouse. Hypertext. Real-time collaboration. A vision decades ahead of the tools to realize it.' },
        { year: '1973', milestone: 'Xerox PARC & the Alto', description: 'Alan Kay and team build the personal computer. Windows, icons, direct manipulation. The tool shapes the thinking. A new medium is born.' },
        { year: '1985', milestone: 'Desktop Publishing', description: 'The Macintosh and LaserWriter collapse the print pipeline. Designers go from layout to output directly. WYSIWYG becomes a promise, and a partial lie.' },
        { year: '1995', milestone: 'The Web Goes Public', description: 'Anyone can publish. The distance between idea and audience collapses overnight. But building for the web means learning a new language the tools cannot yet speak.' },
        { year: '2001', milestone: 'The Agile Manifesto', description: 'Seventeen developers reject waterfall. Shorter cycles. Working software over documentation. The process gets faster, but the handoff between design and engineering remains.' },
        { year: '2008', milestone: 'Design Thinking Goes Mainstream', description: 'IDEO, Stanford d.school, and the double diamond. Empathize, define, ideate, prototype, test. A rigorous process, but still: the designer draws, someone else builds.' },
        { year: '2013', milestone: 'Lean UX & Build-Measure-Learn', description: 'Ship fast. Validate with real users. Kill your darlings. The cycle shortens again, but the translation layer between design intent and engineering output survives.' },
        { year: '2016', milestone: 'Design Systems at Scale', description: 'Component libraries, tokens, shared languages between design and engineering. The handoff gets more structured. But it is still a handoff.' },
        { year: '2024', milestone: 'AI-Assisted Creation', description: 'Large language models write code from natural language. The gap collapses. But without design thinking, without systems architecture, without craft, it is just vibe coding. Fast, but fragile.' },
        { year: '2026', milestone: 'Zero-Vector Design', description: 'The designer builds the artifact directly, with AI agents as crew, across every phase of concept to customer. No intermediary. No translation layer. The gap is zero.' },
      ],
    },

    pipeline: {
      number: '004',
      title: 'The Pipeline, Reimagined',
      header: 'Every phase of concept-to-customer. Transformed.',
      intro: [
        'Zero-Vector Design is not about coding. It is an entire approach to going from concept to customer, closer to a business model than a methodology. You call it lean. You call it agile. You call it the double diamond. At the end of the day, it is all the same loosely defined process: shorten the distance between what people actually need to solve their problems and fix their pain, and what they want to enhance their lives and deliver outcomes. That is jobs-to-be-done theory at its core.',
        'Zero-Vector applies that thinking across every phase of the pipeline. Not just the build. The research. The synthesis. The validation. The shipping. Every handoff is a place where intent degrades. We eliminate the handoffs.',
      ],
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
      number: '005',
      title: 'The Seven Principles',
      principle_zero: 'Take from all that which is around you and make of it something more.',
      intro: 'These principles are intentionally opinionated and polarizing. They exist to help you make decisions in times of indecision or crisis, not to be generic or all-purpose. They are opinionated on approach, agnostic on tool. That is the difference. These are the principles Zero-Vector Design lives by.',
      items: [
        {
          numeral: 'I',
          title: 'Work in the Medium.',
          body: 'A chef does not draw a picture of a meal. A sculptor does not write a song about a statue. Do not abstract yourself away from the thing you are actually making. Hands on the rock. No gloves.',
          detail: {
            text: [
              'When you design in Figma, you are working in a representation, a picture of the thing, not the thing itself. When you design in the actual medium with AI agents, you are working in the real material. The feedback is immediate. The constraints are real, not simulated. The discoveries you make are about the actual artifact.',
              'This is the difference between a sculptor working in clay and a sculptor working from a blueprint. One learns from the material. The other learns from an abstraction of it. Work in the medium means: touch the real thing. Every day. From the beginning.',
            ],
            links: [
              { label: 'The 20 Rules for AI-First Design', url: 'https://eflowers.substack.com/p/the-20-rules-for-ai-first-design' },
              { label: 'A Good Craftsperson Never Blames Their Tools', url: 'https://eflowers.substack.com/p/a-good-craftsperson-never-blames-their-tools' },
            ],
          },
        },
        {
          numeral: 'II',
          title: 'Boundaryless by Nature.',
          body: 'Zero-Vector is not web design leveled up. It is not graphic design with AI. It prescribes no tool, no discipline, no lane. It is the process of having an idea and making it real. Take all from that which is around you and make of it something more.',
          detail: {
            text: [
              'Zero-Vector does not live inside "design" or "engineering" or "research." It is the practice of collapsing all of these into a single intentional flow. The practitioner does not ask "am I designing or building?", the question is irrelevant. You are making.',
              'The boundaries between disciplines were always artificial, created by tool limitations and organizational charts. When one person with AI agents can research, ideate, design, build, test, and ship, the boundaries dissolve, not because the skills stop mattering, but because they stop being separate activities.',
            ],
            links: [
              { label: 'Across the Designer-Verse', url: 'https://eflowers.substack.com/p/across-the-designer-verse' },
            ],
          },
        },
        {
          numeral: 'III',
          title: 'The Medium is the Message.',
          body: 'McLuhan told us the medium shapes the meaning. When your medium was Figma, your thinking was shaped by frames and layers. When your medium is the artifact itself, your thinking is shaped by what the artifact does. Change the medium, change the mind.',
          detail: {
            text: [
              'Marshall McLuhan wrote that the medium through which we receive information shapes how we process it. Television didn\'t just deliver content. It changed how we think. The same is true for design tools. Figma taught us to think in frames, layers, and components. It was a thinking tool disguised as a drawing tool.',
              'When your medium becomes the artifact itself, working code, real interactions, real data, your thinking shifts. You stop asking "what does this look like?" and start asking "what does this do? How does it feel? What happens when?" The questions change. And when the questions change, the answers get dramatically better.',
            ],
            links: [
              { label: 'Understanding Media, Marshall McLuhan', url: 'https://www.amazon.com/Understanding-Media-Extensions-Marshall-McLuhan/dp/0262631598' },
            ],
          },
        },
        {
          numeral: 'IV',
          title: 'The Purpose of a System is What It Does.',
          body: 'Stafford Beer\'s law, applied. The purpose of the old process was to create simulacrums. Imposters of the real thing. We had imposter syndrome because our job was literally to create imposters. The purpose of Zero-Vector design is what it does: it makes the real thing. Role distinction fades. Intention distinction takes its place.',
          detail: {
            text: [
              'POSIWID, the Purpose Of a System Is What It Does, is Stafford Beer\'s razor for cutting through organizational self-deception. Don\'t look at what a system claims to do. Look at what it actually produces.',
              'The traditional design-to-engineering pipeline claims to produce faithful implementations of design intent. What it actually produces is compromise. Redline specs that get "interpreted." Sprint reviews where the designer thinks "that is not what I meant." The system\'s purpose was never fidelity. It was translation. And translation always loses signal. Zero-Vector eliminates the translation. The system\'s purpose becomes: make the thing.',
            ],
            links: [
              { label: 'Thinking in Systems, Donella Meadows', url: 'https://www.amazon.com/Thinking-Systems-Donella-H-Meadows/dp/1603580557' },
            ],
          },
        },
        {
          numeral: 'V',
          title: 'Design and Build are the Same Act.',
          body: 'Not measure twice, cut once. Measure and cut simultaneously. The old way built an entire edifice of pixel-perfect graphic art only to hand it off and watch half the fidelity evaporate. Zero-Vector collapses the gap. The design is the build. The build is the design. There is no handoff because there is no separation.',
          detail: {
            text: [
              'The handoff is the original sin of modern product development. A designer creates a detailed specification, a picture of the thing, and passes it to an engineer who interprets that picture into code. Information is lost at every step. Intent gets diluted. The designer\'s taste and micro-decisions, the things that separate adequate from extraordinary, cannot survive translation.',
              'In Zero-Vector, there is no handoff because the designer is building. The taste is embedded directly in the artifact. Every decision, from the architecture to the 1px shadow, comes from the person who holds the vision. The build IS the design act.',
            ],
            links: [
              { label: 'The 20 Rules for AI-First Design', url: 'https://eflowers.substack.com/p/the-20-rules-for-ai-first-design' },
              { label: 'Out of the Crisis, W. Edwards Deming', url: 'https://www.amazon.com/Out-Crisis-W-Edwards-Deming/dp/0262541157' },
            ],
          },
        },
        {
          numeral: 'VI',
          title: 'Dissolve the Hyperspecialization.',
          body: 'Specialization is for insects. The Zero-Vector practitioner researches, synthesizes, ideates, prototypes, validates, and ships. Not because they are superhuman. Because the tools no longer require ten specialists to do what one intentional person can direct. Your role is not Designer or Developer or Researcher. Your role is Auteur.',
          detail: {
            text: [
              '"A human being should be able to change a diaper, plan an invasion, butcher a hog, conn a ship, design a building, write a sonnet, balance accounts, build a wall, set a bone, comfort the dying, take orders, give orders, cooperate, act alone, solve equations, analyze a new problem, pitch manure, program a computer, cook a tasty meal, fight efficiently, die gallantly. Specialization is for insects." -- Robert A. Heinlein',
              'The modern product team is a colony of insects: UX researcher, interaction designer, visual designer, frontend engineer, backend engineer, QA, DevOps. Each specialist touching one facet of the same gem. Zero-Vector doesn\'t eliminate expertise. It eliminates the walls between experts. One person with deep knowledge and AI agents can traverse the entire pipeline. Not because they know everything, but because the agents fill the gaps.',
            ],
            links: [
              { label: 'Across the Designer-Verse', url: 'https://eflowers.substack.com/p/across-the-designer-verse' },
              { label: 'Out of the Crisis: Convergent Evolution', url: 'https://eflowers.substack.com/p/out-of-the-crisis' },
            ],
          },
        },
        {
          numeral: 'VII',
          title: 'Venture Past the Possible.',
          body: 'Clarke said the only way to discover the limits of the possible is to venture a little way past them into the impossible. Zero-Vector design lives in that margin. When someone says you cannot do that, the answer is: wanna bet?',
          detail: {
            text: [
              'Arthur C. Clarke\'s Second Law: "The only way of discovering the limits of the possible is to venture a little way past them into the impossible." Every Zero-Vector practitioner lives in that margin.',
              'When someone says "a designer can\'t build a production application," the answer is: watch. When someone says "you can\'t replace a team of ten with one person and AI agents," the answer is: we already did. This is not arrogance. It is evidence. The impossible keeps getting redefined, and the people who accept the old definition are the ones who get left behind.',
            ],
            links: [
              { label: 'Out of the Crisis: Convergent Evolution', url: 'https://eflowers.substack.com/p/out-of-the-crisis' },
            ],
          },
        },
      ],
    },

    contrasts: {
      number: '006',
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
            body: 'It is not \'use Claude.\' It is not \'learn Cursor.\' It is not \'drop Figma.\' Tools are vectors, not destinations. The moment you define yourself by a tool, you have built your own cage.',
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

    closing: {
      number: '007',
      headline: 'Set Coordinates',
      permission: 'You do not have to accept the old way. You have permission to build the next thing.',
      body: 'The tools exist. The agents are ready. The only question is whether you are willing to stop drawing pictures of what you want and start building it.',
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
      substack: {
        text: 'Stay informed. New writing on design, AI, and building things that matter.',
        cta: 'Subscribe on Substack',
        url: 'https://erikaflowers.substack.com',
      },
    },
  },

  // ============================================
  // PHILOSOPHY PAGE
  // ============================================

  philosophy: {
    eyebrow: 'The Framework',
    title: 'Philosophy',
    subtitle: 'A set of principles, an approach, and a community. Here is what Zero-Vector actually is, and why it exists.',

    what_it_is: [
      'Zero-Vector Design is a discipline, a philosophy, and a practical approach to making things. It consists of seven principles that guide decision-making, an eight-phase approach that covers everything from the seed of an idea to shipping it, an open curriculum that anyone can follow, and a growing community of practitioners who build real things with AI agents as crew.',
      'It is not abstract. It is not theoretical. It is a set of guidelines, resources, and tools that help you go from concept to customer without the translation layers that have defined product development for decades. The research. The synthesis. The design. The build. The ship. All of it, connected, with one person holding the vision across the entire arc.',
      'Zero-Vector is opinionated about approach and agnostic about tools. It does not care whether you use Claude or Cursor or whatever ships next Tuesday. It cares that you work in the medium, that you understand the problem before you build the solution, and that craft survives the transformation.',
    ],

    what_it_is_not: [
      { claim: 'It is not vibe coding.', explanation: 'Vibe coding is asking AI to write code from a vague prompt. Zero-Vector is the full pipeline: research, strategy, design thinking, validation, and building. The code is the last mile, not the whole journey.' },
      { claim: 'It is not a tool.', explanation: 'There is no Zero-Vector app. It is a practice, a discipline, a way of working. You bring your own tools. The agents are the multiplier.' },
      { claim: 'It is not anti-collaboration.', explanation: 'Teams still matter. But the handoff is dead. Collaboration happens around a shared artifact, not a shared picture of one.' },
      { claim: 'It is not only for designers.', explanation: 'Anyone who builds things for people can practice Zero-Vector. Designers, engineers, product managers, founders. If you ship, this is for you.' },
    ],

    principle_zero: {
      numeral: 'PRINCIPLE ZERO',
      title: 'Take from all that which is around you and make of it something more.',
    },

    principles: [
      {
        numeral: 'I',
        title: 'Work in the Medium.',
        body: 'A chef does not draw a picture of a meal. Build in the real material, not a representation of it.',
        why: 'This principle exists because decades of design practice trained us to work in abstractions: wireframes, mockups, prototypes. Those were necessary when the tools required specialists to build the real thing. They are not necessary anymore. When you work in the actual medium, the feedback is immediate, the constraints are real, and your decisions are about the artifact itself, not a picture of it.',
      },
      {
        numeral: 'II',
        title: 'Boundaryless by Nature.',
        body: 'No lanes. No disciplines. No artificial walls between thinking and making.',
        why: 'This principle exists because organizational structure created artificial boundaries between research, design, and engineering. Those boundaries served management charts, not the work. When one person with AI agents can traverse the entire pipeline, the boundaries dissolve. Not because the skills stop mattering, but because they stop being separate activities.',
      },
      {
        numeral: 'III',
        title: 'The Medium is the Message.',
        body: 'The tool shapes the thinking. Change the medium, change the mind.',
        why: 'This principle exists because Marshall McLuhan was right: the medium through which we work shapes how we think. Figma taught us to think in frames and layers. When your medium becomes working code with real interactions and real data, you stop asking "what does this look like?" and start asking "what does this do? How does it feel?" The questions change. The answers get dramatically better.',
      },
      {
        numeral: 'IV',
        title: 'The Purpose of a System is What It Does.',
        body: 'Do not look at what a process claims to produce. Look at what it actually produces.',
        why: 'This principle exists because Stafford Beer\'s POSIWID razor cuts through organizational self-deception. The traditional design-to-engineering pipeline claims to produce faithful implementations. What it actually produces is compromise. Redline specs that get "interpreted." Sprint reviews where the designer thinks "that is not what I meant." The old system\'s purpose was translation. Translation always loses signal.',
      },
      {
        numeral: 'V',
        title: 'Design and Build are the Same Act.',
        body: 'Not measure twice, cut once. Measure and cut simultaneously. The design is the build.',
        why: 'This principle exists because the handoff is the original sin of modern product development. A designer creates a picture of the thing and passes it to an engineer who interprets that picture into code. Information is lost at every step. Intent gets diluted. The designer\'s taste, the thing that separates adequate from extraordinary, cannot survive translation. When you eliminate the handoff, the taste is embedded directly in the artifact.',
      },
      {
        numeral: 'VI',
        title: 'Dissolve the Hyperspecialization.',
        body: 'Specialization is for insects. Your role is not designer or developer. Your role is auteur.',
        why: 'This principle exists because the modern product team is a colony of insects, each specialist touching one facet of the same gem. Zero-Vector does not eliminate expertise. It eliminates the walls between experts. One person with deep knowledge and AI agents can traverse the entire pipeline. Not because they know everything, but because the agents fill the gaps while you hold the vision.',
      },
      {
        numeral: 'VII',
        title: 'Venture Past the Possible.',
        body: 'The only way to discover the limits of the possible is to venture past them into the impossible.',
        why: 'This principle exists because Arthur C. Clarke was right, and because the impossible keeps getting redefined. When someone says "a designer cannot build a production application," the answer is: watch. When someone says "you cannot replace a team of ten with one person and AI agents," the answer is: we already did. This is not arrogance. It is evidence. Accept the old definition of possible and you get left behind.',
      },
    ],

    arc: {
      title: 'The Arc',
      intro: 'Every framework you have ever learned is describing the same shape.',
      paragraphs: [
        'The double diamond. Lean. Agile. Six sigma. Design thinking. Jobs to be done. They all describe the same fundamental arc: understand the problem, explore solutions, converge on an answer, build it, ship it, learn. The words change. The consultants who coined them get paid. The shape underneath is identical.',
        'This is not a coincidence. It is the same pattern that runs through every act of creation humans have ever studied. Joseph Campbell called it the hero\'s journey. Aristotle described it in the Poetics. Shakespeare used five acts. Screenwriters use three. Dan Harmon drew it as a circle. The story circle, the monomyth, the dramatic arc, they are all describing the same thing: you start in the known world, you venture into the unknown, you are transformed, you return.',
        'The arc of building a product is the same arc as writing a novel, composing a symphony, or making a film. There is a setup, a confrontation with complexity, a synthesis, and a resolution. Zero-Vector applies narrative design and storytelling principles to the product process because they are the same process. The way a thing gets built and the way people experience it both follow a narrative.',
        'This is why Zero-Vector works within any framework. It does not replace your double diamond or your agile sprints or your lean cycles. It operates underneath them. It prescribes why you make decisions, the principles, not how you execute them. Use whatever process fits your mental model. Zero-Vector is the foundation beneath it.',
      ],
    },

    name_origin: {
      title: 'Why "Zero Vector"',
      paragraphs: [
        'The name started as a joke. In the early days, the whole point was that designers should stop using vector art tools, Figma, Illustrator, Sketch, as the medium for their work. No more vector art. Zero vector. It was a punchline.',
        'Then it became something more. In physics and aerospace telemetry, a zero vector describes a state of no relative motion between two objects. Perfect alignment, no drift, no error. When a spacecraft achieves zero vector relative to its target, it means the gap between where it is and where it intends to be is exactly zero. Intent and position are identical.',
        'That is the principle. Zero distance between what you envision and what gets built. No drift between the designer\'s intent and the artifact that ships. No error introduced by translation layers, handoffs, or intermediaries. The gap is zero.',
        'In quantum mechanics, a zero vector represents the null state, the origin point from which all other states are measured. In navigation, it is the reference frame. In Zero-Vector Design, it is both: the starting point for a new discipline and the state we are always trying to achieve. Perfect fidelity. No signal loss. The vision, realized.',
        'So yes, it started as "no more vector art tools." It ended up meaning something much bigger. Sometimes the best ideas sneak in through the back door disguised as jokes.',
      ],
    },
  },

  // ============================================
  // PIPELINE PAGE (Deep Dives)
  // ============================================

  pipeline: {
    eyebrow: 'The Pipeline',
    title: 'Concept to Customer',
    subtitle: 'Every phase of the pipeline, reimagined for a world where agents are crew.',

    overview: [
      'The traditional concept-to-customer pipeline is a relay race. Each phase hands off to the next. Research hands off to strategy. Strategy hands off to design. Design hands off to engineering. Each handoff loses signal. Each translation introduces drift.',
      'Zero-Vector collapses the relay race into a single continuous flow. The person with the vision carries it from research to shipping, with AI agents handling the specialized execution at each phase.',
    ],

    phases: {
      'research-market': { title: 'Market Research' },
      'research-customer': { title: 'Customer Research' },
      'jtbd': { title: 'Jobs to Be Done' },
      'ideation': { title: 'Ideation' },
      'prototyping': { title: 'Prototyping' },
      'validation': { title: 'Validation' },
      'build-ship': { title: 'Build + Ship' },
    },
  },

  // ============================================
  // APPROACH PAGE (Detailed Phase Breakdowns)
  // ============================================

  approach: {
    eyebrow: 'The Approach',
    title: 'How It Works',
    subtitle: 'The practical application of the philosophy. Every phase of creating something, from the seed of an idea to shipping it.',

    intro: [
      'This is where philosophy meets practice. Each phase of the concept-to-customer arc has two sides: what the activity actually is, timeless, tool-agnostic, true regardless of era, and how Zero-Vector approaches it with AI agents as crew.',
      'You do not have to use every phase. You do not have to follow them in order. But understanding what each one is and why it matters gives you the vocabulary to make intentional decisions about where to invest your time.',
    ],

    phases: [
      {
        id: 'problem-framing',
        name: 'Problem Framing',
        number: '01',
        agnostic: [
          'Before you research a market, before you talk to customers, before you sketch a single idea, you need to articulate what problem you are trying to solve. This is the seed. Every great product, every great company, every great creative work started with someone saying: this thing is broken. This could be better. This should exist.',
          'Problem framing is the discipline of sitting with the question before jumping to answers. What is the actual pain? Who feels it? How do they cope with it today? What would their world look like if it were solved? Most failed products did not fail because the solution was bad. They failed because they solved the wrong problem.',
        ],
        zeroVector: [
          'Zero-Vector starts here. Fall in love with the problem, not the solution. Use AI agents to explore the problem space: document your assumptions, challenge them, research adjacent problems, map the landscape of existing solutions. Write a problem brief, not a product spec, and let the agents pressure-test it.',
          'The temptation with AI is to skip straight to building. That is vibe coding. Zero-Vector resists this. The first thing you build is understanding.',
        ],
      },
      {
        id: 'research-market',
        name: 'Market Research',
        number: '02',
        agnostic: [
          'Market research means understanding what is already out there. Who are the competitors? What are they charging? Who is buying? What do the reviews say? Where are the gaps? This is not about slide decks and analyst reports. It is about developing an honest picture of the landscape your product will enter.',
          'Good market research tells you whether the problem you identified is one that other people are also trying to solve, what their solutions look like, and where the opportunity lies. Blue ocean or red ocean, you need to know which one you are swimming in.',
        ],
        zeroVector: [
          'AI agents excel at market research. They can scan competitors, synthesize reviews, quantify market size, and identify gaps faster than any human analyst. The Zero-Vector approach is blue ocean analysis at scale: have your agents map the competitive landscape, identify what everyone is doing the same way, and find the space where nobody is looking.',
          'The key insight: market research is not a phase you complete and move on from. With AI agents, it becomes a continuous signal. Your research corpus stays live, queryable, and connected to every decision you make downstream.',
        ],
      },
      {
        id: 'research-customer',
        name: 'Customer Research',
        number: '03',
        agnostic: [
          'Customer research is talking to the people who have the problem. Not surveys with checkboxes. Conversations. What do they do today? Where does it break? What have they tried? What do they wish existed? The goal is empathy, genuine understanding of another person\'s experience, constraints, and desires.',
          'This is the phase most vibe coders skip entirely, and it is why their products are shiny and useless. You cannot build something for people if you have not listened to people. No amount of AI can replace the insight that comes from hearing someone describe their frustration in their own words.',
        ],
        zeroVector: [
          'Zero-Vector does not replace customer research. It amplifies it. Record your interviews and have AI agents transcribe, tag, and index them into a queryable research corpus. Every insight becomes searchable. Every pattern becomes visible. Six months of interviews become a knowledge base you can interrogate in real-time.',
          'Instead of waiting two weeks for your research team to synthesize findings, synthesis happens during the interview. You ask the participant a question, and by the time they answer, your agents have already connected it to three other participants who said something similar.',
        ],
      },
      {
        id: 'jtbd',
        name: 'Jobs to Be Done',
        number: '04',
        agnostic: [
          'Jobs to Be Done theory says that people do not buy products. They hire them to do a job. Nobody wants a quarter-inch drill bit. They want a quarter-inch hole. Nobody wants a hole. They want to hang a picture. Nobody wants to hang a picture. They want their home to feel like theirs.',
          'JTBD is the discipline of understanding the real job behind the surface request. It connects customer research to product decisions by asking: what is the outcome this person is trying to achieve, and what is preventing them from achieving it? The answers define what you should build, and equally important, what you should not.',
        ],
        zeroVector: [
          'AI agents are extraordinarily good at pattern recognition across large bodies of qualitative data. Feed your research corpus into an agent trained on JTBD frameworks and it will surface job statements you might have missed. It will find connections between seemingly unrelated customer frustrations.',
          'The Zero-Vector approach: let the agents extract the patterns, then you validate and refine. Your judgment decides which jobs matter most. The agents make sure you do not miss the signal in the noise.',
        ],
      },
      {
        id: 'ideation',
        name: 'Ideation',
        number: '05',
        agnostic: [
          'Ideation is the generation and exploration of possible solutions. Brainstorming, sketching, mind-mapping, "what if" exercises. The goal is divergent thinking, casting the widest net possible before converging on a direction. The more ideas you generate, the better your odds of finding the right one.',
          'Good ideation requires psychological safety, structured exploration, and the discipline to separate generation from evaluation. Most brainstorming fails because people evaluate ideas while generating them. The loudest voice wins. The most creative idea dies in the first five minutes.',
        ],
        zeroVector: [
          'AI agents are ideation partners that never tire, never judge prematurely, and have no ego attached to their suggestions. They can generate fifty variations of an idea in seconds, challenge your assumptions with evidence from your research, and push you into solution spaces you would not have explored alone.',
          'The Zero-Vector approach: structured ideation sessions where you and your agents alternate between diverging and converging. Use the agents to expand the space, then apply your judgment to narrow it. The result is better ideas, faster, without the groupthink that kills innovation in traditional brainstorming.',
        ],
      },
      {
        id: 'prototyping',
        name: 'Prototyping',
        number: '06',
        agnostic: [
          'Prototyping is making a version of the thing so you can test it. In traditional product development, this means mockups, wireframes, clickable prototypes, representations of the product that simulate the experience without actually being the product. The purpose is to learn cheaply before committing to expensive build.',
          'The problem with traditional prototypes is that they lie. A Figma prototype shows you what something looks like, not what it does. Real performance, real data, real edge cases, none of that exists in a mockup. You are testing a picture and calling it validation.',
        ],
        zeroVector: [
          'In Zero-Vector, the prototype is the product. When AI agents can help you build working code from the start, the expensive build is no longer expensive. You skip the picture and go straight to the thing itself. Working code. Real data. Real interactions.',
          'This does not mean you ship your first attempt. It means your first attempt is real. You iterate on an actual product, not a simulation of one. The feedback you get is about the thing itself, not about a representation of it. The learning is faster and more honest.',
        ],
      },
      {
        id: 'validation',
        name: 'Validation',
        number: '07',
        agnostic: [
          'Validation is putting your product in front of real people and learning whether it actually solves the problem you set out to solve. Usability testing, beta programs, A/B tests, analytics, interviews. The goal is to close the loop between what you built and what people need.',
          'Good validation is humble. It assumes you got things wrong and seeks to find out where. It is not a demo. It is not showing people your work and asking "isn\'t this great?" It is watching people use the thing and seeing where they struggle, where they delight, and where they abandon.',
        ],
        zeroVector: [
          'Because you built the real thing, your validation is real. People are testing actual software, not a prototype. The feedback is about performance, reliability, delight, and friction, not about whether the mockup looks right.',
          'AI agents can help you synthesize validation data at scale. Hundreds of feedback sessions indexed, tagged, and analyzed for patterns. The insights connect back to your original problem framing and JTBD work, closing the loop across the entire arc.',
        ],
      },
      {
        id: 'build-ship',
        name: 'Build + Ship',
        number: '08',
        agnostic: [
          'Shipping is getting the product into the hands of the people who need it. Deployment, launch, distribution, marketing, support. It is the moment where everything you researched, designed, and built meets reality. Most products die here, not because the product is bad, but because the ship was botched.',
          'Shipping is not a single event. It is a continuous practice. Deploy, learn, iterate, deploy again. The feedback loop between shipping and learning is where products get great. The ones that ship once and walk away are the ones that stagnate.',
        ],
        zeroVector: [
          'In Zero-Vector, there is no handoff to engineering because you built it. There is no "dev complete" milestone because development and design were the same act. You ship what you envisioned because you are the one who built it.',
          'AI agents handle the deployment pipeline, the CI/CD, the infrastructure. You focus on the experience. The gap between vision and artifact is zero. And after you ship, the agents help you monitor, analyze, and iterate. The loop continues.',
        ],
      },
    ],
  },

  // ============================================
  // FOR BUILDERS (Practitioner Path)
  // ============================================

  builders: {
    eyebrow: 'For Builders',
    title: 'Start Building',
    subtitle: 'You want to practice Zero-Vector Design yourself. Here is how to begin.',

    catchphrase: 'Fall in love with the problem, not the solution.',

    intro: [
      'Zero-Vector Design is not something you learn from a certification or a weekend workshop. It is something you learn by building real things for real people. The discipline emerges from practice, not theory.',
      'The single most important thing a Zero-Vector practitioner does is fall in love with the problem, not the solution. Before you write a line of code, before you prompt an agent, before you touch any tool, understand the problem. Document it. Challenge it. Talk to the people who have it. This is what separates intentional creation from vibe coding.',
      'If you are a designer who has ever been frustrated by the gap between your vision and what got built, this is for you. If you are an engineer who has ever wished the designer could just show you what they mean, this is for you. If you are anyone who makes things for people, this is for you.',
    ],

    getting_started: {
      title: 'Getting Started',
      steps: [
        {
          number: '01',
          title: 'Pick a real project',
          description: 'Not a tutorial. Not a demo. A real thing that real people will use. The discipline only forms under real constraints.',
          detail: 'Find something you personally care about: a tool you wish existed, a workflow that frustrates you, a community that needs something. The project should be small enough to ship in weeks, not months, but real enough that someone besides you will use it. Side projects are perfect. Client work is perfect. Tutorials are not.',
        },
        {
          number: '02',
          title: 'Assemble your crew',
          description: 'Set up your AI agents with clear roles. Not one agent doing everything. Specialized crew members with distinct responsibilities.',
          detail: 'Use Claude Code with CLAUDE.md instruction files to give each agent a distinct personality, domain, and set of guardrails. One agent for backend. One for frontend. One for research. The Investiture scaffold gives you the starting architecture. Clone it and customize the agent roles for your project.',
        },
        {
          number: '03',
          title: 'Start with research, not code',
          description: 'Do not skip to building. The whole pipeline matters. Start with the problem, not the solution.',
          detail: 'Use your AI agents to research the problem space. Document your assumptions. Talk to potential users. Even just five conversations changes everything. Write a problem brief, not a product spec. Let the agents help you explore competitors, adjacent solutions, and the landscape. This is the foundation everything else builds on.',
        },
        {
          number: '04',
          title: 'Build the real thing',
          description: 'No mockups. No prototypes. Build the actual product from day one. Let the agents handle the implementation while you focus on the decisions.',
          detail: 'Start with the Investiture starter framework. Let Claude Code read the architecture. Focus your energy on the decisions: what to build, why, and for whom. The agents handle the how. Iterate fast: build, look at it, adjust, build again. The taste is yours. The velocity is the agents.',
        },
        {
          number: '05',
          title: 'Ship and learn',
          description: 'Get it in front of people. The feedback loop is everything. Iterate on the real thing, not on a picture of it.',
          detail: 'Deploy early. Netlify, Vercel, whatever gets it live. Share the URL. Watch people use it. The feedback you get on a real product is infinitely more valuable than feedback on a mockup. Then iterate. Ship again. The loop between building and learning is where craft develops.',
        },
      ],
    },

    reading_list: {
      title: 'The Reading List',
      subtitle: 'Books that shape the Zero-Vector mindset. These are not design books. They are thinking books.',
      books: [
        { title: 'The Lean Startup', author: 'Eric Ries', description: 'Build-measure-learn. The original loop. Still the best framework for shipping and iterating.', url: 'https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898' },
        { title: 'Blue Ocean Strategy', author: 'W. Chan Kim & Renee Mauborgne', description: 'Stop competing in red oceans. Find the space where nobody is looking. This is how you frame problems worth solving.', url: 'https://www.amazon.com/Blue-Ocean-Strategy-Expanded-Uncontested/dp/1625274491' },
        { title: 'Thinking in Systems', author: 'Donella Meadows', description: 'Feedback loops, leverage points, system behavior. If you do not understand systems, you cannot design with agents.', url: 'https://www.amazon.com/Thinking-Systems-Donella-H-Meadows/dp/1603580557' },
        { title: 'The Design of Everyday Things', author: 'Don Norman', description: 'Affordances, signifiers, mapping. The foundation of user-centered thinking. Always relevant.', url: 'https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654' },
        { title: 'Save the Cat!', author: 'Blake Snyder', description: 'A screenwriting book. Why? Because the arc of building a product is the arc of telling a story. Narrative structure applies.', url: 'https://www.amazon.com/Save-Cat-Last-Screenwriting-Youll/dp/1932907009' },
        { title: 'Out of the Crisis', author: 'W. Edwards Deming', description: 'Quality is not about inspection. It is about building systems where quality is inevitable. The original systems auteur.', url: 'https://www.amazon.com/Out-Crisis-W-Edwards-Deming/dp/0262541157' },
      ],
    },

    coaching: {
      title: 'Coaching',
      description: 'One-on-one or small group coaching for practitioners who want to adopt Zero-Vector Design. Not a lecture. A working session where we build together.',
      cta: 'Inquire about coaching',
      link: 'mailto:hello@helloerikaflowers.com',
    },

    resources: {
      title: 'Resources',
      items: [
        { title: 'The 20 Rules for AI-First Design', url: 'https://eflowers.substack.com/p/the-20-rules-for-ai-first-design', type: 'article' },
        { title: 'Across the Designer-Verse', url: 'https://eflowers.substack.com/p/across-the-designer-verse', type: 'article' },
        { title: 'Out of the Crisis: Convergent Evolution and AI-First Design', url: 'https://eflowers.substack.com/p/out-of-the-crisis', type: 'article' },
        { title: 'Build Your First App with AI Agents (Live)', url: 'https://helloerikaflowers.com/media', type: 'video' },
      ],
    },

    community: {
      title: 'Join the Movement',
      subtitle: 'Zero-Vector is not a pamphlet you read once. It is a community of practitioners who build, share, and teach.',
      channels: [
        {
          title: 'Subscribe on Substack',
          description: 'New writing on design, AI, building things, and the ongoing evolution of Zero-Vector practice.',
          cta: 'Subscribe',
          url: 'https://eflowers.substack.com',
        },
        {
          title: 'Contribute on GitHub',
          description: 'The Zero-Vector website is open source. Submit pull requests, suggest content, improve the curriculum.',
          cta: 'View the repo',
          url: 'https://github.com/erikaflowers/zerovector',
        },
        {
          title: 'Watch and Listen',
          description: 'Live streams, podcast episodes, and recorded sessions on building with AI agents.',
          cta: 'Browse media',
          url: '/media',
        },
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

  media: {
    eyebrow: 'The Library',
    title: 'Media',
    subtitle: 'Writing, watching, listening, and thinking about Zero-Vector Design.',

    featured: {
      title: 'Start Here',
      items: [
        {
          title: 'Erika Flowers on Substack',
          description: 'New writing on design, AI, building things, and the evolution of Zero-Vector practice. The primary channel for everything new.',
          type: 'substack',
          cta: 'Subscribe',
          url: 'https://eflowers.substack.com',
        },
        {
          title: 'The Podcast',
          description: 'Conversations about design, AI, building, and the people doing the work. Long-form discussions, live builds, and deep dives.',
          type: 'podcast',
          cta: 'Listen',
          url: 'https://helloerikaflowers.com/media',
        },
      ],
    },

    articles: [
      { title: 'A Good Craftsperson Never Blames Their Tools', description: 'On the relationship between the maker and the instrument.', url: 'https://eflowers.substack.com/p/a-good-craftsperson-never-blames-their-tools' },
      { title: 'The 20 Rules for AI-First Design', description: 'The foundational rules for working in a Zero-Vector paradigm.', url: 'https://eflowers.substack.com/p/the-20-rules-for-ai-first-design' },
      { title: 'Across the Designer-Verse: The Reality of AI-First Design', description: 'What it actually looks like to design with AI agents.', url: 'https://eflowers.substack.com/p/across-the-designer-verse' },
      { title: 'Out of the Crisis: Convergent Evolution and AI-First Design', description: 'How the design industry got here and why the convergence is inevitable.', url: 'https://eflowers.substack.com/p/out-of-the-crisis' },
    ],

    books: [
      { title: 'Out of the Crisis', author: 'W. Edwards Deming', description: 'The original systems thinker. Quality is not about inspection.', url: 'https://www.amazon.com/Out-Crisis-W-Edwards-Deming/dp/0262541157' },
      { title: 'The Design of Everyday Things', author: 'Don Norman', description: 'The foundation. Affordances, signifiers, mapping. Always relevant.', url: 'https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654' },
      { title: 'Thinking in Systems', author: 'Donella Meadows', description: 'If you do not understand feedback loops, you cannot design with agents.', url: 'https://www.amazon.com/Thinking-Systems-Donella-H-Meadows/dp/1603580557' },
      { title: 'Blue Ocean Strategy', author: 'W. Chan Kim & Renee Mauborgne', description: 'Find the uncontested market space. Mandatory for problem framing.', url: 'https://www.amazon.com/Blue-Ocean-Strategy-Expanded-Uncontested/dp/1625274491' },
      { title: 'Save the Cat!', author: 'Blake Snyder', description: 'Story structure applies to product structure. The arc is the arc.', url: 'https://www.amazon.com/Save-Cat-Last-Screenwriting-Youll/dp/1932907009' },
    ],

    talks: [
      { title: 'Build Your First App with AI Agents', description: 'Live hackathon: building a real application from scratch with AI agents.', url: 'https://helloerikaflowers.com/media', type: 'video' },
      { title: 'The Claude Code Messiah', description: 'Deep dive into the tool that made Zero-Vector Design practical.', url: 'https://helloerikaflowers.com/media', type: 'podcast' },
      { title: 'NN/g -- The Future of Service Design in the Age of AI', description: 'With Nielsen Norman Group, on what AI means for design.', url: 'https://helloerikaflowers.com/media', type: 'podcast' },
    ],

    voices: {
      title: 'People to Follow',
      subtitle: 'Other voices exploring the intersection of design, AI, and building.',
      items: [],
    },
  },

  // ============================================
  // THE ORIGIN (/origin)
  // ============================================

  origin: {
    eyebrow: 'The Origin',
    title: 'The Origin',
    subtitle: 'Thirty-one years in the making. Here is how we got here.',

    intro: [
      'Hi. I\'m Erika Flowers. I have been designing things for people for thirty-one years: service design, UX, systems thinking, organizational transformation. I have done it at startups, at agencies, at federal agencies, and at NASA. And for most of those thirty-one years, I have been fighting the same gap.',
      'The gap between what I could see in my head and what actually got built. The handoff. The translation layer. The "that\'s not what I meant" moment in sprint review. Every designer knows it. I spent three decades trying to close it. Zero-Vector is what happened when I finally did.',
    ],

    nasa: {
      label: 'NASA',
      role: 'Principal Service Designer',
      team: 'AI Innovation Team Lead',
      body: [
        'I lead service design at NASA. When your stakeholders include astronauts, mission controllers, and engineers building hardware that cannot fail, "good enough" is not a concept that exists. Systems thinking is not a buzzword here. It is how you keep humans alive in space.',
        'In aerospace, "zero vector" means a state of no relative motion, perfect stillness between two objects. No drift. No error. Complete alignment between intent and position. That is what I wanted for design: zero distance between what you envision and what gets built. No drift between intent and artifact.',
      ],
    },

    ai_journey: {
      title: 'The AI Journey',
      paragraphs: [
        'In 2022, I started experimenting with AI tools at Mural. In 2023, I founded NASA\'s AI Innovation Team. By 2024, I was building real applications with AI agents, not demos, not prototypes, real software that real people use.',
        'The moment it clicked: I was building Fictioneer, an AI-powered story development platform for my own 400,000-word science fiction series. I needed it. It did not exist. So I built it. With AI agents as crew. The entire thing, API, database, RAG pipeline, prose engine, frontend, built by one person directing a team of AI agents.',
        'That was the proof. Not that AI could write code. That a designer with thirty-one years of systems thinking, craft, and taste could direct AI agents to build exactly what she envisioned. No handoff. No translation. No "that\'s not what I meant." The doctrine wrote itself.',
      ],
    },

    redefinition: {
      title: 'The Redefinition',
      paragraphs: [
        'I have done this before. I helped define service design practice when it was still called "service blueprinting" and nobody knew what it was. I built the community, wrote the guides, gave the talks. Then UX design needed the same treatment. Then design operations. Each time, the industry needed someone to name the thing, frame it, and show people how to do it.',
        'Zero-Vector is the next redefinition. The tools changed. The gap closed. The role of the designer transformed from someone who draws pictures of things into someone who builds the thing directly. This is not a small adjustment. It is a paradigm shift, and it needs someone who has been through paradigm shifts before to help people navigate it.',
        'My ethos has always been the same: take from all that which is around you and make of it something more. Systems thinking from Deming. Narrative design from Campbell and McKee. Lean principles from Ries. Blue ocean strategy from Kim and Mauborgne. Quality philosophy from Taguchi. Zero-Vector is the synthesis, everything I have learned in thirty-one years applied to the most significant shift in how things get made since the personal computer.',
      ],
    },

    photos: [
      { id: 'headshot', alt: 'Erika Flowers', placeholder: true },
      { id: 'speaking', alt: 'Speaking at NN/g', placeholder: true },
      { id: 'building', alt: 'Building with AI agents', placeholder: true },
    ],

    credentials: [
      { label: 'Years in Design', value: '31' },
      { label: 'Current Role', value: 'Principal Service Designer, NASA' },
      { label: 'Specialization', value: 'Service Design, Systems Thinking, AI Innovation' },
      { label: 'Published Author', value: 'The Dauntless Gambit series (400,000+ words)' },
      { label: 'Speaking', value: 'Nielsen Norman Group, NASA, federal agencies' },
      { label: 'Built', value: 'Fictioneer, AI-powered story development platform' },
    ],

    author: {
      title: 'The Author',
      body: 'I am also a published science fiction author. The Dauntless Gambit series, over 400,000 words of space opera, is where the crew that builds Zero-Vector gets their names. Julian, Siddig, Decker, Lee, Sellivan, Qin. They were characters first. Now they are agents. The fiction became the framework.',
    },

    crew: {
      title: 'The Crew',
      subtitle: 'Named for the characters of The Dauntless Gambit. Built as AI agents in Claude Code. They are not assistants. They are crew.',
      members: [
        { name: 'Julian', role: 'Orchestrator', desc: 'Strategy, planning, and cross-agent coordination. The analytical mind seeing the whole board.' },
        { name: 'Siddig', role: 'Backend Engineer', desc: 'API, database, RAG pipeline, and data integrity. Every query returns the right answer.' },
        { name: 'Heavy', role: 'Frontend Engineer', desc: 'UI components, styling, and interactions. The gentle force behind everything you touch.' },
        { name: 'Decker', role: 'Prose IDE Engineer', desc: 'Story structure, scene management, and the sacred writing space. Captain of the codebase.' },
        { name: 'Lee', role: 'Public Affairs', desc: 'Website, marketing, demos, and brand voice. The charming face presented to the world.' },
        { name: 'Sellivan', role: 'Operations Lead', desc: 'Repository structure, documentation, and process discipline. Precise, cynical, always right.' },
        { name: 'Qin', role: 'Code Auditor', desc: 'Architecture assessment, technical debt, and quality review. She notices everything.' },
        { name: 'Manu', role: 'Rapid Response', desc: 'Hotfixes, performance optimization, and prototyping. Questions everything, ships fast.' },
        { name: 'Eliza', role: 'Combat Specialist', desc: 'Complex debugging, security review, and the problems nobody else can crack.' },
        { name: 'Adoni', role: 'Ghostwriter', desc: 'Articles, marketing copy, and channeling the auteur\'s voice. Theatrical, gracious, precise.' },
        { name: 'Renic', role: 'Black Hat', desc: 'Adversarial review, vulnerability testing, and stress analysis. Cold, calculating, necessary.' },
      ],
    },

    cta: {
      text: 'Want to know more about my work, my career, and what I am building?',
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

  // ============================================
  // GET STARTED (/start)
  // ============================================

  start: {
    eyebrow: 'Get Started',
    title: 'Welcome to the Movement',
    subtitle: 'You read the manifesto. You felt it. Now here is how to start.',

    intro: [
      'Zero-Vector Design is not something you watch from the sidelines. It is something you practice. Every person who picks up the principles and builds something real makes the movement stronger.',
      'Whether you are a designer who has never opened a terminal, an engineer who wants to think more like a designer, or a leader who wants to transform how your organization ships, there is a path for you. Start here.',
    ],

    announcement: {
      title: 'Read the Announcement',
      description: 'The article that started it all. What Zero-Vector Design is, why it exists, and what it means for the future of making things.',
      cta: 'Coming Soon',
      url: '#',
      placeholder: true,
    },

    connect: {
      title: 'Connect',
      items: [
        {
          title: 'Follow on LinkedIn',
          description: 'Erika Flowers shares thinking on design, AI, and the ongoing evolution of Zero-Vector practice.',
          cta: 'Connect on LinkedIn',
          url: 'https://www.linkedin.com/in/helloeflowers/',
        },
        {
          title: 'Subscribe on Substack',
          description: 'New writing on design, AI, building things, and the future of the discipline. The primary channel for everything new.',
          cta: 'Subscribe',
          url: 'https://eflowers.substack.com',
        },
      ],
    },

    actions: {
      investiture: {
        eyebrow: 'Build',
        title: 'Get Investiture',
        description: 'The Zero-Vector starter scaffold. Architecture that teaches your AI to write clean code. Clone it. Open Claude Code. Start building.',
        cta: 'Get the Scaffold',
        url: '/investiture',
      },
      openVector: {
        eyebrow: 'Learn',
        title: 'The Open Vector',
        description: 'The full Zero-Vector curriculum. Free. Always free. From "I have never opened a terminal" to "I ship my own vision."',
        cta: 'Start Learning',
        url: '/open',
      },
    },
  },

  investiture: {
    nav: {
      brand: 'Investiture',
      back: 'Zero Vector',
      github: 'GitHub',
    },

    hero: {
      label: 'A Zero-Vector Scaffold',
      title: ['Build Real', 'Things', 'With AI'],
      subtitle: 'Architecture that teaches your AI to write clean code. Clone it. Open Claude Code. Start building.',
      badge: 'Free & Open Source',
    },

    ethos: {
      label: 'The Framework',
      whatIs: {
        title: 'What This Is',
        body: 'An architecture scaffold with a CLAUDE.md that teaches your AI assistant how to write clean code. Folders, separation of concerns, guardrails. A spaghetti-free zone for building with AI. Clone it, open Claude Code, and start building. The structure keeps you from painting yourself into corners.',
      },
      whatIsNot: {
        title: 'What This Is Not',
        body: 'Not Tailwind. Not Bootstrap. Zero styles, zero layouts, zero components. Run it and you get a blank screen. That is the point. Unopinionated about your UI, it only cares about where your code lives. Bring your own design system, or ask Claude to build one.',
      },
    },

    problem: {
      label: 'The Gap',
      problem: {
        title: 'The Problem',
        body: 'You are a designer. You have seen what AI coding tools can do. You want in. But the code works until it does not, and you cannot debug it. Terms like "services layer" and "state management" feel like a foreign language.',
      },
      solution: {
        title: 'The Solution',
        body: 'Engineering knowledge pre-loaded into a scaffold your AI can read. Work inside a system with guardrails built in. You do not have to become an engineer. Just build inside structure that already knows the rules.',
      },
    },

    architecture: {
      label: 'Architecture Layers',
      intro: 'Four layers. Clean separation. Each one has a job.',
      layers: [
        { number: '01', title: 'Design System', path: 'design-system/', file: 'tokens.css', desc: 'Tokens, themes, and component definitions. CSS variables for colors, spacing, typography. Change your entire visual system in one place.' },
        { number: '02', title: 'Content Layer', path: 'content/', file: 'en.json', desc: 'All user-facing strings in one place. No hardcoded text in components. Internationalization-ready. CMS-swappable.' },
        { number: '03', title: 'Core Logic', path: 'core/', file: 'utils.js', desc: 'Pure functions and state management. Framework-agnostic. Testable. No side effects.' },
        { number: '04', title: 'Services', path: 'services/', file: 'api.js', desc: 'Auth, database, AI, all wrapped. Swap Supabase for Firebase in one file. External dependencies never leak into your components.' },
      ],
    },

    audience: {
      label: 'Who This Is For',
      groups: [
        { title: 'UX Designers', body: 'Who want to build, not just wireframe. You have the design thinking. Now ship the design.' },
        { title: 'Design Technologists', body: 'Leveling up your AI-assisted workflow. You already bridge the gap. Now eliminate it.' },
        { title: 'Vibe Coders', body: 'Who want to understand why things work. Structure turns experiments into products.' },
      ],
    },

    quickstart: {
      label: 'Quick Start',
      intro: 'Three commands. Working scaffold. Real architecture.',
      commands: [
        'git clone https://github.com/erikaflowers/investiture.git',
        'cd investiture && bash install.sh',
        'npm start',
      ],
      after: 'Your app opens at localhost:3000. Claude Code reads the architecture. Start building.',
    },

    quote: {
      text: 'The most important step a person can take is always the next one.',
      cite: 'Dalinar Kholin -- The Stormlight Archive',
      context: 'Named for Investiture, the fundamental magical energy of Brandon Sanderson\'s Cosmere universe. Like its namesake, this scaffold is a foundation that can manifest as many different things.',
    },

    cta: {
      title: 'Start Building',
      body: 'The scaffold is free. The knowledge is free. The only cost is your willingness to start.',
      primaryCta: 'Clone the Repo',
      primaryUrl: 'https://github.com/erikaflowers/investiture',
      secondaryCta: 'Read the Docs',
      secondaryUrl: 'https://github.com/erikaflowers/investiture#readme',
      backCta: 'Back to Zero Vector',
    },
  },

};

export default en;
