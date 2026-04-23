import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import { useApp } from '@/contexts/AppContext';
import {
  Rocket, Code2, Briefcase, GraduationCap, Trophy, Star, Zap, Globe,
  Shield, Layers, Brain, Cpu
} from 'lucide-react';

const timelineEn = [
  { year: '2021', month: 'Spring', title: 'The First Spark', desc: 'Wrote first lines of HTML and CSS at age 13. Built my first static website — a simple personal page. Spent hours exploring how websites actually work under the hood.', icon: Rocket, color: 'text-accent', skills: ['HTML', 'CSS', 'Curiosity'] },
  { year: '2021', month: 'Autumn', title: 'JavaScript Awakening', desc: 'Started learning JavaScript fundamentals. Built interactive calculators, to-do lists, and mini-games. Discovered the magic of DOM manipulation and events.', icon: Code2, color: 'text-primary', skills: ['JavaScript', 'DOM', 'Events'] },
  { year: '2022', month: 'Spring', title: 'Discovering React', desc: 'Fell in love with component-based architecture. Built first SPA using Create React App. Learned state management, hooks, and the React lifecycle.', icon: Star, color: 'text-accent', skills: ['React', 'Hooks', 'SPA'] },
  { year: '2022', month: 'Summer', title: 'TypeScript & Tailwind', desc: 'Embraced TypeScript for type safety and refactored existing projects. Adopted Tailwind CSS for rapid utility-first UI development.', icon: Zap, color: 'text-primary', skills: ['TypeScript', 'Tailwind', 'Utility CSS'] },
  { year: '2023', month: 'Spring', title: 'First Commercial Projects', desc: 'Landed first freelance projects. Built e-commerce sites, landing pages, and dashboards for real clients. Learned project scoping, deadlines, and communication.', icon: Briefcase, color: 'text-accent', skills: ['Freelance', 'E-commerce', 'Client Work'] },
  { year: '2023', month: 'Autumn', title: 'Full-Stack Journey Begins', desc: 'Started backend development with Node.js, Express, and PostgreSQL. Built REST APIs, JWT authentication systems, and database-driven applications.', icon: GraduationCap, color: 'text-primary', skills: ['Node.js', 'PostgreSQL', 'REST API', 'JWT'] },
  { year: '2024', month: 'Spring', title: 'Cybersecurity Deep Dive', desc: 'Started exploring cybersecurity — web vulnerabilities (OWASP Top 10), secure coding practices, ethical hacking basics, and CTF challenges.', icon: Shield, color: 'text-accent', skills: ['OWASP', 'Security', 'CTF', 'Ethical Hacking'] },
  { year: '2024', month: 'Summer', title: 'Advanced Frontend Mastery', desc: 'Mastered animations with Framer Motion, advanced React patterns, performance optimization, and accessibility. Built complex interactive experiences.', icon: Globe, color: 'text-primary', skills: ['Framer Motion', 'Performance', 'A11y'] },
  { year: '2024', month: 'Autumn', title: 'Python & Data', desc: 'Picked up Python for backend scripting and data analysis. Used PyCharm and Jupyter Notebook for experiments with data visualization and ML basics.', icon: Brain, color: 'text-accent', skills: ['Python', 'PyCharm', 'Jupyter'] },
  { year: '2025', month: 'Spring', title: 'Architecture & Scale', desc: 'Focused on scalable architecture, design patterns, and clean code principles. Started contributing to open-source and helping fellow developers.', icon: Layers, color: 'text-primary', skills: ['Architecture', 'Patterns', 'Clean Code'] },
  { year: '2025', month: 'Summer', title: 'DevOps & Cloud', desc: 'Learning Docker, CI/CD pipelines, GitHub Actions, and cloud deployments. Building production-ready infrastructure for personal and client projects.', icon: Cpu, color: 'text-accent', skills: ['Docker', 'CI/CD', 'GitHub Actions'] },
  { year: '2025', month: 'Now', title: 'Building My Brand', desc: 'Participating in hackathons, contributing to open-source, sharing knowledge online. Building a personal brand around quality web development and security.', icon: Trophy, color: 'text-primary', skills: ['Open Source', 'Hackathons', 'Branding'] },
];

