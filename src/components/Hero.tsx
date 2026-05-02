import { motion } from 'framer-motion';
import heroVideo from '@/assets/hero-video.mp4';

const tagline = 'Where Tradition Meets Timeless Elegance'.split(' ');

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,4,0.26)_0%,rgba(8,6,4,0.58)_58%,rgba(8,6,4,0.94)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(207,154,63,0.18),transparent_34%)]" />
      </div>

      <div className="pointer-events-none absolute inset-x-6 top-28 hidden justify-between md:flex">
        <motion.span
          className="h-32 w-px bg-gradient-to-b from-transparent via-gold-primary/70 to-transparent"
          animate={{ opacity: [0.25, 0.8, 0.25], y: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="h-32 w-px bg-gradient-to-b from-transparent via-gold-primary/70 to-transparent"
          animate={{ opacity: [0.75, 0.25, 0.75], y: [12, 0, 12] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative flex min-h-screen items-center justify-center px-6 pb-20 pt-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex max-w-5xl flex-col items-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-5 text-xs font-light uppercase tracking-[0.38em] text-gold-light"
          >
            Chicago Bridal Atelier
          </motion.p>
          <h2 className="font-serif text-5xl font-medium leading-tight tracking-[0.08em] text-foreground sm:text-6xl lg:text-8xl">
            NEW KASHISH
          </h2>
          <motion.div
            className="mt-7 flex flex-wrap justify-center gap-x-3 gap-y-2 text-lg font-light text-foreground/90 sm:text-2xl lg:text-3xl"
            aria-label="Where Tradition Meets Timeless Elegance"
          >
            {tagline.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.55 + index * 0.12, duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif italic"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scaleX: 0.3 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="elegant-divider my-10 w-full max-w-md"
          />
          <a
            href="#collections"
            className="btn-hero shimmer-bg"
          >
            Explore Collection
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-light"
      >
        <div className="h-12 w-px animate-pulse bg-gold-primary/60" />
      </motion.div>
    </section>
  );
}
