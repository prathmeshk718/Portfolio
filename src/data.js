// ALL the portfolio content lives here. Edit this one file to make the site
// yours; components just read from it, so you never touch the layout.

export const profile = {
  name: "Prathmesh Kale",
  headline: "I build web products that stay fast and simple as they grow.",
  intro:
    "I'm a full-stack developer who works with small teams on apps people use every day. I care about clear interfaces, honest performance numbers, and code the next person can read.",
  availability: "Taking freelance projects from November",
  email: "prathmeshk718@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/prathmeshk718" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/prathmeshk718" },
  ],
};

// Each project becomes one expandable row in the Work section.
export const projects = [
  {
    id: "ledgerly",
    title: "Ledgerly",
    year: 2025,
    role: "Design and front end",
    summary:
      "An expense-splitting app for flatmates. Everyone sees who owes what, and balances settle in one tap. Load time on a mid-range phone dropped from 4.1s to 1.3s after moving to code-split routes.",
    stack: ["React", "Node", "PostgreSQL"],
    link: "https://github.com/prathmeshk718/",
  },
  {
    id: "fieldnotes",
    title: "Fieldnotes",
    year: 2024,
    role: "Full stack",
    summary:
      "A note-taking app for researchers working without a signal. Notes save on the device first and sync when the connection returns, with conflicts shown side by side instead of overwritten.",
    stack: ["React", "IndexedDB", "Express"],
    link: "https://github.com/prathmeshk718/",
  },
  {
    id: "tidewatch",
    title: "Tidewatch",
    year: 2024,
    role: "Front end",
    summary:
      "A dashboard that turns raw tide and weather feeds into a seven-day view fishing crews can read at a glance. Charts are drawn with D3 and stay usable on a small screen.",
    stack: ["React", "D3", "Tailwind CSS"],
    link: "https://github.com/prathmeshk718",
  },
  {
    id: "loom-kitchen",
    title: "Loom Kitchen",
    year: 2023,
    role: "Design and development",
    summary:
      "An ordering site for a neighbourhood restaurant. The owner updates the menu from a simple admin page, and online orders now make up about a third of weekly sales.",
    stack: ["React", "Firebase"],
    link: "https://github.com/prathmeshk718",
  },
];

// Skills are grouped by what they are used for, not by logo.
export const skills = [
  { group: "Interfaces", items: "React, TypeScript, Tailwind CSS, accessible components" },
  { group: "Back end", items: "Node.js, Express, PostgreSQL, REST APIs" },
  { group: "Quality", items: "Vitest, Playwright, Lighthouse, code review" },
  { group: "Workflow", items: "Git, GitHub Actions, Vercel, Figma handoff" },
];
