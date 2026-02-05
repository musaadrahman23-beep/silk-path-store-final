import { motion } from 'framer-motion';
import heroVideo from '@/assets/hero-video.mp4';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#collections"
            className="px-12 py-5 bg-white text-black text-xs tracking-[0.5em] uppercase font-light hover:bg-white/90 transition-all duration-500 shadow-2xl"
          >
            Shop Collection
          </a>
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
