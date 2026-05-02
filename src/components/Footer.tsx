import { Facebook, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080604] px-6 py-20 lg:px-12 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-primary to-transparent" />
      <div className="absolute right-0 top-0 h-72 w-72 bg-[radial-gradient(circle,rgba(207,154,63,0.11),transparent_64%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4 font-serif text-2xl tracking-[0.08em] text-foreground">NEW KASHISH</h3>
            <p className="mb-6 max-w-md text-sm font-light leading-7 text-foreground/60">
              A Chicago luxury atelier for South Asian bridal, formalwear, and menswear collections.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-5 font-serif text-xl text-foreground">Connect</h3>
            <div className="flex space-x-5">
              <a href="https://www.instagram.com/kashishnew/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 transition-colors hover:text-gold-light" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/p/New-Kashish-100093604520837/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 transition-colors hover:text-gold-light" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://wa.me/17736814871" target="_blank" rel="noopener noreferrer" className="text-foreground/70 transition-colors hover:text-gold-light" aria-label="WhatsApp">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>

            <ul className="mt-7 space-y-3 text-sm font-light text-foreground/60">
              <li>
                <a href="tel:+17736814871" className="inline-flex items-center gap-2 transition-colors hover:text-gold-light">
                  <Phone className="h-4 w-4" /> +1 (773) 681-4871
                </a>
              </li>
              <li>
                <a href="https://share.google/hO2DN6vdxXHcm2fki" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-gold-light">
                  <MapPin className="h-4 w-4" /> Chicago, IL
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-5 font-serif text-xl text-foreground">Atelier</h3>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <a href="#" className="text-foreground/60 underline-animation transition-colors hover:text-gold-light">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#collections" className="text-foreground/60 underline-animation transition-colors hover:text-gold-light">
                  Collections
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 border-t border-gold-primary/20 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="font-serif text-lg tracking-[0.22em] text-gold-light">NEW KASHISH</p>
            <p className="text-xs text-foreground/50">(c) 2026 New Kashish. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
