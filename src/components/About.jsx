import { aboutImage, site } from "../data/siteData";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-x grid items-center gap-10 lg:grid-cols-12">
        <Reveal className="relative lg:col-span-5">
          <div className="absolute -bottom-5 -left-5 z-0 hidden h-2/3 w-2/3 border border-tungsten/30 sm:block" />
          <img src={aboutImage.src} alt={aboutImage.alt} loading="lazy" decoding="async" width={aboutImage.width} height={aboutImage.height} className="relative z-10 aspect-[3/4] w-full object-cover" />
        </Reveal>
        <div className="lg:col-span-7 lg:pl-10">
          <p className="eyebrow mb-5">The person behind the camera</p>
          <Reveal as="h2" className="h-display text-6xl sm:text-8xl">Behind the Lens.</Reveal>
          <Reveal delay={0.1} className="max-w-2xl space-y-5 text-lg leading-relaxed text-ash">
            <p>I'm {site.name}, a freelance photographer, videographer and editor drawn to the character of a moment, the quality of light and the little details that give a frame its feeling.</p>
            <p>From still photographs to moving images and the edit that brings them together, I work with people and projects to make visual stories with atmosphere, color and a point of view.</p>
          </Reveal>
          <Reveal delay={0.2} className="mt-8">
            <a href={site.instagram} target="_blank" rel="noreferrer" className="text-sm text-bone underline decoration-tungsten underline-offset-4 hover:text-tungsten">
              Follow the work <span aria-hidden="true">↗</span> {site.instagramHandle}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
