import { motion } from 'framer-motion';
import type { Category } from '@/lib/products';

type ActiveCategory = Category | 'All';

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: ActiveCategory;
  onChange: (category: ActiveCategory) => void;
}

export function CategoryFilter({ categories, activeCategory, onChange }: CategoryFilterProps) {
  const options: ActiveCategory[] = ['All', ...categories];

  return (
    <div className="mb-12 flex justify-center lg:mb-16">
      <div className="glass-panel flex max-w-full gap-2 overflow-x-auto px-3 py-3" role="tablist" aria-label="Filter collection by category">
        {options.map(category => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(category)}
              className="relative min-w-fit px-5 py-3 text-xs uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-gold-light focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-primary"
            >
              {isActive && (
                <motion.span
                  layoutId="category-filter-active"
                  className="absolute inset-0 bg-gold-primary/10 ring-1 ring-gold-primary/50"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className={`relative ${isActive ? 'text-gold-light' : ''}`}>{category}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
