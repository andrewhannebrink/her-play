import React, { useEffect, useRef } from 'react'
import './FloatingOrb.css'

const FloatingOrb = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    class Blob {
      constructor() {
        this.points = []
        this.numPoints = 6
        this.centerX = canvas.width / 2
        this.centerY = canvas.height / 2
        this.radius = Math.min(canvas.width, canvas.height) * 0.3
        this.time = 0
        
        for (let i = 0; i < this.numPoints; i++) {
          this.points.push({
            angle: (Math.PI * 2 * i) / this.numPoints,
            radius: this.radius + Math.random() * 50 - 25
          })
        }
      }

      update() {
        this.time += 0.01
        
        const scrollY = window.scrollY
        this.centerY = canvas.height / 2 + scrollY * 0.5
        
        this.points.forEach((point, i) => {
          point.radius = this.radius + 
            Math.sin(this.time + i) * 30 + 
            Math.cos(this.time * 0.7 + i) * 20
        })
      }

      draw() {
        ctx.beginPath()
        
        const gradient = ctx.createRadialGradient(
          this.centerX, this.centerY, 0,
          this.centerX, this.centerY, this.radius
        )
        gradient.addColorStop(0, 'rgba(204, 46, 41, 0.8)')
        gradient.addColorStop(0.5, 'rgba(204, 46, 41, 0.4)')
        gradient.addColorStop(1, 'rgba(204, 46, 41, 0.1)')
        
        ctx.fillStyle = gradient
        
        for (let i = 0; i <= this.numPoints; i++) {
          const p0 = this.points[i % this.numPoints]
          const p1 = this.points[(i + 1) % this.numPoints]
          
          const x0 = this.centerX + Math.cos(p0.angle) * p0.radius
          const y0 = this.centerY + Math.sin(p0.angle) * p0.radius
          const x1 = this.centerX + Math.cos(p1.angle) * p1.radius
          const y1 = this.centerY + Math.sin(p1.angle) * p1.radius
          
          const cp1x = this.centerX + Math.cos(p0.angle + 0.4) * p0.radius * 0.8
          const cp1y = this.centerY + Math.sin(p0.angle + 0.4) * p0.radius * 0.8
          const cp2x = this.centerX + Math.cos(p1.angle - 0.4) * p1.radius * 0.8
          const cp2y = this.centerY + Math.sin(p1.angle - 0.4) * p1.radius * 0.8
          
          if (i === 0) {
            ctx.moveTo(x0, y0)
          }
          
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x1, y1)
        }
        
        ctx.closePath()
        ctx.fill()
        
        // Add blur effect
        ctx.filter = 'blur(40px)'
        ctx.fill()
        ctx.filter = 'none'
      }
    }

    const blob = new Blob()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      blob.update()
      blob.draw()
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="floating-orb" />
}

export default FloatingOrb