import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Полнофункциональный интернет-магазин с корзиной, оплатой и панелью администратора.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Task Manager',
    description: 'Приложение для управления задачами с drag & drop, фильтрами и аналитикой.',
    tags: ['React', 'Tailwind', 'Supabase'],
  },
  {
    title: 'Portfolio Website',
    description: 'Креативное портфолио с 3D-анимациями и эффектом стекла.',
    tags: ['React', 'Three.js', 'Framer Motion'],
  },
  {
    title: 'Chat Application',
    description: 'Real-time чат с комнатами, эмодзи и обменом файлами.',
    tags: ['React', 'WebSocket', 'Node.js'],
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <SectionHeading
        label="Проекты"
        title="Избранные работы"
        description="Проекты, которые показывают мой подход к разработке"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <GlassCard key={project.title} className="group overflow-hidden" delay={i * 0.08}>
            <div className="h-44 bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center relative overflow-hidden">
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(135deg, hsla(var(--primary), 0.1), transparent)' }}
              />
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center">
                <ArrowUpRight className="w-7 h-7 text-primary group-hover:rotate-45 transition-transform duration-300" />
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
  );
}
