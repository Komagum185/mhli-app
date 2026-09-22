
import { ContactForm } from "../components/contact-form";
import { Breadcrumbs } from "../components/page-nav";
import { usePageMeta } from "../lib/metadata";
import { site } from "../lib/site";
import { PageHero, Reveal, TextLink } from "../components/motion-ui";
import { ink, sectionSpacing } from "../lib/utils";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${site.url}/contact`,
  mainEntity: { "@id": `${site.url}/#organization` },
};
const jsonLdString = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export function Contact() {
  usePageMeta({
    title: "Contact",
    description: `Contact Mountain Health & Livelihood Initiative in Kitswamba, Kasese District. Email ${site.email} or call ${site.phoneDisplay} to partner or support the work.`,
    path: "/contact",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />

      <main id="main">
        <PageHero
          eyebrow={<Breadcrumbs items={[{ label: "Contact" }]} />}
          title="Partner, support, or ask a question."
          lead="Donations and partnerships are handled directly by our team. Write to us with the form, by email, or by phone."
        />

        <section className={sectionSpacing} style={{ backgroundColor: ink[50] }}>
          <div className="wrap">
            <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
              <Reveal className="lg:col-span-2">
                <div className="relative h-full overflow-hidden rounded-[2rem] px-7 py-10 text-stone sm:px-9 sm:py-12">
                  <div className="absolute inset-0 -z-10" style={{ backgroundColor: ink[800] }} />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl"
                    style={{ backgroundColor: `${ink[500]}33` }}
                  />
                  <h2 className="text-2xl font-semibold sm:text-3xl">Contact details</h2>

                  <address className="mt-6 not-italic">
                    <p className="font-medium" style={{ color: ink[200] }}>
                      {site.name}
                    </p>
                    <p className="mt-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                      <span className="block">{site.address.line1}</span>
                      <span className="block">{site.address.line2}</span>
                      <span className="block">{site.address.line3}</span>
                    </p>

                    <ul className="mt-6 space-y-2">
                      <li>
                        <TextLink to={`mailto:${site.email}`} light>
                          {site.email}
                        </TextLink>
                      </li>
                      <li>
                        <TextLink to={`tel:${site.phone}`} light>
                          {site.phoneDisplay}
                        </TextLink>
                      </li>
                    </ul>
                  </address>

                  <p
                    className="mt-10 border-t pt-5 text-sm"
                    style={{ borderColor: "rgba(255,255,255,0.15)", color: ink[300] }}
                  >
                    Registered CBO no. {site.registration}
                  </p>
                </div>
              </Reveal>

              <Reveal className="lg:col-span-3">
                <div className="h-full rounded-[2rem] bg-white p-7 shadow-[0_20px_50px_rgba(10,23,18,0.07)] sm:p-10">
                  <h2 className="text-2xl font-semibold sm:text-3xl" style={{ color: ink[800] }}>
                    Send a message
                  </h2>
                  <div className="mt-6">
                    <ContactForm />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}