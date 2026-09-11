'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { faqsData } from '@/data/faqs';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          title="FAQ"
          description="Frequently Asked Questions About Our Amazon & Flipkart Management Services."
        />

        {/* Positivus FAQ Accordion Stack */}
        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                onClick={() => toggleFaq(index)}
                className={`rounded-[24px] border transition-all duration-300 overflow-hidden cursor-pointer shadow-premium ${
                  isOpen ? 'bg-white border-[#FF9900] ring-1 ring-[#FF9900]/20' : 'bg-white border-[#E5E7EB] hover:bg-[#FFF4E5]/40 hover:border-[#FF9900]/40'
                }`}
              >
                {/* Question Row */}
                <div className="p-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-heading font-black text-xl text-[#FF9900]">
                      0{index + 1}
                    </span>
                    <h3 className={`font-heading font-extrabold text-base sm:text-lg transition-colors ${
                      isOpen ? 'text-[#FF9900]' : 'text-[#131A22]'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle Plus/Minus */}
                  <div className={`w-8 h-8 rounded-full border transition-colors flex items-center justify-center shrink-0 ${
                    isOpen ? 'border-[#FF9900] bg-[#FFF4E5] text-[#FF9900]' : 'border-[#E5E7EB] bg-white text-[#131A22]'
                  }`}>
                    {isOpen ? <Minus size={16} className="text-[#FF9900]" /> : <Plus size={16} className="text-[#131A22]" />}
                  </div>
                </div>

                {/* Answer Box */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-6 border-t border-[#E5E7EB] pt-4"
                    >
                      <p className="text-sm font-medium text-[#5F6368] leading-relaxed">
                        {faq.answer}
                      </p>
                      <div className="mt-3">
                        <span className="text-[10px] font-heading font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#FFF4E5] text-[#131A22] border border-[#FF9900]">
                          {faq.category}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
