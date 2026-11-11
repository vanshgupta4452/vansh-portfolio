import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", id: "projects" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-foreground/10 bg-background/90 backdrop-blur-md">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 text-left" aria-label="Vansh Gupta, back to top">
          <span className="serif text-2xl font-bold leading-none">VG<span className="text-primary">.</span></span>
          <span className="hidden border-l border-foreground/20 pl-3 text-xs leading-tight text-muted-foreground sm:block">AI systems &<br />robotics</span>
        </button>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => <button key={link.id} onClick={() => go(link.id)} className="text-sm text-muted-foreground transition-colors hover:text-primary">{link.label}</button>)}
          <a href="mailto:vansh4452@gmail.com" className="red-sweep rounded-full bg-primary px-5 py-2.5 text-sm text-white transition-colors">Say hello <span aria-hidden="true">↗</span></a>
        </div>
        <button className="rounded-md p-2 md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {mobileOpen && <div className="border-t border-foreground/10 bg-background px-6 py-4 md:hidden">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4">
          {navLinks.map((link) => <button key={link.id} onClick={() => go(link.id)} className="text-sm text-muted-foreground">{link.label}</button>)}
          <a href="mailto:vansh4452@gmail.com" className="text-sm text-primary">Say hello ↗</a>
        </div>
      </div>}
    </header>
  );
};

export default Navbar;
