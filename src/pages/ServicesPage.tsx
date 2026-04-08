import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import { useApp } from '@/contexts/AppContext';
import { Globe, Smartphone, Palette, Zap, Database, Shield, Search, Headphones } from 'lucide-react';

const servicesRu = [
  { icon: Globe, title: 'Веб-разработка', desc: 'Создание современных SPA и MPA приложений на React с адаптивным дизайном и высокой производительностью.', features: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'] },
  { icon: Smartphone, title: 'Мобильная разработка', desc: 'Кроссплатформенные мобильные приложения с нативным опытом на React Native.', features: ['React Native', 'iOS & Android', 'Push-уведомления', 'Offline-режим'] },
  { icon: Palette, title: 'UI/UX Дизайн', desc: 'Проектирование пользовательских интерфейсов с фокусом на удобство и эстетику.', features: ['Figma', 'Прототипирование', 'Design System', 'A/B тестирование'] },
  { icon: Database, title: 'Backend разработка', desc: 'Серверная разработка с использованием Node.js, базы данных и REST API.', features: ['Node.js', 'PostgreSQL', 'REST API', 'GraphQL'] },
  { icon: Zap, title: 'Оптимизация', desc: 'Ускорение загрузки, улучшение Core Web Vitals и общей производительности.', features: ['Lazy Loading', 'Code Splitting', 'Image Optimization', 'Caching'] },
  { icon: Shield, title: 'Безопасность', desc: 'Аудит безопасности, защита от XSS, CSRF и других уязвимостей.', features: ['Auth / JWT', 'RLS Policies', 'Input Validation', 'HTTPS'] },
  { icon: Search, title: 'SEO оптимизация', desc: 'Повышение видимости сайта в поисковых системах и увеличение органического трафика.', features: ['Meta Tags', 'Schema.org', 'Sitemap', 'Performance'] },
  { icon: Headphones, title: 'Поддержка', desc: 'Техническая поддержка, обновления и мониторинг работоспособности проекта.', features: ['Мониторинг', 'Bug fixing', 'Обновления', 'Консультации'] },
];

const servicesEn = [
  { icon: Globe, title: 'Web Development', desc: 'Building modern SPA and MPA applications with React, responsive design and high performance.', features: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'] },
  { icon: Smartphone, title: 'Mobile Development', desc: 'Cross-platform mobile apps with native experience on React Native.', features: ['React Native', 'iOS & Android', 'Push Notifications', 'Offline Mode'] },
  { icon: Palette, title: 'UI/UX Design', desc: 'Designing user interfaces with focus on usability and aesthetics.', features: ['Figma', 'Prototyping', 'Design System', 'A/B Testing'] },
  { icon: Database, title: 'Backend Development', desc: 'Server-side development using Node.js, databases and REST APIs.', features: ['Node.js', 'PostgreSQL', 'REST API', 'GraphQL'] },
  { icon: Zap, title: 'Optimization', desc: 'Improving load times, Core Web Vitals and overall performance.', features: ['Lazy Loading', 'Code Splitting', 'Image Optimization', 'Caching'] },
  { icon: Shield, title: 'Security', desc: 'Security audits, protection against XSS, CSRF and other vulnerabilities.', features: ['Auth / JWT', 'RLS Policies', 'Input Validation', 'HTTPS'] },
  { icon: Search, title: 'SEO Optimization', desc: 'Increasing website visibility in search engines and organic traffic.', features: ['Meta Tags', 'Schema.org', 'Sitemap', 'Performance'] },
  { icon: Headphones, title: 'Support', desc: 'Technical support, updates and project monitoring.', features: ['Monitoring', 'Bug fixing', 'Updates', 'Consulting'] },
];

export default function ServicesPage() {
  const { t, language } = useApp();
  const services = language === 'ru' ? servicesRu : servicesEn;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <SectionHeading label={t('services.label')} title={t('services.title')} description={t('services.desc')} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {services.map((service, i) => (
          <GlassCard key={service.title} className="p-6 group" delay={i * 0.05}>
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <service.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {service.features.map(f => (
                <span key={f} className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">{f}</span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
