import { Product } from '@/lib/products';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  onQuickAdd: (product: Product) => void;
  onClick: (product: Product) => void;
  index: number;
}

export function ProductCard({ product, onQuickAdd, onClick, index }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
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
      className="product-card"
      onClick={() => onClick(product)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-secondary">
        <img 
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />
        <div className="product-card-overlay">
          <button 
            className="quick-add-btn"
            onClick={(e) => {
              e.stopPropagation();
              onQuickAdd(product);
            }}
          >
            Quick Add
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="pt-5 pb-2">
        <h3 className="font-serif text-base lg:text-lg tracking-wide mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground tracking-wide">
          {formatPrice(product.price)}
        </p>
      </div>
    </motion.div>
  );
}
