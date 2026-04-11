import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import { useApp } from '@/contexts/AppContext';
import { Award, ExternalLink, Calendar, Building, Filter, BookOpen, Code2, Database } from 'lucide-react';

interface Cert {
  title: string;
  org: string;
  year: string;
  desc: string;
  category: string;
  icon: typeof Award;
}

const certificatesEn: Cert[] = [
  { title: 'React — The Complete Guide', org: 'Udemy', year: '2023', desc: 'Complete React course covering Redux, React Router, Hooks, Context API, Next.js and deployment strategies.', category: 'frontend', icon: Code2 },
  { title: 'JavaScript Algorithms & DS', org: 'freeCodeCamp', year: '2022', desc: 'Algorithms, data structures, recursion, sorting, searching and Big O notation in JavaScript.', category: 'fundamentals', icon: BookOpen },
  { title: 'Responsive Web Design', org: 'freeCodeCamp', year: '2022', desc: 'Advanced responsive layouts with Flexbox, CSS Grid, media queries, accessibility and semantic HTML.', category: 'frontend', icon: Code2 },
  { title: 'TypeScript Fundamentals', org: 'Coursera', year: '2023', desc: 'TypeScript type system, generics, utility types, decorators, module resolution and integration with React.', category: 'frontend', icon: Code2 },
  { title: 'Node.js Developer Course', org: 'Udemy', year: '2023', desc: 'Backend development with Express.js, MongoDB, REST API design, JWT authentication and deployment.', category: 'backend', icon: Database },
  { title: 'Git & GitHub Mastery', org: 'Coursera', year: '2022', desc: 'Version control best practices, branching strategies, pull requests, code reviews and CI/CD basics.', category: 'tools', icon: BookOpen },
  { title: 'Advanced CSS and Sass', org: 'Udemy', year: '2023', desc: 'CSS animations, transforms, clip-path, CSS Grid advanced patterns and Sass architecture.', category: 'frontend', icon: Code2 },
  { title: 'PostgreSQL Bootcamp', org: 'Udemy', year: '2024', desc: 'Relational database design, complex queries, indexing, stored procedures and performance optimization.', category: 'backend', icon: Database },
  { title: 'Frontend System Design', org: 'Coursera', year: '2024', desc: 'Architecture patterns, state management strategies, micro-frontends and scalable component design.', category: 'frontend', icon: Code2 },
];

const certificatesRu: Cert[] = [
  { title: 'React — Полный курс', org: 'Udemy', year: '2023', desc: 'Полный курс React: Redux, Router, Hooks, Context API, Next.js и стратегии деплоя.', category: 'frontend', icon: Code2 },
  { title: 'Алгоритмы JavaScript', org: 'freeCodeCamp', year: '2022', desc: 'Алгоритмы, структуры данных, рекурсия, сортировка и нотация Big O.', category: 'fundamentals', icon: BookOpen },
  { title: 'Адаптивный веб-дизайн', org: 'freeCodeCamp', year: '2022', desc: 'Продвинутая вёрстка: Flexbox, Grid, медиа-запросы, доступность и семантический HTML.', category: 'frontend', icon: Code2 },
  { title: 'Основы TypeScript', org: 'Coursera', year: '2023', desc: 'Система типов, дженерики, утилитарные типы, декораторы и интеграция с React.', category: 'frontend', icon: Code2 },
  { title: 'Курс Node.js', org: 'Udemy', year: '2023', desc: 'Backend на Express.js, MongoDB, REST API, JWT авторизация и деплой.', category: 'backend', icon: Database },
  { title: 'Мастерство Git', org: 'Coursera', year: '2022', desc: 'Контроль версий, ветвление, pull request, ревью кода и основы CI/CD.', category: 'tools', icon: BookOpen },
  { title: 'Продвинутый CSS и Sass', org: 'Udemy', year: '2023', desc: 'CSS-анимации, трансформации, clip-path, продвинутые паттерны Grid и Sass.', category: 'frontend', icon: Code2 },
  { title: 'PostgreSQL Bootcamp', org: 'Udemy', year: '2024', desc: 'Проектирование БД, сложные запросы, индексы, хранимые процедуры и оптимизация.', category: 'backend', icon: Database },
  { title: 'Frontend System Design', org: 'Coursera', year: '2024', desc: 'Архитектурные паттерны, стратегии управления состоянием и масштабируемый дизайн компонентов.', category: 'frontend', icon: Code2 },
];

const filterOptions = [
  { key: 'all', labelEn: 'All', labelRu: 'Все' },
  { key: 'frontend', labelEn: 'Frontend', labelRu: 'Frontend' },
  { key: 'backend', labelEn: 'Backend', labelRu: 'Backend' },
  { key: 'fundamentals', labelEn: 'Fundamentals', labelRu: 'Основы' },
  { key: 'tools', labelEn: 'Tools', labelRu: 'Инструменты' },
];

export default function CertificatesPage() {
  const { t, language } = useApp();
  const certificates = language === 'ru' ? certificatesRu : certificatesEn;
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? certificates : certificates.filter(c => c.category === filter);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <SectionHeading label={t('certificates.label')} title={t('certificates.title')} description={t('certificates.desc')} />

      <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
        <Filter className="w-4 h-4 text-muted-foreground mr-2" />
        {filterOptions.map(f => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              filter === f.key
                ? 'bg-primary/15 text-primary glow-primary'
                : 'glass-card text-muted-foreground hover:text-foreground'
            }`}
          >
            {language === 'en' ? f.labelEn : f.labelRu}
          </button>
        ))}
      </div>

      <motion.div
        key={filter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {filtered.map((cert, i) => (
          <GlassCard key={cert.title} className="p-6 group" delay={i * 0.05}>
            <div className="flex items-start justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <cert.icon className="w-5 h-5 text-primary" />
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
            </div>
            <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
            <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{cert.desc}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1"><Building className="w-3 h-3" />{cert.org}</span>
              <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{cert.year}</span>
            </div>
          </GlassCard>
        ))}
      </motion.div>
    </div>
  );
}
