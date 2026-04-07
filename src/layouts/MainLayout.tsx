import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Menu } from 'lucide-react';

const Scene3D = lazy(() => import('../components/Scene3D'));

export default function MainLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background relative overflow-hidden">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>

        <AppSidebar />

        <div className="flex-1 flex flex-col min-h-screen relative z-10">
          <header className="h-14 flex items-center px-4 md:px-6">
            <SidebarTrigger className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:bg-secondary/50 transition-colors">
              <Menu className="w-5 h-5 text-foreground" />
            </SidebarTrigger>
          </header>

          <main className="flex-1 overflow-y-auto scrollbar-hide">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
