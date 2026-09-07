'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Calendar, Clock } from 'lucide-react';
import { blogPostsData } from '@/data/blog-posts';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/card';
import ArrowButton from '@/components/ui/ArrowButton';
import CTASection from '@/components/sections/cta-section';

const categories = ['All', 'Amazon SEO', 'Flipkart Growth', 'PPC Strategy', 'Operations'];

export default function BlogIndexPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered = blogPostsData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <article className="pt-28 w-full bg-white text-[#191A23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs items={[{ label: 'Marketplace Insights' }]} />
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <SectionHeading
          title="Marketplace Insights"
          description="Expert Articles on Amazon & Flipkart SEO, PPC Management, Catalog Operations, and D2C Growth."
        />

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#666666]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search marketplace articles..."
              className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#191A23] rounded-2xl text-[#191A23] text-xs font-bold placeholder-slate-400 focus:outline-none focus:bg-[#F3F3F3] transition-all shadow-xs"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 text-xs font-heading font-extrabold rounded-xl border-2 border-[#191A23] transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#191A23] text-white shadow-xs'
                    : 'bg-white text-[#191A23] hover:bg-[#B9FF66]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-12 bg-[#F3F3F3] border-t-2 border-[#191A23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-[#666666]">
              <p className="text-lg font-heading font-bold">No articles found matching your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, idx) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col no-underline"
                >
                  <Card
                    variant={idx % 2 === 0 ? 'white' : 'lime'}
                    className="h-full flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-heading font-black uppercase tracking-wider px-2.5 py-1 rounded border border-[#191A23] bg-white text-[#191A23]">
                          {post.category}
                        </span>
                        <span className="text-[10px] text-[#191A23] font-bold flex items-center gap-1">
                          <Clock size={11} /> {post.readingTime}
                        </span>
                      </div>

                      <h2 className="font-heading font-extrabold text-lg text-[#191A23] group-hover:underline line-clamp-2 leading-snug">
                        {post.title}
                      </h2>

                      <p className="text-xs text-[#191A23]/80 font-medium line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#191A23]/20">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#191A23] text-white flex items-center justify-center text-[10px] font-black">
                          {post.author.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-xs font-bold text-[#191A23]">{post.author.name}</span>
                      </div>
                      <ArrowButton variant="dark" size="sm" diagonal />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </article>
  );
}
