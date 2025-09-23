"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Globe, Smartphone, Cloud, Zap, Brain, Palette } from "lucide-react"

const skills = {
  frontend: {
    icon: <Globe className="h-6 w-6" />,
    title: "Frontend Development",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    color: "text-blue-400",
  },
  backend: {
    icon: <Database className="h-6 w-6" />,
    title: "Backend Development",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
    color: "text-green-400",
  },
  mobile: {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Development",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase"],
    color: "text-purple-400",
  },
  cloud: {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud & DevOps",
    technologies: ["AWS", "Vercel", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    color: "text-orange-400",
  },
  ai: {
    icon: <Brain className="h-6 w-6" />,
    title: "AI & Machine Learning",
    technologies: ["TensorFlow", "PyTorch", "OpenAI API", "Langchain", "Hugging Face", "Computer Vision"],
    color: "text-pink-400",
  },
  design: {
    icon: <Palette className="h-6 w-6" />,
    title: "Design & UX",
    technologies: ["Figma", "Adobe Creative Suite", "Blender", "UI/UX Design", "Prototyping", "User Research"],
    color: "text-cyan-400",
  },
}

function SkillCard({ skill, index }: { skill: typeof skills.frontend; index: number }) {
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
      className="group hover:scale-105 transition-all duration-300 opacity-0 translate-y-8 [.animate-in_&]:opacity-100 [.animate-in_&]:translate-y-0 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}>{skill.icon}</div>
          <h3 className="text-lg font-semibold">{skill.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skill.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

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
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* About Content */}
        <div className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-1000 [.animate-in_&]:opacity-100 [.animate-in_&]:translate-y-0">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate full-stack developer from Singapore with over 5 years of experience crafting digital
              experiences that seamlessly blend cutting-edge technology with intuitive design. My journey began with a
              Computer Science degree from NUS, and I've since worked with startups and enterprises across Asia-Pacific.
            </p>
            <p>
              Currently, I'm a Senior Full-Stack Engineer at TechFlow, where I lead the development of scalable web
              applications serving millions of users. I specialize in modern JavaScript frameworks, cloud architecture,
              and emerging technologies like AI and 3D web experiences.
            </p>
            <p>
              When I'm not coding, you'll find me exploring Singapore's food scene, practicing photography, or
              contributing to open-source projects. I believe in continuous learning and sharing knowledge with the
              developer community.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 opacity-0 translate-y-8 transition-all duration-1000 delay-300 [.animate-in_&]:opacity-100 [.animate-in_&]:translate-y-0">
            Technical <span className="text-gradient">Expertise</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([key, skill], index) => (
              <SkillCard key={key} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="opacity-0 translate-y-8 transition-all duration-1000 delay-500 [.animate-in_&]:opacity-100 [.animate-in_&]:translate-y-0">
          <h3 className="text-3xl font-bold text-center mb-12">
            Professional <span className="text-gradient">Journey</span>
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center relative z-10">
                    <Code2 className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-primary font-mono">2024 — PRESENT</div>
                    <h4 className="text-xl font-semibold mb-2">Senior Full-Stack Engineer</h4>
                    <p className="text-muted-foreground mb-3">TechFlow Singapore</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Leading development of next-generation fintech applications using React, Node.js, and AWS.
                      Architected microservices handling 10M+ daily transactions with 99.9% uptime.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">Node.js</Badge>
                      <Badge variant="outline">AWS</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center relative z-10">
                    <Zap className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-accent font-mono">2022 — 2024</div>
                    <h4 className="text-xl font-semibold mb-2">Full-Stack Developer</h4>
                    <p className="text-muted-foreground mb-3">InnovateLab</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Built scalable e-commerce platforms and mobile applications for Southeast Asian markets.
                      Implemented real-time features and optimized performance for emerging market conditions.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline">Next.js</Badge>
                      <Badge variant="outline">React Native</Badge>
                      <Badge variant="outline">PostgreSQL</Badge>
                      <Badge variant="outline">Docker</Badge>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-full flex items-center justify-center relative z-10">
                    <Globe className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-muted-foreground font-mono">2020 — 2022</div>
                    <h4 className="text-xl font-semibold mb-2">Frontend Developer</h4>
                    <p className="text-muted-foreground mb-3">StartupHub</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Developed responsive web applications and interactive user interfaces. Collaborated with design
                      teams to create pixel-perfect implementations.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline">Vue.js</Badge>
                      <Badge variant="outline">JavaScript</Badge>
                      <Badge variant="outline">SASS</Badge>
                      <Badge variant="outline">Figma</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
