import { Home, User, Zap, FolderKanban, Mail, Briefcase, Shield, Award, Settings, Sun, Moon, Paintbrush, Languages, ChevronRight } from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import { useLocation } from 'react-router-dom';
import { useApp, type AccentColor } from '@/contexts/AppContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

const accentOptions: { color: AccentColor; bg: string }[] = [
  { color: 'blue', bg: 'bg-blue-500' },
  { color: 'purple', bg: 'bg-purple-500' },
  { color: 'green', bg: 'bg-green-500' },
  { color: 'orange', bg: 'bg-orange-500' },
  { color: 'pink', bg: 'bg-pink-500' },
  { color: 'red', bg: 'bg-red-500' },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();
  const { theme, setTheme, language, setLanguage, accentColor, setAccentColor, t } = useApp();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const navItems = [
    { title: t('nav.home'), url: '/', icon: Home },
    { title: t('nav.about'), url: '/about', icon: User },
    { title: t('nav.skills'), url: '/skills', icon: Zap },
    { title: t('nav.experience'), url: '/experience', icon: Briefcase },
    { title: t('nav.projects'), url: '/projects', icon: FolderKanban },
    { title: t('nav.services'), url: '/services', icon: Shield },
    { title: t('nav.certificates'), url: '/certificates', icon: Award },
    { title: t('nav.contact'), url: '/contact', icon: Mail },
  ];

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarContent className="glass-card border-r border-border/50 flex flex-col py-4">
        {/* Logo */}
        <div className={`mb-4 flex justify-center ${collapsed ? 'px-0' : 'px-3'}`}>
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <span className="text-primary font-display font-bold text-base">M</span>
            </div>
            {!collapsed && (
              <span className="font-display font-bold text-foreground text-base truncate">
                Muhammad
              </span>
            )}
          </NavLink>
        </div>

        {/* Navigation */}
        <SidebarGroup className="flex-1">
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const active = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton asChild isActive={active}>
                      <NavLink
                        to={item.url}
                        end
                        className={`flex items-center gap-2.5 px-2.5 py-2 rounded-xl transition-all duration-200 text-[13px] ${
                          active
                            ? 'bg-primary/15 text-primary'
                            : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                        }`}
                      >
                        <item.icon className="w-[18px] h-[18px] shrink-0" />
                        {!collapsed && <span className="font-medium">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings button */}
        <div className="mt-auto px-2 pb-2 relative">
          <button
            onClick={() => setSettingsOpen(!settingsOpen)}
            className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-[13px] font-medium transition-all duration-200 ${
              settingsOpen
                ? 'bg-primary/15 text-primary'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
            }`}
          >
            <Settings className={`w-[18px] h-[18px] shrink-0 transition-transform duration-300 ${settingsOpen ? 'rotate-90' : ''}`} />
            {!collapsed && (
              <>
                <span>{t('settings.theme')}</span>
                <ChevronRight className={`w-3.5 h-3.5 ml-auto transition-transform duration-200 ${settingsOpen ? 'rotate-90' : ''}`} />
              </>
            )}
          </button>

          {/* Settings panel */}
          <AnimatePresence>
            {settingsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`${collapsed ? 'absolute left-full bottom-0 ml-2 w-52' : 'mt-2 w-full'} glass-card rounded-xl p-3 space-y-3 z-50`}
              >
                {/* Theme */}
                <div>
                  <div className="text-[11px] text-muted-foreground mb-1.5 flex items-center gap-1">
                    {theme === 'dark' ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
                    {t('settings.theme')}
                  </div>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setTheme('light')}
                      className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                        theme === 'light' ? 'bg-primary/15 text-primary' : 'text-muted-foreground hover:bg-secondary/50'
                      }`}
                    >
                      <Sun className="w-3 h-3" /> {t('settings.light')}
                    </button>
                    <button
                      onClick={() => setTheme('dark')}
                      className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                        theme === 'dark' ? 'bg-primary/15 text-primary' : 'text-muted-foreground hover:bg-secondary/50'
                      }`}
                    >
                      <Moon className="w-3 h-3" /> {t('settings.dark')}
                    </button>
                  </div>
                </div>

                {/* Language */}
                <div>
                  <div className="text-[11px] text-muted-foreground mb-1.5 flex items-center gap-1">
                    <Languages className="w-3 h-3" />
                    {t('settings.language')}
                  </div>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setLanguage('ru')}
                      className={`flex-1 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                        language === 'ru' ? 'bg-primary/15 text-primary' : 'text-muted-foreground hover:bg-secondary/50'
                      }`}
                    >
                      🇷🇺 RU
                    </button>
                    <button
                      onClick={() => setLanguage('en')}
                      className={`flex-1 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                        language === 'en' ? 'bg-primary/15 text-primary' : 'text-muted-foreground hover:bg-secondary/50'
                      }`}
                    >
                      🇺🇸 EN
                    </button>
                  </div>
                </div>

                {/* Accent color */}
                <div>
                  <div className="text-[11px] text-muted-foreground mb-1.5 flex items-center gap-1">
                    <Paintbrush className="w-3 h-3" />
                    {t('settings.color')}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {accentOptions.map(opt => (
                      <button
                        key={opt.color}
                        onClick={() => setAccentColor(opt.color)}
                        className={`w-5 h-5 rounded-full ${opt.bg} transition-all ${
                          accentColor === opt.color ? 'ring-2 ring-foreground ring-offset-1 ring-offset-background scale-110' : 'hover:scale-110'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
