
import { usePageMeta } from "../lib/metadata";
import { Breadcrumbs } from "../components/page-nav";
import { PillarGrid } from "../components/pillar-grid";
import { leadership, partners, pillars } from "../lib/content";
import { site } from "../lib/site";
import { motion } from "motion/react";
import { sectionHeading, revealVariants, ink, sectionSpacing, accent, staggerContainer } from "../lib/utils";
import { Reveal, PageHero, DrawnHeading, PrimaryButton, Marquee } from "../components/motion-ui";
export function AboutPage() {
  usePageMeta({
    title: "About",
    description:
      "Learn about Mountain Health & Livelihood Initiative: vision, mission, leadership, and partners serving mountain communities in the Rwenzori region of Western Uganda.",
    path: "/about",
  });

  return (
    <main id="main">
      <PageHero
        eyebrow={<Breadcrumbs items={[{ label: "About" }]} />}
        title="A community-based organization rooted in Kitswamba."
        lead={
          <>
            {site.name} ({site.shortName}) is a registered Community Based
            Organization, reg. no. {site.registration}. We work in
            hard-to-reach mountain communities of the Rwenzori region,
            Western Uganda, where distance itself can become a health risk.
          </>
        }
      />

      <section aria-label="Vision and mission" className={sectionSpacing}>
        <div className="wrap">
          <Reveal
            className="relative overflow-hidden rounded-[2rem] px-6 py-14  sm:px-12 sm:py-16 lg:px-20"
            variants={revealVariants}
          >
            <div className="absolute inset-0 -z-10" style={{ backgroundColor: ink[800] }} />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
              style={{ backgroundColor: `${ink[500]}33` }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full blur-3xl"
              style={{ backgroundColor: `${accent}26` }}
            />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Vision
                </h2>
                <p className="mt-5 max-w-lg text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
                  A Rwenzori region where every mountain community, however
                  remote, has equitable access to quality healthcare, thrives
                  economically, and lives resiliently in the face of health
                  and environmental challenges.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Mission</h2>
                <p className="mt-5 max-w-lg text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
                  To strengthen health systems and build lasting resilience in
                  hard-to-reach mountain communities through community-based
                  healthcare, research and innovation, and sustainable
                  livelihood support.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="how-heading" className={sectionSpacing} style={{ backgroundColor: ink[100] }}>
        <div className="wrap">
          <Reveal className="max-w-xl">
            <DrawnHeading id="how-heading" className={sectionHeading}>
              How we work
            </DrawnHeading>
            <p className="mt-5 leading-relaxed" style={{ color: ink[700] }}>
              The work sits on five connected pillars. Health, livelihood, and
              environment are treated together because they are bound
              together on the mountain.
            </p>
          </Reveal>

          <div className="mt-12 sm:mt-14">
            <PillarGrid
              items={pillars}
              cardClassName="bg-white rounded-2xl shadow-[0_20px_50px_rgba(10,23,18,0.07)] hover:-translate-y-1 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="leadership-heading" className={sectionSpacing} style={{ backgroundColor: ink[50] }}>
        <div className="wrap">
          <Reveal className="max-w-xl">
            <DrawnHeading id="leadership-heading" className={sectionHeading}>
              Leadership
            </DrawnHeading>
            <p className="mt-5 leading-relaxed" style={{ color: ink[700] }}>
              The team steering {site.shortName}&rsquo;s clinical, community,
              and field programs.
            </p>
          </Reveal>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3"
          >
            {leadership.map((person) => (
              <motion.li
                key={person.name}
                variants={revealVariants}
                className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-[0_20px_50px_rgba(10,23,18,0.07)]"
              >
                <div
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-lg font-semibold"
                  style={{ backgroundColor: ink[100], color: ink[700] }}
                >
                  {person.initials}
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold" style={{ color: ink[800] }}>
                    {person.name}
                  </h3>
                  <p className="mt-0.5 text-sm" style={{ color: accent }}>
                    {person.role}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section aria-labelledby="partners-heading" className="py-16 sm:py-20" style={{ backgroundColor: ink[100] }}>
        <div className="wrap text-center">
          <Reveal>
            <h2 id="partners-heading" className="text-2xl font-semibold" style={{ color: ink[800] }}>
              Working alongside
            </h2>
            <div className="mt-8">
              <Marquee items={partners}/>
            </div>
          </Reveal>
        </div>
      </section>
      <section className={sectionSpacing}>
        <div className="wrap">
          <Reveal className="relative overflow-hidden rounded-[2rem] px-6 py-14 text-center text-stone sm:px-16 sm:py-16">
            <div className="absolute inset-0 -z-10" style={{ backgroundColor: ink[900] }} />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl"
              style={{ backgroundColor: `${accent}26` }}
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Working in these mountains takes more than one organization.
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: ink[200] }}>
                If your organization shares this ground, we&rsquo;d like to
                talk about where the work overlaps.
              </p>
              <div className="mt-8 flex justify-center">
                <PrimaryButton to="/contact" onDark>
                  Partner with {site.shortName}
                </PrimaryButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}