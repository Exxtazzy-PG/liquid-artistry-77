import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import SectionHeading from './SectionHeading';
import {
  Code2, Palette, Database, Globe, Smartphone, Terminal,
  Layers, GitBranch, Zap, Box
} from 'lucide-react';

const skills = [
  { name: 'React', level: 90, icon: Code2, category: 'Frontend' },
  { name: 'TypeScript', level: 85, icon: Terminal, category: 'Frontend' },
  { name: 'JavaScript', level: 92, icon: Zap, category: 'Frontend' },
  { name: 'HTML/CSS', level: 95, icon: Globe, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 88, icon: Palette, category: 'Frontend' },
  { name: 'Node.js', level: 75, icon: Box, category: 'Backend' },
  { name: 'Git', level: 80, icon: GitBranch, category: 'Tools' },
  { name: 'PostgreSQL', level: 70, icon: Database, category: 'Backend' },
  { name: 'React Native', level: 65, icon: Smartphone, category: 'Mobile' },
  { name: 'Three.js', level: 60, icon: Layers, category: 'Frontend' },
];

function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  return (
    <GlassCard className="p-5" delay={index * 0.05}>
      <div className="flex items-center gap-4 mb-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, hsla(199, 89%, 60%, 0.15), hsla(217, 91%, 60%, 0.05))' }}>
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
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, hsl(199, 89%, 60%), hsl(217, 91%, 65%))' }}
        />
      </div>
    </GlassCard>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative section-padding">
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full opacity-10 blur-[120px]"
        style={{ background: 'hsl(24, 94%, 53%)' }} />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          label="Навыки"
          title="Мой технический стек"
          description="Технологии, которые я использую для создания современных продуктов"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
