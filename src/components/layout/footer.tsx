'use client';

import React from 'react';
import Link from 'next/link';
import { navigationData } from '@/data/navigation';
import ArrowButton from '@/components/ui/ArrowButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesDropdown = navigationData.find(item => item.label === 'Services')?.dropdown || [];
  const amazonServices = servicesDropdown.filter(item => item.category?.includes('Amazon'));
  const flipkartServices = servicesDropdown.filter(item => item.category?.includes('Flipkart'));

  return (
    <footer className="bg-[#131A22] text-white pt-16 md:pt-20 pb-12 rounded-t-[40px] mt-24 border-t border-[#232F3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Card */}
        <div className="bg-[#FF9900] text-[#131A22] rounded-[30px] p-8 md:p-12 mb-16 border border-[#FF9900] shadow-premium flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl tracking-tight leading-tight text-[#131A22]">
              Ready to Scale Your Marketplace Business?
            </h2>
            <p className="text-sm md:text-base font-medium text-[#131A22]/90">
              Get a complimentary Amazon & Flipkart growth audit. Our team will evaluate your catalog listings and PPC efficiency within 24 hours.
            </p>
          </div>

          <Link href="/contact" className="no-underline shrink-0 group">
            <div className="bg-[#131A22] text-white px-8 py-4 rounded-2xl border border-[#131A22] font-heading font-extrabold text-base flex items-center gap-3 hover:bg-[#232F3E] transition-colors shadow-premium">
              <span>Book a Consultation</span>
              <ArrowButton variant="lime" size="sm" diagonal />
            </div>
          </Link>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-12 border-b border-[#232F3E]">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FF9900] text-[#131A22] flex items-center justify-center font-heading font-black text-xl rounded-xl border-2 border-white shadow-xs">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-extrabold tracking-tight text-white">
                  Sycamore East
                </span>
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#FF9900]">
                  SPN Growth Partner
                </span>
              </div>
            </div>
            <p className="text-xs text-[#D1D5DB] leading-relaxed font-medium">
              Certified Amazon SPN & Flipkart accredited growth agency delivering data-driven account scaling and PPC optimization.
            </p>
          </div>

          {/* Amazon Services */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FFFFFF] mb-4 bg-[#232F3E] px-3 py-1.5 rounded-lg inline-block border border-white/10">
              Amazon Services
            </h4>
            <ul className="space-y-2.5 text-xs font-medium pl-0 list-none text-[#D1D5DB]">
              {amazonServices.slice(0, 5).map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#FF9900] transition-colors no-underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Flipkart Services */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FFFFFF] mb-4 bg-[#232F3E] px-3 py-1.5 rounded-lg inline-block border border-white/10">
              Flipkart Services
            </h4>
            <ul className="space-y-2.5 text-xs font-medium pl-0 list-none text-[#D1D5DB]">
              {flipkartServices.slice(0, 5).map(item => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#FF9900] transition-colors no-underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FFFFFF] mb-4 bg-[#232F3E] px-3 py-1.5 rounded-lg inline-block border border-white/10">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium pl-0 list-none text-[#D1D5DB]">
              <li><Link href="/" className="hover:text-[#FF9900] transition-colors no-underline">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#FF9900] transition-colors no-underline">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#FF9900] transition-colors no-underline">All Services</Link></li>
              <li><Link href="/case-studies" className="hover:text-[#FF9900] transition-colors no-underline">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-[#FF9900] transition-colors no-underline">Marketplace Insights</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF9900] transition-colors no-underline">Contact</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-[#D1D5DB]/80 gap-4">
          <p>© 2026 Sycamore East SPN. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#FF9900] transition-colors no-underline">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-[#FF9900] transition-colors no-underline">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
