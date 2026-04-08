import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import { useApp } from '@/contexts/AppContext';
import { ArrowUpRight, Github, Globe } from 'lucide-react';

const projectsRu = [
  { title: 'E-Commerce Platform', description: 'Полнофункциональный интернет-магазин с корзиной, оплатой и панелью администратора.', tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'], gradient: 'from-blue-500/20 to-cyan-500/10' },
  { title: 'Task Manager', description: 'Приложение для управления задачами с drag & drop, фильтрами и аналитикой.', tags: ['React', 'Tailwind', 'Supabase'], gradient: 'from-purple-500/20 to-pink-500/10' },
  { title: 'Portfolio Website', description: 'Креативное портфолио с 3D-анимациями и эффектом стекла.', tags: ['React', 'Three.js', 'Framer Motion'], gradient: 'from-green-500/20 to-emerald-500/10' },
  { title: 'Chat Application', description: 'Real-time чат с комнатами, эмодзи и обменом файлами.', tags: ['React', 'WebSocket', 'Node.js'], gradient: 'from-orange-500/20 to-yellow-500/10' },
  { title: 'Weather Dashboard', description: 'Погодное приложение с геолокацией, прогнозом и красивыми анимациями.', tags: ['React', 'API', 'Charts'], gradient: 'from-sky-500/20 to-indigo-500/10' },
  { title: 'Blog Platform', description: 'Блог-платформа с Markdown-редактором, тегами и системой комментариев.', tags: ['React', 'Node.js', 'MongoDB'], gradient: 'from-rose-500/20 to-red-500/10' },
];

const projectsEn = [
  { title: 'E-Commerce Platform', description: 'Full-featured online store with cart, payments and admin panel.', tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'], gradient: 'from-blue-500/20 to-cyan-500/10' },
  { title: 'Task Manager', description: 'Task management app with drag & drop, filters and analytics.', tags: ['React', 'Tailwind', 'Supabase'], gradient: 'from-purple-500/20 to-pink-500/10' },
  { title: 'Portfolio Website', description: 'Creative portfolio with 3D animations and glass effect.', tags: ['React', 'Three.js', 'Framer Motion'], gradient: 'from-green-500/20 to-emerald-500/10' },
  { title: 'Chat Application', description: 'Real-time chat with rooms, emojis and file sharing.', tags: ['React', 'WebSocket', 'Node.js'], gradient: 'from-orange-500/20 to-yellow-500/10' },
  { title: 'Weather Dashboard', description: 'Weather app with geolocation, forecast and beautiful animations.', tags: ['React', 'API', 'Charts'], gradient: 'from-sky-500/20 to-indigo-500/10' },
  { title: 'Blog Platform', description: 'Blog platform with Markdown editor, tags and comment system.', tags: ['React', 'Node.js', 'MongoDB'], gradient: 'from-rose-500/20 to-red-500/10' },
];

export default function ProjectsPage() {
  const { t, language } = useApp();
  const projects = language === 'ru' ? projectsRu : projectsEn;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <SectionHeading label={t('projects.label')} title={t('projects.title')} description={t('projects.desc')} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <GlassCard key={project.title} className="group overflow-hidden" delay={i * 0.06}>
            <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
              <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center">
                <ArrowUpRight className="w-7 h-7 text-primary group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                </button>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <Globe className="w-4 h-4" />
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
