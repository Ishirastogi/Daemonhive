import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Product Engineering ", href: "/services#product" },
      { label: "Custom Web Applications ", href: "/services#custom" },
      { label: "Cloud Infrastructure & Deployment ", href: "/services#cloud" },
      { label: "API & Backend Systems ", href: "/services#api" },
      { label: "Performance & Scalability Optimization", href: "/services#performance" },
      { label: "Security & Reliability", href: "/services#security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Case Studies", href: "/case-studies" },
      // { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Tech Stack", href: "/#tech-stack" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://daemonhive.com/assets/logo-CV0w4yEw.png"
                alt="DaemonHive Technologies logo"
                width={160}
                height={40}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Enterprise-grade software solutions that drive digital transformation. 
              We build scalable, future-proof technology for businesses worldwide.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:+919634562756"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                +91-9634562756
              </a>
              <a
                href="mailto:info@daemonhive.com"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                info@daemonhive.com
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Moradabad, India
              </span>
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                {section.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DaemonHive Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["LinkedIn", "Instagram", "Facebook"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                aria-label={`${social} profile`}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
