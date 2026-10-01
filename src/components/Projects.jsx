// The Work section: projects as large type rows. Clicking a row expands it.
// Only ONE row is open at a time, tracked by `openId` in React state.
import { useState } from "react";
import { projects } from "../data.js";

function ProjectRow({ project, isOpen, onToggle }) {
  const panelId = `panel-${project.id}`;

  return (
    <li className="border-b border-ink/15">
      {/* The whole title is a <button> so it works with keyboard and screen readers.
          aria-expanded tells assistive tech whether the panel is open. */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="group flex w-full items-baseline justify-between gap-6 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
      >
        <span
          className={`font-display text-4xl font-bold tracking-tight transition-colors group-hover:text-cobalt sm:text-6xl ${
            isOpen ? "text-cobalt" : ""
          }`}
        >
          {project.title}
        </span>
        <span className="shrink-0 text-sm text-soft">{project.year}</span>
      </button>

      {/* Smooth expand trick: animate grid rows between 0fr (closed) and 1fr (open).
          This animates to the content's natural height, so no fixed heights needed.
          `inert` removes the closed panel from tab order and screen readers. */}
      <div
        id={panelId}
        inert={!isOpen}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-6 pb-8 sm:grid-cols-[1fr_2fr]">
            <dl className="text-sm">
              <dt className="text-soft">Role</dt>
              <dd className="mb-3 font-medium">{project.role}</dd>
              <dt className="text-soft">Built with</dt>
              <dd className="font-medium">{project.stack.join(", ")}</dd>
            </dl>
            <div>
              <p className="max-w-xl text-lg">{project.summary}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block font-medium text-cobalt underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
              >
                View the code on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Projects() {
  // null = everything closed. Start with the first project open so the
  // section never looks like a bare list of titles.
  const [openId, setOpenId] = useState(projects[0].id);

  // Clicking the open row closes it; clicking another row switches to it.
  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    // scroll-mt-16 stops the sticky navbar from covering the heading after a jump
    <section id="work" className="mx-auto max-w-5xl scroll-mt-16 px-6 py-16">
      <h2 className="mb-6 font-display text-2xl font-bold">Selected work</h2>
      <ul className="border-t border-ink/15">
        {projects.map((p) => (
          <ProjectRow
            key={p.id}
            project={p}
            isOpen={openId === p.id}
            onToggle={() => toggle(p.id)}
          />
        ))}
      </ul>
    </section>
  );
}
