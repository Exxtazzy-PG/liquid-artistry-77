import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import { useApp } from '@/contexts/AppContext';
import { Calendar, MapPin, Rocket, Heart, BookOpen, Gamepad2, Music, Coffee } from 'lucide-react';

export default function AboutPage() {
  const { t } = useApp();

  const facts = [
    { icon: Calendar, label: t('about.fact.experience'), desc: t('about.fact.experience.desc'), color: 'text-primary' },
    { icon: MapPin, label: t('about.fact.location'), desc: t('about.fact.location.desc'), color: 'text-accent' },
    { icon: Rocket, label: t('about.fact.started'), desc: t('about.fact.started.desc'), color: 'text-primary' },
    { icon: Heart, label: t('about.fact.stack'), desc: t('about.fact.stack.desc'), color: 'text-accent' },
  ];

  const interests = [
    { icon: BookOpen, label: t('about.education') },
    { icon: Gamepad2, label: 'Gaming' },
    { icon: Music, label: 'Music' },
    { icon: Coffee, label: 'Coffee & Code' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <SectionHeading label={t('about.label')} title={t('about.title')} />

      <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="p-8" hover={false}>
            <p className="text-foreground/90 leading-relaxed text-lg mb-4">{t('about.p1')}</p>
            <p className="text-muted-foreground leading-relaxed mb-4">{t('about.p2')}</p>
            <p className="text-muted-foreground leading-relaxed">{t('about.p3')}</p>
          </GlassCard>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {facts.map((fact, i) => (
            <GlassCard key={fact.label} className="p-6 text-center" delay={i * 0.08}>
              <fact.icon className={`w-8 h-8 ${fact.color} mx-auto mb-3`} />
              <div className="font-display font-bold text-xl text-foreground mb-1">{fact.label}</div>
              <div className="text-sm text-muted-foreground">{fact.desc}</div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Interests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">{t('about.interests')}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {interests.map((item, i) => (
            <GlassCard key={item.label} className="p-5 text-center" delay={i * 0.05}>
              <item.icon className="w-7 h-7 text-primary mx-auto mb-2" />
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </GlassCard>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
