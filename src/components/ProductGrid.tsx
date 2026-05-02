import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { products, type Category, type Product } from '@/lib/products';
import { ProductCard } from './ProductCard';
import { ProductLightbox } from './ProductLightbox';
import { CategoryFilter } from './CategoryFilter';

type ActiveCategory = Category | 'All';

export function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>('All');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') {
      return products;
    }
    return products.filter(product => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="collections" className="relative px-6 py-24 lg:px-12 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-dark/70 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center lg:mb-16"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gold-light">
            The Collection
          </p>
          <h2 className="font-serif text-4xl tracking-[0.06em] text-foreground lg:text-6xl">
            Couture Without Compromise
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-7 text-foreground/70 lg:text-base">
            A display-only catalog of bridal lehengas, anarkalis, suits, and sherwanis selected for private viewings and bespoke celebrations.
          </p>
        </motion.div>

        <CategoryFilter
          categories={[]}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <motion.div layout className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onClick={setSelectedProduct}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProductLightbox
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
