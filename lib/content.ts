/**
 * All copy for the TG Pod landing lives here, verbatim from the approved TZ.
 * Edit text in this file only — components never hardcode copy.
 */

export const meta = {
  title: "TG Pod by True Gamers | Work, play and waiting time",
  description:
    "An autonomous pod for work, play and waiting time. It goes where people wait: airports, malls, business centres, campuses. Booked by QR code, no staff on site.",
  ogTitle: "TG Pod by True Gamers",
  ogDescription:
    "An autonomous work and gaming pod for airports, malls, campuses, hotels and business centres.",
};

export const nav = {
  ariaLabel: "Primary navigation",
  logoAria: "TG Pod — home",
  by: "by True Gamers",
  links: [
    { href: "#product", label: "Product" },
    { href: "#locations", label: "Locations" },
    { href: "#business", label: "Business" },
    { href: "#economics", label: "Economics" },
  ],
  cta: { href: "#contact", label: "Get the business plan" },
};

export const hero = {
  seoH1: "TG Pod: work, play, waiting time",
  wordmark: { front: "TG", metal: "POD" },
  subtitle: ["Work &", "Gaming Pod"],
  circle: { label: "GET PLAN", href: "#contact" },
  installCard: {
    value: "4 hours",
    label: "Install time",
    link: { label: "Learn more", href: "#setup" },
  },
  statBadge: { value: "220V + LAN", label: "All it needs" },
  scroll: "Scroll to enter",
  bg: { id: "hero-bg", src: "/media/hero-bg.webp", alt: "TG Pod standing on the lunar surface" },
  cutout: { id: "hero-pod-cutout", src: "/media/hero-pod-cutout.webp", alt: "" },
};

export const about = {
  eyebrow: "About TG Pod",
  /* mixed-highlight display phrase: parts render in different treatments */
  phrase: [
    { text: "People wait.", tone: "chalk" },
    { text: "The pod", tone: "dim" },
    { text: "earns.", tone: "accent" },
  ] as const,
  lead: "An airport, a mall, a business centre, a campus. Someone waits for a flight or a meeting, scans the QR code on the door and sits down to work or play. The pod arrives assembled and needs no staff on site.",
  cardLeft: [
    { value: "2–4 m²", label: "Floor space needed" },
    { value: "0 staff", label: "No shifts, no cashier" },
  ],
  gaugeCard: { value: "220V + LAN", label: "All it needs", percent: 100 },
  marquee: ["Airports", "Shopping malls", "Business centres", "Universities", "Hotels", "Dealerships"],
  supported: { label: "Supported by", partner: { src: "/brand/truegamers.svg", alt: "True Gamers" } },
};

export const inside = {
  no: "01",
  eyebrow: "Inside the pod",
  title: "A room where you could never build one.",
  lead: "By day the pod runs calls and work. Evenings and weekends belong to gaming.",
  modes: {
    work: {
      switch: "Work mode",
      title: "Focus behind a closed door.",
      caption: "Quiet light, video calls, nobody interrupting.",
      media: { id: "inside-work", src: "/media/inside-work.webp", alt: "TG Pod interior in work mode" },
    },
    play: {
      switch: "Play mode",
      title: "Play at full power.",
      caption: "Performance hardware, deep light and a connection that holds.",
      media: { id: "inside-play", src: "/media/inside-play.webp", alt: "TG Pod interior in gaming mode" },
    },
  },
  chips: ["24/7 access", "Booked in the app", "Single seat"],
  blocks: [
    {
      no: "01",
      label: "Privacy",
      title: "The door closes, the crowd stays outside.",
      text: "Acoustic treatment, controlled access and adjustable light give the guest a private room inside a busy terminal, lobby or campus.",
      tags: ["Calls", "Focus", "Content", "Short rest"],
    },
    {
      no: "02",
      label: "Performance",
      title: "A full gaming setup inside.",
      text: "High-end graphics, a fast display, pro peripherals and a stable connection turn waiting time into a session worth paying for.",
      tags: ["RTX graphics", "540 Hz display", "Logitech peripherals"],
    },
    {
      no: "03",
      label: "Experience",
      title: "The guest controls light and sound.",
      text: "The guest controls the environment from inside. Sensors track occupancy and session time, and the emergency door release stays physical.",
      tags: ["Occupancy sensor", "Climate control", "Emergency release"],
    },
    {
      no: "04",
      label: "IZI software",
      title: "Find it, book it, walk in.",
      text: "IZI.APP carries discovery, booking, payment, access and extensions. You watch load, revenue and technical status from your phone.",
      tags: ["QR access", "Cloud telemetry", "Remote diagnostics"],
    },
  ],
};

