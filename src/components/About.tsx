import { Link } from 'react-router-dom';
import { useParallax, useInView } from '../hooks';

export function About() {
  const { ref: parallaxRef, offset } = useParallax(0.2);
  const { ref: contentRef, isInView } = useInView(0.15);

  return (
    <section id="about" className="relative">
      <div
        ref={parallaxRef}
        className="parallax-container h-[60vh] md:h-[70vh]"
      >
        <div
          className="parallax-bg"
          style={{ transform: `translateY(${offset}px)` }}
        >
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1920&q=80"
            alt="Nusa Furnitur"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-forest-dark/60" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <p className="text-sand text-sm font-medium tracking-[0.25em] uppercase mb-3">
                Tentang Kami
              </p>
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                CV. Nusa Furnitur
                <br />
                <span className="text-sand-light">Mebel & Interior</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-warm-white py-24 md:py-32">
        <div
          ref={contentRef}
          className="max-w-7xl mx-auto px-6 lg:px-8"
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <p className="text-terracotta text-sm font-medium tracking-[0.2em] uppercase mb-3">
                Profil Perusahaan
              </p>
              <h3 className="text-forest text-3xl md:text-4xl font-bold mb-6">
                Berdedikasi Tinggi & Bertanggung Jawab
              </h3>
              <p className="text-charcoal-light text-base leading-relaxed mb-6">
                CV. Nusa Furnitur adalah perusahaan yang bergerak di bidang mebel dan interior.
                Berdiri pada 15 Oktober 2024, kami memiliki sederet pengalaman dengan dedikasi
                tinggi serta tanggung jawab menyediakan produk dan layanan berkualitas tinggi.
              </p>
              <p className="text-charcoal-light text-base leading-relaxed mb-8">
                Kami senantiasa berkomitmen untuk memenuhi kebutuhan dan harapan pelanggan,
                menjaga kepercayaan yang telah diberikan kepada kami.
              </p>
              <Link
                to="/tentang-kami"
                className="inline-block border-2 border-forest text-forest px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-forest hover:text-white transition-all duration-300"
              >
                Selengkapnya
              </Link>
            </div>

            <div
              className={`relative ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}
            >
              <div className="aspect-[4/5] bg-cream overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
                  alt="Handcrafted furniture detail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-forest text-white p-8 max-w-[240px]">
                <p className="text-sand-light text-xs tracking-[0.2em] uppercase mb-2">
                  Legalitas
                </p>
                <p className="text-white text-sm leading-relaxed">
                  Akta Notaris No. 10<br />
                  SK Menkumham Terdaftar<br />
                  NIB & NPWP Aktif
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
