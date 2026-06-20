export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge?: string;
  color: string;
}

export interface ProblemCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  metric?: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
  details: string;
  iconName: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatarUrl?: string;
}

export interface MapRegion {
  id: string;
  name: string;
  x: number; // percentage width
  y: number; // percentage height
  earlyInterventions: string;
  coverage: string;
  impactType: string;
  status: "active" | "critical" | "monitoring";
}
