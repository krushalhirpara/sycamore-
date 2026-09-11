'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import Card from '@/components/ui/card';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/button';

const marketplaces = ['Amazon Seller Central', 'Amazon Vendor Central', 'Flipkart Seller Hub', 'Both Amazon & Flipkart', 'Other'];
const revenueRanges = ['< ₹5L / month', '₹5L – ₹20L / month', '₹20L – ₹1Cr / month', '> ₹1Cr / month'];

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    marketplace: '',
    revenue: '',
    message: '',
    honeypot: '',
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'A valid email address is required.';
    if (!formData.marketplace) newErrors.marketplace = 'Please select a marketplace.';
    if (!formData.message.trim() || formData.message.length < 20) newErrors.message = 'Please describe your needs (min. 20 characters).';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => { const next = { ...prev }; delete next[e.target.name]; return next; });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/contact/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', marketplace: '', revenue: '', message: '', honeypot: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <article className="pt-28 w-full bg-white text-[#131A22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <SectionHeading
          title="Contact Us"
          description="Connect with Our Team to Discuss Your Amazon & Flipkart Growth Strategy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">

          {/* Left Column: Contact Info & Value Cards */}
          <div className="lg:col-span-5 space-y-6">
            <Card variant="lime" className="space-y-4">
              <span className="text-xs font-heading font-black uppercase tracking-wider bg-[#131A22] text-white px-2.5 py-1 rounded">
                Free 24h Audit
              </span>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-[#131A22]">
                Let&apos;s Scale Your Marketplace Business
              </h2>
              <p className="text-xs md:text-sm font-medium text-[#131A22] leading-relaxed">
                Fill in the form and our certified marketplace specialists will evaluate your catalog listings and PPC efficiency within 24 hours—at no cost.
              </p>
            </Card>

            <div className="space-y-4">
              {[
                { icon: <Mail size={18} className="text-[#131A22]" />, label: 'Email Us', value: 'hello@sycamoregrowth.com', href: 'mailto:hello@sycamoregrowth.com' },
                { icon: <Phone size={18} className="text-[#131A22]" />, label: 'Call Us', value: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: <MapPin size={18} className="text-[#131A22]" />, label: 'Headquarters', value: 'Bangalore, India', href: undefined },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-[#E5E7EB] bg-white shadow-premium">
                  <div className="w-10 h-10 rounded-xl bg-[#FF9900] border border-[#E5E7EB] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-heading font-black text-[#5F6368] uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-[#131A22] text-sm font-extrabold hover:underline no-underline">{item.value}</a>
                    ) : (
                      <p className="text-[#131A22] text-sm font-extrabold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Card variant="dark" className="space-y-3">
              <span className="text-xs font-heading font-black uppercase text-[#FF9900]">
                Accreditation & Badges
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Amazon SPN Certified', 'Flipkart Preferred Partner', '6+ Years Experience'].map((cert) => (
                  <span key={cert} className="text-[10px] font-heading font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#FF9900] text-[#131A22]">
                    {cert}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column: Positivus Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7F7F7] rounded-[36px] border border-[#E5E7EB] p-8 md:p-10 shadow-premium">
              
              {status === 'success' && (
                <div className="mb-6 flex items-start gap-3 p-4 rounded-2xl bg-[#FF9900] border border-[#E5E7EB] text-[#131A22]">
                  <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="font-heading font-extrabold text-sm">Audit Request Received!</p>
                    <p className="text-xs mt-1 font-medium">We&apos;ll review your account and send a personalized growth audit within 24 hours.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 flex items-start gap-3 p-4 rounded-2xl bg-red-100 border border-[#E5E7EB] text-red-800">
                  <AlertCircle size={20} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="font-heading font-extrabold text-sm">Submission Error</p>
                    <p className="text-xs mt-1 font-medium">Something went wrong. Please try again or email us directly at hello@sycamoregrowth.com</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} className="hidden" tabIndex={-1} aria-hidden="true" autoComplete="off" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-heading font-extrabold text-[#131A22] mb-1.5 uppercase tracking-wider">Full Name *</label>
                    <input id="name" name="name" type="text" value={formData.name} onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 bg-white border rounded-2xl text-[#131A22] text-xs font-bold placeholder-[#5F6368]/60 focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] transition-all ${errors.name ? 'border-[#DC2626]' : 'border-[#E5E7EB]'}`}
                    />
                    {errors.name && <p className="text-[#DC2626] text-xs mt-1 font-bold">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-heading font-extrabold text-[#131A22] mb-1.5 uppercase tracking-wider">Email Address *</label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange}
                      placeholder="you@company.com"
                      className={`w-full px-4 py-3 bg-white border rounded-2xl text-[#131A22] text-xs font-bold placeholder-[#5F6368]/60 focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] transition-all ${errors.email ? 'border-[#DC2626]' : 'border-[#E5E7EB]'}`}
                    />
                    {errors.email && <p className="text-[#DC2626] text-xs mt-1 font-bold">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-heading font-extrabold text-[#131A22] mb-1.5 uppercase tracking-wider">Phone Number</label>
                    <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-2xl text-[#131A22] text-xs font-bold placeholder-[#5F6368]/60 focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-heading font-extrabold text-[#131A22] mb-1.5 uppercase tracking-wider">Company / Brand Name</label>
                    <input id="company" name="company" type="text" value={formData.company} onChange={handleChange}
                      placeholder="Your brand"
                      className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-2xl text-[#131A22] text-xs font-bold placeholder-[#5F6368]/60 focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="marketplace" className="block text-xs font-heading font-extrabold text-[#131A22] mb-1.5 uppercase tracking-wider">Target Marketplace *</label>
                    <select id="marketplace" name="marketplace" value={formData.marketplace} onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white border rounded-2xl text-xs font-bold focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] transition-all ${errors.marketplace ? 'border-[#DC2626] text-[#5F6368]' : 'border-[#E5E7EB] text-[#131A22]'}`}
                    >
                      <option value="" disabled>Select marketplace</option>
                      {marketplaces.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                    {errors.marketplace && <p className="text-[#DC2626] text-xs mt-1 font-bold">{errors.marketplace}</p>}
                  </div>
                  <div>
                    <label htmlFor="revenue" className="block text-xs font-heading font-extrabold text-[#131A22] mb-1.5 uppercase tracking-wider">Monthly Revenue Range</label>
                    <select id="revenue" name="revenue" value={formData.revenue} onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-[#E5E7EB] text-[#131A22] rounded-2xl text-xs font-bold focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] transition-all"
                    >
                      <option value="">Select range</option>
                      {revenueRanges.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-heading font-extrabold text-[#131A22] mb-1.5 uppercase tracking-wider">Describe Your Growth Goals *</label>
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange}
                    placeholder="Describe your current catalog challenges and target goals..."
                    className={`w-full px-4 py-3 bg-white border rounded-2xl text-[#131A22] text-xs font-bold placeholder-[#5F6368]/60 focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] transition-all resize-none ${errors.message ? 'border-[#DC2626]' : 'border-[#E5E7EB]'}`}
                  />
                  {errors.message && <p className="text-[#DC2626] text-xs mt-1 font-bold">{errors.message}</p>}
                </div>

                <Button type="submit" variant="primary" size="lg" disabled={status === 'loading'} className="w-full justify-center gap-2">
                  {status === 'loading' ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending Request...</>
                  ) : (
                    <>Send Message <ArrowRight size={16} /></>
                  )}
                </Button>

                <p className="text-[11px] text-[#5F6368] font-medium text-center">
                  By submitting, you agree to be contacted by our team. We never share your data.
                </p>
              </form>

            </div>
          </div>

        </div>
      </section>
    </article>
  );
}
