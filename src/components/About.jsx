// About: short story on the left, skills on the right.
// Skills use a <dl> (term + description list), which is the semantic fit
// for "group name -> items" pairs.
import { skills } from "../data.js";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-16 px-6 py-16">
      <h2 className="mb-8 font-display text-2xl font-bold">About</h2>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="max-w-md space-y-4 text-lg">
          <p>
            I started out building websites for local shops and learned that the best
            interface is the one people don't have to think about.
          </p>
          <p>
            Now I join small teams for a few months at a time, ship something real, and
            leave behind documentation and tests so the project keeps moving without me.
          </p>
        </div>

        <dl className="space-y-5">
          {skills.map((s) => (
            <div key={s.group} className="border-t border-ink/15 pt-3">
              <dt className="font-display font-bold">{s.group}</dt>
              <dd className="text-soft">{s.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
