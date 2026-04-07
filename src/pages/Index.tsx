import { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Scene3D = lazy(() => import('../components/Scene3D'));

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden scrollbar-hide">
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
