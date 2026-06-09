export interface FeatureItem {
  id: string;
  name: string;
  description: string;
  category: string;
}

export interface MetricItem {
  value: string;
  label: string;
  description: string;
}

export interface TrainingNode {
  id: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CareerPathStep {
  title: string;
  items: string[];
}
