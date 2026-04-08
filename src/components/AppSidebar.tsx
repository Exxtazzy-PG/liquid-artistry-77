import { Home, User, Zap, FolderKanban, Mail, Briefcase, Shield, Award, Sun, Moon, Languages, Paintbrush } from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import { useLocation } from 'react-router-dom';
import { useApp, type AccentColor } from '@/contexts/AppContext';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
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
      <SidebarContent className="glass-card border-r border-border/50 pt-6 flex flex-col">
        {/* Logo */}
        <div className={`mb-6 flex justify-center ${collapsed ? 'px-0' : 'px-4'}`}>
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <span className="text-primary font-display font-bold text-lg">M</span>
            </div>
            {!collapsed && (
              <span className="font-display font-bold text-foreground text-lg truncate">
                Muhammad
              </span>
            )}
          </NavLink>
        </div>

        {/* Navigation */}
        <SidebarGroup>
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
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                          active
                            ? 'bg-primary/15 text-primary'
                            : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                        }`}
                      >
                        <item.icon className="w-5 h-5 shrink-0" />
                        {!collapsed && <span className="font-medium text-sm">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings section */}
        <div className="mt-auto">
          {!collapsed ? (
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs text-muted-foreground uppercase tracking-wider px-4 mb-2">
                {t('settings.theme')}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="px-3 space-y-3 pb-4">
                  {/* Theme toggle */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setTheme('light')}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium transition-all ${
                        theme === 'light' ? 'bg-primary/15 text-primary' : 'text-muted-foreground hover:bg-secondary/50'
                      }`}
                    >
                      <Sun className="w-3.5 h-3.5" />
                      {t('settings.light')}
                    </button>
                    <button
                      onClick={() => setTheme('dark')}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium transition-all ${
                        theme === 'dark' ? 'bg-primary/15 text-primary' : 'text-muted-foreground hover:bg-secondary/50'
                      }`}
                    >
                      <Moon className="w-3.5 h-3.5" />
                      {t('settings.dark')}
                    </button>
                  </div>

                  {/* Language toggle */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setLanguage('ru')}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium transition-all ${
                        language === 'ru' ? 'bg-primary/15 text-primary' : 'text-muted-foreground hover:bg-secondary/50'
                      }`}
                    >
                      🇷🇺 RU
                    </button>
                    <button
                      onClick={() => setLanguage('en')}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium transition-all ${
                        language === 'en' ? 'bg-primary/15 text-primary' : 'text-muted-foreground hover:bg-secondary/50'
                      }`}
                    >
                      🇺🇸 EN
                    </button>
                  </div>

                  {/* Accent color */}
                  <div>
                    <div className="text-[11px] text-muted-foreground mb-2 flex items-center gap-1">
                      <Paintbrush className="w-3 h-3" />
                      {t('settings.color')}
                    </div>
                    <div className="flex items-center gap-1.5">
                      {accentOptions.map(opt => (
                        <button
                          key={opt.color}
                          onClick={() => setAccentColor(opt.color)}
                          className={`w-6 h-6 rounded-full ${opt.bg} transition-all ${
                            accentColor === opt.color ? 'ring-2 ring-foreground ring-offset-2 ring-offset-background scale-110' : 'hover:scale-110'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          ) : (
            <div className="flex flex-col items-center gap-2 pb-4">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
                title={t('settings.theme')}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all text-xs font-bold"
                title={t('settings.language')}
              >
                {language === 'ru' ? 'EN' : 'RU'}
              </button>
            </div>
          )}

          {/* Copyright */}
          {!collapsed && (
            <div className="p-4 pt-0">
              <div className="rounded-xl bg-secondary/30 p-3 text-center">
                <p className="text-[11px] text-muted-foreground">
                  © {new Date().getFullYear()} Muhammad
                </p>
              </div>
            </div>
          )}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
