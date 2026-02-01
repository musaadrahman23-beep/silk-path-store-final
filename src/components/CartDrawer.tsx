import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export function CartDrawer() {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    removeItem, 
    updateQuantity, 
    subtotal 
  } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="drawer-overlay"
            onClick={() => setIsCartOpen(false)}
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
                <span className="text-sm tracking-widest uppercase">Shopping Bag</span>
                <button 
                  onClick={() => setIsCartOpen(false)} 
                  className="p-2 -mr-2 hover:opacity-60 transition-opacity"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6">
                    <ShoppingBag className="w-12 h-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground mb-2">Your bag is empty</p>
                    <p className="text-sm text-muted-foreground">
                      Explore our collection and find something you love.
                    </p>
                  </div>
                ) : (
                  <div className="divide-y divide-border">
                    {items.map(item => (
                      <div 
                        key={`${item.product.id}-${item.size}`}
                        className="p-6 flex gap-4"
                      >
                        {/* Image */}
                        <div className="w-24 aspect-[3/4] bg-secondary flex-shrink-0">
                          <img 
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 flex flex-col">
                          <div className="flex-1">
                            <h4 className="font-serif text-base mb-1">
                              {item.product.name}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-1">
                              Size: {item.size}
                            </p>
                            <p className="text-sm">
                              {formatPrice(item.product.price)}
                            </p>
                          </div>

                          {/* Quantity & Remove */}
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-3">
                              <button 
                                className="qty-btn w-8 h-8"
                                onClick={() => updateQuantity(
                                  item.product.id, 
                                  item.size, 
                                  item.quantity - 1
                                )}
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-8 text-center text-sm">{item.quantity}</span>
                              <button 
                                className="qty-btn w-8 h-8"
                                onClick={() => updateQuantity(
                                  item.product.id, 
                                  item.size, 
                                  item.quantity + 1
                                )}
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <button 
                              className="text-sm text-muted-foreground underline-animation"
                              onClick={() => removeItem(item.product.id, item.size)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t border-border space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm tracking-widest uppercase">Subtotal</span>
                    <span className="font-serif text-lg">{formatPrice(subtotal)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <button className="w-full btn-hero">
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
