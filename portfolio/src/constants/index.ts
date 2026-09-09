export const blurFadeDelay = 0.04

export const experiences = [
  {
    title: 'Founding Engineer',
    company: 'Referrush',
    dateRange: 'Jan 2025 - Present',
    link: "https://www.referrush.com",
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'GCP', 'Firebase', 'ClickHouse', 'GCP Pub/Sub', 'Cloud Tasks', 'Cloud Functions'],
    points: [
      'Owned the backend and serverless infrastructure powering a referral SaaS serving 150+ merchants.',
      'Architected a GCP Pub/Sub order webhook pipeline processing 1.5M Shopify orders/day, designing for scalable, reliable, asynchronous ingestion.',
      'Built the transactional email infra end-to-end using Resend and GCP Cloud Functions, delivering thousands of emails daily across product workflows.',
      'Integrated Clickhouse as the primary analytical datastore, restructuring analytical infrastructure to support large-scale reporting and complex analytical workloads.',
      'Designed GCP Cloud Task workflows for daily payouts covering hundreds of cashback, gift-card, and discount-code transactions, and migrated recurring commission processing to asynchronous execution for greater reliability.',
      'Upgraded Shopify recurring billing infrastructure and automated monthly email-based billing reports for merchants.',
      'Engineered the Shopify extension powering 2M requests/day, while also contributing to the architecture and frontend engineering of the merchant dashboard.',
      'Led the migration of the frontend codebase from JavaScript to TypeScript, improving type safety and long-term maintainability.',
      'Owned serverless GCP deployments and infrastructure decisions across background jobs, scheduled workloads, webhooks, and long-running operations.',
      'Worked directly with merchants to translate product requirements into shipped engineering solutions.',
    ],
  },
  {
    title: 'Frontend Engineer',
    company: 'Keyshade',
    dateRange: 'Oct 2024 - Jan 2025',
    link: "https://www.keyshade.io",
    technologies: ['React', 'Next.js', 'Typescript', 'Tailwind'],
    points: [
      'Built and shipped the members management system, including member listing, role management, invitations, member removal, ownership transfer, workspace navigation, and supporting application state.',
      'Developed end-to-end API key management workflows, including creation, editing, deletion, permissions, expiry configuration, validation, confirmation flows, and API integration.',
      'Built reusable frontend infrastructure and shipped multiple production PRs across core platform workflows, spanning UIs, state management, API integration, and developer tooling.',
    ],
  },
]

export const projects = [
  {
    title: 'ShellCN',
    github: "https://github.com/poswalsameer/shellcn",
    link: "https://shellcn.sameerposwal.in/",
    technologies: ['TypeScript', 'React', 'Ink', 'Node.js'],
    points: [
      'Terminal UI component system for React/Ink providing reusable, customizable components for CLI apps.',
      'CLI based component distribution with init, list, and add commands that inject component source directly.',
      'Reusable suite of terminal components — inputs, selects, tables, progress, alerts, cards, and layout primitives.',
    ],
  },
  {
    title: 'JS Dock',
    github: "https://github.com/poswalsameer/jsdock",
    link: "https://jsdock.sameerposwal.in/",
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Jotai', 'Monaco Editor', 'Web Worker'],
    points: [
      'Browser based JS environment with integrated Monaco editor, live code execution and output console.',
      'Engineered the interactive IDE workspace with resizable panels, custom themes, and responsive UI.',
      'Built the code-execution pipeline to run user-submitted Javascript and stream execution results into the IDE.',
    ],
  },
  {
    title: 'Resumate',
    github: "https://github.com/poswalsameer/resumate",
    link: "https://resumate.sameerposwal.in/",
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Jotai', 'Express', 'LLMs', 'GenAI'],
    points: [
      'AI-powered resume analyzer delivering instant feedback on clarity, ATS compatibility, and job readiness.',
      'Built interactive feedback UX with structured insights, scoring, and actionable suggestions across resume sections.',
      'Integrated LLM/GenAI pipeline via Express backend for low-latency analysis and generation.',
    ],
  },
  {
    title: 'Typr',
    github: "https://github.com/poswalsameer/typr",
    link: "https://typr.sameerposwal.in/",
    technologies: ['Next.js', 'Typescript', 'Tailwind', 'ShadCN'],
    points: [
      'Built a minimal, gamified typing trainer to improve developer typing speed and accuracy using 10-finger practice.',
      'Engineered real-time WPM/accuracy tracking with custom lessons and keyboard-focused interactions.',
      'Crafted responsive, accessible UI with ShadCN and Tailwind for focused practice sessions.',
    ],
  },
  {
    title: 'Minerush',
    github: "https://github.com/poswalsameer/MineRush",
    link: "https://minerush.sameerposwal.in/",
    technologies: ['React', 'Next.js', 'Typescript', 'Tailwind'],
    points: [
      'Cloned Stake’s popular Mines game with interactive grid, betting logic, and instant reveal mechanics.',
      'Implemented game state, risk/reward calculations, and responsive animations for engaging gameplay.',
      'Built with React/Next.js and Tailwind for performant, mobile-friendly UX.',
    ],
  },
]

