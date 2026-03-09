"use client";

import React from "react";

import { useEffect, useRef, useState, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Local Wallah Team",
    role: "Product Team",
    quote:
      "DaemonHive helped transform Local Wallah into a scalable hyperlocal B2B platform connecting buyers with thousands of verified sellers across India. The platform allows businesses to submit requirements and quickly get matched with trusted sellers offering competitive prices across cities and towns.",
  },
  {
    name: "StashBlog Team",
    role: "Product Team",
    quote:
      "DaemonHive designed and developed StashBlog to simplify the process of creating and managing product showcase websites. With an intuitive interface and easy-to-use tools, the platform enables users to build and manage content-driven websites without needing technical expertise.",
  },
  {
    name: "BCN Team",
    role: "Product Team",
    quote:
      "DaemonHive built BCN as a comprehensive directory platform connecting the Brahmin community with businesses, services, and professionals across multiple domains. The platform provides reliable information, reviews, and contact details, making it easier for users to discover trusted services.",
  },
  {
    name: "FoodWallah Team",
    role: "Product Team",
    quote:
      "DaemonHive developed FoodWallah as a modern food delivery platform designed to connect users with local restaurants efficiently. The system supports restaurant listings, ordering workflows, and delivery management, providing a smooth and scalable experience similar to leading food delivery apps.",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setDirection("right");
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((p) => (p + 1) % testimonials.length);
        setIsAnimating(false);
      }, 400);
    }, 6000);
  }, []);

  useEffect(() => {
    start();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [start]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setHeaderVisible(true);
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const goTo = (i: number, dir: "left" | "right") => {
    if (isAnimating) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(i);
      setIsAnimating(false);
      start();
    }, 400);
  };

  // Mouse-track tilt on the testimonial card
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  }, []);

  const getSlideTransform = () => {
    if (!isAnimating) return "translateX(0) rotateY(0deg) scale(1)";
    if (direction === "right")
      return "translateX(-40px) rotateY(-5deg) scale(0.95)";
    return "translateX(40px) rotateY(5deg) scale(0.95)";
  };

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="animate-pulse-glow absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            headerVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
            Client Voices
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div
          className="relative mx-auto max-w-4xl"
          style={{ perspective: "1200px" }}
        >
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="tilt-card overflow-hidden rounded-lg border border-border bg-card p-10 md:p-14"
            style={{ transformStyle: "preserve-3d", willChange: "transform" }}
          >
            <Quote
              className="mb-6 h-10 w-10 text-primary/30"
              aria-hidden="true"
            />
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
                  i === current
                    ? "w-8 bg-primary shadow-[0_0_10px_rgba(0,116,228,0.4)]"
                    : "w-2 bg-border"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
