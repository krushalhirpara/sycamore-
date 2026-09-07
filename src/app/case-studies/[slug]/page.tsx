import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import { caseStudiesData } from '@/data/case-studies';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/sections/cta-section';

type Params = Promise<{ slug: string }>;

interface PageProps {
  params: Params;
}

export async function generateStaticParams() {
  return caseStudiesData.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudiesData.find((c) => c.slug === slug);
  if (!study) return { title: 'Case Study Not Found | Sycamore East SPN' };

  return {
    title: `${study.clientName} Growth Story | Sycamore East SPN`,
    description: study.tagline,
    alternates: {
      canonical: `/case-studies/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudiesData.find((c) => c.slug === slug);
  if (!study) notFound();

  return (
    <article className="pt-28 pb-16 w-full bg-white text-[#191A23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Breadcrumbs
          items={[
            { label: 'Case Studies', href: '/case-studies' },
            { label: study.clientName },
          ]}
        />
      </div>

      {/* Case Study Hero Header & Key Metrics */}
      <section className="py-12 md:py-16 bg-[#F3F3F3] border-y-2 border-[#191A23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start gap-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-heading font-black uppercase tracking-wider bg-[#B9FF66] text-[#191A23] border border-[#191A23]">
                {study.marketplace} case study • {study.clientName}
              </span>
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#191A23] tracking-tight leading-tight">
                {study.tagline}
              </h1>
            </div>

            <div className="lg:col-span-4 w-full">
              <Card variant="dark" className="space-y-4">
                <span className="text-xs font-heading font-black uppercase tracking-wider text-[#B9FF66]">
                  Verified Impact
                </span>
                <div className="grid grid-cols-1 gap-4">
                  {study.metrics.map((m, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-xs text-white/70 font-semibold">{m.label}</span>
                      <span className="font-heading font-black text-2xl text-[#B9FF66]">{m.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Challenge, Solution, Result Sections */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Card variant="white" className="space-y-3">
          <span className="text-xs font-heading font-black uppercase tracking-wider bg-red-100 text-red-600 px-3 py-1 rounded border border-[#191A23] inline-block">
            01. The Challenge
          </span>
          <p className="text-base text-[#191A23] leading-relaxed font-medium pt-2">
            {study.challenge}
          </p>
        </Card>

        <Card variant="lime" className="space-y-3">
          <span className="text-xs font-heading font-black uppercase tracking-wider bg-[#191A23] text-white px-3 py-1 rounded inline-block">
            02. Our Strategy & Solution
          </span>
          <p className="text-base text-[#191A23] leading-relaxed font-medium pt-2">
            {study.solution}
          </p>
        </Card>

        <Card variant="white" className="space-y-3">
          <span className="text-xs font-heading font-black uppercase tracking-wider bg-[#B9FF66] text-[#191A23] px-3 py-1 rounded border border-[#191A23] inline-block">
            03. The Results
          </span>
          <p className="text-base text-[#191A23] leading-relaxed font-medium pt-2">
            {study.result}
          </p>
          <div className="bg-[#F3F3F3] p-6 rounded-2xl border-2 border-[#191A23] mt-4">
            <h4 className="font-heading font-extrabold text-sm text-[#191A23] mb-2">Implementation Summary</h4>
            <p className="text-xs text-[#666666] leading-relaxed font-medium">{study.fullStory}</p>
          </div>
        </Card>

        {study.deliverables.length > 0 && (
          <Card variant="glass-light" className="space-y-4">
            <h4 className="font-heading font-extrabold text-sm text-[#191A23] uppercase tracking-wider">Key Execution Deliverables</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {study.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-[#191A23]">
                  <CheckCircle2 size={16} className="text-[#191A23] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>
        )}
      </section>

      {/* Footer Navigation */}
      <section className="py-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t-2 border-[#191A23]">
        <div className="flex items-center justify-between">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-heading font-bold text-[#191A23] hover:underline no-underline"
          >
            <ChevronLeft size={16} />
            <span>All Case Studies</span>
          </Link>

          <Button href="/contact" variant="primary" size="md">
            Apply to Your Brand
          </Button>
        </div>
      </section>

      <CTASection />
    </article>
  );
}
