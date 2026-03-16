"use client";

import { HexagonBackground } from "@/components/hexagon-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/sections/cta";
import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, Users, BarChart3 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const caseStudies = [
  {
    slug: "stashblog",
    title: "StashBlog",
    client: "DaemonHive Internal Product",
    industry: "Internal SaaS Platform",
    duration: "Product Development",
    team: "DaemonHive Engineering Team",
    description:
      "StashBlog is a multi-tenant SaaS platform that allows businesses to create portfolio websites, showcase product catalogs, and manage their digital presence with custom domains.",
    challenge:
      "Many businesses needed a simple way to create and manage professional websites without technical knowledge.",
    solution:
      "DaemonHive developed a scalable SaaS platform with an easy dashboard where businesses can manage products, content, and website layouts.",
    results: [
      { metric: "✓", label: "Multi-tenant SaaS platform" },
      { metric: "✓", label: "Portfolio website builder" },
      { metric: "✓", label: "Product catalog management" },
      { metric: "✓", label: "Custom domain support" },
    ],
    tags: [
      "Node.js",
      "React.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "AWS SES",
      "AWS SNS",
      "Handlebars",
    ],
    color: "from-primary/20 to-primary/5",
  },
  {
    slug: "local-wallah",
    title: "Local Wallah",
    client: "Local Businesses",
    industry: "Marketplace & Food Delivery Platform",
    duration: "Product Development",
    team: "DaemonHive Engineering Team",
    description:
      "Local Wallah is a hyperlocal platform that connects merchants and customers through marketplace services and food delivery solutions.",
    challenge:
      "Local businesses needed a digital platform to reach nearby customers and manage online orders.",
    solution:
      "DaemonHive built a marketplace and food ordering system with real-time notifications and mobile support.",
    results: [
      { metric: "✓", label: "Merchant marketplace" },
      { metric: "✓", label: "Online food ordering system" },
      { metric: "✓", label: "Customer notifications" },
      { metric: "✓", label: "Order management system" },
    ],
    tags: [
      "Node.js",
      "React.js",
      "MongoDB",
      "Redux",
      "Firebase Cloud Messaging",
      "Google OAuth",
      "MSG91 SMS",
      "Kotlin",
      "Java",
    ],
    color: "from-primary/15 to-primary/5",
  },
  {
    slug: "urns-of-dignity",
    title: "Urns of Dignity",
    client: "Urns of Dignity",
    industry: "E-Commerce Platform",
    duration: "Project Delivery",
    team: "DaemonHive Engineering Team",
    description:
      "Urns of Dignity is an e-commerce website designed to sell memorial products through a secure online storefront.",
    challenge:
      "The client needed a professional online store with secure payment options and reliable communication.",
    solution:
      "DaemonHive developed a custom e-commerce platform with secure payments and automated email notifications.",
    results: [
      { metric: "✓", label: "Online product catalog" },
      { metric: "✓", label: "Secure checkout process" },
      { metric: "✓", label: "Email notifications" },
      { metric: "✓", label: "Custom storefront design" },
    ],
    tags: [
      "Node.js",
      "React.js",
      "Express.js",
      "MongoDB",
      "AWS SES",
      "AWS SNS",
      "PayPal",
      "Stripe",
    ],
    color: "from-primary/10 to-primary/5",
  },
  {
    slug: "mopwna-cling",
    title: "Mopwna Cling",
    client: "Mopwna Cling",
    industry: "Portfolio Website",
    duration: "Project Delivery",
    team: "DaemonHive Engineering Team",
    description:
      "Mopwna Cling is a portfolio website created to present brand identity and showcase services online.",
    challenge:
      "The client needed a clean and professional website to improve their online presence.",
    solution:
      "DaemonHive developed a modern and responsive portfolio website optimized for performance and user experience.",
    results: [
      { metric: "✓", label: "Responsive website design" },
      { metric: "✓", label: "Brand-focused layout" },
      { metric: "✓", label: "Service showcase sections" },
      { metric: "✓", label: "SEO optimized structure" },
    ],
    tags: ["React.js", "HTML5", "CSS", "SCSS"],
    color: "from-primary/15 to-primary/5",
  },
  {
    slug: "bcn",
    title: "BCN (Brahmin Community Network)",
    client: "BCN",
    industry: "Community Networking Platform",
    duration: "Platform Development",
    team: "DaemonHive Engineering Team",
    description:
      "BCN is a community platform that allows members to connect, participate in events, donate to causes, and discover services within their community.",
    challenge:
      "The client needed a digital platform to manage community interaction, events, and donations.",
    solution:
      "DaemonHive developed a secure platform with communication tools, payment integration, and location-based features.",
    results: [
      { metric: "✓", label: "Community networking system" },
      { metric: "✓", label: "Event participation features" },
      { metric: "✓", label: "Donation management" },
      { metric: "✓", label: "Location-based services" },
    ],
    tags: [
      "Node.js",
      "React.js",
      "MongoDB",
      "Redux",
      "Razorpay",
      "Google Maps",
      "WhatsApp Integration",
    ],
    color: "from-primary/15 to-primary/5",
  },
  {
    slug: "yourganicx-nutrition",
    title: "Yourganicx Nutrition",
    client: "Yourganicx",
    industry: "E-Commerce Platform",
    duration: "Project Delivery",
    team: "DaemonHive Engineering Team",
    description:
      "Yourganicx Nutrition is an e-commerce website built for a nutrition brand selling health products like Green Tea Gummies and Apple Cider Vinegar Gummies.",
    challenge:
      "The client required an online store to showcase products and handle secure payments.",
    solution:
      "DaemonHive built a clean and easy-to-use e-commerce website with payment integration.",
    results: [
      { metric: "✓", label: "Online product catalog" },
      { metric: "✓", label: "Secure payment gateway" },
      { metric: "✓", label: "Mobile responsive design" },
      { metric: "✓", label: "Simple checkout process" },
    ],
    tags: ["PHP", "HTML5", "CSS", "JavaScript", "MySQL", "Razorpay"],
    color: "from-primary/15 to-primary/5",
  },
];

