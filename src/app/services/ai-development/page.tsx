import ServiceDetailPage from '../[slug]/page';

export const metadata = {
  title: 'AI & Machine Learning Development | LLM & RAG | SAHIX',
  description: 'Custom LLM integrations, predictive analytics models, computer vision, and autonomous agent workflows.'
};

export default function AiDevPage() {
  return <ServiceDetailPage params={{ slug: 'ai-development' }} />;
}
