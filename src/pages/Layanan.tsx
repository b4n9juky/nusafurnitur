import { useInView } from '../hooks';

const layanan = [
  {
    title: 'Pembuatan Mebel',
    desc: 'Mebel custom, mebel rumah tangga, mebel kantor, mebel outdoor.',
    icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
  },
  {
    title: 'Desain Interior',
    desc: 'Desain interior rumah, apartemen, kantor, toko, dan ruang komersial.',
    icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
  },
  {
    title: 'Renovasi Interior',
    desc: 'Renovasi interior sebagian atau keseluruhan ruangan.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  },
  {
    title: 'Konsultasi',
    desc: 'Konsultasi desain interior dan pemilihan mebel.',
    icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
  },
  {
    title: 'Instalasi',
    desc: 'Pemasangan mebel dan interior.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  },
];

export function Layanan() {
  const { ref: headerRef, isInView: headerInView } = useInView(0.2);
  const { ref: gridRef, isInView: gridInView } = useInView(0.1);

  return (
    <div className="pt-20">
      <section className="py-24 md:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={headerRef}
            className={`text-center mb-16 ${headerInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <p className="text-terracotta text-sm font-medium tracking-[0.2em] uppercase mb-3">
              Layanan Kami
            </p>
            <h1 className="text-forest text-4xl md:text-5xl font-bold mb-4">
              Solusi Mebel & Interior Lengkap
            </h1>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              Kami menawarkan berbagai layanan di bidang mebel dan interior untuk memenuhi
              kebutuhan hunian dan ruang komersial Anda.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${gridInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            {layanan.map((item, index) => (
              <div
                key={item.title}
                className="group bg-cream p-8 hover:bg-forest transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-forest group-hover:bg-terracotta flex items-center justify-center mb-6 transition-colors duration-500">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-forest group-hover:text-white text-xl font-bold mb-3 transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-charcoal-light group-hover:text-sand-light text-sm leading-relaxed transition-colors duration-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
