'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-4">
      {/* Background Graphic Box */}
      <div className="relative w-full h-full bg-[#191A23] rounded-[36px] p-6 shadow-positivus border-2 border-[#191A23] flex flex-col justify-between overflow-hidden">
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        
        {/* Top Header Card inside Hero Graphic */}
        <div className="relative z-10 bg-[#B9FF66] border-2 border-[#191A23] rounded-2xl p-4 flex items-center justify-between shadow-positivus">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#191A23] flex items-center justify-center font-black text-xs text-[#B9FF66]">
              SPN
            </div>
            <div>
              <p className="text-xs font-black uppercase text-[#191A23] tracking-wide">Sycamore East</p>
              <p className="text-[10px] font-bold text-[#191A23]/70">Marketplace Growth Engine</p>
            </div>
          </div>
          <span className="text-[10px] font-black uppercase tracking-wider bg-[#191A23] text-white px-2.5 py-1 rounded-md">
            +142% ROI
          </span>
        </div>

        {/* Middle Vector Cards: Amazon & Flipkart Cards */}
        <div className="relative z-10 grid grid-cols-2 gap-4 my-4">
          
          {/* Amazon Card */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-white border-2 border-[#191A23] rounded-2xl p-4 flex flex-col justify-between shadow-positivus"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-[#191A23]">Amazon</span>
              <div className="w-3 h-3 rounded-full bg-[#B9FF66] border border-[#191A23]" />
            </div>
            <div className="my-3 space-y-1.5">
              <div className="h-2 w-3/4 bg-[#191A23]/10 rounded" />
              <div className="h-2 w-1/2 bg-[#B9FF66] rounded border border-[#191A23]" />
            </div>
            <span className="text-sm font-black text-[#191A23]">₹85L+ sales</span>
          </motion.div>

          {/* Flipkart Card */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-white border-2 border-[#191A23] rounded-2xl p-4 flex flex-col justify-between shadow-positivus"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-[#191A23]">Flipkart</span>
              <div className="w-3 h-3 rounded-full bg-[#191A23]" />
            </div>
            <div className="my-3 space-y-1.5">
              <div className="h-2 w-full bg-[#191A23]/10 rounded" />
              <div className="h-2 w-2/3 bg-[#191A23] rounded" />
            </div>
            <span className="text-sm font-black text-[#191A23]">3.8x ROAS</span>
          </motion.div>

        </div>

        {/* Bottom Analytics Chart Banner */}
        <div className="relative z-10 bg-white border-2 border-[#191A23] rounded-2xl p-4 shadow-positivus flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#B9FF66" stroke="#191A23" strokeWidth="2"/>
              <path d="M8 22L14 16L18 20L24 10" stroke="#191A23" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 10H24V15" stroke="#191A23" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <p className="text-xs font-black text-[#191A23]">Organic SEO & Ads</p>
              <p className="text-[10px] font-bold text-[#191A23]/60">Automated Scaling</p>
            </div>
          </div>

          <div className="flex items-end gap-1 h-8">
            <div className="w-2 h-3 bg-[#191A23]/20 rounded-t" />
            <div className="w-2 h-5 bg-[#191A23]/40 rounded-t" />
            <div className="w-2 h-6 bg-[#191A23]/70 rounded-t" />
            <div className="w-2 h-8 bg-[#B9FF66] border border-[#191A23] rounded-t" />
          </div>
        </div>

      </div>
    </div>
  );
}

export function ServiceIllustration({ type }: { type: 'seo' | 'ppc' | 'account' | 'consulting' | 'general' }) {
  return (
    <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center shrink-0">
      <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="108" height="108" rx="24" fill={type === 'ppc' ? '#191A23' : '#B9FF66'} stroke="#191A23" strokeWidth="3" />
        
        {type === 'seo' && (
          <>
            <circle cx="52" cy="52" r="24" fill="white" stroke="#191A23" strokeWidth="3" />
            <line x1="68" y1="68" x2="90" y2="90" stroke="#191A23" strokeWidth="6" strokeLinecap="round" />
            <path d="M42 52L48 58L62 44" stroke="#191A23" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}

        {type === 'ppc' && (
          <>
            <path d="M30 85L50 60L70 70L90 35" stroke="#B9FF66" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="90" cy="35" r="6" fill="#B9FF66" stroke="#191A23" strokeWidth="2" />
            <rect x="30" y="70" width="10" height="20" rx="2" fill="white" stroke="#191A23" strokeWidth="2" />
            <rect x="50" y="55" width="10" height="35" rx="2" fill="white" stroke="#191A23" strokeWidth="2" />
            <rect x="70" y="65" width="10" height="25" rx="2" fill="white" stroke="#191A23" strokeWidth="2" />
          </>
        )}

        {type === 'account' && (
          <>
            <rect x="25" y="30" width="70" height="60" rx="8" fill="white" stroke="#191A23" strokeWidth="3" />
            <line x1="25" y1="48" x2="95" y2="48" stroke="#191A23" strokeWidth="3" />
            <circle cx="38" cy="39" r="4" fill="#191A23" />
            <circle cx="50" cy="39" r="4" fill="#191A23" />
            <circle cx="62" cy="39" r="4" fill="#191A23" />
            <path d="M40 68L52 78L80 58" stroke="#191A23" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}

        {(type === 'consulting' || type === 'general') && (
          <>
            <circle cx="60" cy="60" r="30" fill="white" stroke="#191A23" strokeWidth="3" />
            <path d="M48 60C48 53.3726 53.3726 48 60 48C66.6274 48 72 53.3726 72 60C72 66.6274 66.6274 72 60 72" stroke="#191A23" strokeWidth="4" strokeLinecap="round" />
            <circle cx="60" cy="60" r="6" fill="#191A23" />
          </>
        )}
      </svg>
    </div>
  );
}