export const spec = {
  no: "02",
  eyebrow: "Specification",
  title: "Everything for work and play, inside.",
  lead: "Gaming-club hardware, meeting-room acoustics and dimensions that clear a freight lift. A year at the factory went into materials, ergonomics and hardware integration.",
  prototype: {
    media: { id: "pod-exterior", src: "/media/pod-exterior.webp", alt: "Production prototype" },
    label: "Production prototype",
    note: "Built in China",
  },
  items: [
    { label: "Graphics", value: "RTX 5080", note: "RTX 5060 in the base configuration." },
    { label: "Processor", value: "Intel i7", note: "One station for both gaming and work." },
    { label: "Display", value: "4K, 540 Hz", note: "A fast panel for shooters and esports titles." },
    { label: "Network", value: "1 Gbit", note: "Fibre or LTE, whichever the venue has." },
    { label: "Acoustics", value: "30 dB", note: "A quiet meeting room even inside a mall." },
    { label: "Dimensions", value: "2400 × 2600 × 1600 mm", note: "Passes a freight lift and a double doorway." },
    { label: "Interior", value: "Chair and folding desk", note: "Logitech peripherals, chargers of every type." },
    { label: "Power", value: "220V, up to 4 kW", note: "A standard socket and a UPS." },
  ],
};

export const demand = {
  no: "03",
  eyebrow: "Demand is where people wait",
  title: "The audience is already there.",
  lead: "A delayed flight, a car in for service, a gap between meetings. TG Pod turns the waiting your venue already creates into revenue.",
  media: { id: "pod-airport", src: "/media/pod-airport.jpg", alt: "TG Pod in an airport branding concept" },
  locations: [
    {
      key: "airport",
      no: "01",
      tab: "Airports & stations",
      kicker: "Transit / 40–180 min wait",
      title: "Make the layover bookable.",
      text: "Passengers turn a delay or connection into a private call, a work session or a game before boarding.",
      meta: ["Travellers", "Remote workers", "Gamers"],
      day: "High dwell time",
      dayText: "Demand throughout the travel day",
    },
    {
      key: "office",
      no: "02",
      tab: "Business centres",
      kicker: "Work / 20–60 min gaps",
      title: "Add a room without construction.",
      text: "A quiet on-demand space for calls and focus between meetings, available without a reception desk or room schedule.",
      meta: ["Office tenants", "Visitors", "Hybrid teams"],
      day: "Strong weekday use",
      dayText: "Calls and focus from morning to evening",
    },
    {
      key: "campus",
      no: "03",
      tab: "Universities",
      kicker: "Education / gaps between classes",
      title: "Turn the timetable gap into a session.",
      text: "Students get a private place for coursework, calls, gaming or a short reset between lectures.",
      meta: ["Students", "Faculty", "Campus visitors"],
      day: "Two demand peaks",
      dayText: "Study by day, gaming after class",
    },
    {
      key: "mall",
      no: "04",
      tab: "Malls & hotels",
      kicker: "Retail and hospitality / all-day footfall",
      title: "Give waiting a destination.",
      text: "Guests work, play or watch content while family members shop, before check-in or between activities.",
      meta: ["Shoppers", "Hotel guests", "Families"],
      day: "Mixed dayparts",
      dayText: "Work, entertainment and short rest",
    },
    {
      key: "dealer",
      no: "05",
      tab: "Dealerships",
      kicker: "Automotive / 40–90 min service time",
      title: "Make the service wait useful.",
      text: "A customer waiting for detailing or maintenance gets a comfortable private room instead of another showroom chair.",
      meta: ["Car owners", "Parents", "Business travellers"],
      day: "Predictable dwell time",
      dayText: "Demand follows the service schedule",
    },
  ],
  aside: "No extra staff",
};

