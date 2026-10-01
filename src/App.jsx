// App.jsx stitches the page together. Order here = order on screen.
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      {/* Skip link: first Tab press lets keyboard users jump past the nav */}
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-mist"
      >
        Skip to work
      </a>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-soft">
        © {new Date().getFullYear()} Prathmesh Kale. Built with React and Tailwind CSS.
      </footer>
    </>
  );
}
