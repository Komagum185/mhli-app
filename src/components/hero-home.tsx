// import { Link } from "react-router-dom"
// import {
//   motion,
//   useReducedMotion,
//   type Variants,
// } from "motion/react";
// import { site } from "../lib/site";
// import { HeartbeatVisual } from "./heartbeat-visual";

// const containerVariants: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.15,
//     },
//   },
// };

// const itemVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 28,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 120,
//       damping: 18,
//     },
//   },
// };

// const visualVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 45,
//     scale: 0.94,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 90,
//       damping: 18,
//       delay: 0.2,
//     },
//   },
// };

// export function HomeHero() {
//   const prefersReducedMotion = useReducedMotion();

//   const animationProps = prefersReducedMotion
//     ? {
//         initial: false,
//         animate: "visible",
//       }
//     : {
//         initial: "hidden",
//         animate: "visible",
//       };

//   return (
//     <section className="relative isolate overflow-hidden bg-cream">
//       {/* Background atmosphere */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 -z-10"
//       >
//         <div className="absolute left-1/2 top-80 h-168 w-2xl -translate-x-1/2 rounded-full bg-gold-soft/15 blur-3xl" />

//         <div className="absolute -right-40 top-32 h-80 w-80 rounded-full bg-sage/15 blur-3xl" />

//         <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-forest/10 blur-3xl" />

//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,77,58,0.035)_1px,transparent_1px)] [bg-size:28px_28px]" />
//       </div>

//       <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
//         {/* LEFT */}
//         <motion.div
//           {...animationProps}
//           variants={containerVariants}
//           className="relative z-10 max-w-2xl"
//         >
//           {/* Eyebrow */}
//           <motion.div variants={itemVariants}>
//             <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-forest/10 bg-stone px-3 py-1.5 shadow-sm backdrop-blur">
//               <span className="flex h-6 w-6 items-center justify-center rounded-full bg-forest text-[8px] font-bold text-cream">
//                 MHLI
//               </span>

//               <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-forest">
//                  Care shouldn&apos;t stop where the road does!
//               </span>
//             </div>
//           </motion.div>

//           {/* Main heading */}
//           <motion.div variants={itemVariants}>
//             <h1 className="max-w-2xl text-balance text-2xl font-semibold leading-[0.95] tracking-[-0.045em] text-cream sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
//              Live Healthy
//               <br />

//               <span className="relative inline-block">
//                 Long
//                 <span className="relative ml-3 inline-block text-clay">
//                   strong life.
//                   <svg
//                     aria-hidden="true"
//                     className="absolute -bottom-3 left-0 h-3 w-full overflow-visible"
//                     viewBox="0 0 240 12"
//                     fill="none"
//                     preserveAspectRatio="none"
//                   >
//                     <path
//                       d="M2 8.5C52 2 133 2 238 7"
//                       stroke="currentColor"
//                       strokeWidth="2.5"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                 </span>
//               </span>
//             </h1>
//           </motion.div>

//           {/* Description */}
//           <motion.p
//             variants={itemVariants}
//             className="mt-8 max-w-xl text-lg leading-8 text-ink-soft sm:text-xl"
//           >
//             A grassroot community based organisation registered under No.{site.registration}
//           </motion.p>

//           {/* Actions */}
//           <motion.div
//             variants={itemVariants}
//             className="mt-9 flex flex-col gap-3 sm:flex-row"
//           >
//             <Link
//               to="/contact"
//               className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-forest px-6 text-sm font-semibold text-cream shadow-[0_10px_30px_rgba(14,50,38,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-deep hover:shadow-[0_14px_35px_rgba(14,50,38,0.22)]"
//             >Partner with us

//               <span className="flex h-6 w-6 items-center justify-center rounded-full bg-clay text-forest transition-transform duration-300 group-hover:translate-x-0.5">
//                 →
//               </span>
//             </Link>

