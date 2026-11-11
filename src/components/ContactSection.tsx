import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const ContactSection = () => <section id="contact" className="px-6 py-20 md:px-10 md:py-28">
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mx-auto max-w-7xl overflow-hidden bg-[#b40e05] px-7 py-10 text-white md:px-14 md:py-16">
    <div className="absolute -right-10 -top-20 h-72 w-72 rounded-full border border-white/20" /><div className="absolute -right-2 -top-12 h-56 w-56 rounded-full border border-white/20" />
    <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
      <div><p className="mb-4 font-mono text-[10px] uppercase tracking-[.2em] text-white/65">05 / Make contact</p><h2 className="text-5xl font-bold leading-[.9] tracking-[-.07em] md:text-7xl">Got a system<br />to build<span className="text-black">?</span></h2><p className="mt-5 max-w-md text-sm leading-relaxed text-white/75">I’m a seventh-semester student seeking an AI Engineer or Robotics Software internship with PPO potential, or a full-time opportunity. Let’s talk about what you’re building.</p></div>
      <a href="mailto:vansh4452@gmail.com" className="group flex min-w-[220px] items-center justify-between border-b border-white/55 py-4 text-sm"><span className="flex items-center gap-3"><Mail size={17} /> vansh4452@gmail.com</span><ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a>
    </div>
  </motion.div>
</section>;

export default ContactSection;
