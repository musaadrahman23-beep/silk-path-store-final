const values = ['Handcrafted', 'Timeless', 'Heritage', 'Luxury', 'Bespoke', 'Artisan'];
const marqueeText = values.join(' / ');

export function BrandMarquee() {
  return (
    <section className="overflow-hidden border-y border-gold-primary/20 bg-surface py-5" aria-label="Brand values">
      <div className="marquee-track whitespace-nowrap">
        {Array.from({ length: 4 }).map((_, index) => (
          <span key={index} className="mx-8 text-xs uppercase tracking-[0.32em] text-gold-light/80 sm:text-sm">
            {marqueeText}
          </span>
        ))}
      </div>
    </section>
  );
}
