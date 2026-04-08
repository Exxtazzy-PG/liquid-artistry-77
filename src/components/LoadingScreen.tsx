import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'reveal'>('loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase('reveal');
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'reveal' ? null : undefined}
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
      >
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-10"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="w-24 h-24 rounded-3xl border-2 border-transparent absolute -inset-2"
            style={{
              borderImage: 'var(--gradient-primary) 1',
              borderRadius: '1.5rem',
              opacity: 0.3,
            }}
          />
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center glass-card relative overflow-hidden">
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{ background: 'var(--gradient-primary)' }}
              animate={{ opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-3xl font-bold text-gradient-primary font-display relative z-10">M</span>
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="w-48 h-1 rounded-full bg-secondary overflow-hidden mb-4">
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'var(--gradient-primary)', width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-muted-foreground font-medium tracking-wide"
        >
          {progress < 30 ? 'Initializing...' : progress < 60 ? 'Loading assets...' : progress < 90 ? 'Almost ready...' : 'Welcome'}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
