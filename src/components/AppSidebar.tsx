import { Home, User, Zap, FolderKanban, Mail } from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import { useLocation } from 'react-router-dom';
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

const navItems = [
  { title: 'Главная', url: '/', icon: Home },
  { title: 'Обо мне', url: '/about', icon: User },
  { title: 'Навыки', url: '/skills', icon: Zap },
  { title: 'Проекты', url: '/projects', icon: FolderKanban },
  { title: 'Контакты', url: '/contact', icon: Mail },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarContent className="glass-card border-r border-border/50 pt-6">
        {/* Logo */}
        <div className="px-4 mb-8">
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
                        {!collapsed && <span className="font-medium">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Bottom section */}
        {!collapsed && (
          <div className="mt-auto p-4">
            <div className="rounded-xl bg-secondary/30 p-4 text-center">
              <p className="text-xs text-muted-foreground leading-relaxed">
                © {new Date().getFullYear()} Muhammad
              </p>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
