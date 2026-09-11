import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Sycamore East SPN',
  description: 'Terms and conditions of service for Sycamore East SPN.',
  alternates: {
    canonical: '/terms-and-conditions',
  },
};

export default function TermsPage() {
  return (
    <article className="pt-28 pb-20 w-full bg-white text-[#131A22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <SectionHeading title="Terms & Conditions" description="Last updated: January 2026" />

        <Card variant="white" className="space-y-6 text-[#131A22] font-medium leading-relaxed text-sm sm:text-base">
          <h2 className="font-heading font-extrabold text-xl">1. Acceptance of Terms</h2>
          <p>
            By accessing the Sycamore East SPN website or engaging our Amazon and Flipkart marketplace services, you agree to comply with and be bound by these terms and conditions.
          </p>

          <h2 className="font-heading font-extrabold text-xl">2. Scope of Services</h2>
          <p>
            Sycamore East SPN provides Amazon SPN and Flipkart seller account management, PPC optimization, SEO cataloging, and growth consulting. All service deliverables are executed in compliance with official platform Terms of Service.
          </p>

          <h2 className="font-heading font-extrabold text-xl">3. Intellectual Property</h2>
          <p>
            All custom content, graphics, and strategy roadmaps created specifically for your seller account remain your proprietary property upon settlement of service fees.
          </p>
        </Card>
      </div>
    </article>
  );
}
