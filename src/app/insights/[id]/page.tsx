
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ARTICLES } from '@/src/data/mockData';
import { SITE_NAME, SITE_URL } from '@/src/app/constants';
import { ArticleBody } from '@/components/ArticleBody';
import { ArticleShareActions } from '@/components/ArticleShareActions';
import { TerminalContact } from '@/components/TerminalContact';
import {
  Clock,
  ChevronRight,
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({
    id: a.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = ARTICLES.find((a) => a.id === id);

  if (!article) {
    return {
      title: `Article Not Found | ${SITE_NAME}`,
    };
  }

  const canonicalUrl = `${SITE_URL}/insights/${article.id}`;
  const imageUrl = article.image.startsWith('http')
    ? article.image
    : `${SITE_URL}${article.image}`;

  return {
    title: `${article.title} | ${SITE_NAME}`,
    description: article.excerpt,
    keywords: [
      article.category,
      'web development insights',
      'engineering blog',
      'Nexify Webworks',
      ...article.title.toLowerCase().split(' ').filter((w) => w.length > 4),
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${article.title} | ${SITE_NAME}`,
      description: article.excerpt,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author.name],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | ${SITE_NAME}`,
      description: article.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function SingleBlogPage({ params }: Props) {
  const { id } = await params;
  const article = ARTICLES.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/insights/${article.id}`;
  const imageUrl = article.image.startsWith('http')
    ? article.image
    : `${SITE_URL}${article.image}`;

  // Find related articles (same category or recent ones, excluding current)
  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id)
    .sort((a, b) => {
      if (a.category === article.category && b.category !== article.category) return -1;
      if (b.category === article.category && a.category !== article.category) return 1;
      return 0;
    })
    .slice(0, 3);

  // Structured Data Schema for Google Search
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.excerpt,
        image: imageUrl,
        author: {
          '@type': 'Person',
          name: article.author.name,
          jobTitle: article.author.role,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
        },
        datePublished: article.date,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Insights',
            item: `${SITE_URL}/insights`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="space-y-0 bg-[#0b0f17] text-slate-100 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation Header */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 py-3 sm:py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 sm:gap-2 text-xs font-mono text-slate-400 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-indigo-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <Link href="/insights" className="hover:text-indigo-400 transition-colors">
              Insights
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="text-indigo-400 font-semibold truncate max-w-[200px] sm:max-w-none">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article Content Header & Body */}
      <article className="py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

          {/* Navigation and Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Insights</span>
            </Link>

            <ArticleShareActions url={`/insights/${article.id}`} title={article.title} />
          </div>

          {/* Title and Metadata */}
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-indigo-950/80 border border-indigo-500/40 text-indigo-300">
                {article.category}
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                {article.readTime}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                • {article.date}
              </span>
            </div>

            <h1 className="font-space text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {article.title}
            </h1>

            {/* Author Profile */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-indigo-950 border border-indigo-500/40 flex items-center justify-center text-indigo-300 font-mono font-bold text-sm overflow-hidden">
                  {article.author.avatar ? (
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span>NW</span>
                  )}
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">
                    {article.author.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {article.author.role}
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>Verified Editorial</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <Image
              fill
              priority
              src={article.image}
              alt={article.title}
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Article Structured Body */}
          <div className="pt-4">
            <ArticleBody content={article.content} excerpt={article.excerpt} />
          </div>

          {/* Bottom Share & Footer Card */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Insights</span>
            </Link>

            <ArticleShareActions url={`/insights/${article.id}`} title={article.title} />
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-950/60 via-purple-950/40 to-slate-900/60 border border-indigo-500/30 text-center space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center text-indigo-400 mx-auto">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-space font-bold text-white text-lg sm:text-xl">
              Ready to elevate your digital presence?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
              We engineer custom React web applications, high-performance WordPress builds, and pixel-perfect UI/UX designs.
            </p>
          </div>

        </div>
      </article>

      {/* Related Insights Section */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-[#0d1322] border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-space text-2xl sm:text-3xl font-extrabold text-white">
                  Related Insights
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 pt-1">
                  More articles and technical deep dives from our engineering studio.
                </p>
              </div>

              <Link
                href="/insights"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                <span>View All</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/insights/${rel.id}`}
                  className="glass-card rounded-2xl border border-slate-800 hover:border-indigo-500/50 overflow-hidden group transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        fill
                        src={rel.image}
                        alt={rel.title}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-indigo-300 border border-slate-800">
                        {rel.category}
                      </div>
                    </div>

                    <div className="p-5 space-y-2.5">
                      <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{rel.readTime}</span>
                        <span>•</span>
                        <span>{rel.date}</span>
                      </div>

                      <h3 className="font-space font-bold text-base text-white group-hover:text-indigo-300 transition-colors leading-snug line-clamp-2">
                        {rel.title}
                      </h3>

                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {rel.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-xs text-slate-400">{rel.author.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Terminal Contact Section */}
      <section id="contact" className="py-12 border-t border-slate-800/80">
        <TerminalContact />
      </section>
    </div>
  );
}
