"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { HexagonBackground } from "@/components/hexagon-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/sections/cta";
import { Clock, Users, CheckCircle2, Layers3 } from "lucide-react";

// --- Types ---
interface ProjectTechSection {
  title: string;
  description: string;
  items: string[];
}

interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  team: string;
  description: string;
  challenge: string;
  solution: string;
  capabilities: string[];
  technologies: string[];
  businessesPowered?: string[];
  projectTechSections?: ProjectTechSection[];
}

// --- Animation Wrapper Component ---
function CaseStudyCardWrapper({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    const glare = glareRef.current;
    if (!el) return;

    el.style.transition = "none";
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

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
      <div ref={glareRef} className="pointer-events-none absolute inset-0 z-10 transition-all" />
      {children}
    </div>
  );
}

const caseStudies: CaseStudy[] = [
  {
    slug: "stashblog",
    title: "StashBlog",
    client: "DaemonHive Internal Product",
    industry: "Internal SaaS Platform",
    duration: "Ongoing",
    team: "DaemonHive Team",
    description: "StashBlog is a multi-tenant SaaS platform that allows businesses to create portfolio websites, showcase product catalogs, and manage their digital presence with custom domains.",
    challenge: "Many businesses needed a simple way to create and manage professional websites without technical knowledge.",
    solution: "DaemonHive developed a scalable SaaS platform with an easy dashboard where businesses can manage products, content, and website layouts.",
    businessesPowered: [
      "Garima International", "Global Craft Innovations", "Spruce Exports", 
      "Af International Inc.", "Agf Creations", "Divine Aura Jewels"
    ],
    capabilities: [
      "Multi-tenant SaaS platform", "Portfolio website builder", "Product catalog management",
      "Custom domain support", "Easy content management", "Scalable architecture"
    ],
    technologies: ["Node.js", "React.js", "Express.js", "MongoDB", "Redux", "AWS SES", "AWS SNS", "Handlebars"],
  },
  {
    slug: "local-wallah",
    title: "Local Wallah",
    client: "Local Businesses",
    industry: "Marketplace & Food Delivery",
    duration: "Ongoing",
    team: "DaemonHive Team",
    description: "Local Wallah is a hyperlocal platform that connects merchants and customers through marketplace services and food delivery solutions.",
    challenge: "Local businesses needed a digital platform to reach nearby customers and manage online orders.",
    solution: "DaemonHive built a marketplace and food ordering system with real-time notifications and mobile support.",
    capabilities: [
      "Merchant marketplace", "Online food ordering system", "Customer notifications",
      "Secure authentication", "Order management system", "Mobile application support"
    ],
    technologies: [], // Empty because we are using projectTechSections instead
    projectTechSections: [
      {
        title: "Merchant Marketplace",
        description: "A centralized hub for local vendors to list products and track performance.",
        items: ["Node.js", "React.js", "MongoDB", "Redux"]
      },
      {
        title: "Food Delivery",
        description: "Specialized delivery system with real-time tracking and VI DLT integration.",
        items: ["Node.js", "Express.js", "Google OAuth", "MSG91"]
      },
      {
        title: "LocalWallah Android App",
        description: "Native application designed for seamless customer browsing and push notifications.",
        items: ["Kotlin", "Java", "Firebase Cloud Messaging"]
      }
    ],
  },
  {
    slug: "urns-of-dignity",
    title: "Urns of Dignity",
    client: "Urns of Dignity",
    industry: "E-Commerce Platform",
    duration: "Project Based",
    team: "DaemonHive Team",
    description: "Urns of Dignity is an e-commerce website designed to sell memorial products through a secure online storefront.",
    challenge: "The client needed a professional online store with secure payment options and reliable communication.",
    solution: "DaemonHive developed a custom e-commerce platform with secure payments and automated email notifications.",
    capabilities: ["Online product catalog", "Secure checkout process", "Email notifications", "Custom storefront design", "Cloud hosting", "SEO-friendly structure"],
    technologies: ["Node.js", "React.js", "Express.js", "MongoDB", "AWS SES", "AWS SNS", "PayPal", "Stripe"],
  },
  {
    slug: "mopwna-cling",
    title: "Mopwna Cling",
    client: "Mopwna Cling",
    industry: "Portfolio Website",
    duration: "Project Based",
    team: "DaemonHive Team",
    description: "Mopwna Cling is a portfolio website created to present brand identity and showcase services online.",
    challenge: "The client needed a clean and professional website to improve their online presence.",
    solution: "DaemonHive developed a modern and responsive portfolio website optimized for performance and user experience.",
    capabilities: ["Responsive design", "Brand-focused layout", "Service showcase", "Mobile-friendly interface", "Fast loading", "SEO optimized"],
    technologies: ["React.js", "HTML5", "CSS", "SCSS"],
  },
  {
    slug: "bcn",
    title: "BCN (Brahmin Community Network)",
    client: "BCN",
    industry: "Community Networking",
    duration: "Project Based",
    team: "DaemonHive Team",
    description: "BCN is a community platform that allows members to connect, participate in events, and discover services within their community.",
    challenge: "The client needed a digital platform to manage community interaction and events.",
    solution: "DaemonHive developed a secure platform with communication tools, payment integration, and location-based features.",
    capabilities: ["Community networking", "Event features", "Donation support", "Communication tools", "Location services", "Payment integration"],
    technologies: ["Node.js", "React.js", "MongoDB", "Redux", "Razorpay", "Google Maps", "WhatsApp Integration"],
  },
  {
    slug: "yourganicx",
    title: "Yourganicx Nutrition",
    client: "Yourganicx",
    industry: "E-Commerce Platform",
    duration: "Project Based",
    team: "DaemonHive Team",
    description: "Yourganicx Nutrition is an e-commerce website built for a nutrition brand selling health products.",
    challenge: "The client required an online store to showcase products and handle secure payments.",
    solution: "DaemonHive built a clean and easy-to-use e-commerce website with payment integration.",
    capabilities: ["Product catalog", "Secure payment gateway", "Mobile responsive", "Simple checkout", "Product information", "SEO-friendly"],
    technologies: ["PHP", "HTML5", "CSS", "JavaScript", "MySQL", "Razorpay"],
  },
];

