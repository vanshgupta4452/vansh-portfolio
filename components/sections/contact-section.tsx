"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RobotArm } from "@/components/ui/robot-arm"
import { Send } from "lucide-react"

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-accent/5 to-background"></div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or have questions about my work? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="tech-panel p-6 relative overflow-hidden">
              <h3 className="text-xl font-semibold mb-4 text-accent">Get In Touch</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>I’m currently available for freelance work, collaborations, and interesting robotics projects.</p>
                <p>Whether you have a question about my work or just want to say hello, I’ll get back to you!</p>
              </div>
              <div className="absolute -bottom-20 -right-20 opacity-10">
                <RobotArm className="w-64 h-64" animate={false} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form
              ref={formRef}
              action="https://formsubmit.co/vansh4452@gmail.com" 
              method="POST"
              className="space-y-4"
            >
              {/* Prevent spam bots */}
              <input type="hidden" name="_honey" style={{ display: "none" }} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://vanshgupta4452.github.io/vansh-portfolio/#contact" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="bg-background/50 border-accent/20 focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="bg-background/50 border-accent/20 focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  required
                  className="min-h-[120px] bg-background/50 border-accent/20 focus:border-accent"
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/80 text-black">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