export default function CaseStudiesPage() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.15 },
    );
    const cards = containerRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HexagonBackground />
      <Navbar />
      <main className="relative z-10">
        {/* Page Header */}
        <section className="pb-16 pt-32">
          <div className="mx-auto max-w-7xl px-6">
            <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Our Work
            </span>
            <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl">
              Case Studies
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Real projects. Measurable outcomes. Explore how we have helped
              companies across industries transform their technology and
              accelerate growth.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="pb-32" ref={containerRef}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-16">
              {caseStudies.map((study, i) => (
                <article
                  key={study.slug}
                  data-index={i}
                  className={`overflow-hidden rounded-lg border border-border bg-card transition-all duration-700 ${
                    visibleCards.has(i)
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="grid lg:grid-cols-2">
                    {/* Left - Info */}
                    <div className="p-8 md:p-12">
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {study.industry}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" /> {study.duration}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Users className="h-3 w-3" /> {study.team}
                        </span>
                      </div>
                      <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                        {study.title}
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Client: {study.client}
                      </p>
                      <p className="mt-4 leading-relaxed text-muted-foreground">
                        {study.description}
                      </p>

                      <div className="mt-6">
                        <h3 className="font-display text-sm font-semibold text-foreground">
                          The Challenge
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="mt-4">
                        <h3 className="font-display text-sm font-semibold text-foreground">
                          Our Solution
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {study.solution}
                        </p>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right - Results */}
                    <div className="flex flex-col justify-center border-t border-border bg-secondary/30 p-8 md:p-12 lg:border-l lg:border-t-0">
                      <div className="mb-6 flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-primary" />
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          Key Results
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        {study.results.map((result) => (
                          <div
                            key={result.label}
                            className="rounded-md border border-border bg-card p-5"
                          >
                            <div className="flex items-center gap-2">
                              <TrendingUp className="h-4 w-4 text-primary" />
                              <span className="font-display text-2xl font-bold text-primary">
                                {result.metric}
                              </span>
                            </div>
                            <p className="mt-2 text-xs text-muted-foreground">
                              {result.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
