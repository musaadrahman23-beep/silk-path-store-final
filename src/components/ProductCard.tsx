import type { KeyboardEvent, PointerEvent } from 'react';
import type { Product } from '@/lib/products';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  index: number;
}

export function ProductCard({ product, onClick, index }: ProductCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothRotateX = useSpring(rotateX, { stiffness: 220, damping: 24 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 220, damping: 24 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(y * -8);
    rotateY.set(x * 8);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const openProduct = () => onClick(product);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProduct();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      layout
      exit={{ opacity: 0, y: 20, scale: 0.98 }}
      whileHover={{ y: -8 }}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformPerspective: 1000,
      }}
      className="product-card parallax-card group"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onFocus={resetTilt}
      onClick={openProduct}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${product.name}`}
    >
      <div className="image-reveal cursor-glow relative overflow-hidden bg-surface-elevated">
        <img
          src={product.image}
          alt={`${product.name}. ${product.description}`}
          className="product-card-image"
          loading={index < 6 ? 'eager' : 'lazy'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute bottom-5 left-5 right-5 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex border border-gold-primary/50 bg-background/70 px-4 py-2 text-[0.65rem] uppercase tracking-[0.24em] text-gold-light backdrop-blur-md">
            View Piece
          </span>
        </div>
      </div>

      <div className="pt-5 pb-2">
        <p className="mb-2 text-[0.68rem] uppercase tracking-[0.24em] text-gold-light/80">
          {product.category}
        </p>
        <h3 className="font-serif text-lg tracking-[0.04em] text-foreground lg:text-xl">
          {product.name}
        </h3>
      </div>
    </motion.div>
  );
}
