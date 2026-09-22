import { site } from "../lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NGO",
        "@id": `${site.url}/#organization`,
        name: site.name,
        alternateName: site.shortName,
        url: site.url,
        email: site.email,
        telephone: site.phoneDisplay,
        foundingLocation: "Kitswamba, Uganda",
        identifier: site.registration,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${site.address.line1}, ${site.address.line2}`,
          addressLocality: site.address.locality,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
        areaServed: "Rwenzori Region, Western Uganda",
        description: site.description,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
