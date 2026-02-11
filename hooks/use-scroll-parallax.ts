"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollParallax() {
  const ref = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height
      const rawProgress =
        (windowHeight - elementTop) / (windowHeight + elementHeight)
      setProgress(Math.max(0, Math.min(1, rawProgress)))
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { ref, progress }
}
