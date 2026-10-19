import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, ArrowLeft, ArrowRight, Instagram, X } from "lucide-react";
import { site, works } from "../data/siteData";
import Reveal from "./Reveal";

export default function Portfolio() {
  const [selected, setSelected] = useState(null);
  const close = () => setSelected(null);
  const showNext = (step) => setSelected((current) => (current + step + works.length) % works.length);

  useEffect(() => {
    if (selected === null) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") showNext(1);
      if (event.key === "ArrowLeft") showNext(-1);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="work" className="section-pad border-t border-line">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4">Selected photographs</p>
            <Reveal as="h2" className="h-display text-5xl sm:text-7xl">A view of the world.</Reveal>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ash">Moments in motion, festival color, quiet places and the details that caught my eye.</p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12 lg:grid-flow-dense">
          {works.map((work, index) => (
            <motion.li key={work.id} className={`min-w-0 ${work.layout === "feature" ? "sm:col-span-2 lg:col-span-8" : work.layout === "wide" ? "sm:col-span-2 lg:col-span-6" : "sm:col-span-1 lg:col-span-4"}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}>
              <button type="button" onClick={() => setSelected(index)} className="photo-card group relative block w-full overflow-hidden bg-panel text-left" aria-label={`View ${work.title}, ${work.category}`}>
                <img src={work.src} alt={work.title} loading="lazy" decoding="async" width={work.width} height={work.height} className={`block h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.035] ${work.layout === "feature" ? "aspect-[4/3] lg:aspect-[16/10]" : work.layout === "wide" ? "aspect-[4/3] lg:aspect-[16/10]" : work.layout === "portrait" ? "aspect-[2/3]" : "aspect-[4/3] lg:aspect-[4/5]"}`} />
                <span className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between bg-gradient-to-t from-black/80 via-black/35 to-transparent p-4 pt-16 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <span>
                    <span className="block font-display text-2xl text-white">{work.title}</span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-white/70">{work.category}</span>
                  </span>
                  <ArrowDownRight className="mb-1 text-white" size={20} aria-hidden="true" />
                </span>
              </button>
            </motion.li>
          ))}
        </ul>

        <div className="mt-16 grid gap-6 border-t border-line pt-8 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="font-display text-3xl sm:text-4xl">More stories &amp; official event coverage.</p>
            <p className="mt-2 text-sm text-ash">Follow my latest work or explore campus events, seminars and meetings on VIIT’s official page.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={site.instagram} target="_blank" rel="noreferrer" className="btn btn-solid w-fit">
              <Instagram size={18} /> My work
            </a>
            <a href={site.collegeInstagram} target="_blank" rel="noreferrer" className="btn btn-ghost w-fit">
              <Instagram size={18} /> VIIT official page
            </a>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {selected !== null && (
          <motion.div role="dialog" aria-modal="true" aria-label={works[selected].title} className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close}>
            <button type="button" onClick={close} aria-label="Close photo" className="absolute right-4 top-4 z-10 p-3 text-white/80 transition hover:text-white"><X size={25} /></button>
            <button type="button" onClick={(event) => { event.stopPropagation(); showNext(-1); }} aria-label="Previous photo" className="absolute left-1 top-1/2 z-10 -translate-y-1/2 p-2 text-white/75 transition hover:text-white sm:left-5"><ArrowLeft size={28} /></button>
            <figure className="flex max-h-full max-w-6xl flex-col items-center" onClick={(event) => event.stopPropagation()}>
              <img src={works[selected].src} alt={works[selected].title} className="max-h-[78vh] max-w-full object-contain" />
              <figcaption className="mt-4 flex w-full max-w-4xl items-end justify-between gap-4 text-white">
                <span><span className="block font-display text-2xl">{works[selected].title}</span><span className="mt-1 block text-xs uppercase tracking-[0.18em] text-white/60">{works[selected].category}</span></span>
                <span className="text-sm text-white/60">{selected + 1} / {works.length}</span>
              </figcaption>
            </figure>
            <button type="button" onClick={(event) => { event.stopPropagation(); showNext(1); }} aria-label="Next photo" className="absolute right-1 top-1/2 z-10 -translate-y-1/2 p-2 text-white/75 transition hover:text-white sm:right-5"><ArrowRight size={28} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
