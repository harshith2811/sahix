import ServiceDetailPage from '../[slug]/page';

export const metadata = {
  title: 'Mobile App Development | iOS & Android | SAHIX',
  description: 'Native iOS & Android apps, plus high-performance cross-platform Flutter and React Native solutions.'
};

export default function MobileDevPage() {
  return <ServiceDetailPage params={{ slug: 'mobile-app-development' }} />;
}
