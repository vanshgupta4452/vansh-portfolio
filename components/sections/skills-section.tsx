"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GearIcon } from "@/components/ui/gear-icon"

interface SkillCategoryProps {
  title: string
  skills: string[]
  index: number
}

function SkillCategory({ title, skills, index }: SkillCategoryProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="tech-panel p-6 relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute top-4 right-4">
        <GearIcon size={24} delay={index * 0.5} reverse={index % 2 === 0} />
      </div>
      <h3 className="text-lg font-semibold mb-4 text-accent">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-md border border-accent/20 bg-accent/5 px-2.5 py-1 text-sm transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Robotics",
      skills: ["ROS/ROS2", "MoveIt", "Gazebo", "Rviz", "Motion Planning", "SLAM", "Computer Vision"],
    },
    {
      title: "Programming",
      skills: ["C++", "Python", "Typescript", "JavaScript","MERN","NEXTJS", "Git", "Docker"],
    },
    {
      title: "Hardware",
      skills: ["Arduino", "Raspberry Pi", "3D Printing"],
    },
    {
      title: "Design & Simulation",
      skills: ["Fusion 360", "SolidWorks",  "CAD"],
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background"></div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Tools</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical toolkit spans robotics frameworks, programming languages, hardware platforms, and design tools
            that enable me to bring robotic systems to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} title={category.title} skills={category.skills} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
