import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import { useApp } from '@/contexts/AppContext';
import { Globe, Smartphone, Palette, Zap, Database, Shield, Search, Headphones, ChevronDown, Check } from 'lucide-react';

interface Service {
  icon: typeof Globe;
  title: string;
  desc: string;
  features: string[];
  price: string;
}

const servicesEn: Service[] = [
  { icon: Globe, title: 'Web Development', desc: 'Building modern SPA and MPA applications with React, responsive design, SEO optimization and high performance across all devices.', features: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'SEO Optimization', 'Performance Tuning'], price: 'From $500' },
  { icon: Smartphone, title: 'Mobile Development', desc: 'Cross-platform mobile apps with native look and feel using React Native. One codebase, two platforms.', features: ['React Native', 'iOS & Android', 'Push Notifications', 'Offline Mode', 'App Store Deploy', 'Analytics'], price: 'From $800' },
  { icon: Palette, title: 'UI/UX Design', desc: 'User interface design with focus on usability, modern aesthetics and brand consistency. From wireframes to pixel-perfect mockups.', features: ['Figma Design', 'Prototyping', 'Design System', 'A/B Testing', 'Brand Identity', 'Style Guides'], price: 'From $300' },
  { icon: Database, title: 'Backend Development', desc: 'Scalable server-side solutions with Node.js. RESTful APIs, database architecture, authentication and third-party integrations.', features: ['Node.js / Express', 'PostgreSQL / MongoDB', 'REST & GraphQL API', 'Authentication', 'Cloud Deployment', 'CI/CD Pipeline'], price: 'From $600' },
  { icon: Zap, title: 'Performance Optimization', desc: 'Speed up your existing website. Core Web Vitals improvement, code splitting, caching strategies and image optimization.', features: ['Lighthouse Audit', 'Code Splitting', 'Image Optimization', 'CDN Setup', 'Lazy Loading', 'Bundle Analysis'], price: 'From $200' },
  { icon: Shield, title: 'Security Audit', desc: 'Comprehensive security review of your web application. Vulnerability scanning, penetration testing and security hardening.', features: ['XSS Prevention', 'CSRF Protection', 'Auth Security', 'Input Validation', 'HTTPS Setup', 'Security Headers'], price: 'From $250' },
  { icon: Search, title: 'SEO Optimization', desc: 'Boost your search rankings with technical SEO, content optimization, schema markup and performance improvements.', features: ['Technical SEO', 'Schema.org', 'Meta Optimization', 'Sitemap', 'Core Web Vitals', 'Analytics Setup'], price: 'From $200' },
  { icon: Headphones, title: 'Ongoing Support', desc: 'Continuous technical support, bug fixes, feature updates and performance monitoring to keep your project running smoothly.', features: ['Bug Fixes', 'Feature Updates', 'Monitoring', 'Backups', 'Consulting', '24/7 Support'], price: 'Monthly' },
];

const servicesRu: Service[] = [
  { icon: Globe, title: 'Веб-разработка', desc: 'Создание современных SPA и MPA приложений на React с адаптивным дизайном, SEO-оптимизацией и высокой производительностью.', features: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Адаптивный дизайн', 'SEO оптимизация', 'Оптимизация скорости'], price: 'От $500' },
  { icon: Smartphone, title: 'Мобильная разработка', desc: 'Кроссплатформенные мобильные приложения с нативным видом на React Native. Один код — две платформы.', features: ['React Native', 'iOS & Android', 'Push-уведомления', 'Offline-режим', 'Публикация в Store', 'Аналитика'], price: 'От $800' },
  { icon: Palette, title: 'UI/UX Дизайн', desc: 'Проектирование интерфейсов с фокусом на удобство, эстетику и узнаваемость бренда. От вайрфреймов до макетов.', features: ['Figma дизайн', 'Прототипирование', 'Design System', 'A/B тестирование', 'Айдентика', 'Гайдлайны'], price: 'От $300' },
  { icon: Database, title: 'Backend разработка', desc: 'Масштабируемые серверные решения на Node.js. REST API, архитектура БД, авторизация и интеграции.', features: ['Node.js / Express', 'PostgreSQL / MongoDB', 'REST & GraphQL', 'Авторизация', 'Cloud деплой', 'CI/CD'], price: 'От $600' },
  { icon: Zap, title: 'Оптимизация', desc: 'Ускорение загрузки сайта. Улучшение Core Web Vitals, разделение кода, кэширование и оптимизация изображений.', features: ['Lighthouse аудит', 'Code Splitting', 'Оптимизация медиа', 'CDN настройка', 'Lazy Loading', 'Анализ бандла'], price: 'От $200' },
  { icon: Shield, title: 'Аудит безопасности', desc: 'Комплексная проверка безопасности. Сканирование уязвимостей, тестирование и укрепление защиты.', features: ['Защита от XSS', 'Защита от CSRF', 'Безопасность авторизации', 'Валидация данных', 'Настройка HTTPS', 'Security Headers'], price: 'От $250' },
  { icon: Search, title: 'SEO оптимизация', desc: 'Повышение позиций в поиске: техническое SEO, оптимизация контента, schema-разметка и улучшение скорости.', features: ['Техническое SEO', 'Schema.org', 'Meta-теги', 'Sitemap', 'Core Web Vitals', 'Настройка аналитики'], price: 'От $200' },
  { icon: Headphones, title: 'Поддержка', desc: 'Техническая поддержка, исправление ошибок, обновления функций и мониторинг для стабильной работы проекта.', features: ['Bug fixing', 'Обновления', 'Мониторинг', 'Бэкапы', 'Консультации', 'Поддержка 24/7'], price: 'Ежемесячно' },
];

export default function ServicesPage() {
  const { t, language } = useApp();
  const services = language === 'ru' ? servicesRu : servicesEn;
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <SectionHeading label={t('services.label')} title={t('services.title')} description={t('services.desc')} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {services.map((service, i) => (
          <GlassCard key={service.title} className="p-6 group cursor-pointer" delay={i * 0.05}>
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <service.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
            
            {/* Price tag */}
            <div className="text-sm font-semibold text-primary mb-4 font-mono">{service.price}</div>

            {/* Toggle features */}
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-2"
            >
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expanded === i ? 'rotate-180' : ''}`} />
              {language === 'en' ? 'Features' : 'Возможности'}
            </button>

            <AnimatePresence>
              {expanded === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-1.5 pt-2">
                    {service.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="w-3 h-3 text-primary shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
