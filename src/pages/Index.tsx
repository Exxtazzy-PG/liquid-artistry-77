import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Code2, Users, Layers, Star, Camera, Download, MapPin, Calendar, Zap, Globe, Heart, Coffee, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import GlassCard from '@/components/GlassCard';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

const roles = ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Creative Coder', 'Full-Stack Builder'];

const Index = () => {
  const { t, language } = useApp();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;
    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting ? current.slice(0, displayText.length - 1) : current.slice(0, displayText.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleDownloadCV = () => {
    // Generate and download a simple CV
    const cvContent = `
MUHAMMAD — Full-Stack Developer
================================
Location: Uzbekistan
Age: 16
Experience: 3+ years
Email: muhammad@example.com

SKILLS
------
Frontend: React, TypeScript, Next.js, Tailwind CSS, Framer Motion
Backend: Node.js, Express, MongoDB, PostgreSQL
Tools: Git, Docker, Figma, VS Code, CI/CD

EXPERIENCE
----------
• 3+ years of self-taught programming starting at age 13
• 15+ completed projects including web apps, e-commerce, and dashboards
• Proficient in modern React ecosystem with TypeScript
• Experience with 3D graphics using Three.js
• UI/UX design and responsive web development

EDUCATION
---------
• Secondary School, Uzbekistan (Current)
• Online Courses: Udemy, Coursera, freeCodeCamp (2021-Present)
• Self-taught through documentation and practice

PROJECTS
--------
• E-Commerce Platform — Full-stack online store with React & Node.js
• Task Management App — Kanban board with real-time collaboration
• Portfolio Website — 3D animated portfolio with glassmorphism
• Weather Dashboard — Real-time weather app with data visualization
• Chat Application — Real-time messaging with WebSocket
    `.trim();

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Muhammad_CV.txt';
    a.click();
    URL.revokeObjectURL(url);
    toast.success(language === 'en' ? 'CV downloaded!' : 'CV скачан!');
  };

  const stats = [
    { icon: Code2, value: '15+', label: t('hero.stats.projects') },
    { icon: Star, value: '3+', label: t('hero.stats.experience') },
    { icon: Layers, value: '10+', label: t('hero.stats.technologies') },
    { icon: Users, value: '5+', label: t('hero.stats.clients') },
  ];

  const quickInfo = language === 'en'
    ? [
        { icon: MapPin, text: 'Uzbekistan' },
        { icon: Calendar, text: 'Started at 13' },
        { icon: Zap, text: 'Open to work' },
      ]
    : [
        { icon: MapPin, text: 'Узбекистан' },
        { icon: Calendar, text: 'Начал в 13 лет' },
        { icon: Zap, text: 'Открыт к работе' },
      ];

  const featured = language === 'en'
    ? [
        { title: 'Web Applications', desc: 'Modern React apps with smooth animations, state management, and responsive layouts for any device.', icon: Code2 },
        { title: 'UI/UX Design', desc: "Beautiful interfaces inspired by Apple's design philosophy — clean, intuitive, and pixel-perfect.", icon: Layers },
        { title: 'Full-Stack Solutions', desc: 'Complete end-to-end solutions with databases, REST APIs, authentication, and deployment.', icon: Star },
        { title: 'Performance', desc: 'Optimized code with lazy loading, code splitting, and best practices for fast load times.', icon: Zap },
        { title: 'Open Source', desc: 'Contributing to the community with reusable components, tools, and libraries.', icon: Globe },
        { title: 'Passion', desc: 'Every project is crafted with love, attention to detail, and a desire to create something extraordinary.', icon: Heart },
      ]
    : [
        { title: 'Веб-приложения', desc: 'Современные React-приложения с плавными анимациями, управлением состояния и адаптивными макетами.', icon: Code2 },
        { title: 'UI/UX Дизайн', desc: 'Красивые интерфейсы в стиле Apple — чистые, интуитивные и попиксельно точные.', icon: Layers },
        { title: 'Full-Stack решения', desc: 'Полные решения с базами данных, REST API, аутентификацией и деплоем.', icon: Star },
        { title: 'Производительность', desc: 'Оптимизированный код с ленивой загрузкой и лучшими практиками.', icon: Zap },
        { title: 'Open Source', desc: 'Вклад в сообщество с переиспользуемыми компонентами и инструментами.', icon: Globe },
        { title: 'Страсть', desc: 'Каждый проект создан с любовью, вниманием к деталям и желанием создать что-то необычное.', icon: Heart },
      ];

  const techStack = [
    { name: 'React', color: 'text-blue-400' },
    { name: 'TypeScript', color: 'text-blue-500' },
    { name: 'Tailwind', color: 'text-cyan-400' },
    { name: 'Node.js', color: 'text-green-500' },
    { name: 'Next.js', color: 'text-foreground' },
    { name: 'Three.js', color: 'text-purple-400' },
    { name: 'MongoDB', color: 'text-green-400' },
    { name: 'Git', color: 'text-orange-500' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3rem)] px-4 sm:px-6 py-8 sm:py-12">
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-15 blur-[100px] pointer-events-none"
          style={{ background: 'hsl(var(--primary))' }} />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full opacity-10 blur-[80px] pointer-events-none"
          style={{ background: 'hsl(var(--accent))' }} />

        {/* Hero */}
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          <div className="md:col-span-3 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass-card rounded-full px-4 sm:px-5 py-2 mb-5"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm text-muted-foreground">{t('hero.badge')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] mb-3"
            >
              <span className="text-foreground">{t('hero.greeting')} </span>
              <br />
              <span className="text-gradient-primary">{t('hero.name')}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="h-7 sm:h-8 mb-4"
            >
              <span className="text-base sm:text-lg font-medium text-primary font-mono">
                {displayText}
                <span className="animate-pulse ml-0.5">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mb-5 leading-relaxed"
            >
              {t('hero.desc')}
            </motion.p>

            {/* Quick info chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start"
            >
              {quickInfo.map((info) => (
                <span key={info.text} className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground glass-card rounded-full px-3 sm:px-4 py-1.5">
                  <info.icon className="w-3.5 h-3.5 text-primary" />
                  {info.text}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start"
            >
              <Link
                to="/projects"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-2xl font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 glow-primary inline-flex items-center justify-center gap-2 text-sm"
                style={{ background: 'var(--gradient-primary)' }}
              >
                {t('hero.projects')} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-2xl font-semibold glass-card-hover text-foreground text-sm text-center"
              >
                {t('hero.contact')}
              </Link>
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-2"
              >
                <Download className="w-4 h-4" />
                {language === 'en' ? 'Download CV' : 'Скачать CV'}
              </button>
            </motion.div>
          </div>

          {/* Photo area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                style={{ background: 'var(--gradient-primary)' }} />
              
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-3xl glass-card overflow-hidden group">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-secondary/30">
                  <Camera className="w-10 h-10 text-muted-foreground/50" />
                  <span className="text-xs text-muted-foreground/50 font-medium">
                    {language === 'en' ? 'Your Photo Here' : 'Ваше фото'}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-3 left-3 right-3 glass-card rounded-xl p-2.5 text-center"
                >
                  <span className="text-sm font-semibold text-foreground">Muhammad</span>
                  <span className="block text-[10px] text-muted-foreground mt-0.5">
                    {language === 'en' ? 'Full-Stack Developer' : 'Full-Stack Разработчик'}
                  </span>
                </motion.div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 w-10 h-10 rounded-xl glass-card flex items-center justify-center"
              >
                <Code2 className="w-4 h-4 text-primary" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-3 -left-3 w-10 h-10 rounded-xl glass-card flex items-center justify-center"
              >
                <Layers className="w-4 h-4 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-16 lg:mb-20"
        >
          {stats.map((stat, i) => (
            <GlassCard key={stat.label} className="p-4 sm:p-5 text-center" delay={i * 0.08} hover={false}>
              <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-2" />
              <div className="font-display text-xl sm:text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">{stat.label}</div>
            </GlassCard>
          ))}
        </motion.div>

        {/* Tech stack marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-center text-xs text-muted-foreground mb-4 uppercase tracking-widest">
            {language === 'en' ? 'Tech I work with' : 'Технологии'}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-xl px-4 py-2 text-sm font-medium text-foreground hover:scale-105 transition-transform cursor-default"
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What I Build */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
            {language === 'en' ? 'What I Build' : 'Что я создаю'}
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm max-w-lg mx-auto">
            {language === 'en'
              ? 'From responsive websites to complex web applications, I bring ideas to life with clean code and pixel-perfect design.'
              : 'От адаптивных сайтов до сложных веб-приложений — воплощаю идеи в чистый код и идеальный дизайн.'}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16 lg:mb-20">
          {featured.map((item, i) => (
            <GlassCard key={item.title} className="p-5 sm:p-6" delay={i * 0.08}>
              <item.icon className="w-7 h-7 text-primary mb-3" />
              <h3 className="font-display font-bold text-foreground mb-2 text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <GlassCard className="p-6 sm:p-8 text-center" hover={false}>
            <Coffee className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2">
              {language === 'en' ? "Let's Build Something Amazing" : 'Давайте создадим что-то потрясающее'}
            </h3>
            <p className="text-sm text-muted-foreground mb-5 max-w-md mx-auto">
              {language === 'en'
                ? "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
                : 'Я всегда открыт для обсуждения новых проектов, творческих идей или возможностей стать частью вашего видения.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="px-6 py-2.5 rounded-xl font-semibold text-primary-foreground text-sm hover:scale-105 transition-transform glow-primary"
                style={{ background: 'var(--gradient-primary)' }}
              >
                {language === 'en' ? 'Get in Touch' : 'Связаться'}
              </Link>
              <a
                href="https://github.com/muhammad-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold glass-card-hover text-foreground text-sm"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
