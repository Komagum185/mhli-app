
// import {
//   motion,
//   useReducedMotion,
// } from "motion/react";

// export function HeartbeatVisual() {
//   const prefersReducedMotion = useReducedMotion();

//   return (
//     <div className="relative mx-auto aspect-square w-full max-w-140">
//       {/* Ambient glow */}
//       <div
//         aria-hidden="true"
//         className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-clay/85 blur-3xl"
//       />

//       {/* Main monitor */}
//       <motion.div
//         initial={
//           prefersReducedMotion
//             ? false
//             : {
//                 opacity: 0,
//                 scale: 0.92,
//                 y: 30,
//               }
//         }
//         animate={{
//           opacity: 1,
//           scale: 1,
//           y: 0,
//         }}
//         transition={{
//           duration: 0.9,
//           delay: 0.25,
//           ease: [0.16, 1, 0.3, 1],
//         }}
//         className="absolute inset-[7%] overflow-hidden rounded-[2rem] border border-stone/10 bg-forest-deep shadow-[0_30px_80px_rgba(14,50,38,0.3)]"
//       >
//         {/* Monitor grid */}
//         <div
//           aria-hidden="true"
//           className="absolute inset-0 opacity-[0.12]"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(247,243,234,0.5) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(247,243,234,0.5) 1px, transparent 1px)
//             `,
//             backgroundSize: "32px 32px",
//           }}
//         />
//         <div
//           aria-hidden="true"
//           className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(196,138,28,0.12),transparent_55%)]"
//         />
//         <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between border-b border-stone/10 px-5 py-4 sm:px-7">
//           <div className="flex items-center gap-3">
//             <motion.span
//               animate={
//                 prefersReducedMotion
//                   ? undefined
//                   : {
//                       opacity: [1, 0.35, 1],
//                       scale: [1, 0.85, 1],
//                     }
//               }
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="h-2.5 w-2.5 rounded-full bg-clay shadow-[0_0_14px_rgba(196,138,28,0.8)]"
//             />

//             <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone/60">
//               MHLI / Live
//             </span>
//           </div>

//           <span className="font-mono text-[9px] text-stone/40">
//             MONITOR 01
//           </span>
//         </div>

//         <div className="absolute inset-x-5 top-1/2 -translate-y-1/2 sm:inset-x-8">
//           <div className="relative h-32 overflow-hidden">
           
//             <svg
//               viewBox="0 0 800 180"
//               preserveAspectRatio="none"
//               className="absolute inset-0 h-full w-full opacity-30 blur-[6px]"
//               aria-hidden="true"
//             >
//               <path
//                 d="M0 90 H120 L145 90 L165 35 L190 145 L215 90 H290 L315 90 L335 65 L350 112 L365 90 H445 L470 90 L490 28 L515 150 L540 90 H640 L665 90 L685 58 L700 120 L720 90 H800"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="7"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-clay"
//               />
//             </svg>

//             <svg
//               viewBox="0 0 800 180"
//               preserveAspectRatio="none"
//               className="relative h-full w-full"
//               aria-label="Animated heartbeat waveform"
//             >
//               <motion.path
//                 d="M0 90 H120 L145 90 L165 35 L190 145 L215 90 H290 L315 90 L335 65 L350 112 L365 90 H445 L470 90 L490 28 L515 150 L540 90 H640 L665 90 L685 58 L700 120 L720 90 H800"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="3"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-clay-soft"
//                 pathLength="1"
//                 initial={{
//                   pathLength: prefersReducedMotion ? 1 : 0,
//                   opacity: prefersReducedMotion ? 1 : 0,
//                 }}
//                 animate={{
//                   pathLength: 1,
//                   opacity: 1,
//                 }}
//                 transition={{
//                   pathLength: {
//                     duration: 2,
//                     ease: "easeInOut",
//                   },
//                   opacity: {
//                     duration: 0.4,
//                   },
//                 }}
//               />
//             </svg>

//             {/* Moving scan point */}
//             {!prefersReducedMotion && (
//               <motion.div
//                 animate={{
//                   left: ["0%", "100%"],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="absolute top-1/2 h-16 w-12 -translate-y-1/2 rounded-full bg-clay/10 blur-xl"
//               />
//             )}
//           </div>
//         </div>

//         {/* Heartbeat data */}
//         <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">
//           <div>
//             <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-stone/40">
//               Heartbeat
//             </p>

//             <div className="mt-1 flex items-baseline gap-2">
//               <motion.span
//                 animate={
//                   prefersReducedMotion
//                     ? undefined
//                     : {
//                         scale: [1, 1.08, 1],
//                       }
//                 }
//                 transition={{
//                   duration: 0.9,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="origin-left font-mono text-3xl font-medium text-stone"
//               >
//                 72
//               </motion.span>

//               <span className="font-mono text-xs text-stone/45">
//                 BPM
//               </span>
//             </div>
//           </div>

//           <div className="text-right">
//             <p className="text-[9px] uppercase tracking-[0.16em] text-stone/40">
//               Status
//             </p>

