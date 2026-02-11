"use client"

import React from "react"

import { useRef, useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -3
    const rotateY = ((x - centerX) / centerX) * 3
    el.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)"
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`tilt-card relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-12 transition-all duration-1000 md:p-20 ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        >
          {/* Background hexagons with parallax depth */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 opacity-5"
            aria-hidden="true"
            style={{ transform: "translateZ(-20px)" }}
          >
            <svg viewBox="0 0 100 100">
              <polygon
                points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
                fill="hsl(211, 95%, 45%)"
              />
            </svg>
          </div>
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 opacity-5"
            aria-hidden="true"
            style={{ transform: "translateZ(-30px)" }}
          >
            <svg viewBox="0 0 100 100">
              <polygon
                points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
                fill="hsl(211, 95%, 45%)"
              />
            </svg>
          </div>
          <div className="absolute inset-0 bg-primary/5" />
          <div className="animate-shimmer pointer-events-none absolute inset-0 rounded-2xl" />

          {/* Rotating ring */}
          <div className="pointer-events-none absolute right-10 top-10 h-40 w-40 opacity-[0.04]" aria-hidden="true">
            <div className="animate-rotate-slow h-full w-full rounded-full border-2 border-primary border-dashed" />
          </div>

          <div
            className="relative text-center"
            style={{ transform: "translateZ(30px)" }}
          >
            <h2
              className={`font-display text-4xl font-bold tracking-tight text-foreground transition-all duration-1000 delay-200 md:text-5xl lg:text-6xl ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <span className="text-balance">
                Ready to Build Something{" "}
                <span className="text-primary">Extraordinary</span>?
              </span>
            </h2>
            <p
              className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground transition-all duration-1000 delay-400 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Let us turn your vision into production-ready software. Schedule a
              free consultation with our solution architects and discover what
              DaemonHive can build for you.
            </p>
            <div
              className={`mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-1000 delay-600 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_40px_rgba(0,116,228,0.3)]"
              >
                Get a Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-md border border-border px-8 py-4 text-base font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
