import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ru' | 'en';
export type AccentColor = 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'red';
export type Theme = 'dark' | 'light';

interface AppContextType {
  theme: Theme;
  setTheme: (t: Theme) => void;
  language: Language;
  setLanguage: (l: Language) => void;
  accentColor: AccentColor;
  setAccentColor: (c: AccentColor) => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | null>(null);

const accentColors: Record<AccentColor, { primary: string; ring: string; gradient: string }> = {
  blue: { primary: '199 89% 60%', ring: '199 89% 60%', gradient: 'linear-gradient(135deg, hsl(199, 89%, 60%), hsl(217, 91%, 60%))' },
  purple: { primary: '270 76% 62%', ring: '270 76% 62%', gradient: 'linear-gradient(135deg, hsl(270, 76%, 62%), hsl(290, 80%, 55%))' },
  green: { primary: '152 69% 50%', ring: '152 69% 50%', gradient: 'linear-gradient(135deg, hsl(152, 69%, 50%), hsl(170, 75%, 45%))' },
  orange: { primary: '24 94% 53%', ring: '24 94% 53%', gradient: 'linear-gradient(135deg, hsl(24, 94%, 53%), hsl(35, 95%, 55%))' },
  pink: { primary: '330 80% 60%', ring: '330 80% 60%', gradient: 'linear-gradient(135deg, hsl(330, 80%, 60%), hsl(350, 85%, 55%))' },
  red: { primary: '0 84% 60%', ring: '0 84% 60%', gradient: 'linear-gradient(135deg, hsl(0, 84%, 60%), hsl(15, 90%, 55%))' },
};

const translations: Record<string, Record<Language, string>> = {
  // Nav
  'nav.home': { ru: 'Главная', en: 'Home' },
  'nav.about': { ru: 'Обо мне', en: 'About' },
  'nav.skills': { ru: 'Навыки', en: 'Skills' },
  'nav.projects': { ru: 'Проекты', en: 'Projects' },
  'nav.contact': { ru: 'Контакты', en: 'Contact' },
  'nav.experience': { ru: 'Опыт', en: 'Experience' },
  'nav.services': { ru: 'Услуги', en: 'Services' },
  'nav.certificates': { ru: 'Сертификаты', en: 'Certificates' },
  // Hero
  'hero.badge': { ru: 'Разработчик · 16 лет · Узбекистан', en: 'Developer · 16 y.o. · Uzbekistan' },
  'hero.greeting': { ru: 'Привет, я', en: "Hi, I'm" },
  'hero.name': { ru: 'Мухаммад', en: 'Muhammad' },
  'hero.desc': { ru: 'Создаю современные веб-приложения с 13 лет. Превращаю идеи в элегантный код и красивые интерфейсы.', en: 'Building modern web apps since age 13. Turning ideas into elegant code and beautiful interfaces.' },
  'hero.projects': { ru: 'Мои проекты', en: 'My Projects' },
  'hero.contact': { ru: 'Связаться', en: 'Contact Me' },
  'hero.stats.projects': { ru: 'Проектов', en: 'Projects' },
  'hero.stats.experience': { ru: 'Лет опыта', en: 'Years exp.' },
  'hero.stats.technologies': { ru: 'Технологий', en: 'Technologies' },
  'hero.stats.clients': { ru: 'Клиентов', en: 'Clients' },
  // About
  'about.label': { ru: 'Обо мне', en: 'About Me' },
  'about.title': { ru: 'Молодой разработчик с большими амбициями', en: 'Young developer with big ambitions' },
  'about.p1': { ru: 'Мне 16 лет и я живу в Узбекистане. С 13 лет я погрузился в мир программирования и с тех пор не останавливаюсь.', en: "I'm 16 years old and I live in Uzbekistan. Since age 13, I've been immersed in programming and haven't stopped since." },
  'about.p2': { ru: 'Я специализируюсь на создании современных веб-приложений с использованием React, TypeScript и других передовых технологий. Моя цель — создавать не просто работающий код, а по-настоящему красивые и интуитивно понятные продукты.', en: 'I specialize in building modern web apps using React, TypeScript, and other cutting-edge technologies. My goal is to create not just working code, but truly beautiful and intuitive products.' },
  'about.p3': { ru: 'Я увлекаюсь UI/UX дизайном, 3D-графикой и постоянно изучаю новые технологии. В свободное время участвую в хакатонах и open-source проектах.', en: "I'm passionate about UI/UX design, 3D graphics, and constantly learning new technologies. In my free time, I participate in hackathons and open-source projects." },
  'about.fact.experience': { ru: '3+ года', en: '3+ years' },
  'about.fact.experience.desc': { ru: 'опыт разработки', en: 'dev experience' },
  'about.fact.location': { ru: 'Узбекистан', en: 'Uzbekistan' },
  'about.fact.location.desc': { ru: 'откуда я', en: 'where I live' },
  'about.fact.started': { ru: '13 лет', en: 'Age 13' },
  'about.fact.started.desc': { ru: 'начал кодить', en: 'started coding' },
  'about.fact.stack': { ru: 'React', en: 'React' },
  'about.fact.stack.desc': { ru: 'любимый стек', en: 'favorite stack' },
  'about.education': { ru: 'Образование', en: 'Education' },
  'about.interests': { ru: 'Интересы', en: 'Interests' },
  // Skills
  'skills.label': { ru: 'Навыки', en: 'Skills' },
  'skills.title': { ru: 'Мой технический стек', en: 'My Tech Stack' },
  'skills.desc': { ru: 'Технологии, которые я использую для создания современных продуктов', en: 'Technologies I use to build modern products' },
  'skills.frontend': { ru: 'Frontend', en: 'Frontend' },
  'skills.backend': { ru: 'Backend', en: 'Backend' },
  'skills.tools': { ru: 'Инструменты', en: 'Tools' },
  // Projects
  'projects.label': { ru: 'Проекты', en: 'Projects' },
  'projects.title': { ru: 'Избранные работы', en: 'Featured Works' },
  'projects.desc': { ru: 'Проекты, которые показывают мой подход к разработке', en: 'Projects that showcase my development approach' },
  // Contact
  'contact.label': { ru: 'Контакты', en: 'Contact' },
  'contact.title': { ru: 'Давайте работать вместе', en: "Let's work together" },
  'contact.desc': { ru: 'Открыт к новым проектам и сотрудничеству', en: 'Open to new projects and collaboration' },
  'contact.name': { ru: 'Имя', en: 'Name' },
  'contact.name.placeholder': { ru: 'Ваше имя', en: 'Your name' },
  'contact.email': { ru: 'Email', en: 'Email' },
  'contact.message': { ru: 'Сообщение', en: 'Message' },
  'contact.message.placeholder': { ru: 'Расскажите о вашем проекте...', en: 'Tell me about your project...' },
  'contact.send': { ru: 'Отправить', en: 'Send' },
  'contact.location': { ru: 'Локация', en: 'Location' },
  // Experience
  'experience.label': { ru: 'Опыт', en: 'Experience' },
  'experience.title': { ru: 'Мой путь в разработке', en: 'My Development Journey' },
  'experience.desc': { ru: 'От первых строк кода до профессиональных проектов', en: 'From first lines of code to professional projects' },
  // Services
  'services.label': { ru: 'Услуги', en: 'Services' },
  'services.title': { ru: 'Что я предлагаю', en: 'What I Offer' },
  'services.desc': { ru: 'Полный спектр услуг веб-разработки', en: 'Full spectrum of web development services' },
  // Certificates
  'certificates.label': { ru: 'Сертификаты', en: 'Certificates' },
  'certificates.title': { ru: 'Достижения и сертификаты', en: 'Achievements & Certificates' },
  'certificates.desc': { ru: 'Подтверждение моих знаний и навыков', en: 'Proof of my knowledge and skills' },
  // Settings
  'settings.theme': { ru: 'Тема', en: 'Theme' },
  'settings.language': { ru: 'Язык', en: 'Language' },
  'settings.color': { ru: 'Цвет', en: 'Color' },
  'settings.dark': { ru: 'Тёмная', en: 'Dark' },
  'settings.light': { ru: 'Светлая', en: 'Light' },
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() =>
    (localStorage.getItem('theme') as Theme) || 'dark'
  );
  const [language, setLanguageState] = useState<Language>(() =>
    (localStorage.getItem('language') as Language) || 'ru'
  );
  const [accentColor, setAccentColorState] = useState<AccentColor>(() =>
    (localStorage.getItem('accentColor') as AccentColor) || 'blue'
  );

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem('theme', t);
  };

  const setLanguage = (l: Language) => {
    setLanguageState(l);
    localStorage.setItem('language', l);
  };

  const setAccentColor = (c: AccentColor) => {
    setAccentColorState(c);
    localStorage.setItem('accentColor', c);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  // Apply theme class
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  // Apply accent color
  useEffect(() => {
    const root = document.documentElement;
    const accent = accentColors[accentColor];
    root.style.setProperty('--primary', accent.primary);
    root.style.setProperty('--ring', accent.ring);
    root.style.setProperty('--sidebar-primary', accent.primary);
    root.style.setProperty('--sidebar-ring', accent.ring);
    root.style.setProperty('--gradient-primary', accent.gradient);
  }, [accentColor]);

  return (
    <AppContext.Provider value={{ theme, setTheme, language, setLanguage, accentColor, setAccentColor, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
