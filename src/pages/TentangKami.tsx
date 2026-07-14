import { useInView } from '../hooks';

const keunggulan = [
  { title: 'Kualitas Terbaik', desc: 'Kami menggunakan bahan baku berkualitas tinggi dan proses produksi yang cermat untuk menghasilkan produk yang tahan lama dan berkualitas.' },
  { title: 'Desain Inovatif', desc: 'Tim desain kami selalu mengikuti tren terbaru, menciptakan desain unik dan menarik.' },
  { title: 'Customisasi', desc: 'Kami menerima pesanan mebel dan interior custom sesuai kebutuhan dan preferensi pelanggan.' },
  { title: 'Harga Kompetitif', desc: 'Kami tawarkan harga kompetitif tanpa mengorbankan kualitas.' },
  { title: 'Pelayanan Prima', desc: 'Kami memberikan pelayanan yang ramah, responsif, dan profesional kepada setiap pelanggan.' },
];

export function TentangKami() {
  const { ref, isInView } = useInView(0.15);

  return (
    <div className="pt-20">
      <section className="py-24 md:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-terracotta text-sm font-medium tracking-[0.2em] uppercase mb-3">
                Tentang Nusa Furnitur
              </p>
              <h1 className="text-forest text-4xl md:text-5xl font-bold mb-6">
                Mebel & Interior Berkualitas
              </h1>
              <p className="text-charcoal-light text-base leading-relaxed mb-6">
                CV. Nusa Furnitur adalah perusahaan yang bergerak di bidang mebel dan interior.
                Berdiri pada 15 Oktober 2024. Kami memiliki sederet pengalaman dengan dedikasi
                tinggi serta tanggung jawab menyediakan produk dan layanan berkualitas tinggi
                untuk memenuhi kebutuhan dan harapan dalam menjaga kepercayaan pelanggan.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-4 border-t border-sand/30">
                <div>
                  <p className="text-terracotta text-3xl font-display font-bold">2024</p>
                  <p className="text-charcoal-light text-sm mt-1">Berdiri</p>
                </div>
                <div>
                  <p className="text-terracotta text-3xl font-display font-bold">Mebel</p>
                  <p className="text-charcoal-light text-sm mt-1">& Interior</p>
                </div>
                <div>
                  <p className="text-terracotta text-3xl font-display font-bold">100%</p>
                  <p className="text-charcoal-light text-sm mt-1">Kepuasan</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-cream overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80"
                  alt="Nusa Furnitur"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-forest text-white p-8 max-w-[240px]">
                <p className="text-sand-light text-xs tracking-[0.2em] uppercase mb-2">
                  Legalitas
                </p>
                <p className="text-white text-sm leading-relaxed">
                  Akta Notaris No. 10, 15 Oktober 2024<br />
                  SK Menkumham: AHU-0083889-AH.01.14<br />
                  NIB: 2910240274504
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="py-24 md:py-32 bg-cream">
        <div className={`max-w-7xl mx-auto px-6 lg:px-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <p className="text-terracotta text-sm font-medium tracking-[0.2em] uppercase mb-3">
              Keunggulan
            </p>
            <h2 className="text-forest text-4xl md:text-5xl font-bold mb-4">
              Mengapa Memilih Kami?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keunggulan.map((item, index) => (
              <div
                key={item.title}
                className="bg-warm-white p-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-forest/10 flex items-center justify-center mb-5">
                  <span className="text-forest font-display font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-forest text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
