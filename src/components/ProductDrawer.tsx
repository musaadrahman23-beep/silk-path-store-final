import { useState, useEffect } from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductDrawerProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDrawer({ product, isOpen, onClose }: ProductDrawerProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[1] || product.sizes[0]);
      setQuantity(1);
    }
  }, [product]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToBag = () => {
    if (product && selectedSize) {
      for (let i = 0; i < quantity; i++) {
        addItem(product, selectedSize);
      }
      onClose();
    }
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="drawer-overlay"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="drawer-content"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="text-sm tracking-widest uppercase">Product Details</span>
                <button onClick={onClose} className="p-2 -mr-2 hover:opacity-60 transition-opacity">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Image */}
                <div className="aspect-[3/4] bg-secondary">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="p-6 space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground tracking-wide mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-serif text-2xl tracking-wide mb-2">
                      {product.name}
                    </h3>
                    <p className="text-lg">
                      {formatPrice(product.price)}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  {/* Size Selector */}
                  <div>
                    <p className="text-sm tracking-widest uppercase mb-4">Size</p>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map(size => (
                        <button
                          key={size}
                          className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity Selector */}
                  <div>
                    <p className="text-sm tracking-widest uppercase mb-4">Quantity</p>
                    <div className="flex items-center gap-4">
                      <button 
                        className="qty-btn"
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center">{quantity}</span>
                      <button 
                        className="qty-btn"
                        onClick={() => setQuantity(q => q + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border">
                <button 
                  className="w-full btn-hero"
                  onClick={handleAddToBag}
                >
                  Add to Bag — {formatPrice(product.price * quantity)}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
