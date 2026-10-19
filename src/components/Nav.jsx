import { useEffect, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import { site, nav } from "../data/siteData";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const go = () => setOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${solid || open ? "bg-ink/90 backdrop-blur border-b border-line" : "bg-transparent"}`}>
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between">
        <a href="#home" onClick={go} className="font-display text-2xl uppercase tracking-wide">{site.brand}</a>
        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <li key={n.label}>
              <a href={n.href} onClick={go} className="group relative py-1 text-sm text-bone/80 hover:text-bone">
                {n.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-bone transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href={site.instagram} target="_blank" rel="noreferrer" className="btn btn-solid hidden sm:inline-flex !py-2"><Instagram size={16} /> Instagram</a>
          <button className="p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="container-x flex flex-col pb-6 lg:hidden">
          {[...nav, { label: "Instagram ↗", href: site.instagram, external: true }].map((n) => (
            <li key={n.label}><a href={n.href} target={n.external ? "_blank" : undefined} rel={n.external ? "noreferrer" : undefined} onClick={go} className="block border-b border-line py-3 text-lg">{n.label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
