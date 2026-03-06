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
                I'm a robotics developer passionate about building intelligent robotic systems and 
                autonomous machines. My work focuses on combining software, hardware, and algorithms 
                to create robots capable of perceiving, navigating, and interacting with the real world.
              </p>

              <p className="text-muted-foreground leading-relaxed text-base mb-6">
                Currently pursuing my B.Tech at <span className="text-foreground font-medium">Maharaja Agrasen Institute of Technology (MAIT)</span>, 
                I actively collaborate with the college robotics society on robotics projects and technical competitions. 
                I specialize in <span className="text-foreground font-medium">ROS2, Nav2, SLAM, Gazebo, RViz, and MoveIt2</span> 
                for robotic simulation, navigation, and manipulation.
              </p>

              <p className="text-muted-foreground leading-relaxed text-base">
                I enjoy building complete robotic systems—from designing hardware and integrating sensors 
                to developing perception, navigation, and control algorithms. Alongside robotics, I also 
                work on <span className="text-foreground font-medium">full-stack web development using the MERN stack</span> 
                to build modern web applications and dashboards.
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
