"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
  index: number
}

function ProjectCard({ title, description, tags, image, demoUrl, githubUrl, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_15px_rgba(0,200,255,0.15)]">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-full p-4">
            <h3 className="text-lg font-bold">{title}</h3>
          </div>
        </div>
        <CardContent className="p-4">
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            {githubUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
           
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "GPS NAV",
      description:
        "This project aims to develop a comprehensive ROS2 simulation package tailored for a differential drive robot.This repository shows how to set up a localization system using a GPS sensor(s) as the source of global positioning, robot_localization (RL) for sensor fusion, and how to use Nav2 to follow GPS waypoints.",
      tags: ["ROS2", "Nav2", "SLAM", "AMCL"],
      image: "../gps_nav.png",
      githubUrl: "https://github.com/vanshgupta4452/GPS-NAV",
  
    },
    {
      title: "EYRC-2024",
      description:
        "The e-Yantra Logistic coBot theme focuses on autonomous warehouse robotics using ROS 2, integrating ArUco-based object detection, robotic arm manipulation with MoveIt, and mobile robot navigation with SLAM and Nav2 for efficient package handling and docking.",
      tags: ["ROS2", "Python", " NAV2", "MoveIt2", "OpenCV"],
      image: "../eyrc.png",
      githubUrl: "../eyrc.png",
    },
    {
      title: "Omnidrive",
      description:
        "Designed and developed a 4-wheel omnidrive robot capable of moving in any direction using mecanum wheels. Integrated with ROS 2 for real-time control, SLAM, and navigation, enabling precise omnidirectional movement, autonomous path planning, and environment mapping in simulation and real-world scenarios.",
      tags: ["ROS2", "Fusion 360", "NAV2", "SLAM"],
      image: "../omni.png",
      githubUrl: "https://github.com/vanshgupta4452/omnidrive",
    },
    {
      title: "Irri-Great",
      description:
        "Developed Irri-great, a smart irrigation control system that monitors real-time soil moisture and uses weather forecasts to predict future water needs of crops. The system optimizes irrigation schedules to conserve water, improve crop health, and prevent overwatering by integrating sensor data with intelligent forecasting.",
      tags: ["ReactJS", "Arduino", "C++", "Micro-ROS"],
      image: "../sih.png",
      githubUrl: "https://github.com/vanshgupta4452/Irri-Great",
      
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my robotics and engineering projects, from autonomous systems to collaborative robots and simulation
            environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
