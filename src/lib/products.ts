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
import pic8 from '@/assets/pic-8.jpg';
import pic9 from '@/assets/pic-9.jpg';
import pic10 from '@/assets/pic-10.jpg';
import pic11 from '@/assets/pic-11.jpg';
import pic12 from '@/assets/pic-12.jpg';
import pic13 from '@/assets/pic-13.jpg';
import pic14 from '@/assets/pic-14.jpg';
import pic15 from '@/assets/pic-15.jpg';
import pic16 from '@/assets/pic-16.jpg';
import pic17 from '@/assets/pic-17.jpg';
import maroonBridalSuit from '@/assets/maroon-bridal-suit.png';
import ivoryAnarkaliGold from '@/assets/ivory-anarkali-gold.png';
import iceBlueBridalGown from '@/assets/ice-blue-bridal-gown.png';
import sageGreenLehenga from '@/assets/sage-green-lehenga.png';
import goldenBridalLehenga from '@/assets/golden-bridal-lehenga.png';
import silverGreyLehenga from '@/assets/silver-grey-lehenga.png';
import mauveLehengaSet from '@/assets/mauve-lehenga-set.png';
import ivorySherwani from '@/assets/ivory-sherwani.png';
import crimsonBridalLehenga from '@/assets/crimson-bridal-lehenga.png';

export type Category = 'Bridal' | 'Anarkali' | 'Menswear' | 'Suits';

export interface Product {
  id: string;
  name: string;
  image: string;
  category: Category;
  description: string;
  featured: boolean;
}

export const categories: Category[] = ['Bridal', 'Anarkali', 'Menswear', 'Suits'];

