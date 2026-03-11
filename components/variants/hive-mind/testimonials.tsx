"use client"

import React from "react"

import { useEffect, useRef, useState, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Garima International",
    role: "Export Business using StashBlog",
    quote:
      "StashBlog helped us build a professional digital presence for our export business. The platform allowed us to create a portfolio website, manage product catalogs, and operate with a custom domain effortlessly.",
  },
  {
    name: "LocalWallah",
    role: "Marketplace & Food Delivery Platform",
    quote:
      "DaemonHive developed a complete hyperlocal ecosystem connecting merchants and consumers through marketplace and food delivery services. The platform includes merchant dashboards, notifications, and scalable infrastructure.",
  },
  {
    name: "Urns of Dignity",
    role: "Memorial Products E-Commerce Platform",
    quote:
      "DaemonHive built a fully functional e-commerce platform with a custom storefront and secure online payments through PayPal and Stripe. The platform supports our business operations smoothly and reliably.",
  },
  {
    name: "BCN (Brahmin Community Network)",
    role: "Community Networking Platform",
    quote:
      "DaemonHive created a complete community networking platform including events, donations, and location-based features with Google Maps integration. After completion, the entire system was successfully transferred to our team for independent management.",
  },
  {
    name: "Yourganicx Nutrition",
    role: "Nutrition Brand E-Commerce Website",
    quote:
      "DaemonHive delivered a clean and functional e-commerce website for our nutrition brand, allowing customers to purchase products like Green Tea Gummies and Apple Cider Vinegar Gummies through a seamless online experience.",
  },
  {
    name: "Sher Sweets",
    role: "Business Link Page",
    quote:
      "The business link page built by DaemonHive helped us centralize all our online platforms including social media, reviews, and contact information, making it easier for customers to connect with us.",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const [isAnimating, setIsAnimating] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const start = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setDirection("right")
      setIsAnimating(true)
      setTimeout(() => {
        setCurrent((p) => (p + 1) % testimonials.length)
        setIsAnimating(false)
      }, 400)
    }, 6000)
  }, [])

  useEffect(() => {
    start()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [start])

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

  const goTo = (i: number, dir: "left" | "right") => {
    if (isAnimating) return
    if (intervalRef.current) clearInterval(intervalRef.current)
    setDirection(dir)
    setIsAnimating(true)
    setTimeout(() => {
      setCurrent(i)
      setIsAnimating(false)
      start()
    }, 400)
  }

  // Mouse-track tilt on the testimonial card
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -4
    const rotateY = ((x - centerX) / centerX) * 4
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
  }, [])

  const getSlideTransform = () => {
    if (!isAnimating) return "translateX(0) rotateY(0deg) scale(1)"
    if (direction === "right") return "translateX(-40px) rotateY(-5deg) scale(0.95)"
    return "translateX(40px) rotateY(5deg) scale(0.95)"
  }

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-pulse-glow absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
            Client Voices
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="relative mx-auto max-w-4xl" style={{ perspective: "1200px" }}>
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="tilt-card overflow-hidden rounded-lg border border-border bg-card p-10 md:p-14"
            style={{ transformStyle: "preserve-3d", willChange: "transform" }}
          >
            <Quote className="mb-6 h-10 w-10 text-primary/30" aria-hidden="true" />
            <div
              className="min-h-[140px] transition-all duration-500 ease-out"
              style={{
                transform: getSlideTransform(),
                opacity: isAnimating ? 0 : 1,
              }}
            >
              <p className="text-xl leading-relaxed text-foreground md:text-2xl">
                {testimonials[current].quote}
              </p>
            </div>
            <div
              className="mt-8 flex items-center justify-between transition-all duration-500 ease-out"
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? "translateY(10px)" : "translateY(0)",
              }}
            >
              <div>
                {/* <div className="mb-3 flex gap-1">
                  {Array.from({ length: testimonials[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    )
                  )}
                </div> */}
                <div className="font-display text-lg font-semibold text-foreground">
                  {testimonials[current].name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[current].role}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() =>
                    goTo(
                      (current - 1 + testimonials.length) % testimonials.length,
                      "left"
                    )
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,116,228,0.15)]"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    goTo((current + 1) % testimonials.length, "right")
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,116,228,0.15)]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Shimmer overlay */}
            <div className="animate-shimmer pointer-events-none absolute inset-0 rounded-lg" />
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i, i > current ? "right" : "left")}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === current ? "w-8 bg-primary shadow-[0_0_10px_rgba(0,116,228,0.4)]" : "w-2 bg-border"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
