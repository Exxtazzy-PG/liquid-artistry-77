import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import { useApp } from '@/contexts/AppContext';
import { Mail, MessageCircle, Send, MapPin, Github, Linkedin, Clock, CheckCircle, Globe } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const { t, language } = useApp();
  const [formState, setFormState] = useState({ name: '', email: '', message: '', subject: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      toast.error(language === 'en' ? 'Please fill all required fields' : 'Заполните все обязательные поля');
      return;
    }
    setSent(true);
    toast.success(language === 'en' ? 'Message sent successfully!' : 'Сообщение отправлено!');
    setTimeout(() => setSent(false), 3000);
    setFormState({ name: '', email: '', message: '', subject: '' });
  };

  const contactLinks = [
    { icon: Mail, label: 'Email', value: 'muhammad@example.com', href: 'mailto:muhammad@example.com' },
    { icon: MessageCircle, label: 'Telegram', value: '@muhammad_dev', href: 'https://t.me/muhammad_dev' },
    { icon: Github, label: 'GitHub', value: 'muhammad-dev', href: 'https://github.com/muhammad-dev' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Muhammad', href: 'https://linkedin.com/in/muhammad-dev' },
    { icon: Globe, label: language === 'en' ? 'Website' : 'Сайт', value: 'muhammad.dev', href: '#' },
    { icon: MapPin, label: t('contact.location'), value: t('about.fact.location'), href: '#' },
  ];

  const availability = language === 'en'
    ? { status: 'Available for work', response: 'Usually responds within 24 hours' }
    : { status: 'Доступен для работы', response: 'Обычно отвечаю в течение 24 часов' };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <SectionHeading label={t('contact.label')} title={t('contact.title')} description={t('contact.desc')} />

      {/* Availability badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center mb-10"
      >
        <div className="inline-flex items-center gap-3 glass-card rounded-full px-5 py-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-sm font-medium text-foreground">{availability.status}</span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {availability.response}
          </span>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <GlassCard className="p-8" hover={false}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t('contact.name')} *</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all"
                    placeholder={t('contact.name.placeholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t('contact.email')} *</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {language === 'en' ? 'Subject' : 'Тема'}
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all"
                  placeholder={language === 'en' ? 'Project inquiry, collaboration, etc.' : 'Запрос проекта, сотрудничество и т.д.'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t('contact.message')} *</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all resize-none"
                  placeholder={t('contact.message.placeholder')}
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="w-full py-3.5 rounded-xl font-semibold text-primary-foreground flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-70"
                style={{ background: 'var(--gradient-primary)' }}
              >
                {sent ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    {language === 'en' ? 'Sent!' : 'Отправлено!'}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t('contact.send')}
                  </>
                )}
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
