import { Instagram, Mail } from "lucide-react";
import { site } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <div className="container-x flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
        <div>
          <p className="font-display text-4xl uppercase">{site.brand}</p>
          <p className="mt-2 text-ash">{site.footerLine}</p>
        </div>
        <div>
          <ul className="flex gap-5">
            <li><a aria-label="Instagram" href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-tungsten"><Instagram /></a></li>
            <li><a aria-label={`Email ${site.email}`} href={`mailto:${site.email}`} className="hover:text-tungsten"><Mail /></a></li>
          </ul>
          <p className="mt-4 text-sm text-ash">© {new Date().getFullYear()} {site.brand}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
