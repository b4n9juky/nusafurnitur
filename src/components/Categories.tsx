import { Link } from 'react-router-dom';
import { useInView } from '../hooks';

const categories = [
  {
    name: 'Mebel Rumah Tangga',
    description: 'Dipan, lemari, meja, kursi, dan perlengkapan rumah',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    count: 48,
  },
  {
    name: 'Mebel Kantor',
    description: 'Meja kerja, kursi kantor, lembar arsip, partisi ruang',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    count: 32,
  },
  {
    name: 'Mebel Outdoor',
    description: 'Set taman, kursi teras, meja outdoor, gazebo',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80',
    count: 18,
  },
  {
    name: 'Interior Custom',
    description: 'Desain interior, renovasi ruangan, kitchen set, partisi',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
    count: 28,
  },
];

export function Categories() {
  const { ref: headerRef, isInView: headerInView } = useInView(0.2);
  const { ref: gridRef, isInView: gridInView } = useInView(0.1);

  return (
    <section id="categories" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 ${
            headerInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <p className="text-terracotta text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Kategori Produk
          </p>
          <h2 className="text-forest text-4xl md:text-5xl font-bold mb-4">
            Yang Kami Kerjakan
          </h2>
          <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
            Berbagai jenis mebel dan interior custom sesuai kebutuhan Anda.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
            gridInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {categories.map((cat, index) => (
            <Link
              key={cat.name}
              to="/portfolio"
              className="group relative overflow-hidden bg-forest aspect-[16/9] flex items-end"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
              <div className="relative z-10 p-8 w-full bg-gradient-to-t from-forest-dark/90 via-forest-dark/40 to-transparent">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-white text-2xl font-display font-bold mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-sand-light text-sm">{cat.description}</p>
                  </div>
                  <span className="text-sand text-sm font-medium">
                    {cat.count} item
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
