export const site = {
  name: "Mountain Health & Livelihood Initiative",
  shortName: "MHLI",
  legalName: "Mountain Health and Livelihood Initiative",
url: import.meta.env.VITE_SITE_URL ?? "http://mhli.com",
  email: "info@mhli.org",
  phone: "+256783747491",
  phoneDisplay: "+256 783 747 491",
  registration: "CBO/013",
  facebook: "Facebook",
  instagram: "Instagram",
  localeNote: "est. Kitswamba, Uganda",
  description:
    "Mountain Health and Livelihood Initiative strengthens health systems and community resilience in hard-to-reach mountain communities of the Rwenzori region, Western Uganda.",
  address: {
    line1: "Rwakuhanda Cell, Muhumuza Ward",
    line2: "Kitswamba Town Council, Kasese District",
    line3: "Rwenzori Region, Western Uganda",
    locality: "Kitswamba",
    region: "Kasese District",
    country: "Uganda",
  },
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
