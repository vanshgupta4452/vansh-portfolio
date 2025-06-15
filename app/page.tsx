import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"

import { ContactSection } from "@/components/sections/contact-section"
import { BackgroundGrid } from "@/components/ui/background-grid"

export default function Home() {
  return (
    <main className="relative">
      <BackgroundGrid />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    
      <ContactSection />

     
    </main>
  )
}
