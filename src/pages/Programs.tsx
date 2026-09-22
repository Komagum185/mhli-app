// import { Link } from "react-router";
// import { Breadcrumbs } from "../components/page-nav";
// import { programs } from "../lib/content";
// import { usePageMeta } from "../lib/metadata";

// export function Programs() {
//   usePageMeta({
//     title: "Programs",
//     description:
//       "Current MHLI programs: community NCD screening and follow-up around Kitswamba, and the Sickle-Safe Schools Project at concept stage.",
//     path: "/programs",
//   });

//   return (
//     <main id="main">
//       <section className="bg-forest-deep py-12 text-cream sm:py-16">
//         <div className="wrap">
//           <Breadcrumbs items={[{ label: "Programs" }]} />
//           <h1 className="mt-5 max-w-3xl font-heading text-4xl leading-tight font-medium sm:text-5xl">
//             Programs that bring care closer to home.
//           </h1>
//           <p className="mt-4 max-w-prose text-lg leading-relaxed text-cream/85">
//             Our current programs, from work already underway to projects still
//             at the concept stage.
//           </p>
//         </div>
//       </section>

//       <section className="py-12 sm:py-20">
//         <div className="wrap">
//           <ul className="grid gap-x-12 gap-y-14 lg:grid-cols-2">
//             {programs.map((program) => (
//               <li
//                 key={program.slug}
//                 className="relative border-t border-line pt-8"
//               >
//                 <div className="relative aspect-4/3 overflow-hidden">
//                   <img
//                     src={program.image}
//                     alt={program.imageAlt}
//                     loading="lazy"
//                     decoding="async"
//                     className="absolute inset-0 h-full w-full object-cover"
//                   />
//                 </div>

//                 <p className="mt-5 text-sm font-medium text-forest">
//                   {program.status}
//                 </p>

//                 <h2 className="mt-2 font-heading text-2xl font-medium text-forest-deep">
//                   <Link
//                     to={`/programs/${program.slug}`}
//                     className="after:absolute after:inset-0 focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-clay"
//                   >
//                     {program.title}
//                   </Link>
//                 </h2>

//                 <p className="mt-3 max-w-prose text-ink-soft">
//                   {program.summary}
//                 </p>

//                 <span
//                   aria-hidden="true"
//                   className="mt-4 inline-block font-semibold text-forest underline decoration-clay decoration-2 underline-offset-4"
//                 >
//                   Program details
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>
//     </main>
//   );
// }


import { Link } from "react-router";
import { Breadcrumbs } from "../components/page-nav";
import { programs } from "../lib/content";
import { usePageMeta } from "../lib/metadata";
import { PageHero, ParallaxFrame, Reveal } from "../components/motion-ui";
import { accent, ink, sectionSpacing } from "../lib/utils";

export function Programs() {
  usePageMeta({
    title: "Programs",
    description:
      "Current MHLI programs: community NCD screening and follow-up around Kitswamba, and the Sickle-Safe Schools Project at concept stage.",
    path: "/programs",
  });

  return (
    <main id="main">
      <PageHero
        eyebrow={<Breadcrumbs items={[{ label: "Programs" }]} />}
        title="Programs that bring care closer to home."
        lead="Our current programs, from work already underway to projects still at the concept stage."
      />

      <section className={sectionSpacing} style={{ backgroundColor: ink[50] }}>
        <div className="wrap">
          <ul className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            {programs.map((program) => (
              <Reveal key={program.slug}>
                <li className="group relative h-full overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_50px_rgba(10,23,18,0.07)] transition-transform duration-300 hover:-translate-y-1">
                  <Link
                    to={`/programs/${program.slug}`}
                    className="focus-visible:outline-2 focus-visible:outline-offset-4"
                    style={{ outlineColor: accent }}
                  >
                    <ParallaxFrame
                      src={program.image}
                      alt={program.imageAlt}
                      className="aspect-4/3 shadow-none"
                    />
                  </Link>

                  <div className="p-7 sm:p-8">
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium"
                      style={{ backgroundColor: `${ink[700]}14`, color: ink[700] }}
                    >
                      {program.status}
                    </span>

                    <h2 className="mt-4 text-2xl font-semibold" style={{ color: ink[800] }}>
                      <Link
                        to={`/programs/${program.slug}`}
                        className="after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-offset-4"
                        style={{ outlineColor: accent }}
                      >
                        {program.title}
                      </Link>
                    </h2>

                    <p className="mt-3 leading-relaxed" style={{ color: ink[700] }}>
                      {program.summary}
                    </p>

                    <span
                      aria-hidden="true"
                      className="mt-5 inline-flex items-center gap-2 font-semibold"
                      style={{ color: ink[700] }}
                    >
                      Program details
                      <span
                        className="flex h-5 w-5 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:translate-x-0.5"
                        style={{ backgroundColor: accent }}
                      >
                        →
                      </span>
                    </span>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}