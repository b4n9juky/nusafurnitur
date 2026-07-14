import { useInView } from '../hooks';

const keunggulan = [
  {
    title: 'Kualitas Terbaik',
    desc: 'Kami menggunakan bahan baku berkualitas tinggi dan proses produksi yang cermat untuk menghasilkan produk yang tahan lama dan berkualitas.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
  },
  {
    title: 'Desain Inovatif',
    desc: 'Tim desain kami selalu mengikuti tren terbaru, menciptakan desain unik dan menarik.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
  },
  {
    title: 'Customisasi',
    desc: 'Kami menerima pesanan mebel dan interior custom sesuai kebutuhan dan preferensi pelanggan.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
  },
  {
    title: 'Harga Kompetitif',
    desc: 'Kami tawarkan harga kompetitif tanpa mengorbankan kualitas.',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80',
  },
  {
    title: 'Pelayanan Prima',
    desc: 'Kami memberikan pelayanan yang ramah, responsif, dan profesional kepada setiap pelanggan.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
  },
];

export function Keunggulan() {
  const { ref: headerRef, isInView: headerInView } = useInView(0.2);

  return (
    <div className="pt-20">
      <section className="py-24 md:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={headerRef}
            className={`text-center mb-16 ${headerInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <p className="text-terracotta text-sm font-medium tracking-[0.2em] uppercase mb-3">
              Keunggulan
            </p>
            <h1 className="text-forest text-4xl md:text-5xl font-bold mb-4">
              Mengapa Memilih Nusa Furnitur?
            </h1>
          </div>

          <div className="space-y-12">
            {keunggulan.map((item, index) => (
              <KeunggulanCard
                key={item.title}
                item={item}
                index={index}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function KeunggulanCard({ item, index, reverse }: { item: typeof keunggulan[0]; index: number; reverse: boolean }) {
  const { ref, isInView } = useInView(0.15);

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:text-right' : ''}`}
    >
      <div className={`${isInView ? (reverse ? 'animate-slide-in-right' : 'animate-slide-in-left') : 'opacity-0'} ${reverse ? 'md:order-2' : ''}`}>
        <span className="text-terracotta text-5xl font-display font-bold opacity-30">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="text-forest text-3xl font-bold mt-2 mb-4">{item.title}</h2>
        <p className="text-charcoal-light text-base leading-relaxed">{item.desc}</p>
      </div>
      <div className={`${isInView ? (reverse ? 'animate-slide-in-left' : 'animate-slide-in-right') : 'opacity-0'} ${reverse ? 'md:order-1' : ''}`}>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
