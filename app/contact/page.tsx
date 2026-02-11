"use client"

import React from "react"

import { HexagonBackground } from "@/components/hexagon-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <HexagonBackground />
      <Navbar />
      <main className="relative z-10">
        <section className="pb-32 pt-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Left - Info */}
              <div>
                <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
                  Get in Touch
                </span>
                <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl">
                  <span className="text-balance">
                    Let&apos;s Build Something{" "}
                    <span className="text-primary">Together</span>
                  </span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Whether you have a clear project scope or just an idea, our solution 
                  architects are ready to help you chart the best path forward. Every 
                  consultation is free and confidential.
                </p>

                <div className="mt-12 flex flex-col gap-6">
                  <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Phone</div>
                      <a href="tel:+919634562756" className="text-sm text-muted-foreground hover:text-primary">
                        +91-9634562756
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Email</div>
                      <a href="mailto:info@daemonhive.com" className="text-sm text-muted-foreground hover:text-primary">
                        info@daemonhive.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">Office</div>
                      <p className="text-sm text-muted-foreground">
                        Bengaluru, Karnataka, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <div>
                <div className="rounded-lg border border-border bg-card p-8 md:p-10">
                  {submitted ? (
                    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Send className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground">
                        Message Sent
                      </h3>
                      <p className="mt-3 max-w-sm text-muted-foreground">
                        Thank you for reaching out. Our team will review your inquiry 
                        and get back to you within 24 hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-sm font-medium text-primary hover:underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      <h2 className="font-display text-2xl font-bold text-foreground">
                        Start Your Project
                      </h2>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-foreground">
                            First Name
                          </label>
                          <input
                            id="firstName"
                            type="text"
                            required
                            className="w-full rounded-md border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-foreground">
                            Last Name
                          </label>
                          <input
                            id="lastName"
                            type="text"
                            required
                            className="w-full rounded-md border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                          Work Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          className="w-full rounded-md border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
                          Company
                        </label>
                        <input
                          id="company"
                          type="text"
                          className="w-full rounded-md border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="Company Inc."
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="mb-2 block text-sm font-medium text-foreground">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          className="w-full rounded-md border border-border bg-secondary px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                          <option value="">Select a service</option>
                          <option value="software">Custom Software Development</option>
                          <option value="apps">App Development</option>
                          <option value="cloud">Cloud Integration</option>
                          <option value="ai">AI & Machine Learning</option>
                          <option value="data">Data Engineering</option>
                          <option value="devops">Cybersecurity & DevOps</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                          Project Details
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          required
                          className="w-full resize-none rounded-md border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="Tell us about your project, timeline, and goals..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                      >
                        <Send className="h-4 w-4" />
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
