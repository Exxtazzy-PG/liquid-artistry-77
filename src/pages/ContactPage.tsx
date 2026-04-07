import { useState } from 'react';
import GlassCard from '@/components/GlassCard';
import SectionHeading from '@/components/SectionHeading';
import { Mail, MessageCircle, Send, MapPin } from 'lucide-react';

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'muhammad@example.com', href: 'mailto:muhammad@example.com' },
  { icon: MessageCircle, label: 'Telegram', value: '@muhammad_dev', href: 'https://t.me/muhammad_dev' },
  { icon: MapPin, label: 'Локация', value: 'Узбекистан', href: '#' },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <SectionHeading
        label="Контакты"
        title="Давайте работать вместе"
        description="Открыт к новым проектам и сотрудничеству"
      />

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <GlassCard className="p-8" hover={false}>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Имя</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Сообщение</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all resize-none"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold text-primary-foreground flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <Send className="w-4 h-4" />
                Отправить
              </button>
            </form>
          </GlassCard>
        </div>

        <div className="md:col-span-2 space-y-4">
          {contactLinks.map((link, i) => (
            <GlassCard key={link.label} delay={i * 0.08}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-primary/10">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{link.label}</div>
                  <div className="font-medium text-foreground">{link.value}</div>
                </div>
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
