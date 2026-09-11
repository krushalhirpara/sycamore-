import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, Tag } from 'lucide-react';
import { blogPostsData } from '@/data/blog-posts';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import Card from '@/components/ui/card';
import ArrowButton from '@/components/ui/ArrowButton';
import CTASection from '@/components/sections/cta-section';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found | Sycamore East SPN' };

  return {
    title: `${post.title} | Sycamore East SPN`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPostsData.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    datePublished: post.date,
    publisher: {
      '@type': 'Organization',
      name: 'Sycamore East SPN',
      url: 'https://sycamoregrowth.com',
    },
    keywords: post.tags.join(', '),
  };

  return (
    <article className="pt-28 w-full bg-white text-[#131A22]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs items={[
          { label: 'Marketplace Insights', href: '/blog' },
          { label: post.title },
        ]} />
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-5">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-[10px] font-heading font-black uppercase tracking-widest px-2.5 py-1 rounded bg-[#FFF4E5] border border-[#FF9900] text-[#131A22]">
            {post.category}
          </span>
          <span className="text-[11px] text-[#5F6368] font-bold flex items-center gap-1">
            <Clock size={12} /> {post.readingTime}
          </span>
          <span className="text-[11px] text-[#5F6368] font-bold flex items-center gap-1">
            <Calendar size={12} /> {post.date}
          </span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#131A22] leading-tight tracking-tight">
          {post.title}
        </h1>

        <p className="text-[#5F6368] text-base sm:text-lg leading-relaxed font-medium">{post.excerpt}</p>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-[#E5E7EB]">
          <div className="w-10 h-10 rounded-full bg-[#FF9900] text-[#131A22] font-black text-sm flex items-center justify-center border-2 border-white">
            {post.author.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="text-sm font-heading font-extrabold text-[#131A22]">{post.author.name}</p>
            <p className="text-xs text-[#5F6368] font-semibold">{post.author.role}</p>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-[#E5E7EB]">
        <div className="prose prose-slate prose-sm sm:prose-base max-w-none
          prose-headings:font-heading prose-headings:font-extrabold prose-headings:text-[#131A22]
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-[#131A22] prose-p:leading-relaxed prose-p:font-medium
          prose-li:text-[#131A22] prose-li:leading-relaxed prose-li:font-medium
          prose-strong:text-[#131A22] prose-strong:font-black
          prose-a:text-[#131A22] prose-a:underline hover:prose-a:text-[#FF9900]
          prose-code:text-[#131A22] prose-code:bg-[#FFF4E5] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:border prose-code:border-[#FF9900]
          prose-blockquote:border-l-4 prose-blockquote:border-l-[#FF9900] prose-blockquote:text-[#131A22] prose-blockquote:not-italic prose-blockquote:bg-[#F7F7F7] prose-blockquote:p-4 prose-blockquote:rounded-r-xl
          prose-hr:border-[#E5E7EB]">
          {post.content.split('\n').map((line, i) => {
            if (line.startsWith('### ')) {
              return <h3 key={i}>{line.replace('### ', '')}</h3>;
            }
            if (line.startsWith('## ')) {
              return <h2 key={i}>{line.replace('## ', '')}</h2>;
            }
            if (line.startsWith('*   ')) {
              return <li key={i}>{line.replace('*   ', '').replace(/\*\*(.*?)\*\*/g, '$1')}</li>;
            }
            if (/^\d+\. /.test(line)) {
              const text = line.replace(/^\d+\. /, '').replace(/\*\*(.*?)\*\*/g, '$1');
              return <p key={i} className="!mb-2"><strong className="text-[#131A22]">{i + 1}.</strong> {text}</p>;
            }
            if (line.trim() === '') return <br key={i} />;
            return <p key={i}>{line.replace(/\*\*(.*?)\*\*/g, '$1')}</p>;
          })}
        </div>
      </div>

      {/* Tags */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 border-t border-[#E5E7EB] pt-6">
        <div className="flex items-center flex-wrap gap-2">
          <Tag size={14} className="text-[#5F6368]" />
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs font-bold px-3 py-1 rounded-md bg-[#F7F7F7] border border-[#E5E7EB] text-[#131A22]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-[#E5E7EB] py-12 bg-[#F7F7F7]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="font-heading text-xl font-extrabold text-[#131A22]">More Insights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="no-underline group">
                  <Card variant="white" className="space-y-3">
                    <span className="text-[10px] font-heading font-black uppercase text-[#131A22] bg-[#FFF4E5] px-2 py-0.5 rounded border border-[#FF9900]">
                      {related.category}
                    </span>
                    <h3 className="font-heading font-extrabold text-base text-[#131A22] group-hover:underline line-clamp-2">
                      {related.title}
                    </h3>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-[10px] text-[#5F6368] font-bold flex items-center gap-1">
                        <Clock size={11} /> {related.readingTime}
                      </span>
                      <ArrowButton variant="dark" size="sm" diagonal />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </article>
  );
}
