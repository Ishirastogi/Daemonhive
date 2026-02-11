"use client"

import { HexagonBackground } from "@/components/hexagon-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  MapPin,
  Briefcase,
  ArrowRight,
  Heart,
  Laptop,
  GraduationCap,
  Plane,
  Coffee,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { useState } from "react"

const team = [
  { name: "Arjun Mehta", role: "CEO & Co-Founder", initials: "AM" },
  { name: "Kavya Sharma", role: "CTO & Co-Founder", initials: "KS" },
  { name: "Liam O'Brien", role: "VP of Engineering", initials: "LO" },
  { name: "Aisha Patel", role: "Head of Design", initials: "AP" },
  { name: "Daniel Kim", role: "Lead ML Engineer", initials: "DK" },
  { name: "Fatima Al-Rashid", role: "Head of Cloud Architecture", initials: "FA" },
  { name: "Carlos Mendez", role: "Principal Backend Engineer", initials: "CM" },
  { name: "Nina Johansson", role: "Head of Client Success", initials: "NJ" },
]

const perks = [
  { icon: Laptop, title: "Remote-First", description: "Work from anywhere in the world. We're fully distributed across 8 time zones." },
  { icon: GraduationCap, title: "Learning Budget", description: "$3,000/year for conferences, courses, and certifications of your choice." },
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health insurance plus mental wellness support for you and family." },
  { icon: Plane, title: "Unlimited PTO", description: "We trust you to manage your time. Take what you need, when you need it." },
  { icon: Coffee, title: "Team Retreats", description: "Annual all-hands retreats in exciting locations. Previous: Bali, Lisbon, Kyoto." },
  { icon: Briefcase, title: "Equity Options", description: "All full-time employees receive stock options. We grow together." },
]

const openings = [
  {
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "Remote (India / Europe)",
    type: "Full-time",
    description:
      "Design and build scalable distributed systems using Node.js, Go, or Python. You'll own critical services handling millions of requests and work with cutting-edge infrastructure.",
    requirements: [
      "5+ years of backend development experience",
      "Strong understanding of distributed systems and microservices",
      "Experience with PostgreSQL, Redis, and message queues",
      "Proficiency in Node.js, Python, or Go",
    ],
  },
  {
    title: "ML Engineer",
    department: "AI & Data",
    location: "Remote (Global)",
    type: "Full-time",
    description:
      "Build production ML systems from training to deployment. Work on recommendation engines, NLP pipelines, and computer vision systems for our enterprise clients.",
    requirements: [
      "3+ years in ML engineering (not just research)",
      "Production experience with TensorFlow or PyTorch",
      "Strong Python skills and data pipeline experience",
      "Familiarity with MLOps tools (MLflow, Kubeflow, etc.)",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote (India / Americas)",
    type: "Full-time",
    description:
      "Craft exceptional user interfaces with React and Next.js. You'll work on complex data-heavy dashboards, real-time collaboration tools, and design system components.",
    requirements: [
      "4+ years with React/Next.js in production",
      "Deep understanding of TypeScript and modern CSS",
      "Experience with state management and real-time data",
      "Eye for design and accessibility best practices",
    ],
  },
  {
    title: "DevOps / SRE Engineer",
    department: "Infrastructure",
    location: "Remote (Global)",
    type: "Full-time",
    description:
      "Own the reliability and performance of our multi-cloud infrastructure. Design CI/CD pipelines, manage Kubernetes clusters, and ensure our systems achieve 99.99% uptime.",
    requirements: [
      "4+ years in DevOps or SRE roles",
      "Expert-level Kubernetes and Docker experience",
      "Strong Terraform / Infrastructure as Code skills",
      "Experience with monitoring (Datadog, Prometheus, Grafana)",
    ],
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote (India / Europe)",
    type: "Full-time",
    description:
      "Lead the design of enterprise SaaS products from research to high-fidelity prototypes. Collaborate closely with engineering teams and clients to deliver exceptional user experiences.",
    requirements: [
      "3+ years designing complex web/mobile applications",
      "Strong portfolio demonstrating systems thinking",
      "Proficiency in Figma and prototyping tools",
      "Understanding of frontend development constraints",
    ],
  },
]

export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null)

  return (
    <>
      <HexagonBackground />
      <Navbar />
      <main className="relative z-10">
        {/* Header */}
        <section className="pb-16 pt-32">
          <div className="mx-auto max-w-7xl px-6">
            <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Join the Hive
            </span>
            <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl">
              Careers
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We are always looking for exceptional engineers, designers, and strategists 
              who want to build world-class software. Join a team where your work genuinely matters.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-12 font-display text-3xl font-bold text-foreground">
              Meet Our Leadership
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40"
                >
                  <div className="mb-4 flex h-20 w-20 items-center justify-center hex-clip bg-primary/15 transition-colors group-hover:bg-primary/25">
                    <span className="font-display text-xl font-bold text-primary">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perks */}
        <section className="pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12">
              <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
                Why DaemonHive
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground">
                Perks & Culture
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {perks.map((perk) => {
                const Icon = perk.icon
                return (
                  <div
                    key={perk.title}
                    className="rounded-lg border border-border bg-card p-6"
                  >
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {perk.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {perk.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12">
              <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
                Open Positions
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground">
                Current Openings
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {openings.map((job, i) => (
                <div
                  key={job.title}
                  className="overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/30"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between p-6 text-left"
                    onClick={() => setExpandedJob(expandedJob === i ? null : i)}
                    aria-expanded={expandedJob === i}
                  >
                    <div className="flex flex-wrap items-center gap-4">
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {job.title}
                      </h3>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Briefcase className="h-3 w-3" /> {job.type}
                      </span>
                    </div>
                    {expandedJob === i ? (
                      <ChevronUp className="h-5 w-5 shrink-0 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
                    )}
                  </button>
                  {expandedJob === i && (
                    <div className="border-t border-border px-6 pb-6 pt-4">
                      <p className="leading-relaxed text-muted-foreground">
                        {job.description}
                      </p>
                      <h4 className="mt-4 font-display text-sm font-semibold text-foreground">
                        Requirements
                      </h4>
                      <ul className="mt-2 flex flex-col gap-2">
                        {job.requirements.map((req) => (
                          <li
                            key={req}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <ArrowRight className="mt-0.5 h-3 w-3 shrink-0 text-primary" />
                            {req}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={`mailto:careers@daemonhive.com?subject=Application: ${job.title}`}
                        className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                      >
                        Apply Now
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
