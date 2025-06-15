"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CircuitLines } from "@/components/ui/circuit-lines"

interface TimelineItemProps {
  year: string
  title: string
  description: string
  index: number
}

function TimelineItem({ year, title, description, index }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4 md:gap-8 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="text-right">
        <span className="text-accent font-mono">{year}</span>
      </div>
      <div className="relative">
        <div className="absolute left-[-22px] md:left-[-30px] top-2 h-4 w-4 rounded-full border-2 border-accent bg-background"></div>
        {index !== 3 && (
          <div className="absolute left-[-20px] md:left-[-28px] top-6 bottom-[-20px] w-[2px] bg-accent/30"></div>
        )}
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-muted-foreground mt-1">{description}</p>
      </div>
    </motion.div>
  )
}

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  

  return (
    <section id="about" ref={ref} className="py-20 relative">
      <CircuitLines className="opacity-20" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground">
              I’m a developer passionate about building intelligent robots and dynamic web applications that bridge the gap between physical systems and digital experiences. My favorite work lives at the intersection of hardware and software, where I can combine precise engineering with creative problem-solving.

              Currently, I’m pursuing my B.Tech and actively contributing to robotics projects at the MAIT Robotics Society. I specialize in ROS/ROS2, Gazebo, RViz, and MoveIt for robotic simulation and control, alongside full-stack web development using the MERN stack to create interfaces that monitor and manage robotic systems.

              In the past, I’ve worked on a range of projects—from autonomous navigation using SLAM and RRT* to smart agriculture systems and AI-powered web dashboards. I’ve also participated in hackathons and competitions, earning recognition at events like Vihaan 07 and CodeClash.

              In my spare time, I’m usually experimenting with new tech, exploring robot control algorithms, designing UI components, or learning how to make better user-centered experiences—whether for the web or for robots.
            </p>
          </motion.div>

          
        </div>
      </div>
    </section>
  )
}
