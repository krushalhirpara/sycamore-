'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/button';
import { HeroIllustration } from '@/components/ui/PositivusIllustrations';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Positivus Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FF9900] border border-[#E5E7EB] font-heading text-xs font-black uppercase tracking-wider text-[#131A22] shadow-xs">
              <Sparkles size={13} />
              Amazon & Flipkart Marketplace Growth
            </div>

            {/* H1 Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.25rem] font-extrabold tracking-tight text-[#131A22] leading-[1.2]">
              <span className="block text-[#131A22]">Grow Your Brand.</span>
              <span className="inline-block mt-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-2xl sm:rounded-full bg-[#FFF4E5] border-2 border-[#FF9900] text-[#131A22] shadow-xs">
                Scale Your Marketplace.
              </span>
            </h1>

            {/* Body Copy */}
            <p className="text-[#5F6368] text-base sm:text-lg md:text-xl font-medium max-w-xl leading-relaxed">
              Sycamore East SPN powers D2C brand revenue across Amazon and Flipkart through data-driven account management, precision SEO, algorithmic PPC, and dedicated operations support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Button href="/contact" variant="primary" size="lg">
                Book a Consultation
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>
            
            {/* Trust statement */}
            <div className="pt-6 border-t-2 border-[#E5E7EB]/10 mt-8 flex flex-wrap items-center gap-6 text-xs text-[#5F6368] font-bold">
              <span className="flex items-center gap-1.5 text-[#131A22]">⚡ Amazon SPN Certified Specialists</span>
              <span className="flex items-center gap-1.5 text-[#131A22]">🛡️ 100% Policy-Safe Account Health</span>
              <span className="flex items-center gap-1.5 text-[#131A22]">📈 Avg. 42% ROI Improvement</span>
            </div>

          </motion.div>

          {/* Right Column: Original Positivus Vector Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <HeroIllustration />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
