import { useInView } from '../hooks';

export function VisiMisi() {
  const { ref, isInView } = useInView(0.15);

  return (
    <div className="pt-20">
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80"
            alt="Visi Misi Nusa Furnitur"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-forest-dark/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full text-center">
          <p className="text-sand text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Arahan Kami
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
            Visi & Misi
          </h1>
        </div>
      </section>

      <section ref={ref} className="py-24 md:py-32 bg-warm-white">
        <div className={`max-w-5xl mx-auto px-6 lg:px-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="mb-20">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-terracotta flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-forest text-3xl md:text-4xl font-bold mb-4">Visi</h2>
                <p className="text-charcoal-light text-lg leading-relaxed italic border-l-4 border-terracotta pl-6">
                  "Menjadi perusahaan mebel dan interior terkemuka, inovatif, berkualitas,
                  dan berorientasi pada kepuasan pelanggan."
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start gap-6 mb-10">
              <div className="w-16 h-16 bg-forest flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h2 className="text-forest text-3xl md:text-4xl font-bold mb-8">Misi</h2>
              </div>
            </div>

            <div className="space-y-6">
              {[
                'Menyediakan produk mebel dan interior custom berkualitas tinggi dengan desain menarik dan fungsional.',
                'Memberikan layanan profesional dan responsif kepada pelanggan.',
                'Membangun hubungan jangka panjang dengan pelanggan dengan prinsip kepercayaan dan kepuasan.',
                'Mengembangkan sumber daya manusia yang kompeten dan berdedikasi.',
                'Berkontribusi pada pembangunan lingkungan berkelanjutan.',
              ].map((misi, index) => (
                <div key={index} className="flex gap-4 items-start bg-cream p-6">
                  <span className="w-8 h-8 bg-terracotta text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-charcoal-light text-base leading-relaxed pt-1">{misi}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
