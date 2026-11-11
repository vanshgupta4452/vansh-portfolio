import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import RobotExperienceScene from "@/components/RobotExperienceScene";

const experience = [
  {
    role: "AI Associate Intern", company: "NMG Technologies", period: "June — October 2026", location: "AI / Multi-agent systems",
    work: [
      "Contributed to a 29-agent SEO / AEO / GEO platform with an orchestrator–executor design, using Hermes, OpenClaw, and Claude.",
      "Built FastAPI control-plane, run, and case APIs backed by PostgreSQL and pgvector for RAG pipelines and agent execution.",
      "Implemented agentic query routing, sub-query planning, tool calling, RAG Fusion, merger retrieval, and FlashRank re-ranking.",
      "Built a Neo4j knowledge graph and GraphRAG flows using Local, Global, and DRIFT search; exposed tenant-aware datasets through MCP tools.",
      "Developed a browser-based eyewear try-on in TypeScript with MediaPipe and Three.js, plus a Shopify Liquid plugin and CI / MLOps workflows.",
    ],
    stack: "FastAPI · PostgreSQL · pgvector · Neo4j · MCP · OpenRouter · Docker · pytest",
  },
  {
    role: "Robotic Arm R&D Intern", company: "Ardee Yantrik Pvt. Ltd.", period: "June — September 2025", location: "Robotics / Motion planning",
    work: [
      "Implemented robotic-arm self and environment collision checks in ROS 2 and native C++ using FCL, BVH, and AABB methods.",
      "Solved forward and inverse kinematics with KDL and TRAC-IK, and developed a PID controller for smooth arm motion.",
    ],
    stack: "ROS 2 · C++ · FCL · KDL · TRAC-IK",
  },
];

const PICKUP_PROGRESS = 0.375;

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const mobileSceneRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileScrollProgress, setMobileScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll({ target: showcaseRef, offset: ["start start", "end start"] });
  const { scrollYProgress: mobileSceneProgress } = useScroll({ target: mobileSceneRef, offset: ["start start", "end start"] });
  const easedProgress = useSpring(scrollYProgress, { stiffness: 150, damping: 34, mass: 0.35 });
  const easedMobileProgress = useSpring(mobileSceneProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  useMotionValueEvent(easedProgress, "change", setScrollProgress);
  useMotionValueEvent(easedMobileProgress, "change", setMobileScrollProgress);
  const activeIndex = scrollProgress < PICKUP_PROGRESS ? 0 : 1;

  return <section ref={sectionRef} id="experience" className="experience-section border-y border-foreground/15 bg-[#0a090a] px-6 py-24 md:px-10 md:py-32">
    <div className="mx-auto max-w-7xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
        <div><p className="section-kicker mb-3">03 / Experience</p><h2 className="text-5xl font-bold tracking-[-.06em] md:text-7xl">Work so far<span className="text-primary">.</span></h2></div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">A little AI, a little robotics, and a lot of learning how real systems hold together.</p>
      </motion.div>
      <div ref={showcaseRef} className="experience-showcase hidden md:grid">
        <div className="experience-scene-sticky">
          <RobotExperienceScene progress={scrollProgress} />
        </div>
        <div className="experience-timeline">
          <div className="experience-timeline-pin">
          {experience.map((item, i) => <motion.article key={item.company} data-active={activeIndex === i} initial={{ opacity: 0, y: 18 }} animate={{ opacity: activeIndex === i ? 1 : 0, y: activeIndex === i ? 0 : 18 }} transition={{ duration: .5, ease: [0.22, 1, 0.36, 1] }} aria-hidden={activeIndex !== i} className="experience-entry grid gap-7 md:grid-cols-[.78fr_1.22fr] md:gap-10">
            <div><p className="font-mono text-[10px] uppercase tracking-[.18em] text-primary">{item.period}</p><h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">{item.role}</h3><p className="mt-1 text-muted-foreground">{item.company}</p><p className="mt-5 font-mono text-[9px] uppercase tracking-widest text-foreground/40">{item.location}</p></div>
            <div><ul className="space-y-3">{item.work.map((line) => <li key={line} className="flex gap-3 text-sm leading-relaxed text-foreground/75"><span className="mt-1 text-primary">↗</span><span>{line}</span></li>)}</ul><p className="mt-6 border-t border-foreground/15 pt-4 font-mono text-[9px] uppercase leading-relaxed tracking-wider text-muted-foreground">{item.stack}</p></div>
          </motion.article>)}
          </div>
        </div>
      </div>
      <div ref={mobileSceneRef} className="experience-mobile-scene mb-6 md:hidden">
        <div className="experience-mobile-scene-sticky">
          <RobotExperienceScene progress={mobileScrollProgress} />
        </div>
      </div>
      <div className="grid gap-4 md:hidden">
        {experience.map((item) => <article key={item.company} className="rounded-sm border border-foreground/15 bg-white/[.025] p-5">
          <p className="font-mono text-[10px] uppercase tracking-[.18em] text-primary">{item.period}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">{item.role}</h3>
          <p className="mt-1 text-muted-foreground">{item.company}</p>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-widest text-foreground/40">{item.location}</p>
          <ul className="mt-5 space-y-3">{item.work.map((line) => <li key={line} className="flex gap-3 text-sm leading-relaxed text-foreground/75"><span className="mt-1 shrink-0 text-primary">↗</span><span>{line}</span></li>)}</ul>
          <p className="mt-5 border-t border-foreground/15 pt-4 font-mono text-[9px] uppercase leading-relaxed tracking-wider text-muted-foreground">{item.stack}</p>
        </article>)}
      </div>
      <a href="#projects" className="group mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary">See related work <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
    </div>
  </section>;
};

export default ExperienceSection;
