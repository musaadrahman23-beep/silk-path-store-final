import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Instagram, MessageCircle, X } from 'lucide-react';
import type { Product } from '@/lib/products';

interface ProductLightboxProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const phoneNumber = '17736814871';
const instagramUrl = 'https://www.instagram.com/kashishnew/';

export function ProductLightbox({ product, isOpen, onClose }: ProductLightboxProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!product) {
    return null;
  }

  const inquiryText = encodeURIComponent(`Hello New Kashish, I am interested in ${product.name}. Could you share more details?`);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${inquiryText}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-lightbox-title"
            className="glass-panel relative grid max-h-[92vh] w-full max-w-6xl overflow-hidden md:grid-cols-[1.05fr_0.95fr]"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            onClick={event => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center border border-gold-primary/40 bg-background/70 text-gold-light backdrop-blur-md transition-colors hover:border-gold-primary hover:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-primary"
              onClick={onClose}
              aria-label="Close product details"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative min-h-[42vh] bg-surface md:min-h-[72vh]">
              <img
                src={product.image}
                alt={`${product.name}. ${product.description}`}
                className="h-full max-h-[72vh] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>

            <div className="flex flex-col justify-center overflow-y-auto px-6 py-10 sm:px-10 lg:px-14">
              <p className="mb-5 w-fit border border-gold-primary/40 px-4 py-2 text-[0.66rem] uppercase tracking-[0.24em] text-gold-light">
                {product.category}
              </p>
              <h3 id="product-lightbox-title" className="font-serif text-3xl leading-tight tracking-[0.04em] text-foreground sm:text-4xl lg:text-5xl">
                {product.name}
              </h3>
              <div className="elegant-divider my-8 max-w-xs" />
              <p className="text-base font-light leading-8 text-foreground/70">
                {product.description}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero inline-flex items-center justify-center gap-3"
                >
                  <MessageCircle className="h-4 w-4" />
                  Inquire About This Piece
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border border-foreground/20 px-8 py-4 text-xs uppercase tracking-[0.22em] text-foreground/80 transition-colors hover:border-gold-primary/60 hover:text-gold-light"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
