import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import { useApp } from '@/contexts/AppContext';
import {
  Code2, Palette, Database, Globe, Smartphone, Terminal,
  Layers, GitBranch, Zap, Box, Server, Cloud, Figma, Cpu
} from 'lucide-react';

const categories = {
  frontend: [
    { name: 'React', level: 90, icon: Code2 },
    { name: 'TypeScript', level: 85, icon: Terminal },
    { name: 'JavaScript', level: 92, icon: Zap },
    { name: 'HTML/CSS', level: 95, icon: Globe },
    { name: 'Tailwind CSS', level: 88, icon: Palette },
    { name: 'Three.js', level: 60, icon: Layers },
    { name: 'Framer Motion', level: 75, icon: Cpu },
    { name: 'React Native', level: 65, icon: Smartphone },
  ],
  backend: [
    { name: 'Node.js', level: 75, icon: Box },
    { name: 'PostgreSQL', level: 70, icon: Database },
    { name: 'REST API', level: 80, icon: Server },
    { name: 'GraphQL', level: 55, icon: Cloud },
  ],
  tools: [
    { name: 'Git', level: 80, icon: GitBranch },
    { name: 'Figma', level: 70, icon: Figma },
    { name: 'VS Code', level: 90, icon: Code2 },
    { name: 'Linux', level: 65, icon: Terminal },
  ],
};

export default function SkillsPage() {
  const { t } = useApp();
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'tools'>('frontend');

  const tabs = [
    { key: 'frontend' as const, label: t('skills.frontend') },
    { key: 'backend' as const, label: t('skills.backend') },
    { key: 'tools' as const, label: t('skills.tools') },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <SectionHeading label={t('skills.label')} title={t('skills.title')} description={t('skills.desc')} />

      {/* Tabs */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeTab === tab.key
                ? 'bg-primary/15 text-primary glow-primary'
                : 'glass-card text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
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
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10">
                <skill.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground text-sm">{skill.name}</span>
                  <span className="text-xs text-muted-foreground">{skill.level}%</span>
                </div>
              </div>
            </div>
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
