import { Metadata } from 'next';
import { ServicesView } from '@/components/ServicesView';
import { SITE_NAME, SITE_URL } from '@/src/app/constants';

export const metadata: Metadata = {
  title: `Web Development & Design Services | ${SITE_NAME}`,
  description: 'Explore high-performance React & Next.js development, custom WordPress design (Elementor & ACF), Figma UI/UX prototyping, and Core Web Vitals SEO tuning.',
  keywords: [
    'website development using React',
    'website design in WordPress',
    'Elementor ACF developer',
    'UI UX design Figma',
    'SEO optimization India',
    'Nexify Webworks services'
  ],
  alternates: {
    canonical: `${SITE_URL}/services`
  },
  openGraph: {
    title: `Web Development & Design Services | ${SITE_NAME}`,
    description: 'High-ranking web development, React Next.js apps, WordPress Elementor ACF, and SEO services.',
    url: `${SITE_URL}/services`,
    siteName: SITE_NAME,
    type: 'website'
  }
};

export default function ServicesPage() {
  return <ServicesView />;
}
