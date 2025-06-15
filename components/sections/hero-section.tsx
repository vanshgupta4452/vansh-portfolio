"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RobotArm } from "@/components/ui/robot-arm"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  }

  const nameText = "Vansh Gupta".split("")

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent"
            >
              <span className="mr-1 h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              <span>Available for projects</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-block">
                {nameText.map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={nameVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className={char === " " ? "inline-block w-2" : "inline-block"}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <br />
              <span className="text-accent text-glow">Software Engineer</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Robotics Enthusiast | ROS Developer | Full Stack Web Developer | CAD Designer | Tech Explorer
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            
          </motion.div>
        </div>

        
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full border border-accent/30 bg-background/50 backdrop-blur-sm"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <ArrowDown className="h-4 w-4 text-accent" />
        </Button>
      </motion.div>
    </section>
  )
}
