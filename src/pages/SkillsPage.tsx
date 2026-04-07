import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import {
  Code2, Palette, Database, Globe, Smartphone, Terminal,
  Layers, GitBranch, Zap, Box
} from 'lucide-react';

const skills = [
  { name: 'React', level: 90, icon: Code2 },
  { name: 'TypeScript', level: 85, icon: Terminal },
  { name: 'JavaScript', level: 92, icon: Zap },
  { name: 'HTML/CSS', level: 95, icon: Globe },
  { name: 'Tailwind CSS', level: 88, icon: Palette },
  { name: 'Node.js', level: 75, icon: Box },
  { name: 'Git', level: 80, icon: GitBranch },
  { name: 'PostgreSQL', level: 70, icon: Database },
  { name: 'React Native', level: 65, icon: Smartphone },
  { name: 'Three.js', level: 60, icon: Layers },
];

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <SectionHeading
        label="Навыки"
        title="Мой технический стек"
        description="Технологии, которые я использую для создания современных продуктов"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, i) => (
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
                className="h-full rounded-full bg-primary"
              />
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
