'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '@/data/testimonials';
import SectionHeading from '@/components/ui/SectionHeading';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const active = testimonialsData[activeIndex];

  return (
    <section className="bg-[#F3F3F3] py-20 md:py-28 border-y-2 border-[#191A23] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          title="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More About Our Marketplace Growth Services."
        />

        {/* Positivus Dark Testimonials Block */}
        <div className="bg-[#191A23] text-white rounded-[36px] p-8 md:p-14 border-2 border-[#191A23] shadow-positivus relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto space-y-8"
            >
              {/* Quote Mark Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#B9FF66] border-2 border-[#191A23] flex items-center justify-center text-[#191A23]">
                <Quote size={24} />
              </div>

              {/* Quote Text */}
              <blockquote className="font-heading font-medium text-lg md:text-2xl text-white leading-relaxed italic">
                &ldquo;{active.testimonialText}&rdquo;
              </blockquote>

              {/* Client Info */}
              <div className="pt-6 border-t border-white/20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#B9FF66] text-[#191A23] font-black text-sm flex items-center justify-center border-2 border-white">
                  {active.clientName.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-base text-[#B9FF66]">
                    {active.clientName}
                  </h4>
                  <p className="text-xs text-white/70 font-semibold">
                    {active.role}, <span className="text-white font-bold">{active.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Navigation */}
          <div className="flex items-center justify-between mt-12 max-w-3xl mx-auto pt-6 border-t border-white/10">
            {/* Pagination Dots */}
            <div className="flex gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-3 rounded-full transition-all duration-300 cursor-pointer border border-white/40 ${
                    activeIndex === idx ? 'w-8 bg-[#B9FF66]' : 'w-3 bg-white/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border-2 border-white bg-[#191A23] hover:bg-[#B9FF66] hover:text-[#191A23] flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border-2 border-white bg-[#191A23] hover:bg-[#B9FF66] hover:text-[#191A23] flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