//             <p className="mt-1 text-xs font-medium text-clay-soft">
//               Looking good
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       {/* Floating heart card */}
//       <motion.div
//         initial={
//           prefersReducedMotion
//             ? false
//             : {
//                 opacity: 0,
//                 x: 25,
//                 y: 15,
//               }
//         }
//         animate={
//           prefersReducedMotion
//             ? {
//                 opacity: 1,
//                 x: 0,
//                 y: 0,
//               }
//             : {
//                 opacity: 1,
//                 x: 0,
//                 y: [0, -7, 0],
//               }
//         }
//         transition={
//           prefersReducedMotion
//             ? {
//                 duration: 0.6,
//               }
//             : {
//                 opacity: {
//                   duration: 0.7,
//                   delay: 0.65,
//                 },
//                 x: {
//                   duration: 0.7,
//                   delay: 0.65,
//                 },
//                 y: {
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 },
//               }
//         }
//         className="absolute right-0 top-[14%] z-20 rounded-2xl border border-forest/10 bg-stone/95 p-4 shadow-[0_20px_50px_rgba(14,50,38,0.18)] backdrop-blur-md sm:right-[-2%]"
//       >
//         <div className="flex items-center gap-3">
//           <motion.div
//             animate={
//               prefersReducedMotion
//                 ? undefined
//                 : {
//                     scale: [1, 1.12, 1],
//                   }
//             }
//             transition={{
//               duration: 0.9,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="flex h-10 w-10 items-center justify-center rounded-xl bg-clay/15 text-lg text-clay"
//           >
//             ♥
//           </motion.div>

//           <div>
//             <p className="text-xs font-semibold text-forest">
//               Every little beat
//             </p>

//             <p className="mt-0.5 text-[10px] text-ink-soft">
//               Matters
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       {/* Floating growth card */}
//       <motion.div
//         initial={
//           prefersReducedMotion
//             ? false
//             : {
//                 opacity: 0,
//                 x: -20,
//                 y: 20,
//               }
//         }
//         animate={
//           prefersReducedMotion
//             ? {
//                 opacity: 1,
//                 x: 0,
//                 y: 0,
//               }
//             : {
//                 opacity: 1,
//                 x: 0,
//                 y: [0, 6, 0],
//               }
//         }
//         transition={
//           prefersReducedMotion
//             ? {
//                 duration: 0.6,
//                 delay: 0.2,
//               }
//             : {
//                 opacity: {
//                   duration: 0.7,
//                   delay: 0.85,
//                 },
//                 x: {
//                   duration: 0.7,
//                   delay: 0.85,
//                 },
//                 y: {
//                   duration: 4.8,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 },
//               }
//         }
//         className="absolute bottom-[12%] left-0 z-20 rounded-2xl bg-forest px-5 py-4 text-stone shadow-[0_20px_50px_rgba(14,50,38,0.25)] sm:left-[-3%]"
//       >
//         <div className="flex items-center gap-3">
//           <div className="flex h-9 w-9 items-center justify-center rounded-full border border-stone/15">
//             <span className="text-xs text-clay-soft">✦</span>
//           </div>

//           <div>
//             <p className="font-serif text-lg leading-none">
//               Growing
//             </p>

//             <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-stone/50">
//               One day at a time
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       {/* Decorative pulse rings */}
//       <motion.div
//         aria-hidden="true"
//         animate={
//           prefersReducedMotion
//             ? undefined
//             : {
//                 scale: [1, 1.08, 1],
//                 opacity: [0.3, 0.1, 0.3],
//               }
//         }
//         transition={{
//           duration: 3,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute bottom-[7%] right-[10%] h-16 w-16 rounded-full border border-gold/30"
//       />

//       <div
//         aria-hidden="true"
//         className="absolute bottom-[7%] right-[10%] h-4 w-4 translate-x-6.5 translate-y-6.5 rounded-full bg-clay shadow-[0_0_25px_rgba(196,138,28,0.5)]"
//       />
//     </div>
//   );
// }



import {
  motion,
  useReducedMotion,
} from "motion/react";

