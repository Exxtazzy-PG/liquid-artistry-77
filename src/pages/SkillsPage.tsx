import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import { useApp } from '@/contexts/AppContext';
import {
  Code2, Palette, Database, Globe, Smartphone, Terminal,
  GitBranch, Zap, Box, Server, Cloud, Figma, Cpu,
  Chrome, FileCode, Blocks, Workflow, Layout, Component,
  Wind, Sparkles, Brain, FlaskConical, Search, Filter,
  Layers, Award, TrendingUp
} from 'lucide-react';

type Skill = {
  name: string;
  level: number;
  icon: typeof Code2;
  desc: string;
  years: number;
};

const categories: Record<'frontend' | 'backend' | 'tools', Skill[]> = {
  frontend: [
    { name: 'React', level: 92, icon: Code2, desc: 'Hooks, Context, Router, Suspense, Performance', years: 3 },
    { name: 'TypeScript', level: 88, icon: Terminal, desc: 'Generics, Utility Types, Strict Mode', years: 2 },
    { name: 'JavaScript', level: 95, icon: Zap, desc: 'ES6+, Async/Await, Closures, Prototypes', years: 3 },
    { name: 'HTML5 / CSS3', level: 96, icon: Globe, desc: 'Semantic HTML, Flexbox, Grid, Animations', years: 3 },
    { name: 'Tailwind CSS', level: 90, icon: Wind, desc: 'Custom Themes, Plugins, Responsive Design', years: 2 },
    { name: 'Bootstrap', level: 85, icon: Layout, desc: 'Grid System, Components, Customization', years: 3 },
    { name: 'Material UI', level: 78, icon: Component, desc: 'Theming, Custom Components, sx prop', years: 2 },
    { name: 'shadcn/ui', level: 88, icon: Blocks, desc: 'Radix Primitives, Variants, Composition', years: 1 },
    { name: 'Framer Motion', level: 82, icon: Sparkles, desc: 'Transitions, Gestures, Layout Animations', years: 2 },
    { name: 'Redux / Zustand', level: 75, icon: Cpu, desc: 'State Management, Middleware, Persistence', years: 2 },
    { name: 'Next.js', level: 70, icon: Chrome, desc: 'SSR, SSG, App Router, Server Components', years: 1 },
    { name: 'Vue.js', level: 60, icon: Component, desc: 'Composition API, Vuex, Vue Router', years: 1 },
    { name: 'Sass / SCSS', level: 82, icon: FileCode, desc: 'Mixins, Variables, Nesting, Modules', years: 2 },
    { name: 'React Native', level: 68, icon: Smartphone, desc: 'Cross-platform, Navigation, Native APIs', years: 1 },
  ],
  backend: [
    { name: 'Node.js', level: 80, icon: Box, desc: 'Express, Middleware, Streams, Events', years: 2 },
    { name: 'Express.js', level: 78, icon: Server, desc: 'Routing, Middleware, REST APIs', years: 2 },
    { name: 'PostgreSQL', level: 72, icon: Database, desc: 'Joins, Indexes, Triggers, Functions', years: 2 },
    { name: 'MongoDB', level: 70, icon: Database, desc: 'Aggregation, Indexing, Mongoose ODM', years: 2 },
    { name: 'REST API', level: 85, icon: Server, desc: 'CRUD, Auth, Pagination, Error Handling', years: 2 },
    { name: 'GraphQL', level: 60, icon: Cloud, desc: 'Queries, Mutations, Subscriptions, Apollo', years: 1 },
    { name: 'Supabase', level: 75, icon: Blocks, desc: 'Auth, RLS, Edge Functions, Storage', years: 1 },
    { name: 'Firebase', level: 70, icon: Cloud, desc: 'Auth, Firestore, Hosting, Functions', years: 2 },
    { name: 'Python', level: 72, icon: Brain, desc: 'Flask, FastAPI, Data Processing', years: 2 },
    { name: 'JWT / OAuth', level: 75, icon: Workflow, desc: 'Authentication, Authorization, Sessions', years: 2 },
  ],
  tools: [
    { name: 'Git / GitHub', level: 85, icon: GitBranch, desc: 'Branching, Merging, Rebasing, PRs, Actions', years: 3 },
    { name: 'VS Code', level: 95, icon: Code2, desc: 'Extensions, Debugging, Snippets, Tasks', years: 3 },
    { name: 'PyCharm', level: 78, icon: Brain, desc: 'Python IDE, Debugging, Refactoring', years: 2 },
    { name: 'Jupyter Notebook', level: 75, icon: FlaskConical, desc: 'Data Analysis, Visualization, ML', years: 2 },
    { name: 'Figma', level: 78, icon: Figma, desc: 'Auto Layout, Components, Prototyping', years: 2 },
    { name: 'Postman', level: 82, icon: Workflow, desc: 'API Testing, Collections, Environments', years: 2 },
    { name: 'Linux / Bash', level: 70, icon: Terminal, desc: 'Bash, SSH, File System, Permissions', years: 2 },
    { name: 'Docker', level: 55, icon: Box, desc: 'Containers, Compose, Images, Volumes', years: 1 },
    { name: 'Vite / Webpack', level: 75, icon: Workflow, desc: 'Build Tools, HMR, Optimization', years: 2 },
    { name: 'CI/CD', level: 60, icon: Workflow, desc: 'GitHub Actions, Vercel, Netlify', years: 1 },
    { name: 'npm / pnpm / bun', level: 88, icon: Box, desc: 'Package Management, Scripts, Workspaces', years: 3 },
    { name: 'Chrome DevTools', level: 88, icon: Chrome, desc: 'Debugging, Performance, Network', years: 3 },
  ],
};

