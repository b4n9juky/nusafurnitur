import { Link } from 'react-router-dom';
import { useParallax, useInView } from '../hooks';

export function Hero() {
  const { ref: parallaxRef, offset } = useParallax(0.3);
  const { ref: contentRef, isInView } = useInView(0.1);

  return (
    <section
      ref={parallaxRef}
      className="parallax-container relative h-screen min-h-[700px] flex items-center"
    >
      <div
        className="parallax-bg"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80"
          alt="Nusa Furnitur"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-forest/50 to-transparent" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full"
      >
        <div className="max-w-2xl">
          <p
            className={`text-sand-light text-sm font-medium tracking-[0.25em] uppercase mb-4 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            CV. Nusa Furnitur
          </p>
          <h1
            className={`text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 ${
              isInView ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'
            }`}
          >
            Mebel & Interior
            <br />
            <span className="text-sand-light">Berkualitas Tinggi</span>
          </h1>
          <p
            className={`text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-lg ${
              isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'
            }`}
          >
            Menyediakan produk dan layanan mebel interior berkualitas tinggi,
            siap memenuhi kebutuhan hunian dan ruang komersial Anda.
          </p>
          <div
            className={`flex flex-wrap gap-4 ${
              isInView ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'
            }`}
          >
            <Link
              to="/portfolio"
              className="bg-white text-forest px-8 py-4 text-sm font-semibold tracking-wide hover:bg-cream transition-colors duration-300"
            >
              Lihat Portfolio
            </Link>
            <Link
              to="/tentang-kami"
              className="border border-white/40 text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-white/10 transition-colors duration-300"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#collections" aria-label="Scroll to collections">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
