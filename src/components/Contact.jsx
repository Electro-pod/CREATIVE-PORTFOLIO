import { Instagram, Mail } from "lucide-react";
import { site } from "../data/siteData";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-line">
      <div className="container-x flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <Reveal as="h2" className="h-display text-5xl sm:text-7xl">Let's connect.</Reveal>
          <Reveal delay={0.1} className="mt-6 text-lg leading-relaxed text-ash">I’m available for freelance photography, videography and editing. For bookings, collaborations or project enquiries, email me or send a message on Instagram.</Reveal>
        </div>
        <div className="flex flex-col items-start gap-3 sm:items-end">
          <a href={`mailto:${site.email}?subject=${encodeURIComponent("Freelance project enquiry")}`} className="btn btn-solid">
            <Mail size={18} /> {site.email}
          </a>
          <a href={site.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-ash transition hover:text-bone">
            <Instagram size={16} /> {site.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
