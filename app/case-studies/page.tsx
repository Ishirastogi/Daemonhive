"use client"

import { HexagonBackground } from "@/components/hexagon-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/sections/cta"
import Link from "next/link"
import { ArrowRight, TrendingUp, Clock, Users, BarChart3 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const caseStudies = [
  {
    slug: "fintech-modernization",
    title: "FinTech App Modernization",
    client: "NovaPay Financial",
    industry: "Financial Services",
    duration: "6 months",
    team: "12 engineers",
    description:
      "Rebuilt a legacy monolithic banking platform into a distributed microservices architecture handling 2M+ daily transactions with 99.99% uptime.",
    challenge:
      "NovaPay's decade-old monolithic system couldn't handle the 10x growth in transaction volume. Downtime incidents were costing $200K per hour, and deploying new features took weeks instead of days.",
    solution:
      "We decomposed the monolith into 24 domain-driven microservices, implemented event-driven architecture with Apache Kafka, and migrated to a Kubernetes-based infrastructure on AWS EKS with auto-scaling capabilities.",
    results: [
      { metric: "400%", label: "Transaction Throughput Increase" },
      { metric: "60%", label: "Infrastructure Cost Reduction" },
      { metric: "99.99%", label: "Uptime Achieved" },
      { metric: "3x", label: "Faster Feature Deployment" },
    ],
    tags: ["Microservices", "AWS", "Kafka", "Kubernetes", "Node.js", "PostgreSQL"],
    color: "from-primary/20 to-primary/5",
  },
  {
    slug: "ecommerce-ai",
    title: "E-Commerce AI Integration",
    client: "StyleVault",
    industry: "Retail & E-Commerce",
    duration: "4 months",
    team: "8 engineers",
    description:
      "Designed and deployed an AI-powered recommendation engine and visual search system that increased average order value by 35% and conversion rates by 22%.",
    challenge:
      "StyleVault's product catalog of 500K+ items was overwhelming customers. Their generic recommendation system had a click-through rate of just 2.1%, and customers were abandoning carts at an alarming 78% rate.",
    solution:
      "We built a hybrid recommendation engine combining collaborative filtering with deep learning models, integrated computer vision for visual similarity search, and deployed real-time personalization using a feature store on Redis.",
    results: [
      { metric: "35%", label: "Average Order Value Increase" },
      { metric: "22%", label: "Conversion Rate Improvement" },
      { metric: "12%", label: "Cart Abandonment Reduction" },
      { metric: "8.7x", label: "Recommendation Click-through" },
    ],
    tags: ["TensorFlow", "Python", "Redis", "React", "FastAPI", "GCP"],
    color: "from-primary/15 to-primary/5",
  },
  {
    slug: "healthtech-platform",
    title: "HealthTech Cloud Platform",
    client: "HealthBridge",
    industry: "Healthcare",
    duration: "8 months",
    team: "15 engineers",
    description:
      "Built a HIPAA-compliant telehealth platform from the ground up, serving 50K+ monthly active patients with real-time video consultations and AI-assisted diagnostics.",
    challenge:
      "HealthBridge needed a fully compliant telehealth solution that could handle sensitive patient data, real-time video with sub-200ms latency, and integration with 30+ EHR systems across the United States.",
    solution:
      "We architected a HIPAA-compliant cloud infrastructure on AWS GovCloud with end-to-end encryption, built custom WebRTC infrastructure for low-latency video, and developed HL7 FHIR adapters for universal EHR interoperability.",
    results: [
      { metric: "50K+", label: "Monthly Active Patients" },
      { metric: "150ms", label: "Average Video Latency" },
      { metric: "30+", label: "EHR Integrations" },
      { metric: "Series A", label: "Funding Secured Post-Launch" },
    ],
    tags: ["AWS GovCloud", "WebRTC", "Flutter", "FHIR", "Python", "Terraform"],
    color: "from-primary/10 to-primary/5",
  },
  {
    slug: "logistics-optimization",
    title: "Logistics Route Optimization",
    client: "Krellmann Group",
    industry: "Logistics & Supply Chain",
    duration: "5 months",
    team: "10 engineers",
    description:
      "Developed an ML-powered route optimization platform that reduced fleet fuel consumption by 28% and improved delivery accuracy to 99.2% across 15 European markets.",
    challenge:
      "Krellmann's fleet of 2,000+ vehicles was operating on manually planned routes. Fuel costs were spiraling, delivery windows were frequently missed, and there was zero real-time visibility into fleet operations.",
    solution:
      "We built a real-time fleet management platform with ML-based route optimization using constraint satisfaction algorithms, integrated IoT sensors for vehicle telemetry, and developed a driver-facing mobile app with turn-by-turn navigation.",
    results: [
      { metric: "28%", label: "Fuel Cost Reduction" },
      { metric: "99.2%", label: "Delivery Accuracy" },
      { metric: "40%", label: "Fewer Manual Interventions" },
      { metric: "15", label: "Markets Deployed" },
    ],
    tags: ["Python", "OR-Tools", "React", "Flutter", "Kafka", "MongoDB"],
    color: "from-primary/15 to-primary/5",
  },
]

export default function CaseStudiesPage() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.15 }
    )
    const cards = containerRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

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
              Real projects. Measurable outcomes. Explore how we have helped companies 
              across industries transform their technology and accelerate growth.
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
                          <div key={result.label} className="rounded-md border border-border bg-card p-5">
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
  )
}
