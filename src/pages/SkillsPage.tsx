import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import { useApp } from '@/contexts/AppContext';
import {
  Code2, Palette, Database, Globe, Smartphone, Terminal,
  Layers, GitBranch, Zap, Box, Server, Cloud, Figma, Cpu,
  Chrome, FileCode, Blocks, Workflow
} from 'lucide-react';

const categories = {
  frontend: [
    { name: 'React', level: 90, icon: Code2, desc: 'Hooks, Context, Router, Performance' },
    { name: 'TypeScript', level: 85, icon: Terminal, desc: 'Generics, Utility Types, Strict Mode' },
    { name: 'JavaScript', level: 92, icon: Zap, desc: 'ES6+, Async/Await, Closures, Prototypes' },
    { name: 'HTML5 / CSS3', level: 95, icon: Globe, desc: 'Semantic HTML, Flexbox, Grid, Animations' },
    { name: 'Tailwind CSS', level: 88, icon: Palette, desc: 'Custom Themes, Plugins, Responsive Design' },
    { name: 'Three.js', level: 60, icon: Layers, desc: 'Scenes, Materials, Lighting, R3F' },
    { name: 'Framer Motion', level: 75, icon: Cpu, desc: 'Transitions, Gestures, Layout Animations' },
    { name: 'React Native', level: 65, icon: Smartphone, desc: 'Cross-platform, Navigation, Native APIs' },
    { name: 'Next.js', level: 55, icon: Chrome, desc: 'SSR, SSG, API Routes, Middleware' },
    { name: 'Sass / SCSS', level: 80, icon: FileCode, desc: 'Mixins, Variables, Nesting, Modules' },
  ],
  backend: [
    { name: 'Node.js', level: 75, icon: Box, desc: 'Express, Middleware, Streams, Events' },
    { name: 'PostgreSQL', level: 70, icon: Database, desc: 'Joins, Indexes, Triggers, Functions' },
    { name: 'REST API', level: 80, icon: Server, desc: 'CRUD, Auth, Pagination, Error Handling' },
    { name: 'GraphQL', level: 55, icon: Cloud, desc: 'Queries, Mutations, Subscriptions, Apollo' },
    { name: 'MongoDB', level: 65, icon: Database, desc: 'Aggregation, Indexing, Mongoose ODM' },
    { name: 'Supabase', level: 70, icon: Blocks, desc: 'Auth, RLS, Edge Functions, Storage' },
  ],
  tools: [
    { name: 'Git', level: 80, icon: GitBranch, desc: 'Branching, Merging, Rebasing, Hooks' },
    { name: 'Figma', level: 70, icon: Figma, desc: 'Auto Layout, Components, Prototyping' },
    { name: 'VS Code', level: 90, icon: Code2, desc: 'Extensions, Debugging, Snippets, Tasks' },
    { name: 'Linux', level: 65, icon: Terminal, desc: 'Bash, SSH, File System, Permissions' },
    { name: 'Docker', level: 45, icon: Box, desc: 'Containers, Compose, Images, Volumes' },
    { name: 'CI/CD', level: 50, icon: Workflow, desc: 'GitHub Actions, Vercel, Netlify' },
  ],
};

export default function SkillsPage() {
  const { t } = useApp();
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'tools'>('frontend');

  const tabs = [
    { key: 'frontend' as const, label: t('skills.frontend'), count: categories.frontend.length },
    { key: 'backend' as const, label: t('skills.backend'), count: categories.backend.length },
    { key: 'tools' as const, label: t('skills.tools'), count: categories.tools.length },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <SectionHeading label={t('skills.label')} title={t('skills.title')} description={t('skills.desc')} />

      <div className="flex items-center justify-center gap-2 mb-10">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 inline-flex items-center gap-2 ${
              activeTab === tab.key
                ? 'bg-primary/15 text-primary glow-primary'
                : 'glass-card text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeTab === tab.key ? 'bg-primary/20' : 'bg-secondary'}`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {categories[activeTab].map((skill, i) => (
          <GlassCard key={skill.name} className="p-5" delay={i * 0.04}>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10">
                <skill.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground text-sm">{skill.name}</span>
                  <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-muted-foreground mb-3 ml-14">{skill.desc}</p>
            <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, delay: i * 0.04 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full"
                style={{ background: 'var(--gradient-primary)' }}
              />
            </div>
          </GlassCard>
        ))}
      </motion.div>
    </div>
  );
}
