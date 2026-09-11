'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function GrowthChartIllustration() {
  return (
    <div className="relative w-full h-[360px] md:h-[400px] flex items-center justify-center bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-premium">
      
      {/* Subtle light grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-60" />

      {/* Soft glow effects */}
      <div className="absolute top-1/4 left-1/3 w-48 h-48 rounded-full bg-[#131A22]/8 blur-[80px]" />
      <div className="absolute bottom-1/4 right-1/4 w-36 h-36 rounded-full bg-[#FF9900]/12 blur-[70px]" />

      {/* Top label */}
      <div className="absolute top-4 left-5 flex items-center gap-2">
        <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[#5F6368]">Revenue Growth</span>
      </div>

      {/* Top-right metric badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.4 }}
        className="absolute top-4 right-5 bg-[#FFF4E5] border border-[#FF9900] rounded-lg px-3 py-1.5 flex items-center gap-1.5 shadow-xs"
      >
        <span className="text-[#131A22] text-sm font-heading font-black">+42%</span>
        <span className="text-[#FF9900] text-[10px] font-bold">ROI</span>
      </motion.div>

      <svg className="w-5/6 h-3/4 overflow-visible" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Y Axis Grid Lines */}
        <line x1="0" y1="200" x2="400" y2="200" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="0" y1="150" x2="400" y2="150" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="5 5" />
        <line x1="0" y1="100" x2="400" y2="100" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="5 5" />
        <line x1="0" y1="50"  x2="400" y2="50"  stroke="#e2e8f0" strokeWidth="1" strokeDasharray="5 5" />

        {/* Y Axis labels */}
        <text x="-6" y="204" fill="#94a3b8" fontSize="8" textAnchor="end">0</text>
        <text x="-6" y="154" fill="#94a3b8" fontSize="8" textAnchor="end">25k</text>
        <text x="-6" y="104" fill="#94a3b8" fontSize="8" textAnchor="end">50k</text>
        <text x="-6" y="54"  fill="#94a3b8" fontSize="8" textAnchor="end">75k</text>

        {/* Bar charts with black/orange theme */}
        {[
          { x: 30,  h: 40,  color1: '#131A22', color2: '#232F3E' },
          { x: 90,  h: 70,  color1: '#FF9900', color2: '#FFF4E5' },
          { x: 150, h: 90,  color1: '#131A22', color2: '#232F3E' },
          { x: 210, h: 120, color1: '#E88B00', color2: '#FFF4E5' },
          { x: 270, h: 155, color1: '#FF9900', color2: '#FFF4E5' },
          { x: 330, h: 190, color1: '#131A22', color2: '#FF9900' },
        ].map((bar, i) => (
          <g key={i}>
            <motion.rect
              x={bar.x}
              y={200 - bar.h}
              width="26"
              height={bar.h}
              rx="5"
              fill={`url(#barGrad-${i})`}
              initial={{ height: 0, y: 200 }}
              animate={{ height: bar.h, y: 200 - bar.h }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: 'easeOut' }}
            />
            <defs>
              <linearGradient id={`barGrad-${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={bar.color1} stopOpacity="0.9" />
                <stop offset="100%" stopColor={bar.color2} stopOpacity="0.25" />
              </linearGradient>
            </defs>
          </g>
        ))}

        {/* Area fill under trend line */}
        <motion.path
          d="M 42 165 C 102 125, 162 105, 222 80 C 282 55, 302 35, 342 18 L 342 200 L 42 200 Z"
          fill="url(#areaGrad)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        />

        {/* Trend Line Path */}
        <motion.path
          d="M 42 165 C 102 125, 162 105, 222 80 C 282 55, 302 35, 342 18"
          stroke="url(#lineGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 0.6, ease: 'easeInOut' }}
        />

        {/* Glowing Indicator Circle at path end */}
        <motion.circle
          cx="342"
          cy="18"
          r="6"
          fill="#FF9900"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1] }}
          transition={{ delay: 2.2, duration: 0.3 }}
        />
        <motion.circle
          cx="342"
          cy="18"
          r="12"
          stroke="#FF9900"
          strokeWidth="1.5"
          fill="none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 2], opacity: [0.8, 0] }}
          transition={{ delay: 2.4, duration: 1.2, repeat: Infinity }}
        />

        {/* Tooltip at peak */}
        <motion.g
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.4 }}
        >
          <rect x="310" y="-18" width="64" height="24" rx="6" fill="#131A22" stroke="#FF9900" strokeWidth="1" filter="url(#shadow)" />
          <text x="342" y="-3" fill="#FF9900" fontSize="9" fontWeight="bold" textAnchor="middle">₹2.4L / mo</text>
        </motion.g>

        {/* Gradients */}
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#131A22" />
            <stop offset="50%"  stopColor="#E88B00" />
            <stop offset="100%" stopColor="#FF9900" />
          </linearGradient>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#FF9900" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FF9900" stopOpacity="0" />
          </linearGradient>
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#131A22" floodOpacity="0.15" />
          </filter>
        </defs>
      </svg>

      {/* Bottom legend */}
      <div className="absolute bottom-4 left-5 flex items-center gap-4">
        <span className="flex items-center gap-1.5 text-[10px] text-[#5F6368] font-medium">
          <span className="w-3 h-0.5 bg-gradient-to-r from-[#131A22] to-[#FF9900] rounded inline-block" />
          Revenue Trend
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-[#5F6368] font-medium">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#FF9900] inline-block" />
          Monthly Sales
        </span>
      </div>
    </div>
  );
}

export function MarketplaceNodesIllustration() {
  return (
    <div className="relative w-full h-[280px] flex items-center justify-center bg-[#F7F7F7] rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#FF9900]/10 blur-3xl" />
      
      <svg className="w-4/5 h-4/5 overflow-visible" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Connection Lines */}
        <motion.path
          d="M 50 100 L 150 100"
          stroke="#FF9900"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <motion.path
          d="M 250 100 L 150 100"
          stroke="#131A22"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />

        {/* Marketplace Node 1: Amazon */}
        <g>
          <motion.circle
            cx="50"
            cy="100"
            r="32"
            fill="white"
            stroke="#FF9900"
            strokeWidth="2"
            whileHover={{ scale: 1.05 }}
            style={{ filter: 'drop-shadow(0 2px 8px rgba(255,153,0,0.2))' }}
          />
          <text x="50" y="96" fill="#131A22" fontSize="10" fontWeight="bold" textAnchor="middle">AMAZON</text>
          <text x="50" y="110" fill="#FF9900" fontSize="8" fontWeight="bold" textAnchor="middle">MARKETPLACE</text>
        </g>

        {/* Center Growth Node: Sycamore */}
        <g>
          <motion.circle
            cx="150"
            cy="100"
            r="38"
            fill="#131A22"
            stroke="#FF9900"
            strokeWidth="2.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            style={{ filter: 'drop-shadow(0 4px 12px rgba(19,26,34,0.3))' }}
          />
          <text x="150" y="96" fill="#FF9900" fontSize="11" fontWeight="bold" textAnchor="middle">Sycamore</text>
          <text x="150" y="109" fill="white" fontSize="8" textAnchor="middle">GROWTH ENGINE</text>
        </g>

        {/* Marketplace Node 2: Flipkart */}
        <g>
          <motion.circle
            cx="250"
            cy="100"
            r="32"
            fill="white"
            stroke="#131A22"
            strokeWidth="2"
            whileHover={{ scale: 1.05 }}
            style={{ filter: 'drop-shadow(0 2px 8px rgba(19,26,34,0.15))' }}
          />
          <text x="250" y="96" fill="#131A22" fontSize="10" fontWeight="bold" textAnchor="middle">FLIPKART</text>
          <text x="250" y="110" fill="#5F6368" fontSize="8" fontWeight="bold" textAnchor="middle">MARKETPLACE</text>
        </g>
      </svg>
    </div>
  );
}
