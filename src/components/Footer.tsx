import { Instagram, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-secondary py-20 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-xl mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Subscribe to receive updates on new arrivals and exclusive offers.
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="btn-hero self-start">
                Subscribe
              </button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:text-center"
          >
            <h3 className="font-serif text-xl mb-4">Follow Us</h3>
            <div className="flex md:justify-center space-x-6">
              <a
                href="https://www.instagram.com/kashishnew/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:text-right"
          >
            <h3 className="font-serif text-xl mb-4">Information</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground underline-animation hover:text-foreground transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground underline-animation hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground underline-animation hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="tel:+13125550199" className="text-sm text-muted-foreground underline-animation hover:text-foreground transition-colors flex items-center gap-2 md:justify-end">
                  <Phone className="w-4 h-4" /> +1 (312) 555-0199
                </a>
              </li>
              <li>
                <a href="https://share.google/hO2DN6vdxXHcm2fki" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground underline-animation hover:text-foreground transition-colors flex items-center gap-2 md:justify-end">
                  <MapPin className="w-4 h-4" /> Get Directions
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="font-serif text-lg tracking-widest">NEW KASHISH</p>
            <p className="text-xs text-muted-foreground">
              © 2026 New Kashish. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
