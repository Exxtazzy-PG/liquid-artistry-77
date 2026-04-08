import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import { useApp } from '@/contexts/AppContext';
import { ArrowUpRight, Github, Globe, Filter } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  category: string;
  status: string;
}

const projectsEn: Project[] = [
  { title: 'E-Commerce Platform', description: 'Full-featured online store with product catalog, shopping cart, Stripe payments, admin dashboard and order tracking. Built with React and Node.js backend.', tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'], gradient: 'from-blue-500/20 to-cyan-500/10', category: 'fullstack', status: 'Completed' },
  { title: 'Task Manager Pro', description: 'Advanced task management app with drag-and-drop kanban board, real-time collaboration, filters, labels, due dates and productivity analytics.', tags: ['React', 'Tailwind', 'Supabase', 'DnD'], gradient: 'from-purple-500/20 to-pink-500/10', category: 'fullstack', status: 'Completed' },
  { title: 'Portfolio Website', description: 'This creative portfolio with 3D particle animations, glassmorphism effects, multi-language support and dynamic theming system.', tags: ['React', 'Three.js', 'Framer Motion', 'TypeScript'], gradient: 'from-green-500/20 to-emerald-500/10', category: 'frontend', status: 'Live' },
  { title: 'Real-time Chat App', description: 'Instant messaging app with WebSocket for real-time communication, chat rooms, file sharing, emoji reactions and read receipts.', tags: ['React', 'WebSocket', 'Node.js', 'MongoDB'], gradient: 'from-orange-500/20 to-yellow-500/10', category: 'fullstack', status: 'Completed' },
  { title: 'Weather Dashboard', description: 'Beautiful weather application with geolocation, 7-day forecast, interactive charts, weather maps and custom animated weather icons.', tags: ['React', 'OpenWeather API', 'Recharts'], gradient: 'from-sky-500/20 to-indigo-500/10', category: 'frontend', status: 'Completed' },
  { title: 'Blog Platform', description: 'Full-featured blog with rich Markdown editor, tag system, comments, search functionality, SEO optimization and RSS feed.', tags: ['React', 'Node.js', 'MongoDB', 'Markdown'], gradient: 'from-rose-500/20 to-red-500/10', category: 'fullstack', status: 'In Progress' },
  { title: 'Landing Page Builder', description: 'Visual drag-and-drop landing page builder with pre-built components, custom styling, responsive preview and export functionality.', tags: ['React', 'DnD Kit', 'Tailwind'], gradient: 'from-amber-500/20 to-orange-500/10', category: 'frontend', status: 'In Progress' },
  { title: 'Fitness Tracker', description: 'Workout tracking app with exercise library, progress charts, goal setting, body measurements and workout history with detailed stats.', tags: ['React Native', 'TypeScript', 'Charts'], gradient: 'from-emerald-500/20 to-teal-500/10', category: 'mobile', status: 'Planned' },
];

const projectsRu: Project[] = [
  { title: 'E-Commerce Platform', description: 'Полнофункциональный интернет-магазин с каталогом, корзиной, оплатой Stripe, панелью администратора и отслеживанием заказов.', tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'], gradient: 'from-blue-500/20 to-cyan-500/10', category: 'fullstack', status: 'Завершён' },
  { title: 'Task Manager Pro', description: 'Продвинутый менеджер задач с drag-and-drop канбан-доской, совместной работой в реальном времени и аналитикой.', tags: ['React', 'Tailwind', 'Supabase', 'DnD'], gradient: 'from-purple-500/20 to-pink-500/10', category: 'fullstack', status: 'Завершён' },
  { title: 'Portfolio Website', description: 'Креативное портфолио с 3D-анимациями частиц, эффектами стекла, мультиязычностью и системой тем.', tags: ['React', 'Three.js', 'Framer Motion', 'TypeScript'], gradient: 'from-green-500/20 to-emerald-500/10', category: 'frontend', status: 'Онлайн' },
  { title: 'Real-time Chat App', description: 'Чат-приложение с WebSocket для общения в реальном времени, комнатами, обменом файлами и реакциями.', tags: ['React', 'WebSocket', 'Node.js', 'MongoDB'], gradient: 'from-orange-500/20 to-yellow-500/10', category: 'fullstack', status: 'Завершён' },
  { title: 'Weather Dashboard', description: 'Красивое погодное приложение с геолокацией, 7-дневным прогнозом, интерактивными графиками и анимированными иконками.', tags: ['React', 'OpenWeather API', 'Recharts'], gradient: 'from-sky-500/20 to-indigo-500/10', category: 'frontend', status: 'Завершён' },
  { title: 'Blog Platform', description: 'Блог-платформа с Markdown-редактором, тегами, комментариями, поиском, SEO-оптимизацией и RSS.', tags: ['React', 'Node.js', 'MongoDB', 'Markdown'], gradient: 'from-rose-500/20 to-red-500/10', category: 'fullstack', status: 'В работе' },
  { title: 'Landing Page Builder', description: 'Визуальный конструктор лендингов с drag-and-drop, готовыми компонентами и адаптивным предпросмотром.', tags: ['React', 'DnD Kit', 'Tailwind'], gradient: 'from-amber-500/20 to-orange-500/10', category: 'frontend', status: 'В работе' },
  { title: 'Fitness Tracker', description: 'Трекер тренировок с библиотекой упражнений, графиками прогресса, целями и историей тренировок.', tags: ['React Native', 'TypeScript', 'Charts'], gradient: 'from-emerald-500/20 to-teal-500/10', category: 'mobile', status: 'Планируется' },
];

const filters = [
  { key: 'all', labelEn: 'All', labelRu: 'Все' },
  { key: 'frontend', labelEn: 'Frontend', labelRu: 'Frontend' },
  { key: 'fullstack', labelEn: 'Full-Stack', labelRu: 'Full-Stack' },
  { key: 'mobile', labelEn: 'Mobile', labelRu: 'Mobile' },
];

export default function ProjectsPage() {
  const { t, language } = useApp();
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = language === 'ru' ? projectsRu : projectsEn;
  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <SectionHeading label={t('projects.label')} title={t('projects.title')} description={t('projects.desc')} />

      {/* Filter tabs */}
      <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
        <Filter className="w-4 h-4 text-muted-foreground mr-2" />
        {filters.map(f => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeFilter === f.key
                ? 'bg-primary/15 text-primary glow-primary'
                : 'glass-card text-muted-foreground hover:text-foreground'
            }`}
          >
            {language === 'en' ? f.labelEn : f.labelRu}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, i) => (
            <GlassCard key={project.title} className="group overflow-hidden" delay={i * 0.06}>
              <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center">
                  <ArrowUpRight className="w-7 h-7 text-primary group-hover:rotate-45 transition-transform duration-300" />
                </div>
                {/* Status badge */}
                <span className="absolute top-3 right-3 text-[10px] px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm text-foreground font-medium">
                  {project.status}
                </span>
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
