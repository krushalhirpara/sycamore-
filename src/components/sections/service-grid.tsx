'use client';

import React from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import Card from '@/components/ui/card';
import SectionHeading from '@/components/ui/SectionHeading';
import ArrowButton from '@/components/ui/ArrowButton';
import { ServiceIllustration } from '@/components/ui/PositivusIllustrations';

export default function ServiceGrid() {
  const cardVariants: ('white' | 'dark' | 'lime')[] = ['lime', 'dark', 'white', 'lime', 'white', 'dark'];

  return (
    <section className="bg-white py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Positivus Section Heading */}
        <SectionHeading
          title="Services"
          description="At our digital agency, we offer 27 end-to-end services across Amazon and Flipkart to help your brand achieve profitable marketplace growth."
        />

        {/* Positivus Editorial Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.slice(0, 8).map((service, index) => {
            const variant = cardVariants[index % cardVariants.length];
            const isDark = variant === 'dark';
            const isLime = variant === 'lime';

            let type: 'seo' | 'ppc' | 'account' | 'consulting' = 'account';
            if (service.title.toLowerCase().includes('seo') || service.title.toLowerCase().includes('listing')) type = 'seo';
            if (service.title.toLowerCase().includes('ppc') || service.title.toLowerCase().includes('advertising') || service.title.toLowerCase().includes('dsp')) type = 'ppc';
            if (service.title.toLowerCase().includes('consulting') || service.title.toLowerCase().includes('intelligence')) type = 'consulting';

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="no-underline group block"
                data-cursor="explore"
              >
                <Card
                  variant={variant}
                  className="h-full flex flex-col justify-between p-8 relative overflow-hidden"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-3 max-w-[65%]">
                      <span
                        className={`text-[10px] font-heading font-black uppercase tracking-wider px-2.5 py-1 rounded-md border border-[#E5E7EB] ${
                          isDark
                            ? 'bg-[#FF9900] text-[#131A22]'
                            : isLime
                            ? 'bg-white text-[#131A22]'
                            : 'bg-[#FF9900] text-[#131A22]'
                        }`}
                      >
                        {service.category.includes('Amazon') ? 'Amazon' : 'Flipkart'}
                      </span>
                      
                      <h3
                        className={`font-heading font-extrabold text-2xl md:text-3xl leading-snug tracking-tight ${
                          isDark ? 'text-white' : 'text-[#131A22]'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    {/* Vector Illustration graphic */}
                    <ServiceIllustration type={type} />
                  </div>

                  <p
                    className={`text-xs md:text-sm font-medium leading-relaxed my-6 ${
                      isDark ? 'text-white/80' : 'text-[#5F6368]'
                    }`}
                  >
                    {service.shortDescription}
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-[#E5E7EB]/20">
                    <ArrowButton
                      variant={isDark ? 'lime' : 'dark'}
                      size="md"
                      diagonal
                    />
                    <span
                      className={`text-xs font-heading font-extrabold uppercase tracking-wider ${
                        isDark ? 'text-white group-hover:text-[#FF9900]' : 'text-[#131A22]'
                      }`}
                    >
                      Learn More
                    </span>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* View All Services CTA Button */}
        <div className="text-center mt-12">
          <Link href="/services" className="no-underline">
            <div className="inline-flex items-center gap-3 bg-[#131A22] text-white px-8 py-4 rounded-2xl border border-[#E5E7EB] font-heading font-extrabold text-base hover:bg-[#FF9900] hover:text-[#131A22] transition-all shadow-premium group">
              <span>View All 27 Marketplace Services</span>
              <ArrowButton variant="lime" size="sm" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
