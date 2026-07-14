import { Link } from 'react-router-dom';
import { useInView } from '../hooks';

const products = [
  {
    id: 1,
    name: 'Dipan Set Laci',
    category: 'Tempat Tidur',
    price: 'Rp 3.500.000',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80',
  },
  {
    id: 2,
    name: 'Lemari 3 Pintu',
    category: 'Penyimpanan',
    price: 'Rp 5.200.000',
    image: 'https://images.unsplash.com/photo-1597006335770-25b6a72c8830?w=600&q=80',
  },
  {
    id: 3,
    name: 'Kitchen Set Minimalis',
    category: 'Dapur',
    price: 'Rp 8.500.000',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  },
  {
    id: 4,
    name: 'Partisi Ruang Tamu',
    category: 'Living Room',
    price: 'Rp 2.800.000',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
  },
];

export function FeaturedProducts() {
  const { ref: headerRef, isInView: headerInView } = useInView(0.2);
  const { ref: gridRef, isInView: gridInView } = useInView(0.1);

  return (
    <section id="collections" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 ${
            headerInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <p className="text-terracotta text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Koleksi Kami
          </p>
          <h2 className="text-forest text-4xl md:text-5xl font-bold mb-4">
            Produk Unggulan
          </h2>
          <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
            Mebel custom berkualitas tinggi dengan desain menarik dan fungsional
            untuk kebutuhan rumah, kantor, dan ruang komersial Anda.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${
            gridInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {products.map((product, index) => (
            <article
              key={product.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <Link
                    to="/portfolio"
                    className="block w-full bg-white text-forest py-3 text-sm font-semibold text-center hover:bg-cream transition-colors"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
              <p className="text-charcoal-light text-xs tracking-[0.15em] uppercase mb-1">
                {product.category}
              </p>
              <h3 className="text-charcoal text-lg font-display font-semibold">
                {product.name}
              </h3>
              <p className="text-terracotta font-medium mt-1">{product.price}</p>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/portfolio"
            className="inline-block border-2 border-forest text-forest px-10 py-3.5 text-sm font-semibold tracking-wide hover:bg-forest hover:text-white transition-all duration-300"
          >
            Lihat Semua Produk
          </Link>
        </div>
      </div>
    </section>
  );
}
