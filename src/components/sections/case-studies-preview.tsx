'use client';

import React from 'react';
import Link from 'next/link';
import { caseStudiesData } from '@/data/case-studies';
import SectionHeading from '@/components/ui/SectionHeading';
import ArrowButton from '@/components/ui/ArrowButton';

export default function CaseStudiesPreview() {
  const previews = caseStudiesData.slice(0, 3);

  return (
    <section className="bg-white py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          title="Case Studies"
          description="Explore How We Have Helped Our Clients Achieve Explosive Revenue Growth on Amazon and Flipkart."
        />

        {/* Positivus Dark Container Card */}
        <div className="bg-[#191A23] text-white rounded-[36px] p-8 md:p-12 border-2 border-[#191A23] shadow-positivus">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/20">
            {previews.map((cs, i) => (
              <div
                key={cs.slug}
                className={`flex flex-col justify-between space-y-6 ${
                  i !== 0 ? 'pt-8 lg:pt-0 lg:pl-8' : ''
                }`}
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-heading font-black uppercase tracking-wider bg-[#B9FF66] text-[#191A23] px-2.5 py-1 rounded border border-[#191A23] inline-block">
                    {cs.marketplace} • {cs.clientName}
                  </span>
                  
                  <p className="text-sm md:text-base text-white/90 leading-relaxed font-medium">
                    {cs.tagline}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 my-2">
                  {cs.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <span className="block font-heading text-lg font-black text-[#B9FF66]">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-white/60 font-semibold uppercase tracking-wider">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group flex items-center gap-3 no-underline pt-2"
                  data-cursor="view"
                >
                  <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#B9FF66] group-hover:underline">
                    Learn More
                  </span>
                  <ArrowButton variant="lime" size="sm" diagonal />
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
