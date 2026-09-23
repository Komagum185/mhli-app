
import { Link, useLocation } from "react-router-dom";
import { useEffect, useId, useRef, useState } from "react";
import { LogoMark } from "./logo-mark";
import { navLinks } from "../lib/content";
import { site } from "../lib/site";
import { PrimaryButton } from "./motion-ui";
import { accent, ink } from "../lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2";

export function Header() {
  const { pathname } = useLocation();
  const panelId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const open = openedAt === pathname;

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenedAt(null);
        buttonRef.current?.focus();
      }
    }

    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenedAt(null);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ backgroundColor: `${ink[900]}F2`, borderColor: `${ink[300]}26` }}
    >
      <div className="wrap flex items-center justify-between gap-4 py-3">
        <Link
          to="/"
          aria-label={`${site.name}, home`}
          className={`flex min-w-0 items-center gap-3 text-white ${focusRing}`}
          style={{ outlineColor: accent }}
        >
          <span style={{ color: accent }}>
            <LogoMark className="h-8 w-8 shrink-0" />
          </span>
          {/* <span className="font-heading text-sm leading-tight font-semibold sm:text-base">
            {site.name}
            <span className="mt-0.5 hidden text-xs font-normal sm:block" style={{ color: ink[200] }}>
              Kitswamba, Uganda
            </span>
          </span> */}
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center text-lg font-medium lg:flex lg:gap-5 xl:gap-8"
        >
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                to={link.href}
                aria-current={active ? "page" : undefined}
                className={`border-b border-transparent pb-0.5 whitespace-nowrap transition-colors ${focusRing}`}
                style={{
                  color: active ? "white" : ink[300],
                  borderBottomColor: active ? accent : "transparent",
                  outlineColor: accent,
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.color = ink[300];
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <PrimaryButton to="/contact" onDark>
            Support Us
          </PrimaryButton>

          <button
            ref={buttonRef}
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpenedAt(open ? null : pathname)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-white lg:hidden ${focusRing}`}
            style={{ borderColor: `${ink[300]}40`, outlineColor: accent }}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[80dvh] overflow-y-auto border-b shadow-[0_30px_60px_rgba(10,23,18,0.25)] lg:hidden"
        style={{ backgroundColor: ink[50], borderColor: ink[200] }}
      >
        <nav aria-label="Mobile" className="wrap py-2">
          <ul>
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href} className="border-b" style={{ borderColor: ink[200] }}>
                  <Link
                    to={link.href}
                    onClick={() => setOpenedAt(null)}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-12 items-center text-base ${focusRing}`}
                    style={{
                      color: active ? ink[800] : ink[700],
                      fontWeight: active ? 600 : 500,
                      outlineColor: accent,
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="my-4 sm:hidden">
            <PrimaryButton to="/contact">Support our work</PrimaryButton>
          </div>
        </nav>
      </div>
    </header>
  );
}