import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Scene3D = lazy(() => import('../components/Scene3D'));

export default function MainLayout() {
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background relative overflow-hidden">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>

        <AppSidebar />

        <div className="flex-1 flex flex-col min-h-screen relative z-10">
          <header className="h-12 flex items-center px-4 md:px-6 shrink-0">
            <SidebarTrigger className="w-9 h-9 rounded-xl glass-card flex items-center justify-center hover:bg-secondary/50 transition-colors">
              <Menu className="w-4 h-4 text-foreground" />
            </SidebarTrigger>
          </header>

          <main className="flex-1 overflow-y-auto scrollbar-hide">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
