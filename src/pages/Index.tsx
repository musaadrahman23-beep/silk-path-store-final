import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { BrandMarquee } from '@/components/BrandMarquee';
import { FeaturedCarousel } from '@/components/FeaturedCarousel';
import { AboutSection } from '@/components/AboutSection';
import { ProductGrid } from '@/components/ProductGrid';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <BrandMarquee />
        <FeaturedCarousel />
        <AboutSection />
        <ProductGrid />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
