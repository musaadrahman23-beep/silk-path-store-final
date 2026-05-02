import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { featuredProducts } from '@/lib/products';

export function FeaturedCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const handleSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    handleSelect();
    emblaApi.on('select', handleSelect);
    emblaApi.on('reInit', handleSelect);

    return () => {
      emblaApi.off('select', handleSelect);
      emblaApi.off('reInit', handleSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isPaused) {
      return;
    }

    const interval = window.setInterval(() => emblaApi.scrollNext(), 4700);
    return () => window.clearInterval(interval);
  }, [emblaApi, isPaused]);

  if (!featuredProducts.length) {
    return null;
  }

  const selectedProduct = featuredProducts[selectedIndex] ?? featuredProducts[0];

  return (
    <section className="relative overflow-hidden py-24 lg:py-32" aria-labelledby="featured-collection-title">
      <div className="mx-auto mb-12 max-w-5xl px-6 text-center lg:px-12">
        <motion.p
          className="mb-4 text-sm uppercase tracking-[0.3em] text-gold-light"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Featured Collection
        </motion.p>
        <motion.h2
          id="featured-collection-title"
          className="font-serif text-4xl tracking-[0.06em] text-foreground lg:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          New Arrivals in Focus
        </motion.h2>
      </div>

      <div
        className="embla"
        ref={emblaRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex">
          {featuredProducts.map((product, index) => (
            <div className="min-w-0 flex-[0_0_88%] px-3 sm:flex-[0_0_72%] lg:flex-[0_0_54%]" key={product.id}>
              <motion.article
                className="relative h-[68vh] min-h-[460px] overflow-hidden bg-surface-elevated ring-1 ring-gold-primary/20"
                initial={{ opacity: 0.45, scale: 0.96 }}
                animate={{ opacity: selectedIndex === index ? 1 : 0.52, scale: selectedIndex === index ? 1 : 0.96 }}
                transition={{ duration: 0.45 }}
              >
                <img
                  src={product.image}
                  alt={`${product.name}. ${product.description}`}
                  className="h-full w-full object-contain"
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/60 to-transparent p-6 pt-24">
                  <p className="mb-2 text-[0.68rem] uppercase tracking-[0.24em] text-gold-light">{product.category}</p>
                  <h3 className="font-serif text-2xl tracking-[0.04em] text-foreground lg:text-4xl">{product.name}</h3>
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl items-center justify-between px-6 lg:px-12">
        <p className="text-xs uppercase tracking-[0.24em] text-foreground/60">
          {String(selectedIndex + 1).padStart(2, '0')} / {String(featuredProducts.length).padStart(2, '0')}
          <span className="ml-4 hidden text-gold-light sm:inline">{selectedProduct.name}</span>
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={scrollPrev}
            className="inline-flex h-12 w-12 items-center justify-center border border-gold-primary/40 text-gold-light transition-colors hover:border-gold-primary hover:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-primary"
            aria-label="Previous featured piece"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="inline-flex h-12 w-12 items-center justify-center border border-gold-primary/40 text-gold-light transition-colors hover:border-gold-primary hover:text-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-primary"
            aria-label="Next featured piece"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
