export const navLinks = [
    { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const pillars = [
  {
    title: "Community Health Systems",
    icon: "health",
    body: "Strengthening frontline facilities and community health workers so care starts close to home.",
  },
  {
    title: "Maternal, Newborn & Child Health",
    icon: "maternal",
    body: "Working toward safe deliveries and healthy childhoods, wherever a family lives.",
  },
  {
    title: "Research & Innovation",
    icon: "research",
    body: "Generating local evidence and implementation science to guide what actually works here.",
  },
  {
    title: "One Health & Emerging Diseases",
    icon: "one-health",
    body: "Watching where human, animal, and environmental health meet along the Uganda–DRC border.",
  },
  {
    title: "Livelihood & Resilience",
    icon: "livelihood",
    body: "Health and income are linked — supporting families so illness doesn't mean lost livelihood.",
  },
] as const;

export const programs = [
  {
    slug: "ncd-screening",
    status: "Launched Aug 2026",
    title: "Community NCD Screening & Follow-Up",
    summary:
      "A community-based hypertension and diabetes screening and linkage-to-care project reaching villages around Kitswamba, catching non-communicable disease early and connecting people to ongoing treatment.",
    image: "/images/field/02-120502e29402.jpg",
    imageAlt: "Recording a blood pressure reading during a home screening",
  },
  {
    slug: "sickle-safe-schools",
    status: "Concept stage",
    title: "The Sickle-Safe Schools Project (SSSP)",
    summary:
      "Identifying and supporting primary-school children living with Sickle Cell Disease in schools around Kitswamba, Kasese District — so a diagnosis doesn't quietly derail an education.",
    image: "/images/field/03-84bb85242454.jpg",
    imageAlt: "Pupils at a primary school gathered for a Sickle-Safe Schools visit",
  },
] as const;

export const leadership = [
  { name: "Dr. Thembo Moses", role: "Founder & Director", initials: "TM" },
  { name: "Muhindo Jimmy", role: "Co-Founder", initials: "MJ" },
  { name: "Kristen Fontain", role: "Team Member", initials: "KF" },
  { name: "Sandra Namanja", role: "Team Member", initials: "SN" },
] as const;

export const partners = [
  "Children of Rwenzori",
  "Health & Development International",
  "Kitswamba Town Council",
] as const;

export const terrainPoints = [
  "Families in the Rwenzori foothills often walk for hours over mountain paths to reach the nearest clinic — a delay that turns treatable conditions into emergencies.",
  "Mothers in remote villages face the greatest risk, with no operating theatre within safe reach when complications arise during birth.",
  "Non-communicable diseases like hypertension and diabetes go undiagnosed for years without regular community screening.",
  "Health, livelihood, and the environment are bound together here — a resilient community needs all three addressed at once.",
] as const;

export type GalleryCategory =
  | "challenge"
  | "screening"
  | "outreach"
  | "schools";

export const galleryFilters: { id: "all" | GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "challenge", label: "The Challenge" },
  { id: "screening", label: "NCD Screening" },
  { id: "outreach", label: "Mobile Outreach" },
  { id: "schools", label: "Schools" },
];

export const galleryItems = [
  {
    src: "/images/field/04-7d8cea749202.jpg",
    alt: "Children walking a mountain path carrying water containers",
    caption: "The walk to water. The walk to care.",
    description:
      "The long walk over mountain paths — the same distance families must cross to reach a clinic.",
    category: "challenge" as const,
    featured: true,
  },
  {
    src: "/images/field/05-30dad15df983.jpg",
    alt: "Children at a hand-pump borehole",
    caption: "Fetching water at the community pump",
    description: "Children fetching water at a community borehole.",
    category: "challenge" as const,
    featured: false,
  },
  {
    src: "/images/field/06-014e1fe18871.jpg",
    alt: "A family gathered outside their home",
    caption: "Life in the villages we serve",
    description: "Life in the mountain villages MHLI serves.",
    category: "challenge" as const,
    featured: false,
  },
  {
    src: "/images/field/07-081a39d565c0.jpg",
    alt: "A community gathered outdoors",
    caption: "A village gathering",
    description: "A village gathering in one of the communities MHLI works with.",
    category: "challenge" as const,
    featured: false,
  },
  {
    src: "/images/field/08-76de8661cd3f.jpg",
    alt: "A health worker measuring blood pressure for an elderly woman at home",
    caption: "Blood pressure screening, door to door",
    description: "Blood pressure screening carried out at a home visit.",
    category: "screening" as const,
    featured: false,
  },
  {
    src: "/images/field/09-63c7a366a9c9.jpg",
    alt: "An elderly man seated outside, waiting",
    caption: "Waiting to be seen",
    description: "An elderly community member waiting to be seen during a screening visit.",
    category: "screening" as const,
    featured: false,
  },
  {
    src: "/images/field/10-7fac230ead75.jpg",
    alt: "A health worker performing a finger-prick blood test",
    caption: "A first-time blood sugar check",
    description: "Finger-prick testing as part of community NCD screening.",
    category: "screening" as const,
    featured: false,
  },
  {
    src: "/images/field/02-120502e29402.jpg",
    alt: "A blood pressure monitor showing a reading of 151 over 100",
    caption: "Catching high blood pressure before it becomes an emergency",
    description:
      "A blood pressure reading of 151/100 recorded during a home screening — the kind of undiagnosed case regular screening is built to catch.",
    category: "screening" as const,
    featured: true,
  },
  {
    src: "/images/field/12-b96734de3c4f.jpg",
    alt: "Health workers registering patients and organizing medicine at an outreach table",
    caption: "Registration and medicine dispensing at an outreach post",
    description: "Registering patients and dispensing medicine at a mobile outreach post.",
    category: "outreach" as const,
    featured: true,
  },
  {
    src: "/images/field/13-18d7c40dd404.jpg",
    alt: "A health worker consulting with a young patient and a parent",
    caption: "A consultation in the field",
    description: "A consultation during a community medical outreach.",
    category: "outreach" as const,
    featured: false,
  },
  {
    src: "/images/field/14-59b791578e08.jpg",
    alt: "A nurse offering family planning counseling",
    caption: "Counseling at an outreach post",
    description: "Family planning counseling offered at an outreach post.",
    category: "outreach" as const,
    featured: false,
  },
  {
    src: "/images/field/15-32df558d0c7b.jpg",
    alt: "A health team gathered for a briefing before outreach",
    caption: "Briefing before the outreach",
    description: "The health team briefing before the day's outreach begins.",
    category: "outreach" as const,
    featured: false,
  },
  {
    src: "/images/field/16-6fdee3610fe1.jpg",
    alt: "A lab technician using a microscope outdoors during a community outreach",
    caption: "Lab testing, brought to the community",
    description: "Laboratory testing carried out under the trees during a community outreach.",
    category: "outreach" as const,
    featured: false,
  },
  {
    src: "/images/field/17-ee0a23b052b7.jpg",
    alt: "Health workers consulting with community members at outdoor desks",
    caption: "Consultations, table by table",
    description:
      "The outreach team registering and consulting community members outside a local building.",
    category: "outreach" as const,
    featured: false,
  },
  {
    src: "/images/field/18-61d26f70d5fb.jpg",
    alt: "A health team gathered in discussion at the end of an outreach day",
    caption: "End of a long outreach day",
    description: "The team debriefing at the end of a day of outreach.",
    category: "outreach" as const,
    featured: false,
  },
  {
    src: "/images/field/19-61de458e0938.jpg",
    alt: "A large group of primary school pupils gathered outside their school",
    caption: "Meeting pupils for the Sickle-Safe Schools Project",
    description:
      "Pupils at a primary school gathered for a Sickle-Safe Schools Project visit around Kitswamba, Kasese District.",
    category: "schools" as const,
    featured: true,
  },
  {
    src: "/images/field/03-84bb85242454.jpg",
    alt: "Primary school pupils and staff gathered outside a classroom block",
    caption: "A school visit in Kasese District",
    description: "Pupils and staff at a primary school in Kasese District.",
    category: "schools" as const,
    featured: false,
  },
] as const;

export const faqs = [
  {
    question: "What is Mountain Health & Livelihood Initiative?",
    answer:
      "MHLI is a grassroots Community Based Organization (Reg. No. CBO/013) working to strengthen health systems and community resilience in hard-to-reach mountain communities of the Rwenzori region, Western Uganda.",
  },
  {
    question: "Where does MHLI work?",
    answer:
      "Work is based in Kitswamba Town Council, Kasese District, serving mountain communities in the Rwenzori region. The office is in Rwakuhanda Cell, Muhumuza Ward.",
  },
  {
    question: "What programs are active now?",
    answer:
      "Community NCD Screening & Follow-Up launched in August 2026, reaching villages around Kitswamba for hypertension and diabetes screening and linkage to care. The Sickle-Safe Schools Project is at concept stage.",
  },
  {
    question: "How can organizations partner or support this work?",
    answer:
      "Email info@mhli.org or call +256 783 747 491. An online donation page is not published on this site yet; partnership and support requests are handled directly.",
  },
] as const;
