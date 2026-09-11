import React from 'react';
import { statisticsData } from '@/data/statistics';
import Counter from '@/components/ui/counter';

export default function Statistics() {
  return (
    <section className="bg-[#F7F7F7] border-t border-b border-[#E5E7EB] py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statisticsData.map((stat) => (
            <div
              key={stat.id}
              className="text-center p-6 border border-[#E5E7EB] rounded-2xl bg-white shadow-premium flex flex-col justify-between"
            >
              <div className="space-y-2">
                <p className="text-xs font-heading font-bold text-[#131A22] uppercase tracking-wider">
                  {stat.label}
                </p>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-[#FF9900]">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
              </div>
              <p className="text-[#5F6368] text-xs sm:text-sm mt-3 leading-relaxed font-medium">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
