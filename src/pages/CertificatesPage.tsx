import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import { useApp } from '@/contexts/AppContext';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

const certificatesRu = [
  { title: 'React — The Complete Guide', org: 'Udemy', year: '2023', desc: 'Полный курс по React, Redux, React Router и Hooks.' },
  { title: 'JavaScript Algorithms', org: 'freeCodeCamp', year: '2022', desc: 'Алгоритмы и структуры данных на JavaScript.' },
  { title: 'Responsive Web Design', org: 'freeCodeCamp', year: '2022', desc: 'Адаптивная верстка, Flexbox, CSS Grid.' },
  { title: 'TypeScript Fundamentals', org: 'Coursera', year: '2023', desc: 'Основы TypeScript, дженерики, утилиты типов.' },
  { title: 'Node.js Developer', org: 'Udemy', year: '2023', desc: 'Backend разработка с Express, MongoDB, REST API.' },
  { title: 'Git & GitHub Mastery', org: 'Coursera', year: '2022', desc: 'Система контроля версий, ветвление, PR.' },
];

const certificatesEn = [
  { title: 'React — The Complete Guide', org: 'Udemy', year: '2023', desc: 'Complete React course with Redux, React Router and Hooks.' },
  { title: 'JavaScript Algorithms', org: 'freeCodeCamp', year: '2022', desc: 'Algorithms and data structures in JavaScript.' },
  { title: 'Responsive Web Design', org: 'freeCodeCamp', year: '2022', desc: 'Responsive layout, Flexbox, CSS Grid.' },
  { title: 'TypeScript Fundamentals', org: 'Coursera', year: '2023', desc: 'TypeScript basics, generics, utility types.' },
  { title: 'Node.js Developer', org: 'Udemy', year: '2023', desc: 'Backend development with Express, MongoDB, REST API.' },
  { title: 'Git & GitHub Mastery', org: 'Coursera', year: '2022', desc: 'Version control, branching, pull requests.' },
];

export default function CertificatesPage() {
  const { t, language } = useApp();
  const certificates = language === 'ru' ? certificatesRu : certificatesEn;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <SectionHeading label={t('certificates.label')} title={t('certificates.title')} description={t('certificates.desc')} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificates.map((cert, i) => (
          <GlassCard key={cert.title} className="p-6 group" delay={i * 0.05}>
            <div className="flex items-start justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
            </div>
            <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
            <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{cert.desc}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1"><Building className="w-3 h-3" />{cert.org}</span>
              <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{cert.year}</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
