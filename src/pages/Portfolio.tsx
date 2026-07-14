import { useState } from 'react';
import { useInView } from '../hooks';

const projects = [
  {
    id: 1,
    title: 'Dipan Set Laci',
    client: 'Ibu Mika',
    location: 'Loa Bakung, Samarinda',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
  },
  {
    id: 2,
    title: 'Dipan Set Laci',
    client: 'Bpk Yusak',
    location: 'Pampang, Samarinda',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
  },
  {
    id: 3,
    title: 'Lemari & Dipan Set',
    client: 'Bpk Yusak',
    location: 'Pampang, Samarinda',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1597006335770-25b6a72c8830?w=800&q=80',
  },
  {
    id: 4,
    title: 'Lemari Set & Partisi',
    client: 'Ibu Mika',
    location: 'Loa Bakung, Samarinda',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
  },
  {
    id: 5,
    title: 'Lemari Anak',
    client: 'Bpk Yusak',
    location: 'Pampang, Samarinda',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1597006335770-25b6a72c8830?w=800&q=80',
  },
  {
    id: 6,
    title: 'Mini Bar & Kitchen Set Resto',
    client: 'Rosty Cafe & Resto',
    location: 'Jalan Juanda, Samarinda',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    id: 7,
    title: 'Set Room',
    client: 'Bpk Arif',
    location: 'Jl Proklamasi, Samarinda',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
  },
  {
    id: 8,
    title: 'Set Room',
    client: 'Ibu Ida',
    location: 'Perum M Said, Samarinda',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
  },
  {
    id: 9,
    title: 'Set Room KPU',
    client: 'KPU Prov Kaltim',
    location: 'Jl Basuki Rahmat, Samarinda',
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    id: 10,
    title: 'Kitchen Set',
    client: 'Bpk Sumarlin',
    location: 'Perum Bengkuring, Samarinda',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    id: 11,
    title: 'Kitchen Set',
    client: 'Bpk M Fahreza',
    location: 'Air Putih, Samarinda',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    id: 12,
    title: 'Meja BRILink & Mimbar Masjid',
    client: 'Ibu Asmawati & Masjid Al Ikhlas',
    location: 'Muara Badak & AWS Samarinda',
    category: 'Custom',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
  },
];

const categories = ['Semua', 'Bedroom', 'Living Room', 'Kitchen', 'Commercial', 'Residential', 'Office', 'Custom'];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const { ref: headerRef, isInView: headerInView } = useInView(0.2);
  const { ref: gridRef, isInView: gridInView } = useInView(0.1);

  const filtered = activeCategory === 'Semua'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-20">
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80"
            alt="Portfolio Nusa Furnitur"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-forest-dark/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full text-center">
          <p className="text-sand text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Portfolio
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            Koleksi & Proyek Kami
          </h1>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={headerRef}
            className={`text-center mb-12 ${headerInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <p className="text-terracotta text-sm font-medium tracking-[0.2em] uppercase mb-3">
              Hasil Karya
            </p>
            <h2 className="text-forest text-4xl md:text-5xl font-bold mb-4">
              Proyek yang Telah Dikerjakan
            </h2>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              Berbagai proyek mebel dan interior yang telah kami selesaikan untuk
              pelanggan di Samarinda dan sekitarnya.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-forest text-white'
                    : 'bg-cream text-charcoal hover:bg-sand/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div
            ref={gridRef}
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${gridInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            {filtered.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden bg-cream aspect-[4/3] cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-sand text-xs tracking-[0.15em] uppercase mb-1">{project.category}</p>
                  <h3 className="text-white text-lg font-bold">{project.title}</h3>
                  <p className="text-sand-light text-sm mt-1">{project.client} — {project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
