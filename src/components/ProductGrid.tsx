import { useState } from 'react';
import { products, Product } from '@/lib/products';
import { ProductCard } from './ProductCard';
import { ProductDrawer } from './ProductDrawer';
import { useCart } from '@/context/CartContext';

export function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addItem } = useCart();

  const handleQuickAdd = (product: Product) => {
    // Default to first size for quick add
    addItem(product, product.sizes[1] || product.sizes[0]);
  };

  return (
    <section id="collections" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Collection
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl tracking-wide">
            Timeless Essentials
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-16">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id}
              product={product}
              index={index}
              onQuickAdd={handleQuickAdd}
              onClick={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      {/* Product Detail Drawer */}
      <ProductDrawer 
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
