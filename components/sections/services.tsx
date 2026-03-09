"use client"

import React from "react"

import { useEffect, useRef, useState, useCallback } from "react"
import {
  Code2,
  Cloud,
  Smartphone,
  Brain,
  Database,
  Shield,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code2,
    title: "Product Engineering",
    description:
      "We design and build scalable digital products from concept to production. Our engineering approach focuses on performance, reliability, and long-term maintainability..",
    tags: ["React", "Node.js", "Express", ".MongoDB"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless user experiences across iOS and Android with pixel-perfect precision.",
    tags: ["Flutter", "React Native", "Swift", "Kotlin"],
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description:
      "Migrate, optimize, and manage your cloud infrastructure. We design resilient architectures on AWS, Azure, and GCP for maximum uptime.",
    tags: ["AWS", "Azure", "GCP", "Terraform"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Transform raw data into intelligent insights. From NLP pipelines to computer vision systems, we bring AI into your business workflows.",
    tags: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Build robust data pipelines and warehouses that power real-time analytics, reporting dashboards, and data-driven decision making.",
    tags: ["Spark", "Kafka", "Snowflake", "dbt"],
  },
  {
    icon: Shield,
    title: "Cybersecurity & DevOps",
    description:
      "Harden your infrastructure with zero-trust security models, CI/CD pipelines, and continuous monitoring to protect your digital assets.",
    tags: ["Docker", "K8s", "CI/CD", "SOC 2"],
  },
]

function TiltCard({
  children,
  index,
  isVisible,
}: {
  children: React.ReactNode
  index: number
  isVisible: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current
      const glare = glareRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -10
      const rotateY = ((x - centerX) / centerX) * 10
      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
      if (glare) {
        const glareX = (x / rect.width) * 100
        const glareY = (y / rect.height) * 100
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(0, 116, 228, 0.12) 0%, transparent 60%)`
      }
    },
    []
  )

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current
    const glare = glareRef.current
    if (!el) return
    el.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    if (glare) {
      glare.style.background = "transparent"
    }
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card group relative flex h-[360px] flex-col justify-between overflow-hidden rounded-lg border border-border bg-card p-8 transition-transform duration-300 hover:border-primary/40 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 z-10 rounded-lg transition-all duration-300"
      />
      {children}
    </div>
  )
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index")
          if (index !== null && entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(Number(index)))
          }
          if (entry.target.hasAttribute("data-header") && entry.isIntersecting) {
            setHeaderVisible(true)
          }
        })
      },
      { threshold: 0.15 }
    )

    const header = sectionRef.current?.querySelector("[data-header]")
    if (header) observer.observe(header)
    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="relative py-32">
      {/* Scroll-reactive background light */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-pulse-glow absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div
          data-header
          className={`mb-16 max-w-2xl transition-all duration-1000 ${
            headerVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
            What We Do
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">
              Full-Spectrum Technology Solutions
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our collection of services spans every stage of the digital
            transformation process. From ideation to deployment, we architect
            solutions that endure.
          </p>
        </div>

        <div className="perspective-container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div key={service.title} data-index={i}>
                <TiltCard index={i} isVisible={visibleCards.has(i)}>
                  <div className="relative z-20" style={{ transform: "translateZ(30px)" }}>
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {service.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2 min-h-[40px]">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2"
                      >
                        Learn more
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                  {/* Corner glow on hover */}
                  <div className="pointer-events-none absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                </TiltCard>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
