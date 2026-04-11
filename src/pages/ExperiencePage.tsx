import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import { useApp } from '@/contexts/AppContext';
import { Rocket, Code2, Briefcase, GraduationCap, Trophy, Star, Zap, Globe } from 'lucide-react';

const timelineEn = [
  { year: '2021', title: 'The Beginning', desc: 'Wrote first lines of HTML and CSS. Built my first static website — a simple personal page. Spent hours exploring how websites work.', icon: Rocket, color: 'text-accent', skills: ['HTML', 'CSS'] },
  { year: '2021', title: 'Diving Deeper', desc: 'Started learning JavaScript fundamentals. Built interactive calculators, to-do lists, and mini-games. Discovered the magic of DOM manipulation.', icon: Code2, color: 'text-primary', skills: ['JavaScript', 'DOM'] },
  { year: '2022', title: 'Discovering React', desc: 'Fell in love with component-based architecture. Built my first SPA applications using Create React App. Learned state management and hooks.', icon: Star, color: 'text-accent', skills: ['React', 'Hooks', 'SPA'] },
  { year: '2022', title: 'TypeScript Adoption', desc: 'Embraced TypeScript for type safety. Refactored existing projects. Started using Tailwind CSS for rapid UI development.', icon: Zap, color: 'text-primary', skills: ['TypeScript', 'Tailwind'] },
  { year: '2023', title: 'First Commercial Projects', desc: 'Landed my first freelance projects. Built e-commerce sites, landing pages, and dashboards for real clients. Learned project management.', icon: Briefcase, color: 'text-accent', skills: ['Freelance', 'E-commerce'] },
  { year: '2023', title: 'Full-Stack Journey', desc: 'Started backend development with Node.js and PostgreSQL. Built REST APIs, authentication systems, and database-driven applications.', icon: GraduationCap, color: 'text-primary', skills: ['Node.js', 'PostgreSQL', 'API'] },
  { year: '2024', title: 'Advanced Frontend', desc: 'Mastered animations with Framer Motion, 3D graphics with Three.js, and advanced React patterns. Built complex interactive experiences.', icon: Globe, color: 'text-accent', skills: ['Three.js', 'Framer Motion', '3D'] },
  { year: '2024', title: 'Professional Growth', desc: 'Participated in hackathons, contributed to open-source projects. Focused on performance optimization and accessibility. Building my brand.', icon: Trophy, color: 'text-primary', skills: ['Open Source', 'Hackathons', 'A11y'] },
];

const timelineRu = [
  { year: '2021', title: 'Начало пути', desc: 'Написал первые строки HTML и CSS. Создал первый статический сайт — простую визитку. Часами изучал, как работают сайты.', icon: Rocket, color: 'text-accent', skills: ['HTML', 'CSS'] },
  { year: '2021', title: 'Погружение', desc: 'Начал изучать основы JavaScript. Создавал калькуляторы, списки задач и мини-игры. Открыл магию работы с DOM.', icon: Code2, color: 'text-primary', skills: ['JavaScript', 'DOM'] },
  { year: '2022', title: 'Знакомство с React', desc: 'Влюбился в компонентный подход. Создал первые SPA на Create React App. Изучил управление состоянием и хуки.', icon: Star, color: 'text-accent', skills: ['React', 'Hooks', 'SPA'] },
  { year: '2022', title: 'Переход на TypeScript', desc: 'Принял TypeScript для типобезопасности. Переписал проекты. Начал использовать Tailwind CSS.', icon: Zap, color: 'text-primary', skills: ['TypeScript', 'Tailwind'] },
  { year: '2023', title: 'Первые коммерческие проекты', desc: 'Получил первые фриланс-заказы. Создавал интернет-магазины, лендинги и панели управления для реальных клиентов.', icon: Briefcase, color: 'text-accent', skills: ['Фриланс', 'E-commerce'] },
  { year: '2023', title: 'Full-Stack разработка', desc: 'Начал серверную разработку с Node.js и PostgreSQL. Создал REST API, системы авторизации и приложения с базами данных.', icon: GraduationCap, color: 'text-primary', skills: ['Node.js', 'PostgreSQL', 'API'] },
  { year: '2024', title: 'Продвинутый Frontend', desc: 'Освоил анимации с Framer Motion, 3D-графику с Three.js и продвинутые паттерны React.', icon: Globe, color: 'text-accent', skills: ['Three.js', 'Framer Motion', '3D'] },
  { year: '2024', title: 'Профессиональный рост', desc: 'Участие в хакатонах, вклад в open-source. Фокус на производительности и доступности. Строю личный бренд.', icon: Trophy, color: 'text-primary', skills: ['Open Source', 'Хакатоны', 'A11y'] },
];

export default function ExperiencePage() {
  const { t, language } = useApp();
  const timeline = language === 'ru' ? timelineRu : timelineEn;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <SectionHeading label={t('experience.label')} title={t('experience.title')} description={t('experience.desc')} />

      <div className="relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
            >
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-6 z-10 glow-primary" />

              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <GlassCard className="p-6" delay={i * 0.05}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="text-sm font-mono text-primary font-semibold">{item.year}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map(s => (
                      <span key={s} className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{s}</span>
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
