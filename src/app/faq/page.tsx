import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import FaqSection from '@/components/sections/faq-section';
import CTASection from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'FAQ | Sycamore East SPN Growth Agency',
  description: 'Frequently asked questions about Sycamore East SPN Amazon and Flipkart account management, PPC advertising, and catalog SEO services.',
  alternates: {
    canonical: '/faq',
  },
};

export default function FAQPage() {
  return (
    <article className="pt-28 w-full bg-white text-[#131A22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs items={[{ label: 'FAQ' }]} />
      </div>

      <FaqSection />

      <CTASection />
    </article>
  );
}
