import { useState } from 'react';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import { useApp } from '@/contexts/AppContext';
import { Mail, MessageCircle, Send, MapPin, Github, Linkedin } from 'lucide-react';

export default function ContactPage() {
  const { t } = useApp();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const contactLinks = [
    { icon: Mail, label: 'Email', value: 'muhammad@example.com', href: 'mailto:muhammad@example.com' },
    { icon: MessageCircle, label: 'Telegram', value: '@muhammad_dev', href: 'https://t.me/muhammad_dev' },
    { icon: Github, label: 'GitHub', value: 'muhammad-dev', href: 'https://github.com/muhammad-dev' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Muhammad', href: 'https://linkedin.com/in/muhammad-dev' },
    { icon: MapPin, label: t('contact.location'), value: t('about.fact.location'), href: '#' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <SectionHeading label={t('contact.label')} title={t('contact.title')} description={t('contact.desc')} />

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <GlassCard className="p-8" hover={false}>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t('contact.name')}</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all"
                  placeholder={t('contact.name.placeholder')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t('contact.email')}</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t('contact.message')}</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all resize-none"
                  placeholder={t('contact.message.placeholder')}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold text-primary-foreground flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <Send className="w-4 h-4" />
                {t('contact.send')}
              </button>
            </form>
          </GlassCard>
        </div>

        <div className="md:col-span-2 space-y-4">
          {contactLinks.map((link, i) => (
            <GlassCard key={link.label} delay={i * 0.06}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-primary/10">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{link.label}</div>
                  <div className="font-medium text-foreground text-sm">{link.value}</div>
                </div>
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
