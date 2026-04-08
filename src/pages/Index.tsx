import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Code2, Users, Layers, Star, Camera, Download, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import GlassCard from '@/components/GlassCard';
import { useState, useEffect } from 'react';

const roles = ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Creative Coder'];

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
      ]
    : [
        { icon: MapPin, text: 'Узбекистан' },
        { icon: Calendar, text: 'Начал в 13 лет' },
      ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] px-6 py-12">
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-15 blur-[100px] pointer-events-none"
          style={{ background: 'hsl(var(--primary))' }} />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full opacity-10 blur-[80px] pointer-events-none"
          style={{ background: 'hsl(var(--accent))' }} />

        {/* Main hero - two column on desktop */}
        <div className="grid md:grid-cols-5 gap-10 items-center mb-16">
          {/* Left: Text content */}
          <div className="md:col-span-3 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{t('hero.badge')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-4"
            >
              <span className="text-foreground">{t('hero.greeting')} </span>
              <br />
              <span className="text-gradient-primary">{t('hero.name')}</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="h-8 mb-5"
            >
              <span className="text-lg font-medium text-primary font-mono">
                {displayText}
                <span className="animate-pulse ml-0.5">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-6 leading-relaxed"
            >
              {t('hero.desc')}
            </motion.p>

            {/* Quick info chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start"
            >
              {quickInfo.map((info) => (
                <span key={info.text} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground glass-card rounded-full px-4 py-1.5">
                  <info.icon className="w-3.5 h-3.5 text-primary" />
                  {info.text}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            >
              <Link
                to="/projects"
                className="px-8 py-3.5 rounded-2xl font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 glow-primary inline-flex items-center gap-2"
                style={{ background: 'var(--gradient-primary)' }}
              >
                {t('hero.projects')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-2xl font-semibold glass-card-hover text-foreground"
              >
                {t('hero.contact')}
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Download className="w-4 h-4" />
                {language === 'en' ? 'Download CV' : 'Скачать CV'}
              </a>
            </motion.div>
          </div>

          {/* Right: Photo area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                style={{ background: 'var(--gradient-primary)' }} />
              
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl glass-card overflow-hidden group">
                {/* Placeholder - replace with your photo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-secondary/30">
                  <Camera className="w-10 h-10 text-muted-foreground/50" />
                  <span className="text-xs text-muted-foreground/50 font-medium">
                    {language === 'en' ? 'Your Photo Here' : 'Ваше фото'}
                  </span>
                </div>
                {/* Uncomment and replace src when you have a photo:
                <img src="/your-photo.jpg" alt="Muhammad" className="w-full h-full object-cover" />
                */}
                
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-4 left-4 right-4 glass-card rounded-xl p-3 text-center"
                >
                  <span className="text-sm font-semibold text-foreground">Muhammad</span>
                  <span className="block text-xs text-muted-foreground mt-0.5">
                    {language === 'en' ? 'Full-Stack Developer' : 'Full-Stack Разработчик'}
                  </span>
                </motion.div>
              </div>

              {/* Decorative floating elements */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 w-12 h-12 rounded-xl glass-card flex items-center justify-center"
              >
                <Code2 className="w-5 h-5 text-primary" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-3 -left-3 w-12 h-12 rounded-xl glass-card flex items-center justify-center"
              >
                <Layers className="w-5 h-5 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16"
        >
          {stats.map((stat, i) => (
            <GlassCard key={stat.label} className="p-5 text-center" delay={i * 0.08} hover={false}>
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </GlassCard>
          ))}
        </motion.div>

        {/* What I do section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            {language === 'en' ? 'What I Build' : 'Что я создаю'}
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            {language === 'en'
              ? 'From responsive websites to complex web applications, I bring ideas to life with clean code and pixel-perfect design.'
              : 'От адаптивных сайтов до сложных веб-приложений — воплощаю идеи в чистый код и идеальный дизайн.'}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {(language === 'en'
            ? [
                { title: 'Web Apps', desc: 'Modern React applications with smooth animations and responsive layouts', icon: Code2 },
                { title: 'UI Design', desc: 'Beautiful interfaces inspired by Apple\'s design philosophy', icon: Layers },
                { title: 'Full-Stack', desc: 'End-to-end solutions with databases, APIs and authentication', icon: Star },
              ]
            : [
                { title: 'Веб-приложения', desc: 'Современные React-приложения с плавными анимациями', icon: Code2 },
                { title: 'UI Дизайн', desc: 'Красивые интерфейсы в стиле Apple', icon: Layers },
                { title: 'Full-Stack', desc: 'Полные решения с базами данных и API', icon: Star },
              ]
          ).map((item, i) => (
            <GlassCard key={item.title} className="p-6 text-center" delay={i * 0.1}>
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
