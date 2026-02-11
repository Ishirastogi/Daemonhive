"use client"

import { useEffect, useRef } from "react"

export function HexagonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawHexagon = (x: number, y: number, size: number, opacity: number) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6
        const hx = x + size * Math.cos(angle)
        const hy = y + size * Math.sin(angle)
        if (i === 0) ctx.moveTo(hx, hy)
        else ctx.lineTo(hx, hy)
      }
      ctx.closePath()
      ctx.strokeStyle = `rgba(0, 116, 228, ${opacity})`
      ctx.lineWidth = 0.5
      ctx.stroke()
    }

    const animate = () => {
      time += 0.005
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const hexSize = 60
      const horizontalSpacing = hexSize * Math.sqrt(3)
      const verticalSpacing = hexSize * 1.5

      const cols = Math.ceil(canvas.width / horizontalSpacing) + 2
      const rows = Math.ceil(canvas.height / verticalSpacing) + 2

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const x = col * horizontalSpacing + (row % 2 ? horizontalSpacing / 2 : 0)
          const y = row * verticalSpacing
          const dist = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2)
          )
          const maxDist = Math.sqrt(
            Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2)
          )
          const baseOpacity = 0.04 + 0.06 * (1 - dist / maxDist)
          const pulse = Math.sin(time + dist * 0.003) * 0.03
          drawHexagon(x, y, hexSize, Math.max(0, baseOpacity + pulse))
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()
    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}
