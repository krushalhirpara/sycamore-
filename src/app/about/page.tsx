import { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/card';
import CTASection from '@/components/sections/cta-section';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { Target, Users, Award, Rocket, CheckCircle2, Globe, Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Sycamore East SPN Marketplace Agency',
  description: 'Learn about Sycamore East SPN, our mission, values, and team of Amazon & Flipkart certified marketplace growth specialists.',
  alternates: {
    canonical: '/about',
  },
};

const values = [
  {
    icon: <Target size={24} className="text-[#131A22]" />,
    title: 'Performance-First Culture',
    description: 'We measure everything. Every campaign, every listing update, every operational change is tracked against clear sales KPIs.',
  },
  {
    icon: <Users size={24} className="text-[#131A22]" />,
    title: 'Seller-Centric Partnerships',
    description: 'We work as your in-house team extension—not an outsourced vendor. Our dedicated account managers become deeply familiar with your catalog.',
  },
  {
    icon: <Award size={24} className="text-[#131A22]" />,
    title: 'Marketplace Accreditation',
    description: 'Our team comprises certified Amazon SPN specialists and Flipkart-accredited partners with 6+ years of hands-on category management.',
  },
  {
    icon: <Rocket size={24} className="text-[#131A22]" />,
    title: 'Sustainable Scale Strategy',
    description: 'We build profitable, organic-first revenue streams that sustain through algorithm changes and market evolution.',
  },
];

const teamPlaceholders = [
  {
    name: 'Karishma Rajput',
    role: 'Head of Marketplace Operations',
    bio: '8+ years managing Amazon Seller Central & Vendor accounts across electronics, fashion, and beauty categories.',
    initials: 'KR',
  },
  {
    name: 'Urvesh Parate',
    role: 'Lead Amazon & Flipkart PPC Strategist',
    bio: 'Specialist in algorithmic Sponsored Ads, DSP media buy, and conversion rate optimization with over ₹50Cr ad spend managed.',
    initials: 'UP',
  },
  {
    name: 'Hardika',
    role: 'Catalog & SEO Director',
    bio: 'Expert in A10 search algorithm indexing, backend keyword architecture, and high-converting A+ content design.',
    initials: 'H',
  },
];

export default function AboutPage() {
  return (
    <article className="pt-28 w-full bg-white text-[#131A22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs items={[{ label: 'About Us' }]} />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-3xl space-y-6">
          <div className="inline-block bg-[#FF9900] text-[#131A22] border border-[#E5E7EB] px-3 py-1 rounded-md text-xs font-heading font-black uppercase tracking-wider shadow-xs">
            About Sycamore East SPN
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-[#131A22]">
            We Are Marketplace Growth Engineers.
          </h1>

          <p className="text-[#5F6368] text-base sm:text-xl font-medium leading-relaxed">
            Sycamore East SPN was built by sellers, for sellers. We understand the complexity of running profitable marketplace operations—because we have managed D2C brands through every platform algorithm shift, policy change, and competitive surge.
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-12 bg-[#F7F7F7] border-y-2 border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <Card variant="lime" className="space-y-4">
            <span className="text-xs font-heading font-black uppercase tracking-wider bg-[#131A22] text-white px-2.5 py-1 rounded">
              Our Mission
            </span>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-[#131A22]">
              Powering Independent D2C Brands Across India
            </h2>
            <p className="text-sm md:text-base font-medium text-[#131A22]/90 leading-relaxed">
              To give independent D2C brands the operational depth and advertising intelligence of a full marketplace team—without the overhead of building one in-house. We take over your Amazon and Flipkart operations entirely so you can focus on building great products.
            </p>
            <div className="pt-2 grid grid-cols-2 gap-2 text-xs font-bold text-[#131A22]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} /> Amazon SPN Certified
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} /> Flipkart Partner
              </div>
            </div>
          </Card>

          <Card variant="dark" className="space-y-4">
            <span className="text-xs font-heading font-black uppercase tracking-wider bg-[#FF9900] text-[#131A22] px-2.5 py-1 rounded">
              Our Track Record
            </span>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-white" style={{ color: '#FFFFFF' }}>
              6+ Years of Marketplace Dominance
            </h2>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-1">
                <p className="font-heading font-black text-4xl text-[#FF9900]">150+</p>
                <p className="text-xs text-white/70 font-semibold">Active Brands Managed</p>
              </div>
              <div className="space-y-1">
                <p className="font-heading font-black text-4xl text-[#FF9900]">₹16Cr+</p>
                <p className="text-xs text-white/70 font-semibold">Annual Marketplace GMS</p>
              </div>
            </div>
          </Card>

        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            description="The Principles That Guide Our Marketplace Operations and Account Strategy Every Day."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <Card key={i} variant={i % 2 === 0 ? 'white' : 'glass-light'} className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF9900] border border-[#E5E7EB] flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="font-heading font-extrabold text-xl text-[#131A22]">{v.title}</h3>
                <p className="text-[#5F6368] text-sm font-medium leading-relaxed">{v.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-[#F7F7F7] border-t-2 border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Leadership Team"
            description="Meet the Marketplace Growth Practitioners Managing Your Seller Accounts."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamPlaceholders.map((member, i) => (
              <Card key={i} variant="white" className="space-y-4 relative">
                <div className="flex items-center justify-between pb-4 border-b-2 border-[#E5E7EB]">
                  <div className="w-14 h-14 rounded-2xl bg-[#FF9900] border border-[#E5E7EB] font-heading font-black text-xl flex items-center justify-center text-[#131A22]">
                    {member.initials}
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center text-[#131A22] hover:bg-[#FF9900] transition-colors cursor-pointer">
                      <Globe size={14} />
                    </div>
                    <div className="w-8 h-8 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center text-[#131A22] hover:bg-[#FF9900] transition-colors cursor-pointer">
                      <Share2 size={14} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-lg text-[#131A22]">{member.name}</h3>
                  <p className="text-xs font-bold text-[#5F6368] uppercase tracking-wider mt-0.5">{member.role}</p>
                </div>

                <p className="text-xs text-[#5F6368] font-medium leading-relaxed pt-2 border-t border-[#E5E7EB]/10">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </article>
  );
}
