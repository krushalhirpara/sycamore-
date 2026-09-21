import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { servicesData } from '@/data/services';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import SectionHeading from '@/components/ui/SectionHeading';
import ArrowButton from '@/components/ui/ArrowButton';
import { ServiceIllustration } from '@/components/ui/PositivusIllustrations';
import CTASection from '@/components/sections/cta-section';
import { CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';

const slugAliases: Record<string, string> = {
  'amazon-seo': 'amazon-seo-services',
  'amazon-product-description': 'amazon-product-description-writing',
  'amazon-consulting': 'amazon-consulting-services',
  'amazon-a-plus-content': 'amazon-aplus-content',
  'amazon-aplus-content': 'amazon-a-plus-content',
  'amazon-dsp': 'amazon-dsp-advertising',
  'amazon-ppc': 'amazon-ppc-management',
  'flipkart-seller-hub': 'flipkart-seller-hub-management',
  'flipkart-pca': 'flipkart-pca-management',
};

function resolveSlug(rawSlug: string) {
  if (slugAliases[rawSlug]) return slugAliases[rawSlug];
  return rawSlug;
}

type Params = Promise<{ slug: string }>;

interface PageProps {
  params: Params;
}

export async function generateStaticParams() {
  const allSlugs = new Set<string>();
  servicesData.forEach((s) => {
    allSlugs.add(s.slug);
  });
  Object.keys(slugAliases).forEach((alias) => {
    allSlugs.add(alias);
  });
  return Array.from(allSlugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const targetSlug = resolveSlug(rawSlug);
  const service = servicesData.find((s) => s.slug === targetSlug || s.slug === rawSlug);
  if (!service) return { title: 'Service Not Found | Sycamore East SPN' };

  return {
    title: `${service.title} | Sycamore East SPN`,
    description: service.seoDescription,
    alternates: {
      canonical: `/services/${rawSlug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug: rawSlug } = await params;
  const targetSlug = resolveSlug(rawSlug);
  const service = servicesData.find((s) => s.slug === targetSlug || s.slug === rawSlug);
  if (!service) notFound();

  let illustrationType: 'seo' | 'ppc' | 'account' | 'consulting' = 'account';
  if (service.title.toLowerCase().includes('seo') || service.title.toLowerCase().includes('listing')) illustrationType = 'seo';
  if (service.title.toLowerCase().includes('ppc') || service.title.toLowerCase().includes('advertising') || service.title.toLowerCase().includes('dsp')) illustrationType = 'ppc';
  if (service.title.toLowerCase().includes('consulting') || service.title.toLowerCase().includes('intelligence')) illustrationType = 'consulting';

  const relatedServices = servicesData
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <article className="pt-28 w-full bg-white text-[#131A22]">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: service.title },
          ]}
        />
      </div>

      {/* Service Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block bg-[#FFF4E5] text-[#131A22] border border-[#FF9900] px-3 py-1 rounded-md text-xs font-heading font-black uppercase tracking-wider shadow-xs">
              {service.category}
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-[#131A22]">
              {service.heroHeading}
            </h1>

            <p className="text-[#5F6368] text-base sm:text-xl font-medium leading-relaxed max-w-xl">
              {service.heroDescription}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Book a Consultation
              </Button>
              <Button href="#deliverables" variant="secondary" size="lg">
                View Deliverables
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-[#131A22] p-8 rounded-[36px] border border-[#E5E7EB] shadow-premium flex flex-col items-center justify-center gap-6 text-center text-white">
              <ServiceIllustration type={illustrationType} />
              <div className="space-y-2">
                <span className="text-xs font-heading font-black uppercase tracking-wider bg-[#FF9900] text-[#131A22] px-3 py-1 rounded">
                  Sycamore East SPN Protocol
                </span>
                <h3 className="font-heading font-extrabold text-xl text-white" style={{ color: '#FFFFFF' }}>{service.title}</h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-[#F7F7F7] border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Problem"
            description="Common Marketplace Pitfalls That Drain Profits and Suppress Organic Reach."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Sub-Optimal Organic Indexing', desc: 'Missing backend keywords and weak indexing algorithms prevent buyers from finding your catalog.' },
              { title: 'Wasted PPC Ad Spend', desc: 'High ACoS and unoptimized broad keyphrase bidding drain campaign budgets without converting buyers.' },
              { title: 'Suppressed Conversion Rates', desc: 'Weak bullet points, unoptimized images, and missing A+ graphics hurt conversion velocity.' }
            ].map((prob, i) => (
              <Card key={i} variant="white" className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 border border-[#DC2626]/20 flex items-center justify-center text-[#DC2626]">
                  <AlertTriangle size={20} />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-[#131A22]">{prob.title}</h3>
                <p className="text-xs sm:text-sm text-[#5F6368] font-medium leading-relaxed">{prob.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="lime" className="p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#131A22] text-[#FF9900] flex items-center justify-center">
                <Lightbulb size={20} />
              </div>
              <span className="text-xs font-heading font-black uppercase tracking-wider bg-[#131A22] text-white px-3 py-1 rounded">
                Our Solution Architecture
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl md:text-4xl text-[#131A22]">
              How Sycamore East SPN Solves It
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-[#E5E7EB] shadow-xs">
                  <CheckCircle2 size={20} className="text-[#131A22] shrink-0 mt-0.5" />
                  <span className="font-heading font-extrabold text-sm text-[#131A22]">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Deliverables Grid */}
      <section id="deliverables" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Deliverables"
          description="Specific Technical Actions & Deliverables Included in This Service Package."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.features.map((feature, i) => (
            <Card key={i} variant="glass-light" className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#131A22] text-[#FF9900] font-heading font-black text-sm flex items-center justify-center shrink-0">
                0{i + 1}
              </div>
              <span className="font-heading font-extrabold text-base text-[#131A22]">{feature}</span>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#F7F7F7] border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Execution Protocol"
            description="Our Step-by-Step Implementation Timeline."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <Card key={i} variant="white" className="space-y-3">
                <span className="text-2xl font-heading font-black text-[#FF9900]">0{i + 1}</span>
                <h3 className="font-heading font-extrabold text-base text-[#131A22]">{step}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Related Capabilities" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link key={rel.slug} href={`/services/${rel.slug}`} className="no-underline group">
                <Card variant="white" className="space-y-3">
                  <h4 className="font-heading font-extrabold text-lg text-[#131A22] group-hover:underline">{rel.title}</h4>
                  <p className="text-xs text-[#5F6368] line-clamp-2 font-medium">{rel.shortDescription}</p>
                  <ArrowButton variant="dark" size="sm" diagonal />
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTASection />
    </article>
  );
}