export function HeartbeatVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-140">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-clay/85 blur-3xl"
      />

      {/* Main monitor */}
      <motion.div
        initial={
          prefersReducedMotion
            ? false
            : {
                opacity: 0,
                scale: 0.92,
                y: 30,
              }
        }
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          delay: 0.25,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-[7%] overflow-hidden rounded-[2rem] border border-stone/10 bg-forest-deep shadow-[0_30px_80px_rgba(14,50,38,0.3)]"
      >
        {/* Monitor grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(247,243,234,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(247,243,234,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(196,138,28,0.12),transparent_55%)]"
        />
        <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between border-b border-stone/10 px-5 py-4 sm:px-7">
          <div className="flex items-center gap-3">
            <motion.span
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      opacity: [1, 0.35, 1],
                      scale: [1, 0.85, 1],
                    }
              }
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2.5 w-2.5 rounded-full bg-clay shadow-[0_0_14px_rgba(196,138,28,0.8)]"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone/60">
              MHLI / Live
            </span>
          </div>

          <span className="font-mono text-[9px] text-stone/40">
            MONITOR 01
          </span>
        </div>

        <div className="absolute inset-x-5 top-1/2 -translate-y-1/2 sm:inset-x-8">
          <div className="relative h-32 overflow-hidden">
           
            <svg
              viewBox="0 0 800 180"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full opacity-30 blur-[6px]"
              aria-hidden="true"
            >
              <path
                d="M0 90 H120 L145 90 L165 35 L190 145 L215 90 H290 L315 90 L335 65 L350 112 L365 90 H445 L470 90 L490 28 L515 150 L540 90 H640 L665 90 L685 58 L700 120 L720 90 H800"
                fill="none"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-clay"
              />
            </svg>

            <svg
              viewBox="0 0 800 180"
              preserveAspectRatio="none"
              className="relative h-full w-full"
              aria-label="Animated heartbeat waveform"
            >
              <motion.path
                d="M0 90 H120 L145 90 L165 35 L190 145 L215 90 H290 L315 90 L335 65 L350 112 L365 90 H445 L470 90 L490 28 L515 150 L540 90 H640 L665 90 L685 58 L700 120 L720 90 H800"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-clay-soft"
                pathLength="1"
                initial={{
                  pathLength: prefersReducedMotion ? 1 : 0,
                  opacity: prefersReducedMotion ? 1 : 0,
                }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                }}
                transition={{
                  pathLength: {
                    duration: 2,
                    ease: "easeInOut",
                  },
                  opacity: {
                    duration: 0.4,
                  },
                }}
              />
            </svg>

            {/* Moving scan point */}
            {!prefersReducedMotion && (
              <motion.div
                animate={{
                  left: ["0%", "100%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 h-16 w-12 -translate-y-1/2 rounded-full bg-clay/10 blur-xl"
              />
            )}
          </div>
        </div>

        {/* Heartbeat data */}
        <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-stone/40">
              Heartbeat
            </p>

            <div className="mt-1 flex items-baseline gap-2">
              <motion.span
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        scale: [1, 1.08, 1],
                      }
                }
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="origin-left font-mono text-3xl font-medium text-stone"
              >
                72
              </motion.span>

              <span className="font-mono text-xs text-stone/45">
                BPM
              </span>
            </div>
          </div>

          <div className="text-right">
            <p className="text-[9px] uppercase tracking-[0.16em] text-clay">
              Status
            </p>

            <p className="mt-1 text-xs font-medium text-clay">
              Looking good
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={
          prefersReducedMotion
            ? false
            : {
                opacity: 0,
                x: 25,
                y: 15,
              }
        }
        animate={
          prefersReducedMotion
            ? {
                opacity: 1,
                x: 0,
                y: 0,
              }
            : {
                opacity: 1,
                x: 0,
                y: [0, -7, 0],
              }
        }
        transition={
          prefersReducedMotion
            ? {
                duration: 0.6,
              }
            : {
                opacity: {
                  duration: 0.7,
                  delay: 0.65,
                },
                x: {
                  duration: 0.7,
                  delay: 0.65,
                },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
        }
        className="absolute right-0 top-[14%] z-20 rounded-2xl border border-forest/10 bg-stone/95 p-4 shadow-[0_20px_50px_rgba(14,50,38,0.18)] backdrop-blur-md sm:right-[-2%]"
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    scale: [1, 1.12, 1],
                  }
            }
            transition={{
              duration: 0.9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-clay/15 text-lg text-clay"
          >
            ♥
          </motion.div>

          <div>
            <p className="text-xs font-semibold text-forest">
              Every little beat
            </p>

            <p className="mt-0.5 text-[10px] text-ink-soft">
              Matters
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={
          prefersReducedMotion
            ? false
            : {
                opacity: 0,
                x: -20,
                y: 20,
              }
        }
        animate={
          prefersReducedMotion
            ? {
                opacity: 1,
                x: 0,
                y: 0,
              }
            : {
                opacity: 1,
                x: 0,
                y: [0, 6, 0],
              }
        }
        transition={
          prefersReducedMotion
            ? {
                duration: 0.6,
                delay: 0.2,
              }
            : {
                opacity: {
                  duration: 0.7,
                  delay: 0.85,
                },
                x: {
                  duration: 0.7,
                  delay: 0.85,
                },
                y: {
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
        }
        className="absolute bottom-[12%] left-0 z-20 rounded-2xl bg-forest px-5 py-4 text-stone shadow-[0_20px_50px_rgba(14,50,38,0.25)] sm:left-[-3%]"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-stone/15">
            <span className="text-xs text-clay-soft">✦</span>
          </div>

          <div>
            <p className="font-serif text-lg leading-none">
              Growing
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-stone/50">
              One day at a time
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [1, 1.08, 1],
                opacity: [0.3, 0.1, 0.3],
              }
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[7%] right-[10%] h-16 w-16 rounded-full border border-clay/30"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[7%] right-[10%] h-4 w-4 translate-x-6.5 translate-y-6.5 rounded-full bg-clay shadow-[0_0_25px_rgba(196,138,28,0.5)]"
      />
    </div>
  );
}