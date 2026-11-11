import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import gpsNav from "@/assets/gps_nav.png";
import eyrc from "@/assets/eyrc.png";
import omni from "@/assets/omni.png";
import swarm from "@/assets/swarm.png";
import mr from "@/assets/mr.png";

const roboticsWork = [
  { title: "Swarm robots", kind: "eYRC 2025–26 / Multi-agent robotics", detail: "Holonomic robots, ArUco-based localization, MQTT coordination, PID control, and behavior trees for autonomous task allocation.", image: swarm, link: "https://github.com/vanshgupta4452/Eyantra-25-swarm-bots-", tags: "ROS 2 · OpenCV · ESP32" },
  { title: "MR Robot 2.0", kind: "Autonomous navigation / Hardware + software", detail: "A distributed robot: ROS 2 navigation on Raspberry Pi, real-time motor and sensor control on ESP32, linked with micro-ROS.", image: mr, link: "https://github.com/vanshgupta4452/mr_robot", tags: "ROS 2 · micro-ROS · FreeRTOS" },
  { title: "Warehouse robotics", kind: "eYRC 2024 / Manipulation + navigation", detail: "ArUco object detection, a MoveIt-controlled arm, and mobile robot navigation through SLAM and Nav2.", image: eyrc, link: "https://github.com/vanshgupta4452/Eyantra", tags: "ROS 2 · MoveIt · OpenCV" },
  { title: "GPS navigation", kind: "ROS 2 simulation / Localization", detail: "Differential-drive robot simulation using GPS localization, sensor fusion, and Nav2 waypoint following.", image: gpsNav, link: "https://github.com/vanshgupta4452/GPS-NAV", tags: "ROS 2 · Nav2 · Kalman filter" },
  { title: "Omnidrive", kind: "Robot platform / Holonomic motion", detail: "A four-wheel omnidirectional base designed and integrated with ROS 2 for control, mapping, and navigation.", image: omni, link: "https://github.com/vanshgupta4452/omnidrive", tags: "ROS 2 · CAD · SLAM" },
];

const ProjectsSection = () => <section id="projects" className="px-6 py-24 md:px-10 md:py-32">
  <div className="mx-auto max-w-7xl">
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 flex items-end justify-between gap-8">
      <div><p className="section-kicker mb-3">01 / Selected work</p><h2 className="text-5xl font-bold tracking-[-.06em] md:text-7xl">Selected projects<span className="text-primary">.</span></h2></div>
      <p className="hidden max-w-xs text-sm leading-relaxed text-muted-foreground md:block">Software gets interesting when it can find an answer, coordinate a team, or move through the physical world.</p>
    </motion.div>

    <div className="flex items-end justify-between border-b border-foreground/20 pb-5"><div><p className="section-kicker mb-2">Robotics</p><h3 className="text-3xl font-semibold tracking-tight md:text-4xl">From sim to shop floor</h3></div><a href="https://github.com/vanshgupta4452" target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary sm:flex">More on GitHub <Github size={15} /></a></div>
    <div className="divide-y divide-foreground/15">
      {roboticsWork.map((item, i) => <motion.a href={item.link} target="_blank" rel="noopener noreferrer" key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: .45, delay: Math.min(i * .04, .16) }} className="project-row group grid gap-4 py-6 hover:bg-white/[.025] md:grid-cols-[38px_1fr_1.2fr_.9fr_175px_20px] md:items-center md:gap-5 md:py-7">
        <span className="font-mono text-xs text-primary">0{i + 1}</span>
        <div><p className="font-mono text-[9px] uppercase tracking-[.12em] text-muted-foreground">{item.kind}</p><h4 className="mt-1 text-xl font-semibold tracking-tight md:text-2xl">{item.title}</h4></div>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
        <div className="relative hidden aspect-[1.7] w-full overflow-hidden bg-[#151415] md:block"><img src={item.image} alt={`${item.title} project preview`} loading="lazy" className="h-full w-full object-contain opacity-75 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100" /></div>
        <motion.div initial={{ opacity: 0, y: 14, scale: .96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-48px" }} transition={{ duration: .5, delay: Math.min(i * .04, .16), ease: [.22, 1, .36, 1] }} className="relative mt-1 aspect-[1.65] w-full overflow-hidden border border-foreground/10 bg-[#151415] md:hidden"><img src={item.image} alt={`${item.title} project preview`} loading="lazy" className="h-full w-full object-contain" /></motion.div>
        <span className="flex flex-wrap gap-1.5 font-mono text-[9px] uppercase tracking-wider text-foreground/55">{item.tags.split(" · ").map((tag) => <span key={tag} className="border border-foreground/15 px-1.5 py-1">{tag}</span>)}</span>
        <ArrowUpRight className="hidden text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:block" size={16} />
      </motion.a>)}
    </div>
  </div>
</section>;

export default ProjectsSection;
