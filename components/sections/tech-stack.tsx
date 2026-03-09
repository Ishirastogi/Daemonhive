"use client"

import React from "react"

import { useEffect, useRef, useState, useCallback } from "react"

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Express.js", category: "API Framework" },
  { name: "Whimsical ", category: "Wireframe" },
  { name: "Figma", category: "UI Design" },
  { name: "EC2", category: "Compute" },
  { name: "S3", category: "Storage" },
  { name: "Node.js", category: "Backend" },
  { name: "Agile", category: "WorkFlow" },
  { name: "Trello", category: "Project Management" },
  { name: "MongoDB", category: "Database" },
  { name: "Vite", category: "Build Tool" },
  { name: "Linux", category: "Server OS" },
  { name: "AWS", category: "Cloud" },
  { name: "SCSS", category: "Styling" },
  { name: "PM2", category: "Process Manager" },
  { name: "Github", category: "Repository" },
  { name: "Cloudflare", category: "CDN" },
  { name: "Nginx", category: "Web Server" },
  { name: "SNS", category: "Messaging" },
  { name: "Git", category: "Version Control" },
  { name: "SES", category: "Email" },
]

function TechPill({
  tech,
  onMouseMove,
  onMouseLeave,
}: {
  tech: { name: string; category: string }
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void
  onMouseLeave: () => void
}) {
  const pillRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = pillRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -6
      const rotateY = ((x - centerX) / centerX) * 6
      el.style.transform = `perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`
      onMouseMove(e)
    },
    [onMouseMove]
  )

  const handleLeave = useCallback(() => {
    const el = pillRef.current
    if (!el) return
    el.style.transform = "perspective(400px) rotateX(0deg) rotateY(0deg) scale(1)"
    onMouseLeave()
  }, [onMouseLeave])

  return (
    <div
      ref={pillRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="tilt-card flex shrink-0 items-center gap-3 rounded-lg border border-border bg-card px-5 py-3 transition-colors hover:border-primary/40 hover:bg-secondary/80"
    >
      <div className="h-2 w-2 rounded-full bg-primary" />
      <span className="text-sm font-medium text-foreground">{tech.name}</span>
      <span className="text-xs text-muted-foreground">{tech.category}</span>
    </div>
  )
}

export function TechStackSection() {
  const doubled = [...technologies, ...technologies]
  const sectionRef = useRef<HTMLElement>(null)
  const [headerVisible, setHeaderVisible] = useState(false)
  const [marqueeHovered, setMarqueeHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setHeaderVisible(true)
        })
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handlePillMouseMove = useCallback(() => {
    setMarqueeHovered(true)
  }, [])

  const handlePillMouseLeave = useCallback(() => {
    setMarqueeHovered(false)
  }, [])

  return (
    <section ref={sectionRef} id="tech-stack" className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
            Our Arsenal
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Technologies We Master
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We stay at the bleeding edge. Our engineers are proficient in a wide
            spectrum of modern tools and frameworks.
          </p>
        </div>
      </div>

      {/* Marquee Row 1 */}
      <div
        className={`relative mb-4 overflow-hidden transition-all duration-1000 delay-300 ${
          headerVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
        }`}
      >
        <div
          className="flex gap-4"
          style={{
            width: "max-content",
            animation: `marquee 30s linear infinite`,
            animationPlayState: marqueeHovered ? "paused" : "running",
          }}
        >
          {doubled.map((tech, i) => (
            <TechPill
              key={`${tech.name}-${i}`}
              tech={tech}
              onMouseMove={handlePillMouseMove}
              onMouseLeave={handlePillMouseLeave}
            />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - reversed */}
      <div
        className={`relative overflow-hidden transition-all duration-1000 delay-500 ${
          headerVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
        }`}
      >
        <div
          className="flex gap-4"
          style={{
            width: "max-content",
            animation: "marquee 40s linear infinite reverse",
            animationPlayState: marqueeHovered ? "paused" : "running",
          }}
        >
          {[...doubled].reverse().map((tech, i) => (
            <TechPill
              key={`rev-${tech.name}-${i}`}
              tech={tech}
              onMouseMove={handlePillMouseMove}
              onMouseLeave={handlePillMouseLeave}
            />
          ))}
        </div>
      </div>

      {/* Edge fade gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
    </section>
  )
}
