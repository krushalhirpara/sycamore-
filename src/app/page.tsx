import React from 'react';
import Hero from '@/components/sections/hero';
import Trust from '@/components/sections/trust';
import ServiceGrid from '@/components/sections/service-grid';
import Process from '@/components/sections/process';
import CaseStudiesPreview from '@/components/sections/case-studies-preview';
import Testimonials from '@/components/sections/testimonials';
import FaqSection from '@/components/sections/faq-section';
import CTASection from '@/components/sections/cta-section';

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      <Hero />
      <Trust />
      <ServiceGrid />
      <Process />
      <CaseStudiesPreview />
      <Testimonials />
      <FaqSection />
      <CTASection />
    </div>
  );
}
