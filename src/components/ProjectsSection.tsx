



import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { useState } from "react";

import gpsNav from "@/assets/gps_nav.png";
import eyrc from "@/assets/eyrc.png";
import omni from "@/assets/omni.png";
import sih from "@/assets/sih.png";
import swarm from "@/assets/swarm.png";
import mr from "@/assets/mr.png";


  
const projects = [
  {
    title: "MR Robot – Autonomous Mobile Robot",
    description:
      "Built an Autonomous Mobile Robot (AMR) capable of autonomous navigation in indoor environments using ROS2 Nav2. Implemented SLAM-based mapping, AMCL localization, and path planning for obstacle avoidance. Integrated multiple sensors and performed sensor fusion for reliable navigation while visualizing and testing the system in Gazebo and RViz.",
    tags: ["ROS2", "Nav2", "SLAM", "AMCL", "Sensor Fusion", "Gazebo", "RViz", "RTOS","Micro ROS"],
    image: mr,
    github: "https://github.com/vanshgupta4452/mr_robot",
  },
  {
    title: "Swarm Logistics Robot – eYRC 2026",
    description:
      "Built a swarm robotics system where multiple robots collaborate to pick and stack crates autonomously. Designed robot hardware using Fusion 360 and 3D printing, integrated ESP32-based control with MQTT communication, and developed perception and coordination algorithms using ROS2, Python, and OpenCV.",
    tags: ["ROS2", "Python", "OpenCV", "ESP32", "MQTT", "Fusion 360", "3D Printing"],
    image: swarm,
    github: "https://github.com/vanshgupta4452/Eyantra-25-swarm-bots-",
  },

  {
    title: "EYRC-2024",
    description:
      "Autonomous warehouse robotics using ROS 2, integrating ArUco-based object detection, robotic arm manipulation with MoveIt, and mobile robot navigation with SLAM and Nav2.",
    tags: ["ROS2", "Python", "MoveIt2", "OpenCV"],
    image: eyrc,
    github: "https://github.com/vanshgupta4452/Eyantra",
  },
  {
    title: "Omnidrive",
    description:
      "4-wheel omnidrive robot with omni wheels integrated with ROS 2 for real-time control, SLAM, and navigation enabling precise omnidirectional movement.",
    tags: ["ROS2", "Fusion 360", "Nav2", "SLAM"],
    image: omni,
    github: "https://github.com/vanshgupta4452/omnidrive",
  },
  {
    title: "Irri-Great",
    description:
      "Smart irrigation control system monitoring real-time soil moisture using weather forecasts to predict future water needs and optimize irrigation schedules.",
    tags: ["ReactJS", "Arduino", "C++", "Micro-ROS"],
    image: sih,
    github: "https://github.com/vanshgupta4452/Irri-Great",
  },
  
  {
    title: "GPS NAV",
    description:
      "Comprehensive ROS2 simulation package for a differential drive robot with GPS-based localization, sensor fusion via robot_localization, and Nav2 waypoint following.",
    tags: ["ROS2", "Nav2", "AMCL","Kalman Filter"],
    image: gpsNav,
    github: "https://github.com/vanshgupta4452/GPS-NAV",
  },
  
];



const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-sm text-primary mb-3 tracking-wider uppercase">
            Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Featured Work
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h4>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {projects.length > 4 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-xl border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              {showAll ? "Show Less" : "Show More Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;