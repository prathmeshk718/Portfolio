// Contact: a plain form that opens the visitor's email app with the message
// filled in (a mailto: link). This needs no server, which keeps the project
// runnable anywhere. Swap in a service like Formspree later if you want.
import { useState } from "react";
import { profile } from "../data.js";

export default function Contact() {
  // One state object holds all three fields; each input updates its own key.
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading
    const subject = encodeURIComponent(`Project enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  // Shared input styling so the three fields stay identical
  const field =
    "mt-1 w-full rounded border border-ink/30 bg-white px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt";

  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-16 px-6 py-16">
      <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
        Have a project in mind?
      </h2>
      <p className="mt-4 max-w-lg text-lg text-soft">
        Tell me what you're building and when you need it. I reply within two working days.
      </p>

      <div className="mt-10 grid gap-12 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Every input has a visible <label> linked by htmlFor/id for accessibility */}
          <div>
            <label htmlFor="name" className="text-sm font-medium">Your name</label>
            <input id="name" required value={form.name} onChange={update("name")} className={field} />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">Your email</label>
            <input id="email" type="email" required value={form.email} onChange={update("email")} className={field} />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium">What do you need?</label>
            <textarea id="message" rows="5" required value={form.message} onChange={update("message")} className={field} />
          </div>
          <button
            type="submit"
            className="rounded-full bg-ink px-6 py-3 font-medium text-mist transition-colors hover:bg-cobalt focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
          >
            Send message
          </button>
        </form>

        <div className="space-y-3">
          <p className="text-soft">Prefer to write directly?</p>
          <a
            href={`mailto:${profile.email}`}
            className="font-display text-2xl font-bold underline decoration-signal decoration-4 underline-offset-4 hover:text-cobalt focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
          >
            {profile.email}
          </a>
          <ul className="flex gap-5 pt-4">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-cobalt focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
