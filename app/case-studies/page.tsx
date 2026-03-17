"use client";

import { HexagonBackground } from "@/components/hexagon-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/sections/cta";
import { useEffect, useRef, useState } from "react";
import { TrendingUp, Clock, Users, BarChart3 } from "lucide-react";

const caseStudies = [
  {
    slug: "stashblog",
    title: "StashBlog",
    client: "DaemonHive Internal Product",
    industry: "Internal SaaS Platform",
    duration: "Ongoing",
    team: "DaemonHive Team",

    description:
      "A multi-tenant SaaS platform that enables businesses to create portfolio websites, showcase catalogs, and manage digital presence with custom domains.",

    challenge:
      "Businesses needed an easy way to create professional websites without technical expertise.",

    solution:
      "Built a scalable SaaS platform with dashboard, product management, and customizable domains.",
    results: [
      { metric: "6+", label: "Businesses Powered" },
      { metric: "✓", label: "Multi-tenant Architecture" },
      { metric: "✓", label: "Custom Domains" },
      { metric: "✓", label: "Scalable Platform" },
    ],
    techStack: {
      core: ["Node.js", "React.js", "Express.js", "MongoDB"],
      frontend: ["Redux"],
      cloud: ["AWS SES", "AWS SNS"],
      templating: ["Handlebars"],
    },
    tags: ["Redux", "AWS SES", "AWS SNS", "Handlebars"],
    color: "from-primary/20 to-primary/5",
  },

  {
    slug: "local-wallah",
    title: "Local Wallah",
    client: "Local Businesses",
    industry: "Marketplace & Food Delivery",
    duration: "Ongoing",
    team: "DaemonHive Team",
    description:
      "A hyperlocal ecosystem connecting merchants and customers via marketplace and food delivery.",
    challenge:
      "Local businesses needed a digital platform to reach nearby customers.",
    solution:
      "Built marketplace + food delivery system with notifications and mobile support.",
    results: [
      { metric: "✓", label: "Marketplace System" },
      { metric: "✓", label: "Food Delivery" },
      { metric: "✓", label: "Real-time Notifications" },
      { metric: "✓", label: "Mobile App Support" },
    ],
    techStack: {
      core: ["Node.js", "React.js", "MongoDB"],
      frontend: ["Redux"],
      messaging: ["Firebase Cloud Messaging", "MSG91 SMS"],
      auth: ["Google OAuth"],
      telecom: ["DLT Integration"],
      mobile: ["Kotlin", "Java"],
    },
    tags: ["Redux", "FCM", "OAuth", "Kotlin", "Java"],
    color: "from-primary/15 to-primary/5",
  },

  {
    slug: "urns-of-dignity",
    title: "Urns of Dignity",
    client: "Urns of Dignity",
    industry: "E-Commerce Platform",
    duration: "Project Based",
    team: "DaemonHive Team",
    description:
      "E-commerce platform for selling memorial products with secure payments.",
    challenge: "Needed secure online store with communication system.",
    solution: "Built custom storefront with payment + automated emails.",
    results: [
      { metric: "✓", label: "Secure Checkout" },
      { metric: "✓", label: "Custom Storefront" },
      { metric: "✓", label: "Email Automation" },
      { metric: "✓", label: "Cloud Hosting" },
    ],
    techStack: {
      core: ["Node.js", "React.js", "Express.js", "MongoDB"],
      cloud: ["AWS SES", "AWS SNS"],
      templating: ["Handlebars"],
      payments: ["PayPal", "Stripe"],
    },
    tags: ["AWS", "Stripe", "PayPal", "Handlebars"],
    color: "from-primary/10 to-primary/5",
  },

  {
    slug: "mopwna-cling",
    title: "Mopwna Cling",
    client: "Mopwna Cling",
    industry: "Portfolio Website",
    duration: "Project Based",
    team: "DaemonHive Team",
    description: "Portfolio website for brand identity and online presence.",
    challenge: "Needed a clean professional website.",
    solution: "Built modern responsive website with optimized UX.",
    results: [
      { metric: "✓", label: "Responsive Design" },
      { metric: "✓", label: "Fast Performance" },
      { metric: "✓", label: "SEO Optimized" },
      { metric: "✓", label: "Modern UI" },
    ],
    techStack: {
      frontend: ["React.js", "HTML5", "CSS", "SCSS"],
    },
    tags: ["React", "CSS", "SCSS"],
    color: "from-primary/15 to-primary/5",
  },

  {
    slug: "bcn",
    title: "BCN (Brahmin Community Network)",
    client: "BCN",
    industry: "Community Platform",
    duration: "Project Based",
    team: "DaemonHive Team",
    description: "Community platform for networking, events, and donations.",
    challenge: "Needed digital system for managing community.",
    solution: "Built secure platform with payments and communication tools.",
    results: [
      { metric: "✓", label: "Community Networking" },
      { metric: "✓", label: "Event System" },
      { metric: "✓", label: "Donations" },
      { metric: "✓", label: "Location Services" },
    ],
    techStack: {
      core: ["Node.js", "React.js", "MongoDB"],
      frontend: ["Redux"],
      payments: ["Razorpay"],
      communication: ["WhatsApp Integration"],
      telecom: ["DLT Integration"],
      maps: ["Google Maps"],
    },
    tags: ["Razorpay", "Maps", "WhatsApp", "Redux"],
    color: "from-primary/15 to-primary/5",
  },

  {
    slug: "yourganicx",
    title: "Yourganicx Nutrition",
    client: "Yourganicx",
    industry: "E-Commerce Platform",
    duration: "Project Based",
    team: "DaemonHive Team",
    description: "E-commerce website for nutrition products like gummies.",
    challenge: "Needed product showcase + payment system.",
    solution: "Built simple and clean store with payment integration.",
    results: [
      { metric: "✓", label: "Product Catalog" },
      { metric: "✓", label: "Secure Payments" },
      { metric: "✓", label: "Mobile Friendly" },
      { metric: "✓", label: "SEO Optimized" },
    ],
    techStack: {
      language: ["PHP"],
      frontend: ["HTML5", "CSS", "JavaScript"],
      database: ["MySQL"],
      payments: ["Razorpay"],
    },
    tags: ["PHP", "MySQL", "Razorpay"],
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
