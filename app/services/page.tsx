"use client"

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

const services = [
  {
    id: "software",
    icon: Code2,
    title: "Custom Software Development",
    subtitle: "From concept to production at scale",
    description:
      "We design and build bespoke software solutions that solve real business problems. Our engineering teams specialize in distributed systems, event-driven architectures, and high-performance applications that serve millions of users.",
    features: [
      "Full-stack web application development",
      "Microservices architecture & API design",
      "Legacy system modernization & migration",
      "Real-time systems & event-driven architecture",
      "Performance optimization & load testing",
      "Third-party API integration & middleware",
    ],
  },
  {
    id: "apps",
    icon: Smartphone,
    title: "App Development",
    subtitle: "Native performance, cross-platform reach",
    description:
      "We craft mobile experiences that users love. Whether native iOS/Android or cross-platform with Flutter, our mobile engineering team delivers polished, performant, and accessible applications for every screen size.",
    features: [
      "Native iOS & Android development",
      "Cross-platform with Flutter & React Native",
      "UI/UX design & prototyping",
      "Offline-first architecture",
      "Push notification infrastructure",
      "App Store optimization & deployment",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Integration & Migration",
    subtitle: "Resilient infrastructure, limitless scale",
    description:
      "We architect, migrate, and manage cloud infrastructure across AWS, Azure, and GCP. Our cloud engineers ensure your systems are secure, cost-optimized, and prepared for exponential growth.",
    features: [
      "Cloud architecture design & review",
      "Multi-cloud & hybrid cloud strategies",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Cost optimization & FinOps consulting",
      "Disaster recovery & business continuity",
      "Compliance frameworks (SOC 2, HIPAA, GDPR)",
    ],
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI & Machine Learning",
    subtitle: "Intelligence embedded in every workflow",
    description:
      "We build intelligent systems that learn, adapt, and deliver insights at scale. From computer vision to NLP, our ML engineers transform raw data into competitive advantage.",
    features: [
      "Custom ML model development & training",
      "Natural language processing & LLM integration",
      "Computer vision & image recognition",
      "Recommendation engines & personalization",
      "MLOps & model deployment pipelines",
      "AI strategy consulting & roadmapping",
    ],
  },
  {
    id: "data",
    icon: Database,
    title: "Data Engineering",
    subtitle: "Transform data into decisions",
    description:
      "We build the data infrastructure that powers real-time analytics, machine learning, and business intelligence. Our data engineers design systems that are reliable, scalable, and cost-efficient.",
    features: [
      "Data pipeline design & ETL orchestration",
      "Data warehouse & lakehouse architecture",
      "Real-time streaming with Kafka & Spark",
      "Business intelligence & dashboard development",
      "Data governance & quality frameworks",
      "Database optimization & migration",
    ],
  },
  {
    id: "devops",
    icon: Shield,
    title: "Cybersecurity & DevOps",
    subtitle: "Ship fast, stay secure",
    description:
      "We harden your infrastructure with zero-trust security models, automate your deployment pipelines, and implement continuous monitoring so your team can ship with confidence.",
    features: [
      "CI/CD pipeline design & automation",
      "Container orchestration (Docker, Kubernetes)",
      "Security audits & penetration testing",
      "Zero-trust architecture implementation",
      "Monitoring, logging & alerting (Datadog, Grafana)",
      "Incident response & SRE consulting",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <HexagonBackground />
      <Navbar />
      <main className="relative z-10">
        {/* Header */}
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

        {/* Services Detail */}
        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col gap-20">
              {services.map((service, i) => {
                const Icon = service.icon
                const isEven = i % 2 === 0
                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="scroll-mt-24"
                  >
                    <div
                      className={`grid items-center gap-12 lg:grid-cols-2 ${
                        isEven ? "" : "lg:direction-rtl"
                      }`}
                    >
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
                        <div className="rounded-lg border border-border bg-card p-8">
                          <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            Key Capabilities
                          </h3>
                          <ul className="flex flex-col gap-4">
                            {service.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                <span className="text-sm text-foreground">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {i < services.length - 1 && (
                      <div className="mt-20 border-t border-border" />
                    )}
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
