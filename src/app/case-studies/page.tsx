import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import CaseStudiesPreview from '@/components/sections/case-studies-preview';
import CTASection from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'Case Studies | Sycamore East SPN Growth Results',
  description: 'Explore how Sycamore East SPN helps D2C seller brands reduce ACoS, optimize catalog SEO, and accelerate sales on Amazon and Flipkart.',
  alternates: {
    canonical: '/case-studies',
  },
};

export default function CaseStudiesIndexPage() {
  return (
    <article className="pt-28 w-full bg-white text-[#191A23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs items={[{ label: 'Case Studies' }]} />
      </div>

      <CaseStudiesPreview />

      <CTASection />
    </article>
  );
}
