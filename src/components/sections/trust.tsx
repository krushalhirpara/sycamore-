'use client';

import React from 'react';

export default function Trust() {
  const brands = [
    { name: 'Near Wellness', industry: 'Health & Beauty' },
    { name: 'Lumina Home', industry: 'Home & Kitchen' },
    { name: 'NovaFit Gear', industry: 'Sports & Outdoors' },
    { name: 'AeroAudio Labs', industry: 'Electronics' },
    { name: 'Verve Organics', industry: 'Food & Grocery' },
    { name: 'Zenith Apparel', industry: 'Fashion' },
  ];

  return (
    <section className="bg-[#F3F3F3] border-y-2 border-[#191A23] py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-heading text-xs font-black uppercase tracking-widest text-[#666666] mb-8">
          Trusted by Growing Brands Across Amazon & Flipkart
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-4 border-2 border-[#191A23] rounded-2xl bg-white hover:bg-[#B9FF66] transition-all duration-200 w-full text-center cursor-default shadow-positivus group"
            >
              <span className="font-heading font-extrabold text-sm text-[#191A23]">
                {brand.name}
              </span>
              <span className="text-[10px] text-[#666666] font-bold mt-1 uppercase tracking-wide">
                {brand.industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
