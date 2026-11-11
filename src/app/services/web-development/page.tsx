import ServiceDetailPage from '../[slug]/page';

export const metadata = {
  title: 'Web Development Services | Next.js & React Apps | SAHIX',
  description: 'Ultra-fast, scalable web applications built with Next.js, React, TypeScript, and modern headless architectures.'
};

export default function WebDevPage() {
  return <ServiceDetailPage params={{ slug: 'web-development' }} />;
}
