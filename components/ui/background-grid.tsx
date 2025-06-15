"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function BackgroundGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0.1])
  const gridScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  return (
    <motion.div
      ref={ref}
      className="fixed inset-0 z-0 opacity-40"
      style={{
        opacity: gridOpacity,
        scale: gridScale,
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--background))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--background))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]">
        <div className="absolute inset-0 bg-accent/5"></div>
      </div>
    </motion.div>
  )
}
