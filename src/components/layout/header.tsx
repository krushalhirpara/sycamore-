'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowUpRight, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationData } from '@/data/navigation';
import { cn } from '@/lib/utils';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesMenuOpen(false);
  }, [pathname]);

  const navItems = navigationData;
  const servicesDropdown = navItems.find((item) => item.label === 'Services')?.dropdown || [];

  const categories = [
    'Amazon Account Management Services',
    'Amazon Advertising Agency',
    'Flipkart Account Management',
    'Flipkart Advertising Agency',
  ] as const;

  const groupedServices = categories.reduce((acc, cat) => {
    acc[cat] = servicesDropdown.filter((item) => item.category === cat);
    return acc;
  }, {} as Record<string, typeof servicesDropdown>);

  const categoryShortNames: Record<string, { label: string; logo: string; logoAlt: string; imgClass: string }> = {
    'Amazon Account Management Services': { label: 'Amazon Mgmt', logo: '/images/amazon-logo.png', logoAlt: 'Amazon',   imgClass: 'object-contain brightness-0 invert' },
    'Amazon Advertising Agency':          { label: 'Amazon Ads',  logo: '/images/amazon-logo.png', logoAlt: 'Amazon',   imgClass: 'object-contain brightness-0 invert' },
    'Flipkart Account Management':        { label: 'Flipkart Mgmt', logo: '/images/flipkart-logo.png', logoAlt: 'Flipkart', imgClass: 'object-contain' },
    'Flipkart Advertising Agency':        { label: 'Flipkart Ads',  logo: '/images/flipkart-logo.png', logoAlt: 'Flipkart', imgClass: 'object-contain' },
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8',
        scrolled ? 'py-2' : 'py-4'
      )}
    >
      {/* Main Header Bar */}
      <motion.div
        className={cn(
          'max-w-7xl mx-auto transition-all duration-500',
          'bg-white border border-[#E5E7EB] rounded-2xl px-5 py-3',
          scrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.12)]' : 'shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
        )}
        layout
      >
        <div className="flex items-center justify-between gap-4">

          {/* Brand Logo */}
          <Link href="/" className="group flex items-center gap-3 no-underline flex-shrink-0">
            {/* Logo Mark */}
            <div className="relative w-10 h-10 flex-shrink-0">
              <div className="w-10 h-10 bg-[#FF9900] rounded-xl border-2 border-[#FF9900] flex items-center justify-center group-hover:rounded-full transition-all duration-300 shadow-xs">
                <span className="font-black text-xl text-[#131A22] leading-none">S</span>
              </div>
              {/* Pulse indicator */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF9900] rounded-full border border-[#E5E7EB] animate-pulse" />
            </div>

            {/* Brand Text */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-black text-[17px] tracking-tight text-[#131A22] leading-none">
                  Sycamore East
                </span>
                <span className="text-[9px] font-black uppercase tracking-widest bg-[#FF9900] text-[#131A22] px-1.5 py-0.5 rounded-md leading-tight">
                  SPN
                </span>
              </div>
              <span className="text-[10px] text-[#5F6368] font-semibold tracking-wider mt-0.5">
                Amazon & Flipkart Growth
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isServices = item.label === 'Services';
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href));

              if (isServices) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesMenuOpen(true)}
                    onMouseLeave={() => setServicesMenuOpen(false)}
                  >
                    <button
                      className={cn(
                        'flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer',
                        isActive || servicesMenuOpen
                          ? 'bg-[#FF9900] text-[#131A22]'
                          : 'text-[#131A22] hover:text-[#FF9900] hover:bg-[#FFF4E5]'
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          'transition-transform duration-300',
                          servicesMenuOpen && 'rotate-180'
                        )}
                      />
                    </button>

                    {/* Mega Dropdown */}
                    <AnimatePresence>
                      {servicesMenuOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[980px] max-w-[92vw]"
                        >
                          <div className="bg-[#131A22] border-2 border-[#FF9900]/20 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
                            {/* Dropdown Header */}
                            <div className="bg-[#FF9900] px-6 py-3 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Zap size={14} className="text-[#131A22]" />
                                <span className="text-xs font-black uppercase tracking-widest text-[#131A22]">
                                  Our Services — Amazon & Flipkart Growth Partner
                                </span>
                              </div>
                              <Link
                                href="/services"
                                className="text-[11px] font-black text-[#131A22] flex items-center gap-1 hover:underline no-underline"
                              >
                                View All <ArrowUpRight size={11} />
                              </Link>
                            </div>

                            {/* Service Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/5 p-0">
                              {categories.map((category) => {
                                const meta = categoryShortNames[category];
                                const items = groupedServices[category];
                                return (
                                  <div key={category} className="p-5 space-y-3">
                                    {/* Category Header */}
                                    <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                                      <Image
                                        src={meta.logo}
                                        alt={meta.logoAlt}
                                        width={52}
                                        height={20}
                                        className={meta.imgClass}
                                        style={{ maxHeight: 20 }}
                                      />
                                      <span className="text-[11px] font-black uppercase tracking-wider text-[#FF9900]">
                                        {meta.label}
                                      </span>
                                    </div>

                                    {/* Service Links */}
                                    <div className="space-y-1">
                                      {items.map((subItem) => (
                                        <Link
                                          key={subItem.name}
                                          href={subItem.href}
                                          className="group flex items-start gap-2 p-2 rounded-lg hover:bg-white/5 transition-all no-underline"
                                        >
                                          <div className="w-1 h-1 rounded-full bg-[#FF9900]/40 mt-2 flex-shrink-0 group-hover:bg-[#FF9900] transition-colors" />
                                          <div>
                                            <span className="text-[12px] font-bold text-white/80 group-hover:text-white transition-colors leading-tight block">
                                              {subItem.name}
                                            </span>
                                            {subItem.description && (
                                              <span className="text-[10px] text-white/35 line-clamp-1 mt-0.5">
                                                {subItem.description}
                                              </span>
                                            )}
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>

                            {/* Dropdown Footer */}
                            <div className="border-t border-white/10 px-6 py-3 flex items-center justify-between">
                              <span className="text-[11px] text-white/40 font-semibold">
                                Amazon SPN Certified • Flipkart Accredited
                              </span>
                              <Link
                                href="/contact"
                                className="flex items-center gap-1.5 bg-[#FF9900] text-[#131A22] text-[11px] font-black px-3 py-1.5 rounded-lg no-underline hover:bg-[#E88B00] hover:text-white transition-colors"
                              >
                                Free Consultation <ArrowUpRight size={11} />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'text-sm font-bold px-4 py-2 rounded-xl transition-all duration-200 no-underline',
                    isActive
                      ? 'bg-[#FF9900] text-[#131A22]'
                      : 'text-[#131A22] hover:text-[#FF9900] hover:bg-[#FFF4E5]'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-[#FF9900] text-[#131A22] font-black text-sm px-5 py-2.5 rounded-xl border border-[#FF9900] hover:bg-[#E88B00] hover:border-[#E88B00] hover:text-white transition-all duration-200 no-underline group shadow-xs"
            >
              <span>Get Free Audit</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden z-50">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl bg-[#F7F7F7] text-[#131A22] hover:bg-[#FF9900] hover:text-[#131A22] transition-all duration-200 border border-[#E5E7EB]"
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden mt-2 max-w-7xl mx-auto bg-[#131A22] border-2 border-[#FF9900]/20 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden"
          >
            {/* Mobile Nav Items */}
            <div className="p-4 space-y-1">
              {navItems.map((item) => {
                const isServices = item.label === 'Services';
                const isActive = pathname === item.href;

                if (isServices) {
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-white/75 hover:bg-white/5 hover:text-white transition-all"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={16}
                          className={cn('transition-transform duration-300', mobileServicesOpen && 'rotate-180')}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-1 ml-4 border-l-2 border-[#FF9900]/30 pl-4 space-y-4 pb-2">
                              {categories.map((cat) => {
                                const meta = categoryShortNames[cat];
                                return (
                                  <div key={cat} className="space-y-1.5">
                                    <div className="flex items-center gap-2">
                                      <Image
                                        src={meta.logo}
                                        alt={meta.logoAlt}
                                        width={44}
                                        height={16}
                                        className={meta.imgClass}
                                        style={{ maxHeight: 16 }}
                                      />
                                      <span className="text-[10px] font-black uppercase tracking-widest text-[#FF9900]">
                                        {meta.label}
                                      </span>
                                    </div>
                                    {groupedServices[cat].map((sub) => (
                                      <Link
                                        key={sub.name}
                                        href={sub.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block py-1 px-2 text-xs text-white/60 font-semibold hover:text-white no-underline transition-colors"
                                      >
                                        → {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'block px-4 py-3 rounded-xl text-sm font-bold no-underline transition-all',
                      isActive
                        ? 'bg-[#FF9900] text-[#131A22]'
                        : 'text-white/75 hover:bg-white/5 hover:text-white'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div className="border-t border-white/10 p-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#FF9900] text-[#131A22] font-black text-sm px-5 py-3 rounded-xl no-underline hover:bg-white transition-colors"
              >
                Get Free Audit <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
