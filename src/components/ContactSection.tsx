import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, MapPin, Phone } from 'lucide-react';

const phoneHref = 'tel:+17736814871';
const mapsHref = 'https://share.google/hO2DN6vdxXHcm2fki';
const instagramHref = 'https://www.instagram.com/kashishnew/';
const facebookHref = 'https://www.facebook.com/p/New-Kashish-100093604520837/';

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 lg:px-12 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(207,154,63,0.1),transparent_38%,rgba(94,32,26,0.2))]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel p-8 sm:p-10 lg:p-14"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold-light">Visit Our Atelier</p>
          <h2 className="font-serif text-4xl leading-tight tracking-[0.05em] text-foreground lg:text-6xl">
            Visit our Chicago atelier.
          </h2>
          <p className="mt-6 max-w-2xl text-base font-light leading-8 text-foreground/70">
            Connect with our team for collection details, availability, and directions.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-3 border border-foreground/20 px-8 py-4 text-xs uppercase tracking-[0.22em] text-foreground/80 transition-colors hover:border-gold-primary/60 hover:text-gold-light"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-4"
        >
          <ContactCard
            icon={<Phone className="h-5 w-5" />}
            label="Phone"
            value="+1 (773) 681-4871"
            href={phoneHref}
          />
          <ContactCard
            icon={<Instagram className="h-5 w-5" />}
            label="Instagram"
            value="@kashishnew"
            href={instagramHref}
          />
          <ContactCard
            icon={<Facebook className="h-5 w-5" />}
            label="Facebook"
            value="New Kashish"
            href={facebookHref}
          />
          <ContactCard
            icon={<MapPin className="h-5 w-5" />}
            label="Location"
            value="Chicago, IL"
            href={mapsHref}
          />
        </motion.div>
      </div>
    </section>
  );
}

interface ContactCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}

function ContactCard({ icon, label, value, href }: ContactCardProps) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="glass-panel group flex items-center gap-5 p-6 transition-colors hover:border-gold-primary/60"
    >
      <span className="text-gold-light transition-colors group-hover:text-gold-primary">{icon}</span>
      <span>
        <span className="block text-[0.66rem] uppercase tracking-[0.22em] text-foreground/50">{label}</span>
        <span className="mt-1 block text-base text-foreground">{value}</span>
      </span>
    </a>
  );
}
