import { motion } from "framer-motion";

const experiences = [
  {
    role: "Robotics Software Intern",
    company: "Ardee Yantrik",
    period: "June 2025 – Present",
    description:
      "Developing robotics software solutions, working on embedded systems and autonomous navigation algorithms.",
    tags: ["ROS", "Python", "Embedded Systems"],
  },
  {
    role: "Admin",
    company: "Atom Robotics Lab",
    period: "2023 – Present",
    description:
      "Leading and managing robotics lab operations, mentoring juniors, and coordinating projects and workshops.",
    tags: ["Leadership", "Robotics", "Mentorship"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2">// experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[2.55rem] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background" />

              <div className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-primary/40 transition-colors">
                <p className="font-mono text-primary text-xs mb-1">{exp.period}</p>
                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
