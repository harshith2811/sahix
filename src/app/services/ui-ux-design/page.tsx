import ServiceDetailPage from '../[slug]/page';

export const metadata = {
  title: 'UI/UX Design Systems & Interactive Prototyping | SAHIX',
  description: 'Intuitive interface design, user journey mapping, tokenized Figma design systems, and pixel-perfect interactive prototypes.'
};

export default function UiUxPage() {
  return <ServiceDetailPage params={{ slug: 'ui-ux-design' }} />;
}
