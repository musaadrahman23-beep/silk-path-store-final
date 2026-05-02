import { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'nav-solid' : 'nav-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <button
              className="lg:hidden p-2 -ml-2 text-foreground transition-colors hover:text-gold-light"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="hidden lg:flex items-center space-x-12">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a href="#top" className="absolute left-1/2 -translate-x-1/2" aria-label="New Kashish home">
              <h1 className="font-serif text-xl lg:text-2xl tracking-[0.24em] text-foreground">
                NEW KASHISH
              </h1>
            </a>

            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold-light transition-colors hover:text-gold-primary"
            >
              <MapPin className="h-4 w-4" />
              Visit
            </a>

            <a
              href="#contact"
              className="lg:hidden text-xs uppercase tracking-[0.2em] text-gold-light"
            >
              Visit
            </a>
          </div>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-gold-primary to-transparent"
          initial={false}
          animate={{ opacity: isScrolled ? 1 : 0, scaleX: isScrolled ? 1 : 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        />
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-background z-50 border-r border-gold-primary/20 lg:hidden"
            >
              <div className="p-6">
                <button
                  className="p-2 -ml-2 mb-8 text-foreground transition-colors hover:text-gold-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="space-y-6">
                  {navLinks.map(link => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block nav-link text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
