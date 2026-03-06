import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Robotics",
    skills: ["ROS/ROS2", "MoveIt", "Gazebo", "RViz", "Motion Planning", "SLAM", "Computer Vision"],
  },
  {
    title: "Programming",
    skills: ["C++", "Python", "TypeScript", "JavaScript", "MERN", "Next.js", "Git", "Docker"],
  },
  {
    title: "Hardware",
    skills: ["Arduino", "Raspberry Pi", "3D Printing"],
  },
  {
    title: "Design & Simulation",
    skills: ["Fusion 360", "SolidWorks", "CAD"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-sm text-primary mb-3 tracking-wider uppercase">Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Technical Toolkit</h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h4 className="text-base font-bold text-foreground mb-4">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
