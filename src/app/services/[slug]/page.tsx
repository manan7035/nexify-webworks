import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES } from '@/src/data/mockData';
import { SITE_NAME, SITE_URL } from '@/src/app/constants';
import { TerminalContact } from '@/components/TerminalContact';
import {
  Zap,
  Code2,
  Layout,
  Gauge,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  HelpCircle,
  Layers,
  ShieldCheck
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Code2,
  Layout,
  Gauge
};

export async function generateStaticParams() {
  return SERVICES.map((s) => ({
    slug: s.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: `Service Not Found | ${SITE_NAME}`
    };
  }

  const canonicalUrl = `${SITE_URL}/services/${service.slug}`;

  return {
    title: `${service.metaTitle} | ${SITE_NAME}`,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription
    }
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.iconName] || Zap;
  const canonicalUrl = `${SITE_URL}/services/${service.slug}`;

  // Structured Data Schema for Google Search
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": service.title,
        "serviceType": service.badge,
        "provider": {
          "@type": "Organization",
          "name": SITE_NAME,
          "url": SITE_URL
        },
        "description": service.metaDescription,
        "url": canonicalUrl
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": SITE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": `${SITE_URL}/services`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": canonicalUrl
          }
        ]
      },
      service.faqs && service.faqs.length > 0 ? {
        "@type": "FAQPage",
        "mainEntity": service.faqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      } : null
    ].filter(Boolean)
  };

  return (
    <div className="space-y-0 bg-[#0b0f17] text-slate-100 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation Header */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 sm:gap-2 text-xs font-mono text-slate-400 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <Link href="/services" className="hover:text-indigo-400 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="text-indigo-400 font-semibold truncate max-w-[200px] sm:max-w-none">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Service Detail Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-20 overflow-hidden bg-grid-pattern border-b border-slate-800/80">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{service.badge}</span>
              </div>

              <h1 className="font-syne text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-normal leading-relaxed">
                {service.heroSubtitle}
              </p>

              {/* Service Meta Badges (No Timeline & No 100% Claims) */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs font-mono text-slate-400 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Core Web Vitals Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  <span>SEO Best Practices</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span>Custom Proposal</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all"
                >
                  <span>Request Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/60 text-sm font-semibold transition-all"
                >
                  <span>View All Services</span>
                </Link>
              </div>
            </div>

            {/* Right Card Feature Highlights */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                  <IconComponent className="w-7 h-7" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-space text-white">
                  Target SEO Focus Keywords
                </h3>

                <div className="flex flex-wrap gap-2">
                  {service.keywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/90 border border-slate-700/60 text-xs font-mono text-slate-300"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Core Capabilities Included
                  </span>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-12 sm:py-16 bg-[#0b0f17] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="font-syne text-2xl sm:text-4xl font-extrabold text-white">
              Service Overview
            </h2>
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              {service.overview}
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
            {service.features.map((feat, idx) => {
              const FeatIcon = iconMap[feat.iconName] || Zap;
              return (
                <div key={idx} className="rounded-2xl bg-slate-900/50 border border-slate-800/80 p-5 sm:p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <FeatIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-space text-white">{feat.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{feat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Steps Roadmap */}
      <section className="py-12 sm:py-20 bg-slate-950/60 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4 max-w-2xl mx-auto">
            <h2 className="font-syne text-2xl sm:text-4xl font-extrabold text-white">
              Implementation Roadmap
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm lg:text-base">
              A structured 4-step delivery workflow ensuring clean code execution and responsive user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.workflow.map((w, idx) => (
              <div key={idx} className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 space-y-3 relative">
                <div className="text-3xl font-extrabold font-mono bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                  {w.step}
                </div>
                <h3 className="text-base font-bold font-space text-white">{w.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-12 sm:py-20 bg-[#0b0f17] border-b border-slate-800/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-indigo-400 shrink-0" />
              <h2 className="font-syne text-2xl sm:text-3xl font-extrabold text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid gap-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 sm:p-6 space-y-2">
                  <h3 className="text-sm sm:text-base font-bold font-space text-white flex items-center justify-between">
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lead Proposal Terminal Section */}
      <section id="contact" className="py-12">
        <TerminalContact />
      </section>
    </div>
  );
}