export const install = {
  no: "04",
  eyebrow: "Installation",
  title: "All it takes is a spot and a socket.",
  lead: "One working day runs from unloading to the first booking. No construction, no approvals, no contractors.",
  steps: [
    {
      label: "Delivery",
      value: "Ready out of the crate",
      text: "The module is assembled and equipped at the factory. Nothing gets built or bought on site.",
    },
    {
      label: "Install",
      value: "4 hours",
      text: "One visit from our crew: carry it in, set it, connect it, test the line and switch it on.",
    },
    {
      label: "Utilities",
      value: "220V + data",
      text: "A standard socket up to 4 kW and a network line. No water, no ventilation, no capital works.",
    },
    {
      label: "Launch",
      value: "Same day",
      text: "A guest scans the QR code on the door and pays for the session in the app.",
    },
  ],
  service: {
    title: "Software, payments and telemetry are on us.",
    text: "True Gamers provides the app, bookings, payment processing, telemetry and updates. You need no IT team of your own and no software written for the site.",
    chips: ["App", "Bookings", "Payments", "Telemetry", "Updates"],
  },
};

export const business = {
  no: "05",
  eyebrow: "A business that starts with one pod",
  title: "Place one and watch the numbers.",
  lead: "A TG Pod is a movable asset. No long lease, no construction project. Put one in a location, read the numbers it produces, and expand on evidence.",
  steps: [
    {
      label: "Start",
      value: "1",
      title: "First site",
      text: "Place a TG Pod on traffic you already have. The money at risk is one site, not a network.",
    },
    {
      label: "Data",
      value: "30",
      title: "Days to decide",
      text: "IZI collects bookings, hourly load, average session and revenue. You see which tariff and which hours work.",
    },
    {
      label: "Scale",
      value: "10+",
      title: "Your own network",
      text: "Take a batch and place it on the site types that already produced numbers. The whole network runs from one app.",
    },
  ],
  note: {
    title: "A weak spot means a move, not a write-off.",
    text: "No plumbing and no permanent build-out. The pod moves to another lobby, another floor or another venue, so a wrong location costs you a transport run instead of the business.",
    tags: "Portable asset / software-led operation / outsourced service",
  },
};

export const whiteLabel = {
  no: "06",
  eyebrow: "White-label and co-branding",
  title: "One product. Any identity.",
  note: "The silhouette is recognisable, so the shell works as an ad surface. Wrap it in your own brand, co-brand it, or take it fully white-label.",
  disclaimer: "Illustrative",
  cards: [
    { media: { id: "wl-retail", src: "/media/wl-retail.webp", alt: "Retail branding concept on TG Pod" }, label: "Retail concept" },
    { media: { id: "wl-sports", src: "/media/wl-sports.webp", alt: "Sports branding concept on TG Pod" }, label: "Sports concept" },
    { media: { id: "wl-marketplace", src: "/media/wl-marketplace.webp", alt: "Marketplace branding concept on TG Pod" }, label: "Marketplace concept" },
    { media: { id: "wl-financial", src: "/media/wl-financial.webp", alt: "Financial branding concept on TG Pod" }, label: "Financial concept" },
  ],
};