export const openSource = [
  {
    title: 'Keyshade',
    description: 'Added delete account feature in user settings with confirmation dialog and input validation for safe account deletion.',
    link: "https://github.com/keyshade-xyz/keyshade/pull/819",
  },
  {
    title: 'Keyshade',
    description: 'Implemented edit API key workflow in user settings with sheet UI for updating name, expiry, permissions and validation.',
    link: "https://github.com/keyshade-xyz/keyshade/pull/815",
  },
  {
    title: 'Keyshade',
    description: 'Built members table for the Members tab with member listing and supporting UI for workspace member management.',
    link: "https://github.com/keyshade-xyz/keyshade/pull/846",
  },
  {
    title: 'Keyshade',
    description: 'Created API key management with creation, deletion and grid listing of all available API keys.',
    link: "https://github.com/keyshade-xyz/keyshade/pull/726",
  },
  {
    title: 'Keyshade',
    description: 'Refactored secret table to new design and migrated edit variable dialog to a sheet for improved editing experience.',
    link: "https://github.com/keyshade-xyz/keyshade/pull/690",
  },
  {
    title: 'Keyshade',
    description: 'Added ability to create new variables in a project, enabling dynamic variable management within workspaces.',
    link: "https://github.com/keyshade-xyz/keyshade/pull/593",
  },
  {
    title: 'Keyshade',
    description: 'Implemented variable deletion flow for projects, allowing removal of unwanted variables with proper confirmation.',
    link: "https://github.com/keyshade-xyz/keyshade/pull/600",
  },
  {
    title: 'Keyshade',
    description: 'Added edit secret functionality for projects, supporting in-place secret updates with validation.',
    link: "https://github.com/keyshade-xyz/keyshade/pull/684",
  },
  {
    title: 'Keyshade',
    description: 'Added logic for joining the waitlist one time with one email only.',
    link: "https://github.com/keyshade-xyz/keyshade/pull/492",
  },
  {
    title: 'Shelf',
    description: 'Removed the extra $ sign appearing on the popup in workspaces tab.',
    link: "https://github.com/Shelf-nu/shelf.nu/pull/1348",
  },
  {
    title: 'Codemod',
    description: 'Fixed inconsistent text color in the Clerk UI component.',
    link: "https://github.com/codemod-com/codemod/pull/1352",
  },
  {
    title: 'Tabler',
    description: 'Repaired the wrong border styling used in the ribbon start class.',
    link: "https://github.com/tabler/tabler/pull/1936",
  },
  {
    title: '100xDevs',
    description: 'Conditionally rendered the `p` tag to show `per annum` text only when minSalary && maxSalary is valid.',
    link: "https://github.com/code100x/job-board/pull/377",
  },
  {
    title: 'BM Samay',
    description: 'Revamped the privacy policy page to simplify the user experience.',
    link: "https://github.com/Bot-Rakshit/bm_frontend/pull/145",
  },
]

export const education = [
  {
    title: 'JC Bose University Of Science And Technology, YMCA',
    dateRange: '2021 - 2025',
    description: 'B.Tech in Electronics And Computer Engineering',
  },
]

export const skills = [
  "React.js",
  "Next.js",
  "JavaScript",
  "Typescript",
  "Node.js",
  "Express.js",
  "Tailwind",
  "ShadCN",
  "Python",
  "Golang",
  "GCP",
  "Serverless Architecture",
  "Postgres",
  "MongoDB",
  "Langchain",
  "Langgraph",
  "Websockets",
  "Docker",
  "Zustand",
  "Jotai",
  "React Native",
  "FastAPI",
  "Firebase",
  "AWS",
  "Vercel",
  "Netlify",
  "Expo",
  "Git",
  "Github",
  "Postman",
  "Bruno",
  "Cursor",
  "OpenCode",
  "Codex",
]

export const description = "Passionate engineer from India. Loves to work with web and games. Enthusiastic about volleyball, emulation, mechanical keyboards, chess and rubik's cubes."



