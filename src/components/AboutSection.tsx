import { motion } from 'framer-motion';
import goldenBridalLehenga from '@/assets/golden-bridal-lehenga.png';

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-surface px-6 py-24 lg:px-12 lg:py-32">
      <div className="absolute inset-y-0 left-0 hidden w-1/3 bg-[linear-gradient(90deg,rgba(207,154,63,0.12),transparent)] lg:block" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute -left-5 -top-5 h-28 w-28 border-l border-t border-gold-primary/50" />
          <div className="absolute -bottom-5 -right-5 h-28 w-28 border-b border-r border-gold-primary/50" />
          <div className="relative overflow-hidden bg-background p-4 ring-1 ring-gold-primary/20">
            <img
              src={goldenBridalLehenga}
              alt="Gold champagne bridal lehenga with layered embroidery at New Kashish"
              className="h-[620px] w-full object-contain"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold-light">About the Atelier</p>
          <h2 className="font-serif text-4xl leading-tight tracking-[0.05em] text-foreground lg:text-6xl">
            Heirloom dressing for modern celebrations.
          </h2>
          <div className="elegant-divider my-8 max-w-sm" />
          <div className="space-y-6 text-base font-light leading-8 text-foreground/70">
            <p>
              NEW KASHISH curates South Asian bridal and formalwear for clients who want every detail to feel intentional, personal, and enduring.
            </p>
            <p>
              From gold tilla and zardozi to pearl, sequin, and thread embroidery, each piece is selected for its hand-finished craft and its ability to hold the room with quiet grandeur.
            </p>
            <p>
              The Chicago atelier is display-only by design. Browse the collection, choose the pieces that speak to your occasion, then connect with us for a private viewing.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-y border-gold-primary/20 py-6">
            {[
              ['Bridal', 'Lehengas'],
              ['Formal', 'Anarkalis'],
              ['Groom', 'Sherwanis'],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="font-serif text-2xl text-gold-light">{label}</p>
                <p className="mt-1 text-[0.66rem] uppercase tracking-[0.2em] text-foreground/50">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
