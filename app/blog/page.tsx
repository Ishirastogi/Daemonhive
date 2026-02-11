"use client"

import { HexagonBackground } from "@/components/hexagon-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Clock, User } from "lucide-react"
import { useState } from "react"

const categories = ["All", "Engineering", "AI & ML", "Cloud", "Culture", "Industry"]

const posts = [
  {
    slug: "future-of-ai-in-saas",
    title: "The Future of AI in SaaS: From Assistants to Autonomous Agents",
    excerpt:
      "Large language models are reshaping SaaS at every level. We explore how AI agents will move from simple chat interfaces to autonomous decision-making systems that transform enterprise workflows.",
    category: "AI & ML",
    author: "Daniel Kim",
    role: "Lead ML Engineer",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "microservices-at-scale",
    title: "Microservices at Scale: Lessons from Rebuilding a Banking Platform",
    excerpt:
      "When NovaPay asked us to decompose their monolith into 24 services, we learned hard lessons about distributed transactions, event sourcing, and the importance of domain boundaries.",
    category: "Engineering",
    author: "Liam O'Brien",
    role: "VP of Engineering",
    date: "Dec 28, 2025",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "cloud-cost-optimization",
    title: "Cloud Cost Optimization: How We Cut a Client's AWS Bill by 60%",
    excerpt:
      "Most companies are overspending on cloud by 30-50%. Here's our systematic approach to FinOps: from rightsizing instances to leveraging spot fleets and reserved capacity.",
    category: "Cloud",
    author: "Fatima Al-Rashid",
    role: "Head of Cloud Architecture",
    date: "Dec 10, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "building-remote-culture",
    title: "Building a High-Performance Remote Engineering Culture",
    excerpt:
      "With 80+ engineers across 8 time zones, we've learned what works (and what doesn't) in distributed teams. Async-first communication, documentation-driven development, and trust.",
    category: "Culture",
    author: "Arjun Mehta",
    role: "CEO & Co-Founder",
    date: "Nov 22, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "real-time-ml-recommendations",
    title: "Building Real-Time ML Recommendation Systems for E-Commerce",
    excerpt:
      "How we built a hybrid recommendation engine that processes 50K events per second and serves personalized results in under 50ms using feature stores and model serving infrastructure.",
    category: "AI & ML",
    author: "Daniel Kim",
    role: "Lead ML Engineer",
    date: "Nov 5, 2025",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "kubernetes-production-guide",
    title: "A Practical Guide to Running Kubernetes in Production",
    excerpt:
      "After managing 200+ K8s clusters for our clients, here are our battle-tested practices for networking, security policies, resource management, and monitoring at scale.",
    category: "Cloud",
    author: "Carlos Mendez",
    role: "Principal Backend Engineer",
    date: "Oct 18, 2025",
    readTime: "15 min read",
    featured: false,
  },
  {
    slug: "hipaa-compliant-architecture",
    title: "Designing HIPAA-Compliant Cloud Architecture: A Technical Deep Dive",
    excerpt:
      "Healthcare software demands the highest security standards. We break down our approach to building HealthBridge's telehealth platform with end-to-end encryption and audit trails.",
    category: "Industry",
    author: "Fatima Al-Rashid",
    role: "Head of Cloud Architecture",
    date: "Oct 1, 2025",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "design-systems-at-scale",
    title: "Why Every Engineering Team Needs a Design System (And How to Build One)",
    excerpt:
      "Design systems aren't just for designers. We explain how a well-crafted component library accelerates development, reduces bugs, and creates consistent user experiences.",
    category: "Engineering",
    author: "Aisha Patel",
    role: "Head of Design",
    date: "Sep 14, 2025",
    readTime: "9 min read",
    featured: false,
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory)

  const featured = posts.find((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured || activeCategory !== "All")

  return (
    <>
      <HexagonBackground />
      <Navbar />
      <main className="relative z-10">
        {/* Header */}
        <section className="pb-8 pt-32">
          <div className="mx-auto max-w-7xl px-6">
            <span className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Insights
            </span>
            <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl">
              Blog
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Technical deep dives, industry perspectives, and lessons learned from 
              building enterprise software at scale.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="pb-12 pt-4">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {activeCategory === "All" && featured && (
          <section className="pb-12">
            <div className="mx-auto max-w-7xl px-6">
              <div className="overflow-hidden rounded-lg border border-border bg-card">
                <div className="grid lg:grid-cols-2">
                  <div className="flex items-center bg-primary/5 p-8 md:p-14">
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="flex h-32 w-32 items-center justify-center hex-clip bg-primary/15">
                        <span className="font-display text-4xl font-bold text-primary">AI</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:p-14">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        Featured
                      </span>
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                        {featured.category}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                      {featured.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {featured.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" /> {featured.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {featured.readTime}
                      </span>
                      <span>{featured.date}</span>
                    </div>
                    <button
                      type="button"
                      className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Post Grid */}
        <section className="pb-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col rounded-lg border border-border bg-card transition-all hover:border-primary/30"
                >
                  <div className="flex h-40 items-center justify-center bg-secondary/50">
                    <div className="flex h-16 w-16 items-center justify-center hex-clip bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <span className="font-display text-sm font-bold text-primary">
                        {post.category.split(" ")[0].slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="font-display text-base font-semibold leading-snug text-foreground">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <User className="h-3 w-3" /> {post.author}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
