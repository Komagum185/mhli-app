import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

import type { Variants } from "motion/react";

export const ink = {
  950: "#0A1712",
  900: "#122A21",
  800: "#1B3D2F",
  700: "#28543F",
  600: "#356D53",
  500: "#4C8A6B",
  400: "#7CAB92",
  300: "#AFCCBC",
  200: "#D6E6DC",
  100: "#EAF2ED",
  50: "#F6FAF8",
};
export const accent = "#C97A3B";

export const sectionSpacing = "py-20 sm:py-28";
export const sectionHeading =
  "text-3xl font-semibold tracking-[-0.02em] text-[#1B3D2F] sm:text-[2.5rem] sm:leading-[1.15]";
export const coverImage = "absolute inset-0 h-full w-full object-cover";

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 110, damping: 20 },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};