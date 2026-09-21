'use client';

import React from 'react';

export default function Trust() {
  const brands = [
    { name: 'FRESH FUSION', industry: 'Home & Kitchen' },
    { name: 'REVOLUTION ENTERPRISE', industry: 'Fire Safety' },
    { name: 'VISHISHTADVAITA', industry: 'Home & Kitchen' },
    { name: 'JcTop', industry: 'Tools' },
    { name: 'KITVORA', industry: 'Home & Kitchen' },
    { name: 'OMNIDEEP', industry: 'Home & Kitchen' },
    { name: 'Zelvaa', industry: 'Fire Safety' },
    { name: 'Skyperline', industry: 'Home & Kitchen' },
    { name: 'DAIFURONGE', industry: 'Home & Kitchen' },
    { name: 'ORLISSE', industry: 'Silver Jewellery' },
    { name: 'Kenz Agate', industry: 'Astrology Products' },
  ];

  // Duplicate for seamless infinite scrolling loop
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="bg-[#F7F7F7] border-y-2 border-[#E5E7EB] py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center font-heading text-xs font-black uppercase tracking-widest text-[#5F6368]">
          Trusted by Growing Brands Across Amazon & Flipkart
        </p>
      </div>

      {/* Smooth gradient fade effect on left & right edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#F7F7F7] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#F7F7F7] to-transparent z-10" />

      {/* Infinite scrolling ticker */}
      <div className="w-full overflow-hidden flex">
        <div className="animate-marquee flex items-center gap-5 py-2">
          {marqueeBrands.map((brand, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-3.5 px-6 border border-[#E5E7EB] rounded-2xl bg-white hover:bg-[#FF9900] hover:border-[#FF9900] transition-all duration-200 text-center cursor-default shadow-premium group shrink-0 w-[200px] sm:w-[220px]"
            >
              <span className="font-heading font-extrabold text-xs sm:text-sm text-[#131A22] whitespace-nowrap">
                {brand.name}
              </span>
              <span className="text-[10px] text-[#5F6368] font-bold mt-1 uppercase tracking-wide group-hover:text-[#131A22]/90 whitespace-nowrap">
                {brand.industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