export const products: Product[] = [
  {
    id: 'new-1',
    name: 'Crimson Royale Bridal Suit',
    image: maroonBridalSuit,
    category: 'Bridal',
    description: 'Resplendent maroon silk suit adorned with gold zardozi diamond motifs, paired with an exquisitely embroidered dupatta and pleated gharara.',
    featured: true,
  },
  {
    id: 'new-2',
    name: 'Ivory Empress Anarkali',
    image: ivoryAnarkaliGold,
    category: 'Anarkali',
    description: 'A regal champagne anarkali enveloped in dense gold tilla embroidery, creating a mesmerizing cascade of traditional artistry.',
    featured: true,
  },
  {
    id: 'new-3',
    name: 'Frost & Silver Bridal Gown',
    image: iceBlueBridalGown,
    category: 'Bridal',
    description: 'Ethereal ice-blue bridal gown with intricate silver-white arabesque threadwork, featuring a dramatic high collar and flowing cape dupatta.',
    featured: true,
  },
  {
    id: 'new-4',
    name: 'Sage Blossom Lehenga',
    image: sageGreenLehenga,
    category: 'Bridal',
    description: 'Enchanting sage green bridal lehenga with cascading gold and rose floral embroidery, complemented by a structured jacket blouse.',
    featured: true,
  },
  {
    id: 'new-5',
    name: 'Golden Dynasty Lehenga',
    image: goldenBridalLehenga,
    category: 'Bridal',
    description: 'Opulent gold net lehenga with layers of meticulous threadwork, creating an unforgettable silhouette of bridal grandeur.',
    featured: true,
  },
  {
    id: 'new-6',
    name: 'Silver Moonlight Lehenga',
    image: silverGreyLehenga,
    category: 'Bridal',
    description: 'Captivating silver-grey lehenga illuminated with dense sequin and thread embroidery, paired with a regal matching cape.',
    featured: true,
  },
  {
    id: 'new-7',
    name: 'Mauve Reverie Lehenga',
    image: mauveLehengaSet,
    category: 'Bridal',
    description: 'Dreamy dusty mauve lehenga choli adorned with gold floral zardozi work and a gossamer sheer dupatta.',
    featured: true,
  },
  {
    id: 'new-8',
    name: 'Imperial Ivory Sherwani',
    image: ivorySherwani,
    category: 'Menswear',
    description: 'Classic ivory sherwani with refined self-jacquard pattern, accentuated by ornate gold buttons and a silk pocket square.',
    featured: true,
  },
  {
    id: 'new-9',
    name: 'Crimson Heritage Lehenga',
    image: crimsonBridalLehenga,
    category: 'Bridal',
    description: 'Majestic deep crimson bridal lehenga with wall-to-wall gold tilla embroidery - a masterpiece of traditional craftsmanship.',
    featured: true,
  },
  {
    id: '1',
    name: 'Royal Crimson Bridal Lehenga',
    image: lehenga1,
    category: 'Bridal',
    description: 'Exquisite red bridal lehenga with intricate gold zardozi embroidery. Features premium velvet fabric with delicate stonework throughout.',
    featured: false,
  },
  {
    id: '2',
    name: 'Ivory Elegance Anarkali',
    image: lehenga2,
    category: 'Anarkali',
    description: 'Stunning ivory anarkali suit with champagne gold embroidery. Perfect for nikah or engagement ceremonies.',
    featured: false,
  },
  {
    id: '3',
    name: 'Maroon Embroidered Suit',
    image: lehenga4,
    category: 'Suits',
    description: 'Beautiful maroon suit with subtle gold motifs. Features a matching dupatta with intricate border work.',
    featured: false,
  },
  {
    id: '4',
    name: 'Mint Blossom Bridal Lehenga',
    image: lehenga5,
    category: 'Bridal',
    description: 'Breathtaking mint green bridal lehenga with pearl and crystal embellishments. A modern take on traditional elegance.',
    featured: false,
  },
  {
    id: '5',
    name: 'Mauve Dream Anarkali',
    image: lehenga6,
    category: 'Anarkali',
    description: 'Sophisticated mauve anarkali with delicate floral embroidery. Features flowing silhouette perfect for festive occasions.',
    featured: false,
  },
  {
    id: '6',
    name: 'Golden Hour Bridal Set',
    image: lehenga7,
    category: 'Bridal',
    description: 'Luxurious gold and cream bridal ensemble with heavy threadwork and mirror embellishments. A timeless piece for your special day.',
    featured: false,
  },
  {
    id: '7',
    name: 'Silver Mist Bridal Lehenga',
    image: lehenga8,
    category: 'Bridal',
    description: 'Ethereal silver-grey bridal lehenga with intricate floral embroidery. Features delicate sequin work and matching veil.',
    featured: false,
  },
  {
    id: '8',
    name: 'Midnight Velvet Sherwani',
    image: pic1,
    category: 'Menswear',
    description: 'A regal midnight black velvet sherwani with intricate gold peacock embroidery on the chest. Perfect for a grand reception.',
    featured: false,
  },
  {
    id: '9',
    name: 'Golden Bloom Sherwani',
    image: pic2,
    category: 'Menswear',
    description: 'Exquisitely textured gold sherwani with subtle self-embroidery and elegant buttons. A classic choice for the modern groom.',
    featured: false,
  },
  {
    id: '10',
    name: 'Champagne Zardozi Lehenga',
    image: pic3,
    category: 'Bridal',
    description: 'Stunning champagne gold lehenga with heavy zardozi work and a sheer cape-style dupatta. Pure luxury defined.',
    featured: false,
  },
  {
    id: '11',
    name: 'Seafoam Pearl Bridal Suit',
    image: pic4,
    category: 'Bridal',
    description: 'Graceful seafoam green bridal ensemble with pearl and bead embellishments. Features a traditional silhouette with modern flair.',
    featured: false,
  },
  {
    id: '12',
    name: 'Desert Rose Bridal Gown',
    image: pic5,
    category: 'Bridal',
    description: 'A majestic sand-colored bridal gown with intricate floor-length embroidery. This masterpiece radiates timeless elegance.',
    featured: false,
  },
  {
    id: '13',
    name: 'Regal Maroon Velvet Lehenga',
    image: pic6,
    category: 'Bridal',
    description: 'Exquisite deep maroon velvet lehenga with heavy antique gold embroidery. A truly majestic piece for the traditional bride.',
    featured: false,
  },
  {
    id: '14',
    name: 'Lavender Blossom Bridal Suite',
    image: pic7,
    category: 'Bridal',
    description: 'Enchanting lavender bridal ensemble with delicate net overlay and floral threadwork. Perfectly balances grace and glamour.',
    featured: false,
  },
  {
    id: '15',
    name: 'Ivory Damask Sherwani',
    image: pic8,
    category: 'Menswear',
    description: 'Elegant ivory sherwani with a tonal damask pattern and pearl-encrusted buttons. A sophisticated choice for morning ceremonies.',
    featured: false,
  },
  {
    id: '16',
    name: 'Midnight Brocade Sherwani',
    image: pic9,
    category: 'Menswear',
    description: 'Stunning black brocade sherwani with intricate self-on-self patterns and a jewel-toned pocket square detail.',
    featured: false,
  },
  {
    id: '17',
    name: 'Lilac Lattice Sherwani',
    image: pic10,
    category: 'Menswear',
    description: 'Contemporary lilac sherwani featuring a delicate lattice texture and silver accents. Perfect for a modern reception look.',
    featured: false,
  },
  {
    id: '18',
    name: 'Silver Filigree Sherwani',
    image: pic11,
    category: 'Menswear',
    description: 'Luxurious light grey sherwani with heavy silver filigree embroidery. Exudes royal charm and timeless elegance.',
    featured: false,
  },
  {
    id: '19',
    name: 'Teal Geometric Sherwani',
    image: pic12,
    category: 'Menswear',
    description: 'Striking teal blue sherwani with a bold geometric weave and antique gold finish buttons. For the groom who wants to stand out.',
    featured: false,
  },
  {
    id: '20',
    name: 'Navy Stellar Sherwani',
    image: pic13,
    category: 'Menswear',
    description: 'Deep navy velvet sherwani with a constellation of delicate sequins and a pearl-trimmed pocket detail.',
    featured: false,
  },
  {
    id: '21',
    name: 'Burgundy Spark Sherwani',
    image: pic14,
    category: 'Menswear',
    description: 'Rich burgundy sherwani with a geometric lattice pattern and subtle shimmer, perfect for an evening reception.',
    featured: false,
  },
  {
    id: '22',
    name: 'Golden Regal Sherwani',
    image: pic15,
    category: 'Menswear',
    description: 'Opulent gold sherwani with intricate vertical embroidery and a hand-crafted mandarin collar.',
    featured: false,
  },
  {
    id: '23',
    name: 'Champagne Classic Sherwani',
    image: pic16,
    category: 'Menswear',
    description: 'Timeless champagne gold sherwani with ivory accents and a traditional silhouette that radiates heritage.',
    featured: false,
  },
  {
    id: '24',
    name: 'Amber Floral Sherwani',
    image: pic17,
    category: 'Menswear',
    description: 'Warm amber-gold sherwani with detailed floral zardozi motifs and premium silk finish.',
    featured: false,
  },
];

export const featuredProducts = products.filter(product => product.featured);
