import { Camera, Clapperboard, SlidersHorizontal } from "lucide-react";
import { services } from "../data/siteData";
import Reveal from "./Reveal";

const icons = { Camera, Clapperboard, SlidersHorizontal };

export default function Services() {
  return (
    <section id="services" className="section-pad border-t border-line">
      <div className="container-x">
        <p className="eyebrow mb-4">From first frame to final cut</p>
        <Reveal as="h2" className="h-display max-w-3xl text-5xl sm:text-7xl">One eye. Every frame.</Reveal>
        <ul className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal as="li" key={s.title} delay={i * 0.08}>
                <div className="group relative aspect-[4/5] overflow-hidden bg-panel">
                  <img src={s.image} alt={s.imageAlt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-black/20 text-white backdrop-blur-sm"><Icon size={19} aria-hidden="true" /></span>
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <span className="eyebrow text-white/75">0{i + 1}</span>
                    <h3 className="mt-2 font-display text-4xl text-white sm:text-5xl">{s.title}</h3>
                  </div>
                </div>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-ash">{s.text}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
