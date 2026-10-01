// Sticky top bar: name on the left, three section links on the right.
// Links are plain #anchors; CSS `scroll-behavior: smooth` animates the jump.
import { profile } from "../data.js";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    // backdrop-blur + translucent background keeps text readable while scrolling
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-mist/85 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
      >
        <a href="#top" className="font-display text-lg font-bold">
          {profile.name}
        </a>
        <ul className="flex gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="underline-offset-4 hover:text-cobalt hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
