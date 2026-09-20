export const APP_NAME = "ThriveCV";

export const navLinks = [
  { href: "#features", label: "Product" },
  { href: "#cv", label: "The CV" },
  { href: "#pricing", label: "Plans" },
  { href: "#faq", label: "Questions" },
] as const;

export const features = [
  {
    title: "A link, not a file",
    body: "You send thrive.cv/you. They open a page. There is no attachment to lose, reprint, or open in the wrong version of Word.",
    icon: "link",
  },
  {
    title: "Current, because you keep it",
    body: "Change a title on Tuesday. Every recruiter who still has the link sees Wednesday’s version. The PDF in their inbox does not.",
    icon: "refresh",
  },
  {
    title: "Private until you send it",
    body: "Unlisted by default. No search, no public index, no “open to work” banner unless you want one. The link is the lock.",
    icon: "lock",
  },
  {
    title: "Reads on a phone",
    body: "Hiring happens in queues, trains, and the two minutes before a call. ThriveCV is a page, not a three-column print layout.",
    icon: "phone",
  },
  {
    title: "See who opened it",
    body: "On Thrive, you get a quiet log: opened, from where, for how long. No fireworks. Enough to know the letter landed.",
    icon: "eye",
  },
  {
    title: "PDF only if they insist",
    body: "Some portals still want a file. Export one from the living page — a courtesy, not the product.",
    icon: "file",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Write it once",
    body: "Name, work, proof. A page that looks like a letter, not a form. Import a PDF or a LinkedIn export if you already have one.",
  },
  {
    n: "02",
    title: "Share a private link",
    body: "Copy thrive.cv/you, or a one-time link for a single role. Paste it in the application, the email, or across the table.",
  },
  {
    n: "03",
    title: "Change a line. They see it.",
    body: "New title, new project, a typo gone. The same URL. No “please find attached v7_final_FINAL.”",
  },
] as const;

export type Role = {
  org: string;
  title: string;
  years: string;
  note: string;
};

export type Profile = {
  id: string;
  slug: string;
  name: string;
  title: string;
  place: string;
  availability: string;
  about: string;
  roles: Role[];
  selected: string[];
};

export const profiles: Profile[] = [
  {
    id: "amara",
    slug: "amara",
    name: "Amara Nkosi",
    title: "Product designer",
    place: "Cape Town",
    availability: "Open to work",
    about:
      "I design the quiet parts of software: settings, billing, the empty state after you finish. Ten years in product, lately for climate and civic teams.",
    roles: [
      {
        org: "Studio North",
        title: "Product design",
        years: "2023 —",
        note: "Member tools for a forty-person climate nonprofit. Billing, invites, the first week.",
      },
      {
        org: "Harbor",
        title: "Designer",
        years: "2019 — 2023",
        note: "Shipped the field notes app. iOS first, then the desk.",
      },
    ],
    selected: ["Member billing, in the browser", "Field notes, iOS", "A handbook for new chairs"],
  },
  {
    id: "tomas",
    slug: "tomas",
    name: "Tomas Riedel",
    title: "Site reliability",
    place: "Berlin",
    availability: "Conversations welcome",
    about:
      "I keep systems boring. On-call that does not wake people for noise, deploys you can reverse, and docs that outlive the author.",
    roles: [
      {
        org: "Kite Transit",
        title: "SRE",
        years: "2021 —",
        note: "On-call for a city-scale timetable. Cut pages by half without cutting coverage.",
      },
      {
        org: "Fold",
        title: "Platform engineer",
        years: "2017 — 2021",
        note: "The first internal developer platform. Golden paths, not golden cages.",
      },
    ],
    selected: ["A runbook that people actually open", "Canary deploys for the timetable", "Pager policy, rewritten"],
  },
  {
    id: "hana",
    slug: "hana",
    name: "Hana Idris",
    title: "Policy researcher",
    place: "Nairobi",
    availability: "Select projects",
    about:
      "I write the brief that a minister can finish in a lift. Evidence, not volume. Water, land, and the rules around both.",
    roles: [
      {
        org: "Rift Institute",
        title: "Senior researcher",
        years: "2020 —",
        note: "Land-use briefs for East African cabinets. Twelve published, three adopted.",
      },
      {
        org: "Civic Desk",
        title: "Analyst",
        years: "2016 — 2020",
        note: "Open budgets, then open water data. Taught journalists to read both.",
      },
    ],
    selected: ["A two-page land brief", "Water rights explainer", "Budget workshop, Mombasa"],
  },
];

export const testimonials = [
  {
    quote:
      "I used to keep a folder of other people’s PDFs named final_2. ThriveCV is a page I can open in the interview and trust is this morning’s.",
    name: "Mira Adler",
    role: "Hiring manager, independent studio",
    image: "/images/mira.jpg",
  },
  {
    quote:
      "I changed jobs without sending twelve versions of myself. One link. The recruiter who had it from last year still had the right title.",
    name: "Julian Cho",
    role: "Research scientist",
    image: "/images/julian.jpg",
  },
  {
    quote:
      "I slid the phone across the table. They read the work, not a letterhead. That is the whole point of a paperless CV.",
    name: "Adele Voss",
    role: "Architect",
    image: "/images/adele.jpg",
  },
] as const;

export const plans = [
  {
    id: "free",
    name: "Free",
    monthly: 0,
    yearly: 0,
    blurb: "One living CV. Enough to stop attaching files.",
    features: [
      "One ThriveCV page",
      "Unlisted link",
      "Phone-first layout",
      "PDF export if a portal demands it",
    ],
    cta: "Join the list",
    featured: false,
  },
  {
    id: "thrive",
    name: "Thrive",
    monthly: 8,
    yearly: 72,
    blurb: "For people who are in motion.",
    features: [
      "Private and one-time links",
      "Who opened it, and for how long",
      "Custom slug",
      "A second layout when the role needs it",
    ],
    cta: "Join Thrive",
    featured: true,
  },
  {
    id: "studio",
    name: "Studio",
    monthly: 18,
    yearly: 168,
    blurb: "A small practice, one brand.",
    features: [
      "Everything in Thrive",
      "Up to eight CVs",
      "Shared letterhead and type",
      "Priority for the first build",
    ],
    cta: "Join as a studio",
    featured: false,
  },
] as const;

export const faqs = [
  {
    q: "When does ThriveCV ship?",
    a: "We are on a waitlist, not a fake launch date. The first private build goes to this list in small groups. You will hear from us once, when a seat is ready — not every week until then.",
  },
  {
    q: "Can I still send a PDF?",
    a: "Yes, as an export from the living page. Some portals will not take a link. ThriveCV is the source; the file is a copy, dated the moment you download it.",
  },
  {
    q: "Is this a job board?",
    a: "No. There is no feed of roles, no “easy apply,” no public talent pool. You write a page and you choose who gets the URL.",
  },
  {
    q: "Who can see my CV?",
    a: "Only people with the link, unless you turn on a public slug. Unlisted pages are not indexed. One-time links on Thrive expire after they are opened.",
  },
  {
    q: "Can I import what I already have?",
    a: "At launch: a PDF, a .docx, or a LinkedIn export. We set the type; you fix the sentences. We will not invent a biography for you.",
  },
  {
    q: "Do you sell my profile?",
    a: "No. We do not sell names, links, or who opened what. Studio pages stay with the studio. Leave whenever you like — take a folder of your page with you.",
  },
] as const;
