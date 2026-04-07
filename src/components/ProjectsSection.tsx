import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import SectionHeading from './SectionHeading';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Полнофункциональный интернет-магазин с корзиной, оплатой и панелью администратора.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    gradient: 'from-[hsla(199,89%,60%,0.15)] to-[hsla(217,91%,60%,0.05)]',
  },
  {
    title: 'Task Manager',
    description: 'Приложение для управления задачами с drag & drop, фильтрами и аналитикой.',
    tags: ['React', 'Tailwind', 'Supabase'],
    gradient: 'from-[hsla(24,94%,53%,0.15)] to-[hsla(340,82%,52%,0.05)]',
  },
  {
    title: 'Portfolio Website',
    description: 'Креативное портфолио с 3D-анимациями и эффектом стекла.',
    tags: ['React', 'Three.js', 'Framer Motion'],
    gradient: 'from-[hsla(150,80%,50%,0.15)] to-[hsla(199,89%,60%,0.05)]',
  },
  {
    title: 'Chat Application',
    description: 'Real-time чат с комнатами, эмодзи и обменом файлами.',
    tags: ['React', 'WebSocket', 'Node.js'],
    gradient: 'from-[hsla(270,80%,60%,0.15)] to-[hsla(199,89%,60%,0.05)]',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative section-padding">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-[120px]"
        style={{ background: 'hsl(199, 89%, 60%)' }} />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          label="Проекты"
          title="Избранные работы"
          description="Проекты, которые показывают мой подход к разработке"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <GlassCard key={project.title} className="group overflow-hidden" delay={i * 0.1}>
              {/* Top gradient bar */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, hsla(199,89%,60%,0.1), transparent)' }}
                />
                <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center">
                  <ArrowUpRight className="w-8 h-8 text-primary group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
