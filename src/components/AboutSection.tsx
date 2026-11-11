import { motion } from "framer-motion";

const AboutSection = () => <section id="about" className="px-6 py-24 md:px-10 md:py-32">
  <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-24">
    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
      <p className="section-kicker mb-4">02 / The person behind the systems</p>
      <h2 className="text-5xl font-bold leading-[.92] tracking-[-.07em] md:text-7xl">AI in the cloud.<br /><span className="text-primary">Robots</span> on<br />the ground.</h2>
      <div className="mt-10 grid grid-cols-2 border-t border-foreground/20 pt-4">
        <div><p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Studying</p><p className="mt-2 text-sm">B.Tech, IT · 7th semester</p></div>
        <div><p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">At</p><p className="mt-2 text-sm">MAIT · 2023—2027</p></div>
      </div>
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .1 }} className="flex flex-col justify-between">
      <div className="max-w-2xl space-y-5 text-base leading-[1.8] text-muted-foreground md:text-lg">
        <p>I’m a seventh-semester Information Technology student at Maharaja Agrasen Institute of Technology, Delhi. My work sits between AI systems that coordinate and retrieve information, and robots that sense and act in physical space.</p>
        <p>From June to October 2026, I interned at NMG Technologies, contributing to multi-agent orchestration, agentic RAG, GraphRAG, and their backend infrastructure. Earlier, I built robotic-arm collision and kinematics systems at Ardee Yantrik.</p>
        <p>I like the engineering underneath the demo: reliable APIs, useful evaluation, fast retrieval, clean control loops, and the small details that make a complicated system easier to trust.</p>
      </div>
      <div className="mt-10 grid grid-cols-2 border-t border-foreground/20 pt-5 md:grid-cols-4">
        {["Agentic AI", "Retrieval", "Robotics", "Full-stack"].map((item, i) => <div key={item} className="border-l border-foreground/20 py-2 pl-3 first:border-0 first:pl-0"><span className="font-mono text-[9px] text-primary">0{i + 1}</span><p className="mt-1 text-xs uppercase tracking-wider">{item}</p></div>)}
      </div>
    </motion.div>
  </div>
</section>;

export default AboutSection;
