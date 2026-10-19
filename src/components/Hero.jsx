import { motion } from "framer-motion";
import { site } from "../data/siteData";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[min(900px,100svh)] items-end overflow-hidden bg-ink">
      <motion.img src={site.heroImage} alt="Charan speaking at an event" fetchpriority="high" width="1154" height="768"
        className="absolute inset-0 h-full w-full object-cover object-[58%_35%] brightness-[0.72] contrast-[1.14]" initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 1.8, ease: "easeOut" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-ink/10" />
      <div className="container-x relative w-full pb-16 pt-40 sm:pb-24">
        <div className="w-full md:w-[54%]">
          <motion.p className="mb-5 text-xs uppercase tracking-[0.28em] text-white/85 sm:text-sm" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Freelance <span className="mx-2 text-tungsten">·</span> Photography <span className="mx-2 text-tungsten">·</span> Film
          </motion.p>
          <h1 className="h-display text-[clamp(3rem,7vw,6.4rem)] text-white" aria-label="Every frame, a feeling.">
            <span className="block overflow-hidden"><motion.span className="block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>Every frame,</motion.span></span>
            <span className="block overflow-hidden"><motion.span className="block text-tungsten" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}>a feeling.</motion.span></span>
          </h1>
          <motion.p className="mt-6 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
            Photography, videography and editing — made with an eye for the moments, colors and details that stay with you.
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}>
            <a href="#work" className="btn btn-solid">Explore the work <span aria-hidden="true">↓</span></a>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="btn border border-white/40 text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10">Instagram ↗</a>
          </motion.div>
        </div>
      </div>

      <a href="#work" aria-label="Scroll to selected work" className="absolute bottom-8 left-8 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/70 sm:flex">
        Scroll to explore
        <span className="relative block h-12 w-px overflow-hidden bg-bone/30">
          <motion.span className="absolute inset-x-0 top-0 h-4 bg-bone" animate={{ y: [-16, 48] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
        </span>
      </a>
    </section>
  );
}
