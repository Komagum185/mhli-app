// import { usePageMeta } from "../lib/metadata";
// import { Gallery } from "../components/gallery";
// import { Breadcrumbs } from "../components/page-nav";


// export function GalleryPage() {

//    usePageMeta({
//       title: "Gallery",
//       description:
//         "Photographs from MHLI field work: mountain paths families walk to reach care, community NCD screening, mobile medical outreach, and school visits in Kasese District.",
//       path: "/gallery",
//     });
//   return (
//     <main id="main" className="font-body">
//       <section className="relative isolate overflow-hidden bg-forest-deep py-16 text-cream sm:py-20 lg:py-24">
//         <div className="scrim-feature -z-10" aria-hidden="true" />
//         <div className="wrap relative">
//           <Breadcrumbs items={[{ label: "Gallery" }]} />
//           <h1 className="mt-6 max-w-2xl font-heading text-4xl font-medium leading-[1.1] sm:text-5xl">
//             Community health in action
//           </h1>
//           <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-cream/85">
//             These photographs show the terrain families live in and the
//             outreach that responds to it from home-to-home screening to
//             mobile clinics and school visits. Captions describe what is in
//             the frame; they are not performance claims.
//           </p>
//         </div>
//       </section>
//       <section className="wrap border-t border-line py-16 sm:py-20 lg:py-24">
//         <Gallery />
//       </section>
//     </main>
//   );
// }




import { usePageMeta } from "../lib/metadata";
import { Gallery } from "../components/gallery";
import { Breadcrumbs } from "../components/page-nav";
import { PageHero, Reveal } from "../components/motion-ui";
import { ink, sectionSpacing } from "../lib/utils";

export function GalleryPage() {
  usePageMeta({
    title: "Gallery",
    description:
      "Photographs from MHLI field work: mountain paths families walk to reach care, community NCD screening, mobile medical outreach, and school visits in Kasese District.",
    path: "/gallery",
  });

  return (
    <main id="main" className="font-body">
      <PageHero
        eyebrow={<Breadcrumbs items={[{ label: "Gallery" }]} />}
        title="Community health in action"
        lead="These photographs show the terrain families live in and the outreach that responds to it, from home-to-home screening to mobile clinics and school visits. Captions describe what is in the frame; they are not performance claims."
      />

      <section className={sectionSpacing} style={{ backgroundColor: ink[50] }}>
        <div className="wrap">
          <Reveal>
            <Gallery />
          </Reveal>
        </div>
      </section>
    </main>
  );
}