import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github } from "lucide-react";
import { useEffect, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import mrRobot from "@/assets/mr.png";

const words = ["THINK", "MOVE", "LEARN"];

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [tracking, setTracking] = useState(false);
  const [focusPoint, setFocusPoint] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = window.setInterval(() => setWordIndex((current) => (current + 1) % words.length), 2800);
    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  const trackPointer = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    setFocusPoint({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    });
  };

  return <section id="home" className="relative flex min-h-[94vh] items-center overflow-hidden px-6 pb-16 pt-28 md:px-10">
  <div className="grid-pattern absolute inset-0 opacity-50" />
  <div className="paper-grain pointer-events-none absolute inset-0 opacity-[.08]" />
  <div className="absolute -right-24 top-1/4 h-[32rem] w-[32rem] rounded-full bg-primary/15 blur-[130px]" />
  <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.12fr_.88fr]">
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease: "easeOut" }} className="relative z-10">
      <p className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.22em] text-foreground/60"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span>AI systems · robotics · software</p>
      <h1 aria-label="I build systems that think, move, and learn." className="max-w-4xl text-[clamp(3.2rem,6.5vw,6.5rem)] font-bold leading-[.86] tracking-[-.075em]">I BUILD<br />SYSTEMS THAT<br /><span aria-hidden="true" className="inline-flex h-[.9em] min-w-[7ch] overflow-hidden align-bottom text-[#b40e05]"><AnimatePresence initial={false} mode="wait"><motion.span key={words[wordIndex]} initial={prefersReducedMotion ? false : { y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={prefersReducedMotion ? undefined : { y: "-100%", opacity: 0 }} transition={{ duration: .42, ease: [.22, 1, .36, 1] }}>{words[wordIndex]}</motion.span></AnimatePresence></span><span className="text-foreground">.</span></h1>
      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">I’m Vansh Gupta, a seventh-semester IT student at MAIT. After completing an AI internship at NMG Technologies, I’m looking for an AI Engineer or Robotics Software opportunity—an internship with PPO potential or a full-time role.</p>
        <a href="#projects" className="red-sweep group flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-foreground/25 text-foreground transition-colors hover:border-primary" aria-label="Explore selected work"><ArrowDownRight size={23} className="transition-transform group-hover:rotate-45" /></a>
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-foreground/15 pt-5 text-[10px] font-mono uppercase tracking-[.18em] text-muted-foreground"><span>Delhi, India</span><span>MAIT · 7TH SEM · 2023—27</span><a href="mailto:vansh4452@gmail.com" className="text-foreground transition-colors hover:text-primary">Open to AI &amp; robotics roles <ArrowUpRight className="ml-1 inline" size={12} /></a></div>
    </motion.div>
    <motion.div initial={{ opacity: 0, x: 28, rotate: 2 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: .9, delay: .1 }} className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
      <div className="absolute -left-4 top-10 z-20 bg-primary px-4 py-3 font-mono text-[10px] uppercase leading-relaxed tracking-wider text-white shadow-xl md:-left-10"><span className="block text-white/60">CURRENT STATUS</span>OPEN TO WORK</div>
      <div className="group/scan relative aspect-[.88] overflow-hidden bg-[#191718]" onPointerMove={trackPointer} onPointerEnter={(event) => event.pointerType !== "touch" && setTracking(true)} onPointerLeave={() => setTracking(false)}>
        <img src={mrRobot} alt="Mobile robot developed for autonomous navigation" className="h-full w-full object-cover brightness-110 transition duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
        <div className="hero-scanline pointer-events-none absolute inset-x-0 top-0 z-10 h-28" />
        <div className="pointer-events-none absolute inset-4 z-10 border border-white/15" />
        <div className="pointer-events-none absolute inset-x-4 top-4 z-10 flex justify-between font-mono text-[8px] uppercase tracking-[.18em] text-white/60"><span>V.G / R&D</span><span>LIVE SYSTEM / 01</span></div>
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/60 animate-[spin_28s_linear_infinite]" />
        {tracking && <span aria-hidden="true" className="pointer-events-none absolute z-20 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary shadow-[0_0_18px_rgba(180,14,5,.8)] transition-[left,top] duration-75" style={{ left: `${focusPoint.x}%`, top: `${focusPoint.y}%` }}><i className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" /></span>}
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-7"><div className="flex items-end justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#ff5549]">FIELD / 001</p><p className="mt-1 text-xl font-semibold">Machines that move.</p></div><span className="border border-white/25 px-2 py-1 font-mono text-[9px] text-white/75">ROS 2 · NAV2</span></div></div>
      </div>
      <div className="absolute -bottom-4 -right-3 h-24 w-24 border-b border-r border-primary md:-bottom-7 md:-right-7" />
      <div className="absolute -right-3 -top-3 font-mono text-[9px] tracking-widest text-foreground/45 md:-right-8">28° 42' N / 77° 06' E</div>
      <a aria-label="GitHub profile" href="https://github.com/vanshgupta4452" target="_blank" rel="noopener noreferrer" className="absolute bottom-6 left-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur transition-colors hover:bg-primary"><Github size={17} /></a>
    </motion.div>
  </div>
  <div aria-hidden="true" className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-foreground/10 py-3">
    <div className="marquee-track flex w-max gap-8 whitespace-nowrap font-mono text-[9px] uppercase tracking-[.24em] text-foreground/40"><span>AGENTIC SYSTEMS ✳ MULTI-AGENT ORCHESTRATION ✳ GRAPH RAG ✳ ROBOTICS ✳ REAL-WORLD SOFTWARE ✳</span><span>AGENTIC SYSTEMS ✳ MULTI-AGENT ORCHESTRATION ✳ GRAPH RAG ✳ ROBOTICS ✳ REAL-WORLD SOFTWARE ✳</span></div>
  </div>
</section>;
};

export default HeroSection;
