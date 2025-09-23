"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, ExternalLink } from "lucide-react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Environment } from "@react-three/drei"
import type * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

function FloatingElements() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={group}>
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 8) * Math.PI * 2) * 4,
            Math.sin((i / 8) * Math.PI * 2) * 2,
            Math.sin((i / 8) * Math.PI * 2) * 2,
          ]}
        >
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial color="#06b6d4" />
        </mesh>
      ))}
    </group>
  )
}

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />

      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <AnimatedSphere />
          <FloatingElements />
          <Environment preset="night" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 opacity-0 translate-y-8 transition-all duration-1000 [.animate-in_&]:opacity-100 [.animate-in_&]:translate-y-0">
          <div className="space-y-4">
            <div className="text-primary font-mono text-sm tracking-wider uppercase">Full Stack Developer</div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient">Alex Chen</span>
              <br />
              <span className="text-foreground">Crafting Digital</span>
              <br />
              <span className="text-foreground">Experiences</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              I build accessible, pixel-perfect digital experiences that blend thoughtful design with robust
              engineering. Specializing in modern web technologies and 3D interactions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group animate-glow">
              <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="group bg-transparent">
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Download Resume
            </Button>
          </div>

          <div className="flex items-center space-x-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="relative opacity-0 translate-x-8 transition-all duration-1000 delay-300 [.animate-in_&]:opacity-100 [.animate-in_&]:translate-x-0">
          <div className="relative w-full max-w-md mx-auto">
            {/* Floating background elements */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

            {/* Profile image container */}
            <div className="relative z-10 animate-float">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <img
                  src="/professional-asian-male-developer-portrait--modern.jpg"
                  alt="Alex Chen - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary rounded-lg rotate-12 animate-bounce delay-500" />
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-accent rounded-full animate-bounce delay-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
