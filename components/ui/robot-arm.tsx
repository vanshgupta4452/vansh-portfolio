"use client"

import { motion } from "framer-motion"

interface RobotArmProps {
  className?: string
  animate?: boolean
}

export function RobotArm({ className, animate = true }: RobotArmProps) {
  const baseVariants = {
    initial: { rotate: 0 },
    animate: { rotate: animate ? [-5, 5, -5] : 0 },
  }

  const arm1Variants = {
    initial: { rotate: 0 },
    animate: { rotate: animate ? [0, -15, 0] : 0 },
  }

  const arm2Variants = {
    initial: { rotate: 0 },
    animate: { rotate: animate ? [0, 20, 0] : 0 },
  }

  const gripperVariants = {
    initial: { rotate: 0 },
    animate: { rotate: animate ? [0, -10, 0] : 0 },
  }

  const fingerVariants = {
    initial: { rotate: 0 },
    animate: { rotate: animate ? [0, 20, 0] : 0 },
  }

  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Base */}
      <motion.rect
        x="85"
        y="170"
        width="30"
        height="20"
        rx="2"
        fill="hsl(var(--muted))"
        stroke="hsl(var(--accent))"
        strokeWidth="1"
        variants={baseVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Arm segment 1 */}
      <motion.g
        variants={arm1Variants}
        initial="initial"
        animate="animate"
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.2 }}
        style={{ originX: "100px", originY: "170px" }}
      >
        <rect
          x="95"
          y="120"
          width="10"
          height="50"
          fill="hsl(var(--muted))"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
        />
        <circle cx="100" cy="120" r="5" fill="hsl(var(--background))" stroke="hsl(var(--accent))" strokeWidth="1" />

        {/* Arm segment 2 */}
        <motion.g
          variants={arm2Variants}
          initial="initial"
          animate="animate"
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.4 }}
          style={{ originX: "100px", originY: "120px" }}
        >
          <rect
            x="95"
            y="70"
            width="10"
            height="50"
            fill="hsl(var(--muted))"
            stroke="hsl(var(--accent))"
            strokeWidth="1"
          />
          <circle cx="100" cy="70" r="5" fill="hsl(var(--background))" stroke="hsl(var(--accent))" strokeWidth="1" />

          {/* Gripper base */}
          <motion.g
            variants={gripperVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.6 }}
            style={{ originX: "100px", originY: "70px" }}
          >
            <rect
              x="95"
              y="40"
              width="10"
              height="30"
              fill="hsl(var(--muted))"
              stroke="hsl(var(--accent))"
              strokeWidth="1"
            />

            {/* Gripper fingers */}
            <motion.path
              d="M95 40 L85 30 L85 40 Z"
              fill="hsl(var(--muted))"
              stroke="hsl(var(--accent))"
              strokeWidth="1"
              variants={fingerVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.8 }}
              style={{ originX: "95px", originY: "40px" }}
            />
            <motion.path
              d="M105 40 L115 30 L115 40 Z"
              fill="hsl(var(--muted))"
              stroke="hsl(var(--accent))"
              strokeWidth="1"
              variants={fingerVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.8 }}
              style={{ originX: "105px", originY: "40px", scaleX: -1 }}
            />
          </motion.g>
        </motion.g>
      </motion.g>

      {/* Glowing dots */}
      <circle cx="100" cy="170" r="2" fill="hsl(var(--accent))" className="animate-pulse-glow" />
      <circle cx="100" cy="120" r="2" fill="hsl(var(--accent))" className="animate-pulse-glow" />
      <circle cx="100" cy="70" r="2" fill="hsl(var(--accent))" className="animate-pulse-glow" />
    </svg>
  )
}
