import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import SectionHeading from './SectionHeading';
import { Calendar, MapPin, Rocket, Heart } from 'lucide-react';

const facts = [
  { icon: Calendar, label: '3+ года', desc: 'опыт разработки', color: 'text-primary' },
  { icon: MapPin, label: 'Узбекистан', desc: 'откуда я', color: 'text-accent' },
  { icon: Rocket, label: '13 лет', desc: 'начал кодить', color: 'text-primary' },
  { icon: Heart, label: 'React', desc: 'любимый стек', color: 'text-accent' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Обо мне" title="Молодой разработчик с большими амбициями" />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard className="p-8" hover={false}>
              <p className="text-foreground/90 leading-relaxed text-lg mb-4">
                Мне 16 лет и я живу в Узбекистане. С 13 лет я погрузился в мир
                программирования и с тех пор не останавливаюсь.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Я специализируюсь на создании современных веб-приложений с использованием
                React, TypeScript и других передовых технологий. Моя цель —
                создавать не просто работающий код, а по-настоящему красивые и
                интуитивно понятные продукты.
              </p>
            </GlassCard>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {facts.map((fact, i) => (
              <GlassCard key={fact.label} className="p-6 text-center" delay={i * 0.1}>
                <fact.icon className={`w-8 h-8 ${fact.color} mx-auto mb-3`} />
                <div className="font-display font-bold text-xl text-foreground mb-1">{fact.label}</div>
                <div className="text-sm text-muted-foreground">{fact.desc}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
