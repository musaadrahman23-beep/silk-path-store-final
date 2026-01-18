import { motion } from 'framer-motion';
import heroCampaign from '@/assets/hero-campaign.jpg';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroCampaign}
          alt="Spring Summer 2025 Campaign"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/10" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-end pb-24 lg:pb-32 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm tracking-[0.3em] uppercase mb-4 text-foreground/80"
          >
            Spring Summer 2025
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-serif text-4xl lg:text-6xl tracking-wide mb-8"
          >
            Quiet Elegance
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <a href="#collections" className="btn-hero inline-block">
              Shop the Collection
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-foreground/30 animate-pulse" />
      </motion.div>
    </section>
  );
}
