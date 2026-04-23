import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import { useApp } from '@/contexts/AppContext';
import {
  Calendar, MapPin, Rocket, Heart, BookOpen, Coffee, Lock,
  Globe, Trophy, Target, Lightbulb, GraduationCap, Monitor, Laptop, Cpu,
  Code2, Palette, Server, Smartphone, Terminal, Database, Shield, Braces
} from 'lucide-react';

export default function AboutPage() {
  const { t, language } = useApp();

  const facts = [
    { icon: Calendar, label: t('about.fact.experience'), desc: t('about.fact.experience.desc'), color: 'text-primary' },
    { icon: MapPin, label: t('about.fact.location'), desc: t('about.fact.location.desc'), color: 'text-primary' },
    { icon: Rocket, label: t('about.fact.started'), desc: t('about.fact.started.desc'), color: 'text-primary' },
    { icon: Heart, label: t('about.fact.stack'), desc: t('about.fact.stack.desc'), color: 'text-primary' },
  ];

  const interests = [
    { icon: BookOpen, label: language === 'en' ? 'Self-learning' : 'Самообучение' },
    { icon: Shield, label: language === 'en' ? 'Cybersecurity' : 'Кибербезопасность' },
    { icon: Coffee, label: 'Coffee & Code' },
    { icon: Globe, label: 'Open Source' },
    { icon: Lightbulb, label: language === 'en' ? 'Problem Solving' : 'Решение задач' },
    { icon: Lock, label: language === 'en' ? 'Ethical Hacking' : 'Этичный хакинг' },
    { icon: Target, label: language === 'en' ? 'Hackathons' : 'Хакатоны' },
    { icon: Braces, label: language === 'en' ? 'Clean Code' : 'Чистый код' },
  ];

  const techJourney = language === 'en'
    ? [
        { age: '13', title: 'First Lines of Code', desc: 'Discovered HTML & CSS, built my first static website from scratch. Spent hours experimenting with colors and layouts.', icon: Laptop },
        { age: '14', title: 'JavaScript Era', desc: 'Fell in love with interactivity. Built mini-games, calculators, and learned DOM manipulation.', icon: Cpu },
        { age: '15', title: 'React & Modern Stack', desc: 'Adopted React, TypeScript, Tailwind CSS. Started building real production-ready projects for clients.', icon: Rocket },
        { age: '16', title: 'Full-Stack & Beyond', desc: 'Node.js, databases, APIs, 3D graphics with Three.js. Building complete enterprise-level solutions.', icon: Trophy },
      ]
    : [
        { age: '13', title: 'Первые строки кода', desc: 'Открыл HTML и CSS, создал первый статический сайт. Часами экспериментировал с цветами и макетами.', icon: Laptop },
        { age: '14', title: 'Эпоха JavaScript', desc: 'Влюбился в интерактивность. Создавал мини-игры, калькуляторы, изучал DOM.', icon: Cpu },
        { age: '15', title: 'React и современный стек', desc: 'Освоил React, TypeScript, Tailwind CSS. Начал создавать реальные проекты для клиентов.', icon: Rocket },
        { age: '16', title: 'Full-Stack и далее', desc: 'Node.js, базы данных, API, 3D-графика с Three.js. Полные решения корпоративного уровня.', icon: Trophy },
      ];

  const education = language === 'en'
    ? [
        { title: 'Secondary School', place: 'Uzbekistan', period: 'Current', icon: GraduationCap },
        { title: 'Online Courses', place: 'Udemy, Coursera, freeCodeCamp', period: '2021 — Present', icon: Monitor },
        { title: 'Self-taught Developer', place: 'YouTube, Docs, Practice', period: '2021 — Present', icon: BookOpen },
      ]
    : [
        { title: 'Средняя школа', place: 'Узбекистан', period: 'Сейчас', icon: GraduationCap },
        { title: 'Онлайн курсы', place: 'Udemy, Coursera, freeCodeCamp', period: '2021 — Сейчас', icon: Monitor },
        { title: 'Самообучение', place: 'YouTube, Документация, Практика', period: '2021 — Сейчас', icon: BookOpen },
      ];

  const whatIDo = language === 'en'
    ? [
        { icon: Code2, title: 'Frontend Development', desc: 'Building responsive, accessible, and performant user interfaces with React and modern tools.' },
        { icon: Server, title: 'Backend Development', desc: 'Creating RESTful APIs, handling databases, and server-side logic with Node.js.' },
        { icon: Palette, title: 'UI/UX Design', desc: 'Designing intuitive, beautiful interfaces with attention to every detail and micro-interaction.' },
        { icon: Smartphone, title: 'Responsive Design', desc: 'Ensuring pixel-perfect layouts across all devices — from mobile to ultra-wide screens.' },
        { icon: Terminal, title: 'DevOps Basics', desc: 'Setting up CI/CD pipelines, Docker containers, and automated deployments.' },
        { icon: Database, title: 'Database Design', desc: 'Designing efficient schemas with PostgreSQL, MongoDB, and Supabase.' },
      ]
    : [
        { icon: Code2, title: 'Frontend Разработка', desc: 'Создание адаптивных, доступных и производительных интерфейсов на React.' },
        { icon: Server, title: 'Backend Разработка', desc: 'Создание RESTful API, работа с базами данных и серверная логика на Node.js.' },
        { icon: Palette, title: 'UI/UX Дизайн', desc: 'Проектирование интуитивных интерфейсов с вниманием к каждой детали.' },
        { icon: Smartphone, title: 'Адаптивный дизайн', desc: 'Идеальные макеты на всех устройствах — от мобильных до широкоформатных экранов.' },
        { icon: Terminal, title: 'DevOps основы', desc: 'Настройка CI/CD, Docker контейнеров и автоматического деплоя.' },
        { icon: Database, title: 'Проектирование БД', desc: 'Эффективные схемы с PostgreSQL, MongoDB и Supabase.' },
      ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <SectionHeading label={t('about.label')} title={t('about.title')} />

      {/* Bio */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start mb-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="p-6 sm:p-8" hover={false}>
            <p className="text-foreground/90 leading-relaxed text-base sm:text-lg mb-4">{t('about.p1')}</p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4">{t('about.p2')}</p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{t('about.p3')}</p>
          </GlassCard>
        </motion.div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {facts.map((fact, i) => (
            <GlassCard key={fact.label} className="p-4 sm:p-6 text-center" delay={i * 0.08}>
              <fact.icon className={`w-7 h-7 ${fact.color} mx-auto mb-2`} />
              <div className="font-display font-bold text-lg sm:text-xl text-foreground mb-1">{fact.label}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{fact.desc}</div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* What I Do */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">
          {language === 'en' ? 'What I Do' : 'Чем я занимаюсь'}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whatIDo.map((item, i) => (
            <GlassCard key={item.title} className="p-5" delay={i * 0.08}>
              <item.icon className="w-7 h-7 text-primary mb-3" />
              <h4 className="font-display font-bold text-foreground mb-1.5 text-sm">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </motion.div>

      {/* Coding Journey */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-8 text-center">
          {language === 'en' ? 'My Coding Journey' : 'Мой путь в коде'}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techJourney.map((item, i) => (
            <GlassCard key={item.age} className="p-5 relative overflow-hidden" delay={i * 0.1}>
              <div className="absolute top-3 right-3 text-4xl font-display font-bold text-primary/10">
                {item.age}
              </div>
              <item.icon className="w-7 h-7 text-primary mb-3" />
              <div className="text-xs text-primary font-mono font-semibold mb-1">
                {language === 'en' ? `Age ${item.age}` : `${item.age} лет`}
              </div>
              <h4 className="font-display font-bold text-foreground mb-1.5 text-sm">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">
          {t('about.education')}
        </h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {education.map((edu, i) => (
            <GlassCard key={edu.title} className="p-5" delay={i * 0.08}>
              <edu.icon className="w-7 h-7 text-primary mb-3" />
              <h4 className="font-display font-bold text-foreground mb-1 text-sm">{edu.title}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">{edu.place}</p>
              <p className="text-xs text-primary font-mono mt-2">{edu.period}</p>
            </GlassCard>
          ))}
        </div>
      </motion.div>

      {/* Interests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">{t('about.interests')}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {interests.map((item, i) => (
            <GlassCard key={item.label} className="p-4 sm:p-5 text-center" delay={i * 0.05}>
              <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="text-xs sm:text-sm font-medium text-foreground">{item.label}</span>
            </GlassCard>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
