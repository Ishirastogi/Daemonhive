"use client"

import { HexagonBackground } from "@/components/hexagon-background"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services"
import { AboutSection } from "@/components/sections/about"
import { TechStackSection } from "@/components/sections/tech-stack"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <HexagonBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TechStackSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