const otherClients = [
  "Sher Sweets", "Benelli Keeway", "Bansal Nursing Home", "Cosmedicaa", "Dev Primus", "Preka Ent"
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
        {/* Header Section */}
        <section className="pb-16 pt-32">
          <div className="mx-auto max-w-7xl px-6">
            <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">Our Work</span>
            <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl">Case Studies</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Real projects with measurable outcomes. This section highlights how DaemonHive Technologies has helped companies across different industries modernize their technology.
            </p>
          </div>
        </section>

        {/* Main Case Studies */}
        <section className="pb-20" ref={containerRef}>
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-16">
              {caseStudies.map((study, i) => (
                <div
                  key={study.slug}
                  data-index={i}
                  className={`transition-all duration-700 ${visibleCards.has(i) ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <CaseStudyCardWrapper>
                    <article className="grid lg:grid-cols-2">
                      {/* LEFT COLUMN */}
                      <div className="p-8 md:p-10">
                        <div className="mb-4 flex flex-wrap items-center gap-3">
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{study.industry}</span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3 w-3" /> {study.duration}</span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground"><Users className="h-3 w-3" /> {study.team}</span>
                        </div>

                        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">{study.title}</h2>
                        <p className="mt-2 text-sm text-muted-foreground">Client: {study.client}</p>

                        <div className="mt-5">
                          <h3 className="font-display text-sm font-semibold text-foreground">Overview</h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{study.description}</p>
                          {study.businessesPowered && (
                            <div className="mt-4 p-4 rounded-md border border-border bg-secondary/10">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Businesses Powered by StashBlog</h4>
                              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                                {study.businessesPowered.map((biz) => (
                                  <div key={biz} className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <div className="h-1 w-1 rounded-full bg-primary" /> {biz}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="mt-5">
                          <h3 className="font-display text-sm font-semibold text-foreground">Challenge</h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{study.challenge}</p>
                        </div>

                        <div className="mt-5">
                          <h3 className="font-display text-sm font-semibold text-foreground">Solution</h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{study.solution}</p>
                          
                          {/* Left column now only shows descriptions for Local Wallah projects */}
                          {study.slug === "local-wallah" && study.projectTechSections && (
                            <div className="mt-6 space-y-4">
                              <h3 className="font-display text-sm font-semibold text-foreground">Core Projects</h3>
                              {study.projectTechSections.map((section) => (
                                <div key={section.title} className="rounded-md border border-border bg-card p-4">
                                  <h4 className="font-display text-sm font-semibold text-foreground">{section.title}</h4>
                                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{section.description}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* RIGHT COLUMN */}
                      <div className="border-t border-border bg-secondary/30 p-8 md:p-10 lg:border-l lg:border-t-0">
                        <div className="space-y-8">
                          <div>
                            <div className="mb-4 flex items-center gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary" />
                              <h3 className="font-display text-lg font-semibold text-foreground">Key Capabilities</h3>
                            </div>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                              {study.capabilities.map((item) => (
                                <div key={item} className="rounded-md border border-border bg-card px-4 py-3 text-sm text-muted-foreground transition-transform duration-200 hover:-translate-y-1">
                                  {item}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <div className="mb-4 flex items-center gap-2">
                              <Layers3 className="h-5 w-5 text-primary" />
                              <h3 className="font-display text-lg font-semibold text-foreground">
                                {study.projectTechSections ? "Project Technologies" : "Technologies Used"}
                              </h3>
                            </div>
                            
                            {/* If it's Local Wallah, show separate tech stacks per sub-project */}
                            {study.projectTechSections ? (
                              <div className="space-y-4">
                                {study.projectTechSections.map((section) => (
                                  <div key={section.title} className="rounded-md border border-border bg-card/50 p-4">
                                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2">{section.title}</h4>
                                    <div className="flex flex-wrap gap-2">
                                      {section.items.map((tech) => (
                                        <span key={tech} className="rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground">
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="flex flex-wrap gap-2">
                                {study.technologies.map((tech) => (
                                  <span key={tech} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  </CaseStudyCardWrapper>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Clients Section */}
        <section className="pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <CaseStudyCardWrapper>
              <div className="bg-card/50 p-8 md:p-12">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
                  <div className="max-w-xl">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Local Partnerships
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-bold text-foreground">
                      Other Clients We&apos;ve Worked With
                    </h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      DaemonHive has created digital link platforms for several local businesses to centralize their online presence, social media, and Google Reviews.
                    </p>
                    <div className="mt-8 space-y-3">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                        Typical Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          "Social Media Centralization",
                          "Google Reviews Integration",
                          "Contact & Directions",
                          "Product/Website Links"
                        ].map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 w-full lg:max-w-md">
                    {otherClients.map((client) => (
                      <div 
                        key={client} 
                        className="group relative overflow-hidden rounded-lg border border-border bg-secondary/20 px-4 py-6 text-center transition-all duration-300 hover:border-primary/50 hover:bg-secondary/30"
                      >
                        <div className="relative z-10 text-sm font-bold text-foreground">
                          {client} 
                        </div>
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary/5 to-transparent transition-transform duration-500 group-hover:translate-x-0" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CaseStudyCardWrapper>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  );
}