//             <Link
//               to="/Programs"
//               className="inline-flex h-12 items-center justify-center rounded-full border border-forest/15 bg-stone px-6 text-sm font-semibold text-forest transition-all duration-300 hover:border-forest/30 hover:bg-white"
//             >
//               See our programs
//             </Link>
//           </motion.div>

//           <motion.div
//             variants={itemVariants}
//             className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-ink-soft"
//           >
//             <span className="flex items-center gap-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-clay" />
//               Community Health System
//             </span>

//             <span className="flex items-center gap-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-sage" />
//               Livelihood & Resilience
//             </span>

//             <span className="flex items-center gap-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-forest" />
//               Research & Innovation
//             </span>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           initial={prefersReducedMotion ? false : "hidden"}
//           animate="visible"
//           variants={visualVariants}
//           className="relative mx-auto w-full max-w-150 lg:ml-auto"
// >
//           <HeartbeatVisual />
//         </motion.div>
//       </div>

//       {/* Bottom transition */}
//       <div className="relative h-16 overflow-hidden">
//         <div className="absolute bottom-0 left-1/2 h-32 w-[120%] -translate-x-1/2 translate-y-24 rounded-[50%] bg-forest" />
//       </div>
//     </section>
//   );
// }


import { Link } from "react-router-dom"
import {
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { site } from "../lib/site";
import { HeartbeatVisual } from "./heartbeat-visual";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

const visualVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
      delay: 0.2,
    },
  },
};

export function HomeHero() {
  const prefersReducedMotion = useReducedMotion();

  const animationProps = prefersReducedMotion
    ? {
        initial: false,
        animate: "visible",
      }
    : {
        initial: "hidden",
        animate: "visible",
      };

  return (
    <section className="relative isolate overflow-hidden bg-cream">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-80 h-168 w-2xl -translate-x-1/2 rounded-full bg-gold-soft/15 blur-3xl" />

        <div className="absolute -right-40 top-32 h-80 w-80 rounded-full bg-sage/15 blur-3xl" />

        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-forest/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,77,58,0.035)_1px,transparent_1px)] [bg-size:28px_28px]" />
      </div>

      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        {/* LEFT */}
        <motion.div
          {...animationProps}
          variants={containerVariants}
          className="relative z-10 max-w-2xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants}>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-forest/10 bg-stone px-3 py-1.5 shadow-sm backdrop-blur">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-forest text-[8px] font-bold text-cream">
                MHLI
              </span>

              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-forest">
                Rwenzori Mountains, Uganda
              </span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="max-w-2xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-forest-deep sm:text-6xl lg:text-7xl xl:text-[5rem]">
              Care shouldn&apos;t stop
              <br />
              where the{" "}
              <span className="relative inline-block text-clay">
                road
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-3 left-0 h-3 w-full overflow-visible"
                  viewBox="0 0 240 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8.5C52 2 133 2 238 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              does.
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-xl text-lg leading-8 text-ink-soft sm:text-xl"
          >
            A grassroots community organisation bringing healthcare, research,
            and livelihood support to hard-to-reach mountain communities in
            the Rwenzori region. Registered under No. {site.registration}.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              to="/contact"
              className="group inline-flex h-16 items-center justify-center gap-3 bg-forest px-6 text-lg font-semibold text-cream shadow-[0_10px_30px_rgba(14,50,38,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-deep hover:shadow-[0_14px_35px_rgba(14,50,38,0.22)]"
            >Partner with us

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-clay text-forest transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>

            <Link
              to="/programs"
              className="inline-flex h-16 items-center justify-center  border border-forest/15 bg-stone px-6 text-lg font-semibold text-forest transition-all duration-300 hover:border-forest/30 hover:bg-cream"
            >
              See our programs
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-ink-soft"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-clay" />
              Community Health System
            </span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              Livelihood & Resilience
            </span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-forest" />
              Research & Innovation
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          variants={visualVariants}
          className="relative mx-auto w-full max-w-150 lg:ml-auto"  >

          <HeartbeatVisual />
        </motion.div>
      </div>
    </section>
  );
}