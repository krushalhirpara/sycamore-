'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { Plus, Minus, CheckCircle2 } from 'lucide-react';
import { processData } from '@/data/process';

export default function Process() {
  const [openStep, setOpenStep] = useState<string>('01');

  const toggleStep = (step: string) => {
    setOpenStep(openStep === step ? '' : step);
  };

  return (
    <section className="bg-[#F3F3F3] py-20 md:py-28 border-y-2 border-[#191A23] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          title="Our Working Process"
          description="Step-by-Step Guide to Achieving Your Business Goals on Amazon and Flipkart."
        />

        {/* Process Accordion Cards */}
        <div className="space-y-6">
          {processData.map((item) => {
            const isOpen = openStep === item.step;

            return (
              <div
                key={item.step}
                onClick={() => toggleStep(item.step)}
                className={`rounded-[30px] border-2 border-[#191A23] transition-all duration-300 overflow-hidden cursor-pointer shadow-positivus ${
                  isOpen ? 'bg-[#B9FF66]' : 'bg-white hover:bg-slate-50'
                }`}
              >
                {/* Header Row */}
                <div className="p-6 sm:p-8 flex items-center justify-between gap-6">
                  <div className="flex items-center gap-6 sm:gap-8">
                    <span className="font-heading font-black text-3xl sm:text-5xl text-[#191A23]">
                      {item.step}
                    </span>
                    <h3 className="font-heading font-extrabold text-lg sm:text-2xl text-[#191A23]">
                      {item.title}
                    </h3>
                  </div>

                  {/* Circular Plus/Minus Toggle Icon */}
                  <div className="w-10 h-10 rounded-full border-2 border-[#191A23] bg-white flex items-center justify-center shrink-0">
                    {isOpen ? (
                      <Minus size={20} className="text-[#191A23]" />
                    ) : (
                      <Plus size={20} className="text-[#191A23]" />
                    )}
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 sm:px-8 sm:pb-8 border-t-2 border-[#191A23] pt-6"
                    >
                      <p className="text-sm sm:text-base font-medium text-[#191A23] leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {item.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#191A23]">
                            <CheckCircle2 size={16} className="text-[#191A23] shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
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
