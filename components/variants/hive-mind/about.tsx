"use client"

import React from "react"

import { useRef, useEffect, useState, useCallback } from "react"
import { Target, Users, Zap, Globe } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Precision Engineering",
    description:
      "Every line of code is crafted with intent. We obsess over architecture, performance, and maintainability.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We embed ourselves in your vision. Our success is measured by the growth we enable for your business.",
  },
  {
    icon: Zap,
    title: "Rapid Delivery",
    description:
      "Agile methodology meets battle-tested processes. We ship production-ready solutions at startup speed.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "From Bengaluru to Berlin, our distributed teams deliver enterprise-grade solutions across time zones.",
  },
]

const stats = [
  { number: "80+", label: "Engineers" },
  { number: "25+", label: "Countries Served" },
  { number: "99.9%", label: "Uptime SLA" },
  { number: "$50M+", label: "Revenue Generated for Clients" },
]

function StatCard({
  stat,
  index,
  isVisible,
}: {
  stat: { number: string; label: string }
  index: number
  isVisible: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8
    el.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)"
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card rounded-md border border-border bg-secondary/50 p-4 transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150 + 300}ms` }}
    >
      <div className="font-display text-2xl font-bold text-primary">{stat.number}</div>
      <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
    </div>
  )
}

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [valuesVisible, setValuesVisible] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.hasAttribute("data-about-main") && entry.isIntersecting) {
            setIsVisible(true)
          }
          const vi = entry.target.getAttribute("data-value-index")
          if (vi !== null && entry.isIntersecting) {
            setValuesVisible((prev) => new Set(prev).add(Number(vi)))
          }
        })
      },
      { threshold: 0.2 }
    )

    const main = ref.current?.querySelector("[data-about-main]")
    if (main) observer.observe(main)
    const vals = ref.current?.querySelectorAll("[data-value-index]")
    vals?.forEach((v) => observer.observe(v))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
      const leftEl = ref.current.querySelector("[data-about-left]") as HTMLElement
      const rightEl = ref.current.querySelector("[data-about-right]") as HTMLElement
      if (leftEl) {
        leftEl.style.transform = `translateY(${progress * -20}px)`
      }
      if (rightEl) {
        rightEl.style.transform = `translateY(${progress * -35}px)`
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={ref} id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div data-about-main className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Visual */}
          <div
            data-about-left
            className={`relative transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
            style={{ willChange: "transform" }}
          >
            <div className="relative overflow-hidden rounded-lg border border-border bg-card p-10">
              <div className="animate-pulse-glow absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="animate-pulse-glow absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl" style={{ animationDelay: "1.5s" }} />
              <div className="relative">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center hex-clip bg-primary/20 animate-glow-ring">
                    <span className="font-display text-xl font-bold text-primary">
                      DH
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Since 2013
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Bengaluru, India
                    </p>
                  </div>
                </div>
                <div className="perspective-container grid grid-cols-2 gap-6">
                  {stats.map((stat, i) => (
                    <StatCard
                      key={stat.label}
                      stat={stat}
                      index={i}
                      isVisible={isVisible}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            data-about-right
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
            style={{ willChange: "transform" }}
          >
            <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              About DaemonHive
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              <span className="text-balance">
                The Collective Mind Behind Your Digital Future
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              DaemonHive Technologies was founded on a simple principle:
              technology should empower, not complicate. We are a hive of
              engineers, designers, and strategists who collaborate in unison to
              deliver solutions that are as elegant as they are powerful.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {values.map((v, i) => {
                const Icon = v.icon
                return (
                  <div
                    key={v.title}
                    data-value-index={i}
                    className={`flex gap-4 transition-all duration-700 ${
                      valuesVisible.has(i)
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                    style={{ transitionDelay: `${i * 150 + 400}ms` }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 transition-colors hover:bg-primary/20">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-semibold text-foreground">
                        {v.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {v.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
