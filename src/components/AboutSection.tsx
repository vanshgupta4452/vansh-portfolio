import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-sm text-primary mb-3 tracking-wider uppercase">About</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Who I Am</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-muted-foreground leading-relaxed text-base mb-6">
                I'm a developer passionate about building intelligent robots and dynamic web applications 
                that bridge the gap between physical systems and digital experiences. My favorite work lives 
                at the intersection of hardware and software, where I can combine precise engineering with 
                creative problem-solving.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base mb-6">
                Currently pursuing my B.Tech and actively contributing to robotics projects at the 
                MAIT Robotics Society. I specialize in <span className="text-foreground font-medium">ROS/ROS2, Gazebo, RViz, and MoveIt</span> for 
                robotic simulation and control, alongside full-stack web development using the MERN stack.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                I've participated in hackathons and competitions, earning recognition at events like 
                Vihaan 07 and CodeClash. In my spare time, I'm usually experimenting with new tech, 
                exploring robot control algorithms, or designing UI components.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { label: "Location", value: "India" },
                { label: "Education", value: "B.Tech (MAIT)" },
                { label: "Focus", value: "Robotics & Web Dev" },
                { label: "Status", value: "Open to work" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-card border border-border">
                  <p className="text-xs font-mono text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
