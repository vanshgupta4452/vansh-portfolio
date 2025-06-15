"use client"

import { motion } from "framer-motion"

interface CircuitLinesProps {
  className?: string
}

export function CircuitLines({ className }: CircuitLinesProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
    >
      {/* Horizontal lines */}
      <motion.path d="M0 100 H800" stroke="hsl(var(--accent) / 0.1)" strokeWidth="1" strokeDasharray="5 10" />
      <motion.path d="M0 300 H800" stroke="hsl(var(--accent) / 0.1)" strokeWidth="1" strokeDasharray="5 10" />
      <motion.path d="M0 500 H800" stroke="hsl(var(--accent) / 0.1)" strokeWidth="1" strokeDasharray="5 10" />

      {/* Vertical lines */}
      <motion.path d="M200 0 V600" stroke="hsl(var(--accent) / 0.1)" strokeWidth="1" strokeDasharray="5 10" />
      <motion.path d="M600 0 V600" stroke="hsl(var(--accent) / 0.1)" strokeWidth="1" strokeDasharray="5 10" />

      {/* Circuit nodes */}
      <motion.circle
        cx="200"
        cy="100"
        r="4"
        fill="hsl(var(--accent) / 0.3)"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.circle
        cx="600"
        cy="300"
        r="4"
        fill="hsl(var(--accent) / 0.3)"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.circle
        cx="200"
        cy="500"
        r="4"
        fill="hsl(var(--accent) / 0.3)"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      />

      {/* Animated data flow */}
      <motion.circle
        cx="0"
        cy="100"
        r="2"
        fill="hsl(var(--accent))"
        initial={{ x: 0 }}
        animate={{ x: 800 }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.circle
        cx="600"
        cy="0"
        r="2"
        fill="hsl(var(--accent))"
        initial={{ y: 0 }}
        animate={{ y: 600 }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 1 }}
      />
      <motion.circle
        cx="200"
        cy="0"
        r="2"
        fill="hsl(var(--accent))"
        initial={{ y: 0 }}
        animate={{ y: 600 }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 2 }}
      />
    </svg>
  )
}
