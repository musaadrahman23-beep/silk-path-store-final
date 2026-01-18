import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  sizes: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Cashmere Crew Sweater',
    price: 890,
    image: product1,
    category: 'Knitwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Luxuriously soft cashmere sweater crafted in Italy. Features a relaxed fit with ribbed trim details.'
  },
  {
    id: '2',
    name: 'Wool Tailored Trousers',
    price: 650,
    image: product2,
    category: 'Trousers',
    sizes: ['36', '38', '40', '42', '44'],
    description: 'Impeccably tailored trousers in pure virgin wool. High-rise silhouette with pleated front.'
  },
  {
    id: '3',
    name: 'Oversized Linen Shirt',
    price: 420,
    image: product3,
    category: 'Shirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Effortlessly elegant oversized shirt in premium Belgian linen. Perfect for layering.'
  },
  {
    id: '4',
    name: 'Cashmere V-Neck Cardigan',
    price: 1120,
    image: product4,
    category: 'Knitwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Classic V-neck cardigan in double-ply cashmere. Features mother-of-pearl buttons.'
  },
  {
    id: '5',
    name: 'Leather Tote Bag',
    price: 1890,
    image: product5,
    category: 'Accessories',
    sizes: ['One Size'],
    description: 'Structured tote in hand-finished Italian leather. Features suede lining and brass hardware.'
  },
  {
    id: '6',
    name: 'Silk Relaxed Blouse',
    price: 580,
    image: product6,
    category: 'Tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Flowing silk blouse with concealed button placket. Crafted from mulberry silk.'
  }
];
