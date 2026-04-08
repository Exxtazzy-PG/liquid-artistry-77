import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import { useApp } from '@/contexts/AppContext';
import { Rocket, Code2, Briefcase, GraduationCap, Trophy, Star } from 'lucide-react';

const timelineRu = [
  { year: '2021', title: 'Начало пути', desc: 'Написал первые строки кода на HTML и CSS. Создал свой первый сайт-визитку.', icon: Rocket, color: 'text-accent' },
  { year: '2022', title: 'Изучение JavaScript', desc: 'Погрузился в JavaScript, изучил основы программирования, алгоритмы и структуры данных.', icon: Code2, color: 'text-primary' },
  { year: '2022', title: 'Знакомство с React', desc: 'Начал изучать React и экосистему. Создал первые SPA-приложения.', icon: Star, color: 'text-accent' },
  { year: '2023', title: 'Первые проекты', desc: 'Разработал несколько коммерческих проектов. Освоил TypeScript и Tailwind CSS.', icon: Briefcase, color: 'text-primary' },
  { year: '2023', title: 'Full-Stack разработка', desc: 'Начал изучать backend: Node.js, PostgreSQL, REST API. Создал полнофункциональные приложения.', icon: GraduationCap, color: 'text-accent' },
  { year: '2024', title: 'Профессиональный рост', desc: 'Участие в хакатонах, open-source проекты, изучение 3D-графики и анимаций.', icon: Trophy, color: 'text-primary' },
];

const timelineEn = [
  { year: '2021', title: 'The Beginning', desc: 'Wrote first lines of HTML and CSS code. Created my first business card website.', icon: Rocket, color: 'text-accent' },
  { year: '2022', title: 'Learning JavaScript', desc: 'Dove into JavaScript, learned programming fundamentals, algorithms and data structures.', icon: Code2, color: 'text-primary' },
  { year: '2022', title: 'Discovering React', desc: 'Started learning React and its ecosystem. Built first SPA applications.', icon: Star, color: 'text-accent' },
  { year: '2023', title: 'First Projects', desc: 'Developed several commercial projects. Mastered TypeScript and Tailwind CSS.', icon: Briefcase, color: 'text-primary' },
  { year: '2023', title: 'Full-Stack Development', desc: 'Started learning backend: Node.js, PostgreSQL, REST API. Built full-featured applications.', icon: GraduationCap, color: 'text-accent' },
  { year: '2024', title: 'Professional Growth', desc: 'Hackathon participation, open-source projects, learning 3D graphics and animations.', icon: Trophy, color: 'text-primary' },
];

export default function ExperiencePage() {
  const { t, language } = useApp();
  const timeline = language === 'ru' ? timelineRu : timelineEn;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <SectionHeading label={t('experience.label')} title={t('experience.title')} description={t('experience.desc')} />

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
            >
              {/* Dot on timeline */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-6 z-10 glow-primary" />

              {/* Content card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <GlassCard className="p-6" delay={i * 0.05}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="text-sm font-mono text-primary font-semibold">{item.year}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
