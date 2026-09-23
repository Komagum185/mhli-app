import { Link } from "react-router-dom";
import { LogoMark } from "./logo-mark";
import { navLinks } from "../lib/content";
import { site } from "../lib/site";
import { accent, ink } from "../lib/utils";
const linkClass =
  "inline-block py-1.5 text-stone-dim underline-offset-4 transition-colors hover:text-clay-soft hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-soft sm:py-2";
const columnHeading = "text-sm font-medium text-clay-soft";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative pt-10 pb-5 text-cream-dim sm:pt-16 sm:pb-8"
      style={{ backgroundColor: `${ink[900]}F2`, borderColor: `${ink[300]}26` }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.75 bg-clay"
      />

      <div className="wrap grid grid-cols-2 items-start gap-x-6 gap-y-8 pb-8 sm:gap-x-8 sm:gap-y-10 sm:pb-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-1">
          <Link
            to="/"
            aria-label={`${site.name}, home`}
            className={`flex min-w-0 items-center gap-3 text-white ${focusRing}`}
            style={{ outlineColor: accent }}
          >
            <span style={{ color: accent }}>
              <LogoMark className="h-8 w-8 shrink-0" />
            </span>
            <span className="font-heading text-sm leading-tight font-semibold sm:text-base">
              {site.name}
              <span className="mt-0.5 hidden text-xs font-normal sm:block" style={{ color: ink[200] }}>
                Kitswamba, Uganda
              </span>
            </span>
          </Link>
          <address className="mt-5 max-w-sm text-sm leading-relaxed not-italic">
            <span className="block">{site.address.line1}</span>
            <span className="block">{site.address.line2}</span>
            <span className="block">{site.address.line3}</span>
          </address>
        </div>

        <div className="min-w-0">
          <h2 id="footer-contact-heading" className={columnHeading}>
            Get in touch
          </h2>
          <ul aria-labelledby="footer-contact-heading" className="mt-1 text-sm sm:mt-2">
            <li>
              <a href={`mailto:${site.email}`} className={`${linkClass} wrap-break-word`}>
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone}`} className={linkClass}>
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
          <ul className="mt-3 flex flex-wrap gap-x-4 text-sm sm:mt-4 sm:gap-x-6">
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Instagram
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Facebook
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>

        <nav aria-labelledby="footer-nav-heading" className="min-w-0">
          <h2 id="footer-nav-heading" className={columnHeading}>
            Organization
          </h2>
          <ul className="mt-1 text-sm sm:mt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="wrap">
        <div className="flex flex-col gap-2 border-t border-stone pt-4 text-xs leading-relaxed sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pt-6">
          <p className="max-w-xl">
            &copy; {year} {site.shortName}. Registered CBO No.{" "}
            {site.registration}, Kitswamba Town Council
          </p>
          <p className="hidden max-w-md text-right sm:block">
            Strengthening health systems and resilience in hard-to-reach
            communities
          </p>
        </div>
      </div>
    </footer>
  );
}