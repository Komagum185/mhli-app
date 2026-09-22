import { HomeHero } from "../components/hero-home";
import {
  faqs,
  partners,
  pillars,
  programs,
  terrainPoints,
} from "../lib/content";
import { motion } from "motion/react";
import { site } from "../lib/site";
import { ink, sectionHeading,sectionSpacing, revealVariants, accent, coverImage, staggerContainer } from "../lib/utils";
import { Marquee, Reveal, DrawnHeading, TextLink, ParallaxFrame, PrimaryButton } from "../components/motion-ui";
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const faqJsonLdString = JSON.stringify(faqJsonLd).replace(/</g, "\\u003c");

const title = `${site.name} | Care Shouldn't Stop Where The Road Does`;
const canonicalUrl = `${site.url}/`;

export function Home() {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={site.description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={site.description} />
      <meta property="og:url" content={canonicalUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLdString }} />

      <main id="main">
        <HomeHero />
        
        <section aria-labelledby="vision-heading" className={sectionSpacing} >
          <div className="wrap">
            <Reveal
              className="relative overflow-hidden rounded-[2rem] px-6 py-14 text-stone sm:px-12 sm:py-16 lg:px-20"
              variants={revealVariants}
            >
              <div className="absolute inset-0 -z-10" style={{ backgroundColor: ink[800] }} />
              <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl" style={{ backgroundColor: `${ink[500]}33` }} />
              <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full blur-3xl" style={{ backgroundColor: `${accent}26` }} />
              <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                  <h2 id="vision-heading" className="text-3xl font-semibold sm:text-4xl">
                    Our vision
                  </h2>
                  <p className="mt-5 max-w-lg text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
                    A Rwenzori region where every mountain community, however remote, has equitable access to
                    quality healthcare, thrives economically, and lives resiliently in the face of health and
                    environmental challenges.
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-semibold text-white sm:text-4xl">Our mission</h3>
                  <p className="mt-5 max-w-lg text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
                    We strengthen health systems and build lasting resilience in hard-to-reach mountain
                    communities through community-based healthcare, research and innovation, and sustainable
                    livelihood support.
                  </p>
                  <TextLink to="/about" className="mt-6 text-stone hover:text-stone-dim">
                    Read about the organization
                  </TextLink>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
        <section aria-labelledby="terrain-heading" style={{ backgroundColor: ink[100] }}>
          <div className="wrap grid gap-10 py-20 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-16">
            <ParallaxFrame
              src="/images/field/01-f0178fe59f61.jpg"
              alt="Children walking a mountain footpath carrying water containers"
              className="aspect-4/3"
            />
            <Reveal>
              <DrawnHeading id="terrain-heading" className={sectionHeading}>
                Distance is a health risk here.
              </DrawnHeading>
              <ul className="mt-8 max-w-md space-y-4">
                {terrainPoints.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed" style={{ color: ink[700] }}>
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="pillars-heading" className={sectionSpacing} style={{ backgroundColor: ink[50] }}>
          <div className="wrap">
            <Reveal>
              <DrawnHeading id="pillars-heading" className={`max-w-xl ${sectionHeading}`}>
                Five pillars, one mountain community.
              </DrawnHeading>
            </Reveal>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3"
            >
              {pillars.map((pillar) => (
                <motion.li
                  key={pillar.title}
                  variants={revealVariants}
                  className="relative h-full overflow-hidden rounded-2xl p-7 shadow-[0_20px_50px_rgba(10,23,18,0.07)] transition-transform duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: "white" }}
                >
                  <h3 className="mt-5 text-xl font-semibold" style={{ color: ink[800] }}>
                    {pillar.title}
                  </h3>
                  <p className="mt-3 leading-relaxed" style={{ color: ink[600] }}>
                    {pillar.body}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        <section aria-labelledby="programs-heading" className={sectionSpacing} style={{ backgroundColor: ink[100] }}>
          <div className="wrap">
            <Reveal>
              <DrawnHeading id="programs-heading" className={sectionHeading}>
                Active programs
              </DrawnHeading>
            </Reveal>

            <div className="mt-14 space-y-16 sm:mt-16 lg:space-y-20">
              {programs.map((program, index) => (
                <Reveal key={program.slug}>
                  <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    <ParallaxFrame
                      src={program.image}
                      alt={program.imageAlt}
                      className={`aspect-4/3 ${index % 2 ? "lg:order-2" : ""}`}
                    />
                    <div>
                      <span
                        className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium"
                        style={{ backgroundColor: `${ink[700]}14`, color: ink[700] }}
                      >
                        {program.status}
                      </span>
                      <h3 className="mt-4 text-2xl font-semibold sm:text-3xl" style={{ color: ink[800] }}>
                        {program.title}
                      </h3>
                      <p className="mt-4 max-w-xl leading-relaxed" style={{ color: ink[600] }}>
                        {program.summary}
                      </p>
                      <TextLink to={`/programs/${program.slug}`} className="mt-5">
                        Read about this program
                      </TextLink>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="gallery-heading" className={sectionSpacing} style={{ backgroundColor: ink[50] }}>
          <div className="wrap">
            <Reveal className="max-w-2xl">
              <DrawnHeading id="gallery-heading" className={sectionHeading}>
                Community health in action
              </DrawnHeading>
              <p className="mt-4 leading-relaxed" style={{ color: ink[600] }}>
                A look at the realities we work in and the outreach that responds to them, from home-to-home
                screening to mobile medical clinics.
              </p>
              <TextLink to="/gallery" className="mt-6">
                Open the full gallery
              </TextLink>
            </Reveal>
          </div>
        </section>

        <section className={sectionSpacing} style={{ backgroundColor: ink[100] }}>
          <div className="wrap">
            <Reveal className="relative isolate overflow-hidden rounded-[2rem] py-20 text-white sm:py-28">
              <div className="absolute inset-0 -z-20" style={{ backgroundColor: ink[900] }} />
              <img
                src="/images/field/01-f0178fe59f61.jpg"
                alt=""
                loading="lazy"
                decoding="async"
                className={`${coverImage} -z-20 object-[center_30%] opacity-40`}
              />
              <div
                className="absolute inset-0 -z-10"
                style={{ background: `linear-gradient(to top, ${ink[900]}, ${ink[900]}D9, ${ink[900]}66)` }}
              />
              <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
                <figure>
                  <blockquote className="text-2xl leading-snug font-medium italic sm:text-3xl lg:text-4xl">
                    &ldquo;A maternity centre with an operating theatre, deep in the mountains &mdash; so no
                    mother has to choose between distance and survival.&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 text-sm" style={{ color: ink[300] }}>
                    Inspired by &ldquo;Saving Mothers in the Mountains,&rdquo; Wilderness Medicine Magazine
                  </figcaption>
                </figure>
                <div className="mt-8 flex justify-center">
                  <PrimaryButton to="/contact">Help us build it</PrimaryButton>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="partners-heading" className="py-16 sm:py-20" style={{ backgroundColor: ink[50] }}>
          <div className="wrap text-center">
            <Reveal>
              <h2 id="partners-heading" className="text-2xl font-semibold" style={{ color: ink[800] }}>
                Working alongside
              </h2>
              <div className="mt-8">
                <Marquee items={partners} />
              </div>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="faq-heading" className={sectionSpacing} style={{ backgroundColor: ink[100] }}>
          <div className="wrap">
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <DrawnHeading id="faq-heading" className={sectionHeading}>
                  Before you reach out
                </DrawnHeading>
              </Reveal>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className="mt-10 space-y-3 sm:mt-12"
              >
                {faqs.map((faq) => (
                  <motion.details
                    key={faq.question}
                    variants={revealVariants}
                    className="group rounded-2xl px-6 py-5 shadow-[0_8px_24px_rgba(10,23,18,0.05)] sm:px-7 sm:py-6"
                    style={{ backgroundColor: "white" }}
                  >
                    <summary
                      className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-xl [&::-webkit-details-marker]:hidden"
                      style={{ color: ink[800] }}
                    >
                      {faq.question}
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${accent}22`, color: accent }}
                      >
                        <span className="relative flex h-3 w-3 items-center justify-center">
                          <span className="absolute h-px w-3 bg-current" />
                          <span className="absolute h-3 w-px bg-current transition-transform duration-200 group-open:rotate-90 motion-reduce:transition-none" />
                        </span>
                      </span>
                    </summary>
                    <p className="mt-3 max-w-prose leading-relaxed" style={{ color: ink[600] }}>
                      {faq.answer}
                    </p>
                  </motion.details>
                ))}
              </motion.div>

              <div className="mt-10 flex justify-center sm:justify-start">
                <PrimaryButton to="/contact">Contact MHLI</PrimaryButton>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}