const timelineRu = [
  { year: '2021', month: 'Весна', title: 'Первая искра', desc: 'Написал первые строки HTML и CSS в 13 лет. Создал первый статический сайт — простую визитку. Часами изучал, как устроены сайты изнутри.', icon: Rocket, color: 'text-accent', skills: ['HTML', 'CSS', 'Любопытство'] },
  { year: '2021', month: 'Осень', title: 'Пробуждение JavaScript', desc: 'Начал изучать основы JavaScript. Создавал калькуляторы, списки задач и мини-игры. Открыл магию работы с DOM и событиями.', icon: Code2, color: 'text-primary', skills: ['JavaScript', 'DOM', 'Events'] },
  { year: '2022', month: 'Весна', title: 'Открытие React', desc: 'Влюбился в компонентный подход. Создал первое SPA на Create React App. Изучил управление состоянием, хуки и жизненный цикл React.', icon: Star, color: 'text-accent', skills: ['React', 'Hooks', 'SPA'] },
  { year: '2022', month: 'Лето', title: 'TypeScript и Tailwind', desc: 'Перешёл на TypeScript ради типобезопасности и переписал проекты. Принял Tailwind CSS для быстрой utility-first вёрстки.', icon: Zap, color: 'text-primary', skills: ['TypeScript', 'Tailwind', 'Utility CSS'] },
  { year: '2023', month: 'Весна', title: 'Первые коммерческие проекты', desc: 'Получил первые фриланс-заказы. Создавал интернет-магазины, лендинги и дашборды для реальных клиентов. Учился планированию и коммуникации.', icon: Briefcase, color: 'text-accent', skills: ['Фриланс', 'E-commerce', 'Клиенты'] },
  { year: '2023', month: 'Осень', title: 'Старт Full-Stack пути', desc: 'Начал серверную разработку с Node.js, Express и PostgreSQL. Создал REST API, системы JWT-авторизации и приложения с базами данных.', icon: GraduationCap, color: 'text-primary', skills: ['Node.js', 'PostgreSQL', 'REST API', 'JWT'] },
  { year: '2024', month: 'Весна', title: 'Погружение в кибербезопасность', desc: 'Начал изучать кибербезопасность — веб-уязвимости (OWASP Top 10), безопасное программирование, основы этичного хакинга и CTF-задачи.', icon: Shield, color: 'text-accent', skills: ['OWASP', 'Security', 'CTF', 'Этичный хакинг'] },
  { year: '2024', month: 'Лето', title: 'Продвинутый Frontend', desc: 'Освоил анимации с Framer Motion, продвинутые паттерны React, оптимизацию производительности и доступность. Создал сложные интерактивные интерфейсы.', icon: Globe, color: 'text-primary', skills: ['Framer Motion', 'Производительность', 'A11y'] },
  { year: '2024', month: 'Осень', title: 'Python и данные', desc: 'Освоил Python для бэкенд-скриптов и анализа данных. Использовал PyCharm и Jupyter Notebook для экспериментов с визуализацией и основами ML.', icon: Brain, color: 'text-accent', skills: ['Python', 'PyCharm', 'Jupyter'] },
  { year: '2025', month: 'Весна', title: 'Архитектура и масштаб', desc: 'Сфокусировался на масштабируемой архитектуре, паттернах проектирования и принципах чистого кода. Начал помогать другим разработчикам.', icon: Layers, color: 'text-primary', skills: ['Архитектура', 'Паттерны', 'Чистый код'] },
  { year: '2025', month: 'Лето', title: 'DevOps и облако', desc: 'Изучаю Docker, CI/CD, GitHub Actions и облачный деплой. Строю production-ready инфраструктуру для личных и клиентских проектов.', icon: Cpu, color: 'text-accent', skills: ['Docker', 'CI/CD', 'GitHub Actions'] },
  { year: '2025', month: 'Сейчас', title: 'Личный бренд', desc: 'Участвую в хакатонах, вношу вклад в open-source, делюсь знаниями. Строю личный бренд вокруг качественной веб-разработки и безопасности.', icon: Trophy, color: 'text-primary', skills: ['Open Source', 'Хакатоны', 'Бренд'] },
];

export default function ExperiencePage() {
  const { t, language } = useApp();
  const timeline = language === 'ru' ? timelineRu : timelineEn;

  const stats = [
    { value: '3+', label: language === 'en' ? 'Years Coding' : 'Лет в коде' },
    { value: timeline.length.toString(), label: language === 'en' ? 'Milestones' : 'Этапов' },
    { value: '15+', label: language === 'en' ? 'Projects Built' : 'Проектов' },
    { value: '20+', label: language === 'en' ? 'Tech Mastered' : 'Технологий' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <SectionHeading label={t('experience.label')} title={t('experience.title')} description={t('experience.desc')} />

      {/* Stats overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12"
      >
        {stats.map((s, i) => (
          <GlassCard key={s.label} className="p-4 sm:p-5 text-center" delay={i * 0.06} hover={false}>
            <div className="font-display text-2xl sm:text-3xl font-bold text-gradient-primary">{s.value}</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">{s.label}</div>
          </GlassCard>
        ))}
      </motion.div>

      <div className="relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10 sm:space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
            >
              <motion.div
                whileInView={{ scale: [0, 1.4, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 + 0.2 }}
                className="absolute left-6 md:left-1/2 w-3.5 h-3.5 rounded-full bg-primary -translate-x-1/2 mt-6 z-10 glow-primary"
              />

              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <GlassCard className="p-5 sm:p-6" delay={i * 0.04}>
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"
                    >
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </motion.div>
                    <div className="flex-1">
                      <span className="text-sm font-mono text-primary font-semibold">{item.year}</span>
                      <span className="text-xs text-muted-foreground ml-2">{item.month}</span>
                    </div>
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3">{item.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map(s => (
                      <span key={s} className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{s}</span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