const levelLabel = (level: number, lang: 'en' | 'ru') => {
  if (level >= 85) return lang === 'en' ? 'Expert' : 'Эксперт';
  if (level >= 70) return lang === 'en' ? 'Advanced' : 'Продвинутый';
  if (level >= 55) return lang === 'en' ? 'Intermediate' : 'Средний';
  return lang === 'en' ? 'Learning' : 'Изучаю';
};

export default function SkillsPage() {
  const { t, language } = useApp();
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'tools'>('frontend');
  const [search, setSearch] = useState('');
  const [minLevel, setMinLevel] = useState(0);

  const tabs = [
    { key: 'frontend' as const, label: t('skills.frontend'), count: categories.frontend.length, icon: Palette },
    { key: 'backend' as const, label: t('skills.backend'), count: categories.backend.length, icon: Server },
    { key: 'tools' as const, label: t('skills.tools'), count: categories.tools.length, icon: Workflow },
  ];

  const filtered = categories[activeTab].filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) && s.level >= minLevel
  );

  const totalSkills = categories.frontend.length + categories.backend.length + categories.tools.length;
  const avgLevel = Math.round(
    [...categories.frontend, ...categories.backend, ...categories.tools].reduce((a, b) => a + b.level, 0) / totalSkills
  );
  const expertCount = [...categories.frontend, ...categories.backend, ...categories.tools].filter(s => s.level >= 85).length;

  const overviewStats = [
    { icon: Layers, value: `${totalSkills}+`, label: language === 'en' ? 'Total Skills' : 'Всего навыков' },
    { icon: TrendingUp, value: `${avgLevel}%`, label: language === 'en' ? 'Avg Level' : 'Средний уровень' },
    { icon: Award, value: expertCount, label: language === 'en' ? 'Expert Level' : 'Экспертный уровень' },
    { icon: Zap, value: '3+', label: language === 'en' ? 'Years Experience' : 'Лет опыта' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <SectionHeading label={t('skills.label')} title={t('skills.title')} description={t('skills.desc')} />

      {/* Overview stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8"
      >
        {overviewStats.map((s, i) => (
          <GlassCard key={s.label} className="p-4 sm:p-5 text-center" delay={i * 0.06} hover={false}>
            <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-2" />
            <div className="font-display text-xl sm:text-2xl font-bold text-foreground">{s.value}</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">{s.label}</div>
          </GlassCard>
        ))}
      </motion.div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {tabs.map(tab => (
          <motion.button
            key={tab.key}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 inline-flex items-center gap-2 ${
              activeTab === tab.key
                ? 'bg-primary/15 text-primary glow-primary'
                : 'glass-card text-muted-foreground hover:text-foreground'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === tab.key ? 'bg-primary/20' : 'bg-secondary'}`}>
              {tab.count}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Search & filter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col sm:flex-row gap-3 mb-8"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={language === 'en' ? 'Search skills...' : 'Поиск навыков...'}
            className="w-full glass-card rounded-xl pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
          />
        </div>
        <div className="glass-card rounded-xl px-4 py-2.5 flex items-center gap-3 sm:min-w-[260px]">
          <Filter className="w-4 h-4 text-primary shrink-0" />
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {language === 'en' ? 'Min level' : 'Мин. уровень'}
          </span>
          <input
            type="range"
            min={0}
            max={100}
            step={5}
            value={minLevel}
            onChange={(e) => setMinLevel(Number(e.target.value))}
            className="flex-1 accent-primary cursor-pointer"
          />
          <span className="text-xs font-mono text-primary min-w-[2.5rem] text-right">{minLevel}%</span>
        </div>
      </motion.div>

      {/* Skills grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab + search + minLevel}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.length === 0 ? (
            <div className="col-span-full text-center py-12 text-muted-foreground text-sm">
              {language === 'en' ? 'No skills match your filters' : 'Навыки не найдены'}
            </div>
          ) : (
            filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="glass-card-hover rounded-2xl p-5 group relative overflow-hidden"
              >
                {/* Animated gradient bg on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at top right, hsla(var(--primary), 0.08), transparent 70%)' }}
                />

                <div className="relative">
                  <div className="flex items-start gap-3 mb-3">
                    <motion.div
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-11 h-11 rounded-xl flex items-center justify-center bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors"
                    >
                      <skill.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-foreground text-sm truncate">{skill.name}</span>
                        <span className="text-xs text-muted-foreground font-mono shrink-0">{skill.level}%</span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-primary/10 text-primary font-medium">
                          {levelLabel(skill.level, language)}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          {skill.years}{language === 'en' ? 'y' : 'г'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-muted-foreground mb-3 leading-relaxed">{skill.desc}</p>

                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: i * 0.04 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full relative"
                      style={{ background: 'var(--gradient-primary)' }}
                    >
                      <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
                        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
