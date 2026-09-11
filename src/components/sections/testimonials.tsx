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
    <section className="bg-[#F7F7F7] py-20 md:py-28 border-y-2 border-[#E5E7EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          title="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More About Our Marketplace Growth Services."
        />

        {/* Testimonials White Card Block */}
        <div className="bg-white text-[#131A22] rounded-[36px] p-8 md:p-14 border border-[#E5E7EB] shadow-premium relative overflow-hidden">
          
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
              <div className="w-12 h-12 rounded-xl bg-[#FFF4E5] border border-[#FF9900] flex items-center justify-center text-[#FF9900]">
                <Quote size={24} />
              </div>

              {/* Quote Text */}
              <blockquote className="font-heading font-medium text-lg md:text-2xl text-[#131A22] leading-relaxed italic">
                &ldquo;{active.testimonialText}&rdquo;
              </blockquote>

              {/* Client Info */}
              <div className="pt-6 border-t border-[#E5E7EB] flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF9900] text-[#131A22] font-black text-sm flex items-center justify-center border-2 border-white ring-2 ring-[#FF9900]">
                  {active.clientName.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-base text-[#131A22]">
                    {active.clientName}
                  </h4>
                  <p className="text-xs text-[#5F6368] font-semibold">
                    {active.role}, <span className="text-[#131A22] font-bold">{active.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Navigation */}
          <div className="flex items-center justify-between mt-12 max-w-3xl mx-auto pt-6 border-t border-[#E5E7EB]">
            {/* Pagination Dots */}
            <div className="flex gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-3 rounded-full transition-all duration-300 cursor-pointer border border-[#E5E7EB] ${
                    activeIndex === idx ? 'w-8 bg-[#FF9900] border-[#FF9900]' : 'w-3 bg-[#E5E7EB]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-[#E5E7EB] bg-[#131A22] hover:bg-[#FF9900] hover:text-[#131A22] flex items-center justify-center text-white transition-colors cursor-pointer shadow-xs"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-[#E5E7EB] bg-[#131A22] hover:bg-[#FF9900] hover:text-[#131A22] flex items-center justify-center text-white transition-colors cursor-pointer shadow-xs"
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
