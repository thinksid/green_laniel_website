// Type definitions for translation objects
// Provides compile-time safety for internationalized content

export interface CaseStudy {
  title: string;
  quote: string;
  summary: string;
  tags: {
    crop: string;
    size: string;
    useCase: string;
  };
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PlanStep {
  number: string;
  title: string;
  description: string;
}

export interface ValueAddItem {
  title: string;
  description: string;
}

export interface Subheading {
  before: string;
  linkText: string;
  after: string;
}

export interface StatsItem {
  value: string;
  label: string;
}

export interface NavigationLink {
  href: string;
  label: string;
}
