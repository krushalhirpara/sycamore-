'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Store, Zap } from 'lucide-react';
import Card from '@/components/ui/card';

export default function ServicesIntro() {
  return (
    <section className="bg-slate-50 py-20 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
            Dual-Marketplace Supremacy:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-cyan">
              Amazon & Flipkart
            </span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Amazon and Flipkart demand entirely different operations, SEO, and ad strategy. Sycamore builds dedicated funnels for each retail index to guarantee peak organic placement and sales growth.
          </p>
        </div>

        {/* Dual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Amazon playbook card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="glow-amazon" className="h-full flex flex-col justify-between" hoverEffect>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center text-brand-gold">
                    <ShoppingBag size={20} />
                  </div>
                  <h3 className="font-heading font-extrabold text-xl text-slate-900">
                    The Amazon Playbook
                  </h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Focuses on the complex A10 search ranking algorithm. We master listing conversions, A+ content, parent-child variation listings, and multi-funnel Sponsored Ads (PPC) to outrank mature competitors and secure Buy Box supremacy.
                </p>
                <ul className="space-y-2 text-xs text-slate-600 pl-0 list-none">
                  <li className="flex items-center gap-2">✔️ Sponsored Products, Brands, and Video ads</li>
                  <li className="flex items-center gap-2">✔️ Strict case logs & listing suppression resolution</li>
                  <li className="flex items-center gap-2">✔️ Backend search term indexing (250 bytes)</li>
                </ul>
              </div>
              <div className="text-amber-600 text-xs font-bold font-heading uppercase tracking-wider mt-6 flex items-center gap-1">
                Amazon Certified Agency ⚡
              </div>
            </Card>
          </motion.div>

          {/* Flipkart playbook card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="glow-flipkart" className="h-full flex flex-col justify-between" hoverEffect>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center text-brand-cyan">
                    <Store size={20} />
                  </div>
                  <h3 className="font-heading font-extrabold text-xl text-slate-900">
                    The Flipkart Playbook
                  </h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Tailored to the unique consumer browsing demographics of Flipkart. We manage high-speed Catalog Quality Checks (QC), local keyword mapping, Flipkart ads (PLA), and Smart/Express fulfillment settings to rank on page one.
                </p>
                <ul className="space-y-2 text-xs text-slate-600 pl-0 list-none">
                  <li className="flex items-center gap-2">✔️ Instant catalog QC approval resolution</li>
                  <li className="flex items-center gap-2">✔️ Smart & Assured Badge operational setup</li>
                  <li className="flex items-center gap-2">✔️ Flipkart PLA & PCA advertising bidding</li>
                </ul>
              </div>
              <div className="text-cyan-600 text-xs font-bold font-heading uppercase tracking-wider mt-6 flex items-center gap-1">
                Flipkart Growth Partner ⚡
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
