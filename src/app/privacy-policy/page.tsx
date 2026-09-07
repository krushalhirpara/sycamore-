import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sycamore East SPN',
  description: 'Privacy policy and data handling guidelines for Sycamore East SPN.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="pt-28 pb-20 w-full bg-white text-[#191A23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <SectionHeading title="Privacy Policy" description="Last updated: January 2026" />

        <Card variant="white" className="space-y-6 text-[#191A23] font-medium leading-relaxed text-sm sm:text-base">
          <h2 className="font-heading font-extrabold text-xl">1. Information We Collect</h2>
          <p>
            At Sycamore East SPN, we collect information you provide directly to us when requesting a free marketplace audit, booking a consultation, or contacting our team. This includes your name, email address, phone number, company name, and marketplace store details.
          </p>

          <h2 className="font-heading font-extrabold text-xl">2. How We Use Your Information</h2>
          <p>
            We use the information collected to evaluate your Amazon and Flipkart account performance, generate custom growth audits, deliver account management services, and communicate with you regarding strategy updates.
          </p>

          <h2 className="font-heading font-extrabold text-xl">3. Data Security & Confidentiality</h2>
          <p>
            We strictly protect your seller account metrics, credentials, and API access tokens. We do not sell, rent, or trade your data to third parties under any circumstances.
          </p>
        </Card>
      </div>
    </article>
  );
}
