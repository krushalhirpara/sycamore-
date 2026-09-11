'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 w-full bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#131A22] rounded-[36px] border border-[#232F3E] p-8 md:p-16 shadow-premium relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Subtle Orange Radial Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF9900]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text & Action */}
          <div className="lg:col-span-7 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFF4E5] border border-[#FF9900] text-xs font-heading font-black uppercase tracking-wider text-[#131A22] shadow-xs">
              <Sparkles size={13} className="text-[#FF9900]" />
              Let&apos;s Scale Your Marketplace Revenues
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Ready to Accelerate Your Amazon & Flipkart Sales?
            </h2>

            <p className="text-[#D1D5DB] text-sm sm:text-base font-medium leading-relaxed max-w-xl">
              Contact us today to receive a complimentary marketplace audit. Our certified team will evaluate your catalog listings, keyword positions, and active campaign efficiencies within 24 hours.
            </p>

            <div className="pt-2">
              <Button href="/contact" variant="primary" size="lg" className="gap-3">
                <span>Get Your Free Proposal</span>
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>

          {/* Right Vector Illustration */}
          <div className="lg:col-span-5 flex justify-center relative z-10">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 bg-[#FF9900] rounded-[32px] border border-[#FF9900] shadow-premium p-6 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-center">
                <span className="text-xs font-black uppercase text-[#131A22]">Marketplace Growth</span>
                <div className="w-4 h-4 rounded-full bg-[#131A22]" />
              </div>

              <div className="my-auto space-y-3 text-center">
                <div className="inline-block bg-white text-[#131A22] border border-[#E5E7EB] rounded-2xl px-4 py-2 font-heading font-black text-2xl shadow-premium">
                  +150 Brands
                </div>
                <p className="text-xs font-extrabold text-[#131A22]">Managed Across India</p>
              </div>

              <div className="bg-[#131A22] text-white p-3 rounded-xl border border-[#232F3E] flex items-center justify-between text-xs font-bold">
                <span>Audit SLA</span>
                <span className="text-[#FF9900]">24 Hours</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
