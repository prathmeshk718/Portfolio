// The first thing visitors see: one big statement, a short intro, two actions.
// The headline is the "design" here, so it is set very large in the display font.
import { profile } from "../data.js";

export default function Hero() {
  // Helper so each line can start slightly later than the previous one.
  // This is the page's single load animation (".rise" is defined in index.css).
  const delay = (ms) => ({ animationDelay: `${ms}ms` });

  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-20 sm:pt-28">
      {/* Availability note with the page's one yellow highlight */}
      <p className="rise inline-block bg-signal px-3 py-1 text-sm font-medium" style={delay(0)}>
        {profile.availability}
      </p>

      <h1
        className="rise mt-8 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl"
        style={delay(120)}
      >
        {profile.headline}
      </h1>

      {/* max-w-xl keeps the line length comfortable (under ~70 characters) */}
      <p className="rise mt-8 max-w-xl text-lg text-soft" style={delay(240)}>
        {profile.intro}
      </p>

      <div className="rise mt-10 flex flex-wrap gap-4" style={delay(360)}>
        <a
          href="#work"
          className="rounded-full bg-ink px-6 py-3 font-medium text-mist transition-colors hover:bg-cobalt focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
        >
          See my work
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-ink px-6 py-3 font-medium transition-colors hover:border-cobalt hover:text-cobalt focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
        >
          Email me
        </a>
      </div>
    </section>
  );
}
