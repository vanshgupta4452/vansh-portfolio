import { motion } from "framer-motion";

const skillGroups = [
  { name: "AI / LLM engineering", items: ["LLM agents", "Multi-agent orchestration", "Agentic RAG", "GraphRAG: Local / Global / DRIFT", "RAG Fusion", "FlashRank reranking", "Query routing & planning", "Tool calling", "MCP", "Prompt engineering", "LLM evaluation"] },
  { name: "AI infrastructure & data", items: ["FastAPI", "PostgreSQL", "pgvector", "Neo4j", "Knowledge graphs", "asyncpg", "Supabase", "OpenRouter", "Vector search", "Semantic search"] },
  { name: "Languages & web", items: ["Python", "TypeScript", "JavaScript", "C++", "React", "Next.js", "Node.js", "Express", "Shopify Liquid", "HTML / CSS"] },
  { name: "Robotics & vision", items: ["ROS 2", "Gazebo", "SLAM", "OpenCV", "MediaPipe", "Three.js", "WebGL2"] },
  { name: "Tools & delivery", items: ["Docker", "Docker Compose", "Git", "GitHub Actions", "CI / CD", "pytest", "ESLint"] },
];

const SkillsSection = () => <section id="skills" className="px-6 py-24 md:px-10 md:py-28">
  <div className="mx-auto max-w-7xl">
    <div className="mb-10"><p className="section-kicker mb-3">04 / Toolkit</p><h2 className="text-4xl font-bold tracking-[-.05em] md:text-6xl">What I work with<span className="text-primary">.</span></h2></div>
    <div className="border-t border-foreground/20">{skillGroups.map((group, i) => <motion.div key={group.name} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .04 }} className="grid gap-4 border-b border-foreground/20 py-5 md:grid-cols-[.55fr_1.45fr] md:gap-12 md:py-6"><h3 className="font-mono text-[10px] uppercase tracking-[.16em] text-primary">{group.name}</h3><div className="flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="skill-chip border border-foreground/15 bg-white/[.025] px-2.5 py-1.5 text-xs leading-snug text-foreground/75 hover:border-primary/65 hover:bg-primary/10 hover:text-foreground">{item}</span>)}</div></motion.div>)}</div>
  </div>
</section>;

export default SkillsSection;
