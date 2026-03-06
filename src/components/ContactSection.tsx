import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-sm text-primary mb-3 tracking-wider uppercase">
            Contact
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Get In Touch
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side Text */}
          <p className="text-muted-foreground leading-relaxed">
            I'm currently open to internships, collaborations, and interesting
            robotics projects. Feel free to contact me using the details below.
          </p>

          {/* Right Side Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <Mail size={18} />
              <span>vansh4452@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Phone size={18} />
              <span>+91 7015366048</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <MapPin size={18} />
              <span>India</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;