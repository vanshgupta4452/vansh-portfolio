import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-primary">
              Available for projects
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-foreground">Vansh Gupta</span>
            <br />
            <span className="text-gradient">Software Engineer</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10 font-light">
            Robotics Enthusiast · ROS Developer · Full Stack Web Developer · CAD Designer · Tech Explorer
          </p>

          <div className="flex items-center gap-4">

            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              View Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary/50 transition-colors"
            >
              Get in Touch
            </button>

          </div>

          <div className="flex items-center gap-5 mt-12">

            <a
              href="https://github.com/vanshgupta4452"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>

        

          </div>

        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection("about")}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary"
      >
        <ArrowDown size={20} />
      </motion.button>

    </section>
  );
};

export default HeroSection;