export const economics = {
  no: "07",
  eyebrow: "Unit economics",
  title: "Three sessions a day is enough.",
  payback: { value: 18, suffix: "", unit: "months", note: "Target payback on one pod in the pilot model.", percent: 66 },
  metrics: [
    { value: "6 h", number: 6, suffix: " h", label: "Daily load", note: "3 sessions × 2 hours", percent: 25 },
    { value: "~60%", number: 60, prefix: "~", suffix: "%", label: "Target annual return", note: "", percent: 60 },
    { value: "~50%", number: 50, prefix: "~", suffix: "%", label: "Target operating margin", note: "", percent: 50 },
  ],
  models: [
    {
      label: "Ownership model",
      title: "You own the pod. TG runs the system.",
      text: "Software, bookings, payments and telemetry stay with the True Gamers team, and TG takes a share of what the pod earns. Your job is the location.",
      dark: true,
    },
    {
      label: "What comes on top",
      title: "Sessions first, branding on top.",
      text: "Gaming tariffs, in-pod advertising and shell branding sit on top of session revenue. Branding alone brings about $1,000 a site a year.",
      dark: false,
    },
  ],
  disclaimer:
    "This is the pilot-market model: three two-hour sessions a day at current product assumptions. Real revenue, margin, payback and return depend on the site, the tariff, utilisation, local costs and deal terms. We guarantee no result. We build a model for your specific site and send it before any commitment.",
};

export const audience = {
  no: "08",
  eyebrow: "Who it fits",
  title: "Three ways into the product.",
  lead: "One TG Pod as an owner-run business, a TG Pod inside your own venue, or a batch across a region.",
  cards: [
    {
      kicker: "Entry: one site",
      title: "First-time owners",
      text: "Buy one TG Pod, learn the model on real numbers, then decide about the second site.",
      meta: "Starter scenario",
      media: { id: "inside-work", src: "/media/inside-work.webp", alt: "TG Pod interior in work mode" },
    },
    {
      kicker: "The space is already yours",
      title: "Your own venues",
      text: "Hotels, malls, dealerships, airports and campuses start earning from floor space that sat idle.",
      meta: "Income from idle floor space",
      media: { id: "pod-airport", src: "/media/pod-airport.jpg", alt: "TG Pod in an airport livery" },
    },
    {
      kicker: "Batch and network",
      title: "Regional investors",
      text: "Place a batch across several sites and run all of them from one place.",
      meta: "One dashboard for every site",
      media: { id: "pod-exterior", src: "/media/pod-exterior.webp", alt: "TG Pod prototype at the factory" },
    },
  ],
};

export const cta = {
  eyebrow: "Next step",
  title: "We will run the numbers on your site.",
  lead: "Tell us the city, the venue type and the footfall you see. We send the business plan and build a commercial model for your specific site.",
  primary: {
    label: "Get the business plan",
    href: "mailto:ilyayakovlev@truegamers.world?subject=TG%20Pod%20business%20plan&body=Hello%20True%20Gamers%2C%0A%0AI%20would%20like%20the%20TG%20Pod%20business%20plan.%0A%0ACity%20%2F%20country%3A%0AVenue%20type%3A%0AExpected%20number%20of%20pods%3A%0A%0AThank%20you.",
  },
  secondary: {
    label: "Talk on WhatsApp",
    href: "https://wa.me/971585960112?text=Hello%20True%20Gamers%2C%20I%20would%20like%20to%20discuss%20a%20TG%20Pod%20location.",
  },
  receive: {
    label: "What you receive",
    items: [
      "Site and audience fit",
      "Unit economics for one pod",
      "Commercial and operating model",
      "Installation and scaling plan",
    ],
  },
  email: "ilyayakovlev@truegamers.world",
};

export const footer = {
  line1: "TG Pod by True Gamers",
  line2: "United Arab Emirates",
  links: [
    { href: "#product", label: "Product" },
    { href: "#business", label: "Business" },
    { href: "#economics", label: "Economics" },
    { href: "#contact", label: "Contact" },
  ],
};
