import lehenga1 from '@/assets/lehenga-1.jpg';
import lehenga2 from '@/assets/lehenga-2.jpg';
import lehenga4 from '@/assets/lehenga-4.jpg';
import lehenga5 from '@/assets/lehenga-5.jpg';
import lehenga6 from '@/assets/lehenga-6.jpg';
import lehenga7 from '@/assets/lehenga-7.jpg';
import lehenga8 from '@/assets/lehenga-8.jpg';
import pic1 from '@/assets/pic-1.jpg';
import pic2 from '@/assets/pic-2.jpg';
import pic3 from '@/assets/pic-3.jpg';
import pic4 from '@/assets/pic-4.jpg';
import pic5 from '@/assets/pic-5.jpg';
import pic6 from '@/assets/pic-6.jpg';
import pic7 from '@/assets/pic-7.jpg';

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
    name: 'Royal Crimson Bridal Lehenga',
    price: 1800,
    image: lehenga1,
    category: 'Bridal',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Exquisite red bridal lehenga with intricate gold zardozi embroidery. Features premium velvet fabric with delicate stonework throughout.'
  },
  {
    id: '2',
    name: 'Ivory Elegance Anarkali',
    price: 1550,
    image: lehenga2,
    category: 'Anarkali',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Stunning ivory anarkali suit with champagne gold embroidery. Perfect for nikah or engagement ceremonies.'
  },
  {
    id: '3',
    name: 'Maroon Embroidered Suit',
    price: 1500,
    image: lehenga4,
    category: 'Suits',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Beautiful maroon suit with subtle gold motifs. Features a matching dupatta with intricate border work.'
  },
  {
    id: '4',
    name: 'Mint Blossom Bridal Lehenga',
    price: 1750,
    image: lehenga5,
    category: 'Bridal',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Breathtaking mint green bridal lehenga with pearl and crystal embellishments. A modern take on traditional elegance.'
  },
  {
    id: '5',
    name: 'Mauve Dream Anarkali',
    price: 1520,
    image: lehenga6,
    category: 'Anarkali',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Sophisticated mauve anarkali with delicate floral embroidery. Features flowing silhouette perfect for festive occasions.'
  },
  {
    id: '6',
    name: 'Golden Hour Bridal Set',
    price: 1780,
    image: lehenga7,
    category: 'Bridal',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Luxurious gold and cream bridal ensemble with heavy threadwork and mirror embellishments. A timeless piece for your special day.'
  },
  {
    id: '7',
    name: 'Silver Mist Bridal Lehenga',
    price: 1720,
    image: lehenga8,
    category: 'Bridal',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Ethereal silver-grey bridal lehenga with intricate floral embroidery. Features delicate sequin work and matching veil.'
  },
  {
    id: '8',
    name: 'Midnight Velvet Sherwani',
    price: 1200,
    image: pic1,
    category: 'Menswear',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A regal midnight black velvet sherwani with intricate gold peacock embroidery on the chest. Perfect for a grand reception.'
  },
  {
    id: '9',
    name: 'Golden Bloom Sherwani',
    price: 1100,
    image: pic2,
    category: 'Menswear',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Exquisitely textured gold sherwani with subtle self-embroidery and elegant buttons. A classic choice for the modern groom.'
  },
  {
    id: '10',
    name: 'Champagne Zardozi Lehenga',
    price: 2100,
    image: pic3,
    category: 'Bridal',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Stunning champagne gold lehenga with heavy zardozi work and a sheer cape-style dupatta. Pure luxury defined.'
  },
  {
    id: '11',
    name: 'Seafoam Pearl Bridal Suit',
    price: 1950,
    image: pic4,
    category: 'Bridal',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Graceful seafoam green bridal ensemble with pearl and bead embellishments. Features a traditional silhouette with modern flair.'
  },
  {
    id: '12',
    name: 'Desert Rose Bridal Gown',
    price: 2200,
    image: pic5,
    category: 'Bridal',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'A majestic sand-colored bridal gown with intricate floor-length embroidery. This masterpiece radiates timeless elegance.'
  },
  {
    id: '13',
    name: 'Regal Maroon Velvet Lehenga',
    price: 2400,
    image: pic6,
    category: 'Bridal',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Exquisite deep maroon velvet lehenga with heavy antique gold embroidery. A truly majestic piece for the traditional bride.'
  },
  {
    id: '14',
    name: 'Lavender Blossom Bridal Suite',
    price: 2150,
    image: pic7,
    category: 'Bridal',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Enchanting lavender bridal ensemble with delicate net overlay and floral threadwork. Perfectly balances grace and glamour.'
  }
];
