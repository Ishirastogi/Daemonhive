"use client"

import { useRef, useCallback } from "react"
import { HexagonBackground } from "@/components/hexagon-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta"
import { TechStackSection } from "@/components/sections/tech-stack"
import {
  Code2,
  Smartphone,
  Cloud,
  Brain,
  Database,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"

// --- Animation Wrapper Internal Component with Glare ---
function CardAnimationWrapper({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    const glare = glareRef.current;
    if (!el) return;

    el.style.transition = "none"; // Instant tilt tracking

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    if (glare) {
      glare.style.transition = "none"; // Instant light tracking
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      // Blue light effect
      glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(0,116,228,0.15) 0%, transparent 65%)`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    const glare = glareRef.current;
    if (!el) return;

    // Smooth reset for both tilt and light
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
      className="relative h-full w-full overflow-hidden rounded-lg"
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

const services = [
  {
    id: "product",
    icon: Code2,
    title: "Product Engineering",
    subtitle: "Building Digital Products That Scale",
    description:
      "We design and build scalable digital products from concept to production. Our engineering approach focuses on performance, reliability, and maintainable architecture that supports long-term growth and evolving business needs.",
    features: [
      "Full product architecture planning",
      "Frontend and backend development",
      "Scalable system design",
      "Database integration and management",
      "API integration and service communication",
      "Continuous testing and deployment",
    ],
  },
  {
    id: "custom",
    icon: Smartphone,
    title: "Custom Web Applications",
    subtitle: "Modern Web Platforms Built for Performance",
    description:
      "We develop modern web applications tailored to your business requirements. Our solutions focus on speed, scalability, and seamless user experiences, enabling businesses to operate efficiently and deliver value to users.",
    features: [
      "Responsive web application development",
      "Dashboard and admin panel creation",
      "API integration and data connectivity",
      "Progressive web application support",
      "State management implementation",
      "Secure user authentication systems",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Infrastructure & Deployment",
    subtitle: "Reliable Cloud Systems for Growing Businesses",
    description:
      "We design and manage cloud infrastructure that ensures high availability and performance. Our deployment strategies support scalable environments, secure operations, and reliable systems that grow with your applications.",
    features: [
      "Cloud architecture planning",
      "Production environment setup",
      "Continuous deployment pipelines",
      "Infrastructure monitoring",
      "Server configuration and management",
      "Performance and cost optimization",
    ],
  },
  {
    id: "api",
    icon: Brain,
    title: "API & Backend Systems",
    subtitle: "Powering Applications with Strong Backend Systems",
    description:
      "We develop robust backend systems and scalable APIs that support modern applications. Our backend architectures focus on security, reliability, and efficient data processing for seamless communication between services.",
    features: [
      " RESTful API development",
      "Scalable backend architecture",
      "Microservices implementation",
      "Authentication and authorization systems",
      "Database and data management",
      "Real-time data processing",
    ],
  },
  {
    id: "performance",
    icon: Database,
    title: "Performance & Scalability Optimization",
    subtitle: "Making Applications Faster and More Efficient",
    description:
      "We improve system performance to ensure applications run smoothly even under heavy traffic. Our optimization strategies reduce load times, improve responsiveness, and enhance overall application stability and efficiency.",
    features: [
      "Application performance optimization",
      "Server and database tuning",
      "Advanced caching implementation",
      "CDN integration for faster delivery",
      "Load balancing strategies",
      "System performance monitoring",
    ],
  },
  {
    id: "security",
    icon: Shield,
    title: "Security & Reliability",
    subtitle: "Protecting Systems with Strong Security Practices",
    description:
      "We implement secure architectures and infrastructure practices that protect applications and sensitive data. Our approach ensures system reliability, user privacy, and continuous monitoring to prevent security risks.",
    features: [
      "Secure authentication systems",
      "Data encryption implementation",
      "Access control management",
      "Rate limiting and request protection",
      "Security monitoring and logging",
      "Infrastructure vulnerability checks",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <HexagonBackground />
      <Navbar />
      <main className="relative z-10">
        <section className="pb-16 pt-32">
          <div className="mx-auto max-w-7xl px-6">
            <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Our Capabilities
            </span>
            <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl">
              Services
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We deliver end-to-end technology services that cover every layer of 
              the modern stack. Here is how we can help you build, scale, and secure 
              your digital infrastructure.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-20">
              {services.map((service, i) => {
                const Icon = service.icon
                const isEven = i % 2 === 0
                return (
                  <div key={service.id} id={service.id} className="scroll-mt-24">
                    <div className={`grid items-center gap-12 lg:grid-cols-2 ${isEven ? "" : "lg:direction-rtl"}`}>
                      <div className={isEven ? "" : "lg:order-2"}>
                        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                          {service.title}
                        </h2>
                        <p className="mt-1 font-display text-lg text-primary">
                          {service.subtitle}
                        </p>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>
                        <Link
                          href="/contact"
                          className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                        >
                          Discuss This Service
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>

                      <div className={isEven ? "" : "lg:order-1"}>
                        <CardAnimationWrapper>
                          <div className="rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/40">
                            <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                              Key Capabilities
                            </h3>
                            <ul className="flex flex-col gap-4">
                              {service.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3">
                                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                  <span className="text-sm text-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardAnimationWrapper>
                      </div>
                    </div>
                    {i < services.length - 1 && <div className="mt-20 border-t border-border" />}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <TechStackSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}