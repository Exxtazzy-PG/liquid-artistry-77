import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)] px-6">
      <div className="relative text-center max-w-4xl mx-auto">
        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-15 blur-[100px] pointer-events-none"
          style={{ background: 'hsl(var(--primary))' }} />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full opacity-10 blur-[80px] pointer-events-none"
          style={{ background: 'hsl(var(--accent))' }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Разработчик · 16 лет · Узбекистан</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
        >
          <span className="text-foreground">Привет, я </span>
          <br />
          <span className="text-gradient-primary">Мухаммад</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Создаю современные веб-приложения с 13 лет.
          Превращаю идеи в элегантный код и красивые интерфейсы.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/projects"
            className="px-8 py-3.5 rounded-2xl font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 glow-primary inline-flex items-center gap-2"
            style={{ background: 'var(--gradient-primary)' }}
          >
            Мои проекты
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-2xl font-semibold glass-card-hover text-foreground"
          >
            Связаться
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
