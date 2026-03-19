"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { HexagonBackground } from "@/components/hexagon-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/sections/cta";
import { Clock, Users, CheckCircle2, Layers3 } from "lucide-react";

// --- Animation Wrapper Internal Component ---
function CaseStudyCardWrapper({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    const glare = glareRef.current;
    if (!el) return;

    // Remove transition for instant tracking
    el.style.transition = "none";

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle tilt
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;

    if (glare) {
      glare.style.transition = "none";
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(0,116,228,0.12) 0%, transparent 60%)`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    const glare = glareRef.current;
    if (!el) return;

    // Smooth reset
    el.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";

    if (glare) {
      glare.style.transition = "background 0.5s ease";
      glare.style.background = "transparent";
    }
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-full w-full overflow-hidden rounded-lg border border-border bg-card shadow-sm"
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {/* Blue Glare Layer */}
      <div 
        ref={glareRef}
        className="pointer-events-none absolute inset-0 z-10 transition-all"
      />
      {children}
    </div>
  );
}

const caseStudies = [
  {
    slug: "stashblog",
    title: "StashBlog",
    client: "DaemonHive Internal Product",
    industry: "Internal SaaS Platform",
    duration: "Ongoing",
    team: "DaemonHive Team",
    description:
      "StashBlog is a multi-tenant SaaS platform that allows businesses to create portfolio websites, showcase product catalogs, and manage their digital presence with custom domains.",
    challenge:
      "Many businesses needed a simple way to create and manage professional websites without technical knowledge.",
    solution:
      "DaemonHive developed a scalable SaaS platform with an easy dashboard where businesses can manage products, content, and website layouts.",
    capabilities: [
      "Multi-tenant SaaS platform",
      "Portfolio website builder",
      "Product catalog management",
      "Custom domain support",
      "Easy content management",
      "Scalable architecture",
    ],
    technologies: [
      "Node.js",
      "React.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "AWS SES",
      "AWS SNS",
      "Handlebars",
    ],
  },
  {
    slug: "local-wallah",
    title: "Local Wallah",
    client: "Local Businesses",
    industry: "Marketplace & Food Delivery Platform",
    duration: "Ongoing",
    team: "DaemonHive Team",
    description:
      "Local Wallah is a hyperlocal platform that connects merchants and customers through marketplace services and food delivery solutions.",
    challenge:
      "Local businesses needed a digital platform to reach nearby customers and manage online orders.",
    solution:
      "DaemonHive built a marketplace and food ordering system with real-time notifications and mobile support.",
    capabilities: [
      "Merchant marketplace",
      "Online food ordering system",
      "Customer notifications",
      "Secure authentication",
      "Order management system",
      "Mobile application support",
    ],
    technologies: [
      "Node.js",
      "React.js",
      "MongoDB",
      "Redux",
      "Firebase Cloud Messaging",
      "Google OAuth",
      "MSG91 SMS Integration",
      "Kotlin",
      "Java",
    ],
    projectNames: [
      "Merchant Marketplace",
      "Food Delivery",
      "LocalWallah Android App",
    ],
    projectTechSections: [
      {
        title: "Merchant Marketplace",
        items: [
          "Frontend - Redux",
          "Messaging & Notifications - Firebase Cloud Messaging (FCM)",
        ],
      },
      {
        title: "Food Delivery",
        items: [
          "Frontend - Redux",
          "Authentication - Google OAuth",
          "Messaging & Notifications - Firebase Cloud Messaging",
          "MSG91 SMS Integration",
          "Telecom Compliance - VI DLT Integration",
        ],
      },
      {
        title: "LocalWallah Android App",
        items: [
          "Programming Languages - Kotlin",
          "Programming Languages - Java",
          "Messaging & Notifications - Firebase Cloud Messaging (FCM)",
        ],
      },
    ],
  },
  {
    slug: "urns-of-dignity",
    title: "Urns of Dignity",
    client: "Urns of Dignity",
    industry: "E-Commerce Platform",
    duration: "Project Based",
    team: "DaemonHive Team",
    description:
      "Urns of Dignity is an e-commerce website designed to sell memorial products through a secure online storefront.",
    challenge:
      "The client needed a professional online store with secure payment options and reliable communication.",
    solution:
      "DaemonHive developed a custom e-commerce platform with secure payments and automated email notifications.",
    capabilities: [
      "Online product catalog",
      "Secure checkout process",
      "Email notifications",
      "Custom storefront design",
      "Cloud hosting infrastructure",
      "SEO-friendly structure",
    ],
    technologies: [
      "Node.js",
      "React.js",
      "Express.js",
      "MongoDB",
      "AWS SES",
      "AWS SNS",
      "PayPal",
      "Stripe",
    ],
  },
  {
    slug: "mopwna-cling",
    title: "Mopwna Cling",
    client: "Mopwna Cling",
    industry: "Portfolio Website",
    duration: "Project Based",
    team: "DaemonHive Team",
    description:
      "Mopwna Cling is a portfolio website created to present brand identity and showcase services online.",
    challenge:
      "The client needed a clean and professional website to improve their online presence.",
    solution:
      "DaemonHive developed a modern and responsive portfolio website optimized for performance and user experience.",
    capabilities: [
      "Responsive website design",
      "Brand-focused layout",
      "Service showcase sections",
      "Mobile-friendly interface",
      "Fast page loading",
      "SEO optimized structure",
    ],
    technologies: ["React.js", "HTML5", "CSS", "SCSS"],
  },
  {
    slug: "bcn",
    title: "BCN (Brahmin Community Network)",
    client: "BCN",
    industry: "Community Networking Platform",
    duration: "Project Based",
    team: "DaemonHive Team",
    description:
      "BCN is a community platform that allows members to connect, participate in events, contribute to causes, and discover services within their community.",
    challenge:
      "The client needed a digital platform to manage community interaction and  events.",
    solution:
      "DaemonHive developed a secure platform with communication tools, payment integration, and location-based features.",
    capabilities: [
      "Community networking system",
      "Event participation features",
      "Donation support",
      "Member communication tools",
      "Location-based services",
      "Secure payment integration",
    ],
    technologies: [
      "Node.js",
      "React.js",
      "MongoDB",
      "Redux",
      "Razorpay",
      "Google Maps Integration",
      "WhatsApp Workflow Integration",
    ],
  },
  {
    slug: "yourganicx",
    title: "Yourganicx Nutrition",
    client: "Yourganicx",
    industry: "E-Commerce Platform",
    duration: "Project Based",
    team: "DaemonHive Team",
    description:
      "Yourganicx Nutrition is an e-commerce website built for a nutrition brand selling health products like Green Tea Gummies and Apple Cider Vinegar Gummies.",
    challenge:
      "The client required an online store to showcase products and handle secure payments.",
    solution:
      "DaemonHive built a clean and easy-to-use e-commerce website with payment integration.",
    capabilities: [
      "Online product catalog",
      "Secure payment gateway",
      "Mobile responsive design",
      "Simple checkout process",
      "Product information pages",
      "SEO-friendly structure",
    ],
    technologies: ["PHP", "HTML5", "CSS", "JavaScript", "MySQL", "Razorpay"],
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
        <section className="pb-16 pt-32">
          <div className="mx-auto max-w-7xl px-6">
            <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Our Work
            </span>
            <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl">
              Case Studies
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Real projects with measurable outcomes. This section highlights
              how DaemonHive Technologies has helped companies across different
              industries modernize their technology and accelerate business
              growth.
            </p>
          </div>
        </section>

        <section className="pb-32" ref={containerRef}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-16">
              {caseStudies.map((study, i) => (
                <div
                  key={study.slug}
                  data-index={i}
                  className={`transition-all duration-700 ${
                    visibleCards.has(i)
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <CaseStudyCardWrapper>
                    <article className="grid lg:grid-cols-2">
                      <div className="p-8 md:p-10">
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

                        <div className="mt-5">
                          <h3 className="font-display text-sm font-semibold text-foreground">
                            Overview
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {study.description}
                          </p>
                        </div>

                        <div className="mt-5">
                          <h3 className="font-display text-sm font-semibold text-foreground">
                            Challenge
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {study.challenge}
                          </p>
                        </div>

                        <div className="mt-5">
                          <h3 className="font-display text-sm font-semibold text-foreground">
                            Solution
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {study.solution}
                          </p>
                        </div>

                        {study.slug === "local-wallah" &&
                          "projectNames" in study && (
                            <div className="mt-6">
                              <h3 className="font-display text-sm font-semibold text-foreground">
                                Projects
                              </h3>
                              <div className="mt-3 space-y-3">
                                {study.projectNames?.map((projectName) => (
                                  <div
                                    key={projectName}
                                    className="rounded-md border border-border bg-secondary/20 p-4"
                                  >
                                    <p className="text-sm font-medium text-foreground">
                                      {projectName}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                      </div>

                      <div className="border-t border-border bg-secondary/30 p-8 md:p-10 lg:border-l lg:border-t-0">
                        {study.slug === "local-wallah" &&
                        "projectTechSections" in study ? (
                          <div className="space-y-6">
                            <div>
                              <div className="mb-4 flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <h3 className="font-display text-lg font-semibold text-foreground">
                                  Key Capabilities
                                </h3>
                              </div>
                              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {study.capabilities.map((item) => (
                                  <div
                                    key={item}
                                    className="rounded-md border border-border bg-card px-4 py-3 text-sm text-muted-foreground transition-transform duration-200 hover:-translate-y-1"
                                  >
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <div className="mb-4 flex items-center gap-2">
                                <Layers3 className="h-5 w-5 text-primary" />
                                <h3 className="font-display text-lg font-semibold text-foreground">
                                  Technologies Used
                                </h3>
                              </div>
                              <div className="space-y-4">
                                {study.projectTechSections?.map((section) => (
                                  <div
                                    key={section.title}
                                    className="rounded-md border border-border bg-card p-4"
                                  >
                                    <h4 className="font-display text-sm font-semibold text-foreground">
                                      {section.title}
                                    </h4>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                      {section.items.map((item) => (
                                        <span
                                          key={item}
                                          className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-sm text-muted-foreground"
                                        >
                                          {item}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-6">
                            <div>
                              <div className="mb-4 flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <h3 className="font-display text-lg font-semibold text-foreground">
                                  Key Capabilities
                                </h3>
                              </div>
                              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {study.capabilities.map((item) => (
                                  <div
                                    key={item}
                                    className="rounded-md border border-border bg-card px-4 py-3 text-sm text-muted-foreground transition-transform duration-200 hover:-translate-y-1"
                                  >
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <div className="mb-4 flex items-center gap-2">
                                <Layers3 className="h-5 w-5 text-primary" />
                                <h3 className="font-display text-lg font-semibold text-foreground">
                                  Technologies Used
                                </h3>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {study.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </article>
                  </CaseStudyCardWrapper>
                </div>
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