import { FeatureItem, ProblemCard, StepItem, TestimonialItem, MapRegion } from "./types";

export const problemCards: ProblemCard[] = [
  {
    id: "prob1",
    title: "Extreme Doctor Shortage",
    description: "India has less than 1 psychiatrist per 100,000 people, leaving millions without any physical access to professional mental diagnostics.",
    iconName: "ShieldAlert",
    metric: "1 : 100k Ratio"
  },
  {
    id: "prob2",
    title: "Paralyzing Social Stigma",
    description: "Deep social taboos prevent people from walking into psychiatric clinics. Over 80% of individuals in distress suffer in complete silence.",
    iconName: "Lock",
    metric: "80% Silent"
  },
  {
    id: "prob3",
    title: "Rural Isolation & Isolation",
    description: "Over 70% of mental health infrastructure is concentrated in Tier-1 cities, leaving rural villages completely isolated from vital triage.",
    iconName: "MapPin",
    metric: "70% Concentrated"
  }
];

export const featuresList: FeatureItem[] = [
  {
    id: "feat1",
    title: "Voice Analysis",
    subtitle: "Listen during normal phone calls",
    description: "Analyzes minute vocal micro-tremors, speech rate pauses, and harmonic frequencies during ordinary telephonic conversations without latency.",
    iconName: "Mic",
    color: "cyan",
    badge: "Real-time"
  },
  {
    id: "feat2",
    title: "AI Detection",
    subtitle: "Detects sadness and stress in seconds",
    description: "Engineered on advanced acoustic neural networks trained to detect clinical indicators of severe anxiety, depression, and localized PTSD.",
    iconName: "Cpu",
    color: "pink",
    badge: "94% Accuracy"
  },
  {
    id: "feat3",
    title: "No App Needed",
    subtitle: "Works on any basic feature phone",
    description: "Designed for absolute accessibility. Demands no smartphone, no high-speed 5G, or active internet – runs seamlessly over standard voice band.",
    iconName: "Smartphone",
    color: "gold"
  },
  {
    id: "feat4",
    title: "Complete Privacy",
    subtitle: "No conversations stored, strictly GDPR compliant",
    description: "Features zero call recording. Voice streams are immediately processed in-memory as anonymized math tensors and discarded instantly.",
    iconName: "ShieldCheck",
    color: "cyan",
    badge: "In-Memory Only"
  },
  {
    id: "feat5",
    title: "Smart Alerts",
    subtitle: "Notifies designated emergency contacts",
    description: "Secured instant messaging or SMS escalation that triggers critical clinical support circles or family nodes when acute risk is discovered.",
    iconName: "BellRing",
    color: "pink"
  },
  {
    id: "feat6",
    title: "₹0 Free Access",
    subtitle: "Always free for individuals in need",
    description: "Democratic healthcare structure subsidized by institutional grants and corporate ESG, guaranteeing zero costs for our diagnostic users.",
    iconName: "Sparkles",
    color: "gold",
    badge: "Grassroots First"
  }
];

export const timelineSteps: StepItem[] = [
  {
    number: 1,
    title: "The Normal Call",
    description: "User initiates or receives a basic, high-fidelity telephone call on any device.",
    details: "Using regional interactive IVR or integration protocols, standard cellular voice streams are securely connected.",
    iconName: "Phone"
  },
  {
    number: 2,
    title: "Acoustic Triage",
    description: "Acoustic AI analyzes vocal biometrics & frequencies dynamically.",
    details: "Deep sound modeling isolates emotional prosody, pitch variability, jitter, and silence ratios in just 10-15 seconds.",
    iconName: "Activity"
  },
  {
    number: 3,
    title: "Immediate Protection",
    description: "Risk alerts provide instantaneous support & medical care dispatch.",
    details: "If severe depressive or clinical distress markers trigger, encrypted localized medical support circles receive rapid alert signals.",
    iconName: "Heart"
  }
];

export const mapRegions: MapRegion[] = [
  {
    id: "reg1",
    name: "Northern Region (Delhi & UP)",
    x: 48,
    y: 35,
    earlyInterventions: "14,821 Cases",
    coverage: "82% Rural Reach",
    impactType: "High-density intervention",
    status: "active"
  },
  {
    id: "reg2",
    name: "Western Region (Maharashtra)",
    x: 32,
    y: 58,
    earlyInterventions: "11,430 Cases",
    coverage: "74% Rural Reach",
    impactType: "Agricultural belt alert coverage",
    status: "active"
  },
  {
    id: "reg3",
    name: "Southern Region (Karnataka & Tamil Nadu)",
    x: 42,
    y: 78,
    earlyInterventions: "18,912 Cases",
    coverage: "89% Rural Reach",
    impactType: "High engagement network",
    status: "active"
  },
  {
    id: "reg4",
    name: "Eastern Region (West Bengal & Bihar)",
    x: 72,
    y: 44,
    earlyInterventions: "9,022 Cases",
    coverage: "68% Rural Reach",
    impactType: "Community volunteer hubs active",
    status: "monitoring"
  },
  {
    id: "reg5",
    name: "Central Region (Madhya Pradesh)",
    x: 46,
    y: 52,
    earlyInterventions: "7,819 Cases",
    coverage: "61% Rural Reach",
    impactType: "Grassroots outreach expansion",
    status: "monitoring"
  }
];

export const testimonialsList: TestimonialItem[] = [
  {
    quote: "Mental Call AI is the paradigm shift that Indian healthcare desperately needs. By combining acoustic voice AI with the humble basic cell phone, they bypassed the smartphone barrier and unlocked immediate, scalable diagnostics for millions of rural individuals who otherwise suffer in complete isolation.",
    author: "Dr. Ananya Iyer",
    role: "Director of Community Psychiatry",
    organization: "National Institute of Mental Health & Neurosciences (NIMHANS) Affiliate"
  },
  {
    quote: "Our field volunteers across rural Maharashtra had no accessible way to run immediate anxiety or depression screenings. Now, a simple landline or low-fidelity call with Mental Call AI evaluates stress levels instantly. It's a breakthrough that reaches people weeks before an acute crisis occurs.",
    author: "Rajesh Deshmukh",
    role: "President & Founder",
    organization: "Rural Health Hope Foundation, Pune"
  }
];
