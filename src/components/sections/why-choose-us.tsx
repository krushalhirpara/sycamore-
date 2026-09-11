'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Users } from 'lucide-react';
import { MarketplaceNodesIllustration } from '@/components/original-illustration';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <Users className="text-[#131A22]" size={22} />,
      title: 'Dedicated Marketplace Specialists',
      description: 'Your account is managed by certified platform specialists (Amazon SPN & Flipkart Ads practitioners) with 5+ years of active experience—not junior generalists.',
    },
    {
      icon: <Target className="text-[#FF9900]" size={22} />,
      title: 'Conversion-Led Ads & SEO',
      description: 'We do not just target high-volume search clicks. We align listing copies, A+ content layouts, and PPC keywords to optimize for buyer conversion rate and lower ad ACoS.',
    },
    {
      icon: <Shield className="text-[#131A22]" size={22} />,
      title: '100% Policy-Safe Account Health',
      description: 'We follow strict platform Terms of Service to resolve listing errors, brand registry ownership hijackings, and inventory check-in delays safely without risk of account suspensions.',
    },
    {
      icon: <Zap className="text-[#FF9900]" size={22} />,
      title: 'Hyper-Responsive Operational Support',
      description: 'Listing suppression? Brand hijack? Out of stock alert? Our team monitors your seller central daily and answers queries/resolves logs in under 4 hours.',
    },
  ];

  return (
    <section className="bg-[#F7F7F7] py-20 relative border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left illustration & title */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#131A22] leading-tight">
              Smarter Execution. Better Profitability.
            </h2>
            <p className="text-[#5F6368] text-sm sm:text-base leading-relaxed font-medium">
              We connect D2C brand catalogs with marketplace customers. By deploying specialized operations and ads setups, Sycamore acts as your expert in-house e-commerce team.
            </p>
            <MarketplaceNodesIllustration />
          </div>

          {/* Right benefits list */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-2xl border border-[#E5E7EB] bg-white hover:border-[#FF9900] shadow-premium transition-all duration-300 space-y-3"
              >
                <div className="h-10 w-10 rounded-xl bg-[#FFF4E5] flex items-center justify-center border border-[#FF9900]/30">
                  {benefit.icon}
                </div>
                <h3 className="font-heading font-bold text-base text-[#131A22]">
                  {benefit.title}
                </h3>
                <p className="text-[#5F6368] text-xs md:text-sm leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
