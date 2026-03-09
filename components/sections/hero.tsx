"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Cloud, Server, Code2, Wrench, Pencil } from "lucide-react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
      if (!sectionRef.current) return
      const elements = sectionRef.current.querySelectorAll("[data-parallax]")
      elements.forEach((el) => {
        const speed = Number(el.getAttribute("data-parallax")) || 0.5
        ;(el as HTMLElement).style.transform = `translateY(${window.scrollY * speed}px)`
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Depth Layer 1 - Far background hexagons, slow parallax */}
      <div
        data-parallax="0.08"
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {[
          { x: "10%", y: "15%", size: 180, delay: "0s", opacity: 0.04 },
          { x: "85%", y: "20%", size: 220, delay: "1s", opacity: 0.03 },
          { x: "70%", y: "70%", size: 160, delay: "3s", opacity: 0.04 },
          { x: "20%", y: "75%", size: 140, delay: "2s", opacity: 0.03 },
        ].map((hex, i) => (
          <div
            key={i}
            className="animate-float absolute"
            style={{
              left: hex.x,
              top: hex.y,
              width: hex.size,
              height: hex.size,
              animationDelay: hex.delay,
              animationDuration: "8s",
              transform: `translate(${mousePos.x * -5}px, ${mousePos.y * -5}px)`,
              transition: "transform 0.6s ease-out",
            }}
          >
            <svg viewBox="0 0 100 100" style={{ opacity: hex.opacity }}>
              <polygon
                points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
                fill="none"
                stroke="hsl(211, 95%, 45%)"
                strokeWidth="0.5"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Depth Layer 2 - Mid hexagons, medium parallax */}
      <div
        data-parallax="0.18"
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {[
          { x: "55%", y: "10%", size: 100, delay: "0.5s", opacity: 0.08 },
          { x: "5%", y: "45%", size: 80, delay: "1.5s", opacity: 0.06 },
          { x: "90%", y: "55%", size: 90, delay: "2.5s", opacity: 0.07 },
        ].map((hex, i) => (
          <div
            key={i}
            className="animate-float absolute"
            style={{
              left: hex.x,
              top: hex.y,
              width: hex.size,
              height: hex.size,
              animationDelay: hex.delay,
              animationDuration: "7s",
              transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)`,
              transition: "transform 0.4s ease-out",
            }}
          >
            <svg viewBox="0 0 100 100" style={{ opacity: hex.opacity }}>
              <polygon
                points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
                fill="hsl(211, 95%, 45%)"
                fillOpacity="0.15"
                stroke="hsl(211, 95%, 45%)"
                strokeWidth="0.8"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Depth Layer 3 - Close floating particles, fast parallax */}
      <div
        data-parallax="0.3"
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {[
          { x: "30%", y: "25%", size: 6 },
          { x: "60%", y: "35%", size: 4 },
          { x: "80%", y: "15%", size: 5 },
          { x: "15%", y: "60%", size: 4 },
          { x: "75%", y: "80%", size: 6 },
          { x: "45%", y: "85%", size: 3 },
        ].map((dot, i) => (
          <div
            key={i}
            className="animate-pulse-glow absolute rounded-full bg-primary"
            style={{
              left: dot.x,
              top: dot.y,
              width: dot.size,
              height: dot.size,
              animationDelay: `${i * 0.7}s`,
              transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
              transition: "transform 0.3s ease-out",
            }}
          />
        ))}
      </div>

      {/* Rotating ring decoration */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
        style={{
          transform: `translate(-50%, -50%) translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`,
          transition: "transform 0.5s ease-out",
        }}
      >
        <div className="animate-rotate-slow h-[700px] w-[700px] rounded-full border border-primary/[0.04]" />
      </div>
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div
          className="h-[500px] w-[500px] rounded-full border border-primary/[0.06]"
          style={{
            animation: "rotate-slow 25s linear infinite reverse",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div
              className={`mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary transition-all duration-1000 ${
                isLoaded ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Engineering Scalable Digital Systems
            </div>
            <h1
              className={`font-display text-5xl font-bold leading-tight tracking-tight text-foreground transition-all duration-1000 delay-150 md:text-6xl lg:text-7xl ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <span className="text-balance">
                Where Innovation{" "}
                <span className="text-primary">Meets</span> Execution
              </span>
            </h1>
            <p
              className={`mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground transition-all duration-1000 delay-300 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              We are DaemonHive Technologies. An elite team of engineers and
              strategists building enterprise-grade software, scalable cloud
              systems, and intelligent applications that transform businesses.
            </p>
            <div
              className={`mt-10 flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(0,116,228,0.3)]"
              >
                Get a Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                View Our Work
              </Link>
            </div>

          
            {/* <div
              className={`mt-16 flex gap-10 transition-all duration-1000 delay-700 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {[
                { value: "150+", label: "Projects Delivered" },
                { value: "98%", label: "Client Retention" },
                { value: "12+", label: "Years of Excellence" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right - 3D Hex Grid */}
          <div
            className={`relative hidden transition-all duration-1200 delay-500 lg:block ${
              isLoaded ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
            style={{ perspective: "1000px" }}
          >
            <div
              className="relative mx-auto h-[500px] w-[500px]"
              style={{
                transform: `rotateY(${mousePos.x * 5}deg) rotateX(${mousePos.y * -5}deg)`,
                transition: "transform 0.3s ease-out",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Center Hex */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ transform: "translate(-50%, -50%) translateZ(40px)" }}
              >
                <div className="flex h-40 w-40 items-center justify-center hex-clip bg-primary/20 animate-glow-ring">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <Code2 className="h-8 w-8 text-primary" />
                    <span className="text-xs font-semibold text-foreground">
                      Full-Stack
                    </span>
                  </div>
                </div>
              </div>
              {/* Orbiting Hexes */}
              {[
               { Icon: Cloud, label: "Cloud", x: "50%", y: "4%", z: 20, delay: "0s", translateX: "-50%" },
{ Icon: Server, label: "Scalable Systems", x: "82%", y: "65%", z: 30, delay: "1s", translateX: "0" },
{ Icon: Code2, label: "APIs", x: "5%", y: "65%", z: 15, delay: "2s", translateX: "0" },
{ Icon: Wrench, label: "DevOps", x: "78%", y: "18%", z: 25, delay: "0.5s", translateX: "0" },
{ Icon: Pencil, label: "SaaS", x: "8%", y: "22%", z: 10, delay: "1.5s", translateX: "0" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="animate-float absolute"
                  style={{
                    left: item.x,
                    top: item.y,
                    transform: `translateX(${item.translateX}) translateZ(${item.z}px)`,
                    animationDelay: item.delay,
                    animationDuration: `${6 + i}s`,
                  }}
                >
                  <div className="flex h-28 w-28 items-center justify-center hex-clip bg-primary/10 transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                    <div className="flex flex-col items-center gap-1">
                      <item.Icon className="h-5 w-5 text-primary" />
                      <span className="text-[10px] text-muted-foreground">
                        {item.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {/* Connecting lines (subtle) */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden="true"
                style={{ transform: "translateZ(5px)" }}
              >
                <line x1="50%" y1="18%" x2="50%" y2="42%" stroke="hsl(211, 95%, 45%)" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="58%" x2="30%" y2="72%" stroke="hsl(211, 95%, 45%)" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="58%" x2="72%" y2="72%" stroke="hsl(211, 95%, 45%)" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
              {/* Glow */}
              <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-primary/5 blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <div className="h-8 w-5 rounded-full border border-border p-1">
            <div className="h-2 w-full animate-bounce rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
