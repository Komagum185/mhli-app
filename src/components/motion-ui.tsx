import { useRef, type ReactNode } from "react";
import { Link } from "react-router";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import { accent, ink, revealVariants } from "../lib/utils";

// This file exports components only (no plain constants) so that Vite/React
// Fast Refresh can hot-reload it correctly. Palette, spacing, and other
// shared constants live in ./design-tokens instead.

export function Reveal({
    children,
    className = "",
    variants = revealVariants,
}: {
    children: ReactNode;
    className?: string;
    variants?: Variants;
}) {
    const prefersReducedMotion = useReducedMotion();
    return (
    <motion.div
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={variants}
        className={className}
    >
        {children}
    </motion.div>
    );
}

/** A heading with its underline drawn in on scroll, once, instead of a
 * static rule — the one typographic flourish reused on every page. */
export function DrawnHeading({
    id,
    className,
    light = false,
    children,
}: {
    id?: string;
    className?: string;
    light?: boolean;
    children: ReactNode;
}) {
    const prefersReducedMotion = useReducedMotion();
    return (
    <div>
        <h2 id={id} className={className}>
        {children}
        </h2>
        <motion.svg
        viewBox="0 0 120 6"
        className="mt-3 h-1.5 w-24"
        preserveAspectRatio="none"
        aria-hidden="true"
        >
        <motion.path
            d="M2 3 H118"
            stroke={light ? "white" : accent}
            strokeOpacity={light ? 0.85 : 1}
            strokeWidth="3"
            strokeLinecap="round"
            initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />
        </motion.svg>
    </div>
    );
}

export function TextLink({
    to,
    children,
    className = "",
    light = false,
    }: {
    to: string;
    children: ReactNode;
    className?: string;
    light?: boolean;
    }) {
    return (
        <Link
        to={to}
        className={`group inline-flex items-center gap-2 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${
            light
            ? "text-white hover:text-[#D6E6DC]"
            : "text-[#28543F] hover:text-[#1B3D2F]"
        } ${className}`}
        style={{ outlineColor: accent }}
        >
        {children}
        <span
            className="flex h-5 w-5 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:translate-x-0.5"
            style={{ backgroundColor: accent }}
        >
            →
        </span>
        </Link>
    );
}

export function PrimaryButton({
    to,
    children,
    onDark = false,
    }: {
    to: string;
    children: ReactNode;
    onDark?: boolean;
    }) {
    return (
        <Link
        to={to}
        className="group inline-flex h-12 items-center justify-center gap-3 px-6 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(10,23,18,0.25)] transition-all duration-300 hover:-translate-y-0.5"
        style={{ backgroundColor: onDark ? accent : ink[800] }}
        >
        {children}
        <span
            className="flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5"
            style={{
            backgroundColor: onDark ? "white" : accent,
            color: onDark ? accent : "white",
            }}
        >
            →
        </span>
        </Link>
    );
}

export function SecondaryButton({ to, children }: { to: string; children: ReactNode }) {
    return (
        <Link
        to={to}
        className="inline-flex h-12 items-center justify-center rounded-full border px-6 text-sm font-semibold transition-colors duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4"
        style={{ borderColor: `${ink[300]}80`, color: ink[100] }}
        >
        {children}
        </Link>
    );
}

export function ParallaxFrame({
    src,
    alt,
    className = "",
    }: {
    src: string;
    alt: string;
    className?: string;
    }) {
    const ref = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["-8%", "8%"]);

    return (
        <div
        ref={ref}
        className={`relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(10,23,18,0.18)] ${className}`}
        >
        <motion.img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            style={{ y }}
            className="absolute inset-0 h-[120%] w-full translate-y-[10%] object-cover"
        />
        </div>
    );
}

export function Marquee({ items }: { items: readonly string[] }) {
  const prefersReducedMotion = useReducedMotion();
  const loop = [...items, ...items];
 
  if (prefersReducedMotion) {
    return (
      <ul className="flex flex-wrap items-center justify-center gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full px-5 py-2 text-sm font-medium"
            style={{ backgroundColor: ink[100], color: ink[700] }}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

    return (
        <div className="overflow-hidden [mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]`tailwindcss(suggestCanonicalClasses)]]">
        <motion.div
            className="flex w-max items-center gap-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
            {loop.map((item, i) => (
            <span
                key={`${item}-${i}`}
                className="whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium"
                style={{ backgroundColor: ink[100], color: ink[700] }}
            >
                {item}
            </span>
            ))}
        </motion.div>
        </div>
    );
}

export function PageHero({
    eyebrow,
    title,
    lead,
    children,
}: {
    eyebrow?: ReactNode;
    title: ReactNode;
    lead?: ReactNode;
    children?: ReactNode;
}) {
    return (
    <section className="relative isolate overflow-hidden" style={{ backgroundColor: ink[900] }}>
        <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: `${ink[500]}26` }}
        />
        <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: `${accent}1F` }}
        />
        <div className="wrap relative py-16 sm:py-24">
        {eyebrow}
        <Reveal>
            <h1 className="mt-2 max-w-3xl text-4xl font-semibold tracking-[-0.02em] text-stone sm:text-5xl sm:leading-[1.1]">
            {title}
            </h1>
            {lead ? (
            <p className="mt-5 max-w-prose text-lg leading-relaxed" style={{ color: ink[200] }}>
                {lead}
            </p>
            ) : null}
            {children}
        </Reveal>
        </div>
    </section>
    );
}