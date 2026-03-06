import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          © 2025 Vansh Gupta
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/vanshgupta4452" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={16} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={16} />
          </a>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
