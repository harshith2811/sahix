import ServiceDetailPage from '../[slug]/page';

export const metadata = {
  title: 'Custom Software Development | Bespoke Enterprise Systems | SAHIX',
  description: 'Bespoke enterprise software, distributed systems, API ecosystems, and core business platforms.'
};

export default function CustomSoftwarePage() {
  return <ServiceDetailPage params={{ slug: 'custom-software-development' }} />;
}
