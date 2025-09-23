"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play, ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "FinanceFlow",
    category: "Fintech Platform",
    description:
      "A comprehensive financial management platform with real-time analytics, AI-powered insights, and multi-currency support. Built for enterprise clients handling millions in transactions daily.",
    image: "/modern-fintech-dashboard-with-charts-and-analytics.jpg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS", "Stripe", "Chart.js"],
    liveUrl: "https://financeflow.demo",
    githubUrl: "https://github.com/alexchen/financeflow",
    featured: true,
    stats: { users: "50K+", transactions: "$2M+", uptime: "99.9%" },
  },
  {
    id: 2,
    title: "EcoTracker",
    category: "Sustainability App",
    description:
      "Mobile-first application helping users track their carbon footprint with gamification elements, social features, and integration with IoT devices.",
    image: "/green-sustainability-mobile-app-interface-with-cha.jpg",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "TensorFlow", "IoT"],
    liveUrl: "https://ecotracker.app",
    githubUrl: "https://github.com/alexchen/ecotracker",
    featured: true,
    stats: { downloads: "100K+", co2Saved: "500T", rating: "4.8★" },
  },
  {
    id: 3,
    title: "ArtSpace 3D",
    category: "Creative Platform",
    description:
      "Immersive 3D gallery platform where artists can showcase their work in virtual spaces. Features WebGL rendering, VR support, and NFT integration.",
    image: "/3d-virtual-art-gallery-with-modern-interface.jpg",
    technologies: ["Three.js", "React", "WebGL", "Blender", "IPFS", "Ethereum"],
    liveUrl: "https://artspace3d.io",
    githubUrl: "https://github.com/alexchen/artspace3d",
    featured: false,
    stats: { artists: "2K+", artworks: "15K+", visitors: "1M+" },
  },
  {
    id: 4,
    title: "DevFlow",
    category: "Developer Tools",
    description:
      "AI-powered code review and collaboration platform that integrates with popular version control systems and provides intelligent suggestions.",
    image: "/developer-code-review-interface-with-ai-suggestion.jpg",
    technologies: ["Vue.js", "Python", "FastAPI", "Docker", "OpenAI", "GitHub API"],
    liveUrl: "https://devflow.tools",
    githubUrl: "https://github.com/alexchen/devflow",
    featured: false,
    stats: { repos: "10K+", reviews: "500K+", teams: "1K+" },
  },
  {
    id: 5,
    title: "HealthSync",
    category: "Healthcare Platform",
    description:
      "Telemedicine platform connecting patients with healthcare providers, featuring secure video calls, prescription management, and health tracking.",
    image: "/modern-healthcare-telemedicine-app-interface.jpg",
    technologies: ["React", "Node.js", "WebRTC", "PostgreSQL", "Redis", "HIPAA"],
    liveUrl: "https://healthsync.care",
    githubUrl: "https://github.com/alexchen/healthsync",
    featured: false,
    stats: { patients: "25K+", consultations: "100K+", satisfaction: "98%" },
  },
  {
    id: 6,
    title: "SmartHome Hub",
    category: "IoT Platform",
    description:
      "Unified smart home control system with voice commands, automation rules, and energy optimization. Supports 100+ device types.",
    image: "/smart-home-control-dashboard-with-device-managemen.jpg",
    technologies: ["React", "Python", "MQTT", "InfluxDB", "TensorFlow", "Raspberry Pi"],
    liveUrl: "https://smarthome-hub.io",
    githubUrl: "https://github.com/alexchen/smarthome-hub",
    featured: false,
    stats: { devices: "1M+", homes: "50K+", energy: "30%" },
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

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

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <Card
      ref={cardRef}
      className={`group overflow-hidden transition-all duration-500 opacity-0 translate-y-8 [.animate-in_&]:opacity-100 [.animate-in_&]:translate-y-0 ${
        project.featured
          ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20"
          : "bg-card/50 backdrop-blur-sm"
      } hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

        {/* Project category badge */}
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {project.category}
          </Badge>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
          </div>
        )}

        {/* Hover overlay with actions */}
        <div
          className={`absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center space-x-4 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button size="sm" variant="outline" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          {/* Project stats */}
          {project.stats && (
            <div className="flex flex-wrap gap-4 text-sm">
              {Object.entries(project.stats).map(([key, value]) => (
                <div key={key} className="flex items-center space-x-1">
                  <span className="text-muted-foreground capitalize">{key}:</span>
                  <span className="font-semibold text-primary">{value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex space-x-2">
              <Button size="sm" variant="ghost" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Play className="h-4 w-4 mr-1" />
                  Demo
                </a>
              </Button>
              <Button size="sm" variant="ghost" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" />
                  Source
                </a>
              </Button>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [filter, setFilter] = useState("all")

  const categories = [
    "all",
    "Fintech Platform",
    "Sustainability App",
    "Creative Platform",
    "Developer Tools",
    "Healthcare Platform",
    "IoT Platform",
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-1000 [.animate-in_&]:opacity-100 [.animate-in_&]:translate-y-0">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work spanning fintech, sustainability, creative platforms, and developer tools. Each
            project represents a unique challenge solved with modern technology and thoughtful design.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 opacity-0 translate-y-8 transition-all duration-1000 delay-300 [.animate-in_&]:opacity-100 [.animate-in_&]:translate-y-0">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="capitalize"
            >
              {category === "all" ? "All Projects" : category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 opacity-0 translate-y-8 transition-all duration-1000 delay-500 [.animate-in_&]:opacity-100 [.animate-in_&]:translate-y-0">
          <p className="text-muted-foreground mb-6">Interested in working together or want to see more projects?</p>
          <Button size="lg" className="group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
