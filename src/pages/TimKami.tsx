import { useInView } from '../hooks';

const tim = [
  {
    nama: 'Aura Salsabila N',
    jabatan: 'Komisaris',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    nama: 'Najib, S.T.',
    jabatan: 'Direktur',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    nama: 'M Asikin Pariwusi',
    jabatan: 'Manajer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    nama: 'Shabrina Dwi Putri Nadin',
    jabatan: 'Admin Media Sosial',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
];

export function TimKami() {
  const { ref: headerRef, isInView: headerInView } = useInView(0.2);
  const { ref: gridRef, isInView: gridInView } = useInView(0.1);

  return (
    <div className="pt-20">
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Tim Nusa Furnitur"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-forest-dark/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full text-center">
          <p className="text-sand text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Tim Kami
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            Orang-orang di Balik Nusa Furnitur
          </h1>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-warm-white">
        <div
          ref={headerRef}
          className={`max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16 ${headerInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <p className="text-terracotta text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Struktur Perusahaan
          </p>
          <h2 className="text-forest text-4xl md:text-5xl font-bold mb-4">
            Kepemimpinan Kami
          </h2>
          <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
            Berdedikasi tinggi dalam menyediakan produk dan layanan berkualitas
            untuk memenuhi kebutuhan dan harapan pelanggan.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`max-w-5xl mx-auto px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 ${gridInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          {tim.map((anggota, index) => (
            <div
              key={anggota.nama}
              className="group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden bg-cream aspect-square mb-5">
                <img
                  src={anggota.image}
                  alt={anggota.nama}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <h3 className="text-forest text-lg font-bold">{anggota.nama}</h3>
              <p className="text-terracotta text-sm font-medium mt-1">{anggota.jabatan}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
