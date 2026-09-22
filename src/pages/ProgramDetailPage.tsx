
import { Link, useParams } from "react-router-dom";
import { usePageMeta } from "../lib/metadata";
import { NotFound } from "./NotFound";
import { Breadcrumbs } from "../components/page-nav";
import { programs } from "../lib/content";
import { site } from "../lib/site";
import { ParallaxFrame, PrimaryButton, Reveal } from "../components/motion-ui";
import { accent, ink, sectionSpacing } from "../lib/utils";

export function ProgramDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const program = programs.find((item) => item.slug === slug);

  usePageMeta({
    title: program?.title ?? "Program",
    description: program?.summary,
    path: `/programs/${slug ?? ""}`,
    image: program?.image,
  });

  if (!program) return <NotFound />;

  return (
    <main id="main">
      <section className="relative isolate overflow-hidden" style={{ backgroundColor: ink[900] }} >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: `${ink[500]}26` }}
        />
        <div className="wrap relative py-16 sm:py-24">
          <Breadcrumbs
            items={[
              { href: "/programs", label: "Programs" },
              { label: program.title },
            ]}
          />
          <Reveal>
            <span
              className="mt-6 inline-block rounded-full px-3.5 py-1.5 text-sm"
              style={{ backgroundColor: `${accent}26`, color: "#F0C79F" }}
            >
              {program.status}
            </span>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.02em] text-white sm:text-5xl sm:leading-[1.1]">
              {program.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className={sectionSpacing} style={{ backgroundColor: ink[50] }}>
        <div className="wrap">
          <Reveal>
            <ParallaxFrame
              src={program.image}
              alt={program.imageAlt}
              className="aspect-video max-w-4xl"
            />
          </Reveal>

          <Reveal>
            <p className="mt-10 max-w-[62ch] text-lg leading-relaxed" style={{ color: ink[800] }}>
              {program.summary}
            </p>
          </Reveal>

          {program.slug === "ncd-screening" ? (
            <Reveal
              className="mt-10 max-w-[62ch]"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 110, damping: 20 } },
              }}
            >
              <div className="space-y-4 border-t pt-8" style={{ borderColor: ink[200] }}>
                <h2 className="text-2xl font-semibold" style={{ color: ink[800] }}>
                  What this project does
                </h2>
                <p className="mt-4 leading-relaxed" style={{ color: ink[700] }}>
                  Community teams screen for hypertension and diabetes in
                  villages around Kitswamba, then connect people who need care
                  to ongoing treatment. The work exists because
                  non-communicable diseases often go undiagnosed for years
                  without regular screening close to home.
                </p>
                <p className="mt-4 leading-relaxed" style={{ color: ink[700] }}>
                  Field photos from home visits, including a recorded blood
                  pressure reading of 151/100, illustrate the kind of
                  undiagnosed case this screening is built to catch. See more
                  in the{" "}
                  <Link
                    to="/gallery"
                    className="font-semibold underline decoration-2 underline-offset-4"
                    style={{ color: accent, textDecorationColor: `${accent}80` }}
                  >
                    gallery
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal className="mt-10 max-w-[62ch]">
              <div className="space-y-4 border-t pt-8" style={{ borderColor: ink[200] }}>
                <h2 className="text-2xl font-semibold" style={{ color: ink[800] }}>
                  What this project aims to do
                </h2>
                <p className="mt-4 leading-relaxed" style={{ color: ink[700] }}>
                  The Sickle-Safe Schools Project is at concept stage. It is
                  designed to identify and support primary-school children
                  living with Sickle Cell Disease in schools around
                  Kitswamba, Kasese District, so a diagnosis does not quietly
                  derail an education.
                </p>
                <p className="mt-4 leading-relaxed" style={{ color: ink[700] }}>
                  A concept note is not published as a download on this site.
                  To request it, contact{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="font-semibold underline decoration-2 underline-offset-4"
                    style={{ color: accent, textDecorationColor: `${accent}80` }}
                  >
                    {site.email}
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          )}

          <div className="mt-12 flex flex-wrap gap-4">
            <PrimaryButton to="/contact">Partner on this work</PrimaryButton>
            <Link
              to="/programs"
              className="inline-flex h-12 items-center justify-center rounded-full border px-6 text-sm font-semibold transition-colors duration-300 hover:bg-black/[0.03] focus-visible:outline-2 focus-visible:outline-offset-4"
              style={{ borderColor: ink[300], color: ink[800] }}
            >
              All programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}