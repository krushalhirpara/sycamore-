'use client';

import React from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/card';
import ArrowButton from '@/components/ui/ArrowButton';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import CTASection from '@/components/sections/cta-section';

export default function ServicesIndexPage() {
  const categories = [
    { title: 'Amazon Account Management Services', slug: 'amazon-account-management', desc: 'End-to-end seller central operations, SEO listing optimizations, A+ content, and category rankings.' },
    { title: 'Amazon Advertising Agency', slug: 'amazon-advertising', desc: 'Precision Sponsored Products, Sponsored Brands, Display, and Amazon DSP programmatic media buys.' },
    { title: 'Flipkart Account Management', slug: 'flipkart-account-management', desc: 'Complete Flipkart Seller Hub catalog management, smart fulfillment, and promotion deals.' },
    { title: 'Flipkart Advertising Agency', slug: 'flipkart-advertising', desc: 'Flipkart PCA advertising management, Smart ROI ads, and brand story creation.' },
  ] as const;

  return (
    <article className="pt-28 w-full bg-white text-[#131A22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs items={[{ label: 'Services' }]} />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <SectionHeading
          title="Service Architecture"
          description="Explore Our 4 Core Marketplace Growth Architectures Encompassing 27 Specialized Capabilities."
        />
      </section>

      {/* 4 Category Blocks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        {categories.map((cat, catIndex) => {
          const categoryServices = servicesData.filter(s => s.category === cat.title);
          const isEven = catIndex % 2 === 0;

          return (
            <div key={cat.title} className="space-y-6">
              {/* Category Header Box */}
              <div className="bg-[#131A22] text-white rounded-[28px] p-6 sm:p-8 border border-[#E5E7EB] shadow-premium flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="font-heading font-black text-xs uppercase tracking-wider bg-[#FF9900] text-[#131A22] px-3 py-1 rounded border border-[#E5E7EB]">
                      Category 0{catIndex + 1}
                    </span>
                    <span className="text-xs font-bold text-white/70">
                      {categoryServices.length} Capabilities
                    </span>
                  </div>
                  <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-white" style={{ color: '#FFFFFF' }}>
                    {cat.title}
                  </h2>
                  <p className="text-xs md:text-sm text-white/80 font-medium">
                    {cat.desc}
                  </p>
                </div>

                <div className="bg-[#FF9900] text-[#131A22] px-4 py-2 rounded-xl font-heading font-extrabold text-xs uppercase border border-[#E5E7EB]">
                  {cat.title.includes('Amazon') ? 'Amazon Marketplace' : 'Flipkart Marketplace'}
                </div>
              </div>

              {/* Service Cards Grid inside Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryServices.map((service, i) => {
                  const cardVariant = isEven ? (i % 2 === 0 ? 'white' : 'glass-light') : (i % 2 === 0 ? 'lime' : 'white');
                  const isLime = cardVariant === 'lime';

                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="no-underline group block"
                      data-cursor="explore"
                    >
                        <Card
                          variant={cardVariant}
                          className="h-full flex flex-col justify-between p-6"
                        >
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-heading font-black text-[#5F6368]">
                                0{i + 1}
                              </span>
                              <ArrowButton variant="dark" size="sm" diagonal />
                            </div>
                            
                            <h3 className="font-heading font-extrabold text-lg text-[#131A22] group-hover:underline">
                              {service.title}
                            </h3>

                            <p
                              className={`text-xs font-medium line-clamp-3 leading-relaxed ${
                                isLime ? 'text-white' : 'text-[#5F6368]'
                              }`}
                              style={{ color: isLime ? '#FFFFFF' : '#5F6368' }}
                            >
                              {service.shortDescription}
                            </p>
                          </div>

                      <div className="pt-4 border-t border-[#E5E7EB]/10 mt-4 flex items-center justify-between">
                        <span className="text-[10px] font-heading font-black uppercase text-[#131A22]">
                          View Protocol
                        </span>
                        <span className="text-xs font-bold text-[#131A22]">→</span>
                      </div>
                    </Card>
                  </Link>
                );
              })}
              </div>
            </div>
          );
        })}
      </section>

      <CTASection />
    </article>
  );
}
