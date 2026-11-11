import ServiceDetailPage from '../[slug]/page';

export const metadata = {
  title: 'Cloud Solutions & DevOps Architecture | Kubernetes & AWS | SAHIX',
  description: 'Cloud migration, serverless architecture, Kubernetes clustering, CI/CD automation, and cost optimization.'
};

export default function CloudSolutionsPage() {
  return <ServiceDetailPage params={{ slug: 'cloud-solutions' }} />;
}
