import { useInView } from '../hooks';

export function Kontak() {
  const { ref, isInView } = useInView(0.15);

  return (
    <div className="pt-20">
      <section className="py-24 md:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-terracotta text-sm font-medium tracking-[0.2em] uppercase mb-3">
              Hubungi Kami
            </p>
            <h1 className="text-forest text-4xl md:text-5xl font-bold mb-4">
              Mari Bekerja Sama
            </h1>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              Kami siap mewujudkan furnitur impian Anda. Jangan ragu untuk menghubungi kami.
            </p>
          </div>

          <div ref={ref} className={`grid md:grid-cols-2 gap-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-8">
              {[
                {
                  label: 'Alamat',
                  value: 'Jalan Nusantara 7, RT. 33 No. 19, Kelurahan Sungai Pinang Dalam, Kecamatan Sungai Pinang, Kota Samarinda',
                  icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
                },
                {
                  label: 'Telepon & WhatsApp',
                  value: '+62 812 585 0373 / +62 852 5000 5737',
                  icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                },
                {
                  label: 'Email',
                  value: 'nusafurnitur@gmail.com',
                  icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                },
                {
                  label: 'Jam Operasional',
                  value: 'Senin - Sabtu, 08:00 - 17:00 WITA',
                  icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-5">
                  <div className="w-12 h-12 bg-forest flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-forest font-semibold mb-1">{item.label}</h3>
                    <p className="text-charcoal-light text-sm leading-relaxed">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-cream p-8 md:p-12">
              <h3 className="text-forest text-2xl font-bold mb-6">Kirim Pesan</h3>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">Nama Lengkap</label>
                  <input id="name" type="text" required className="w-full bg-white px-4 py-3 border border-sand focus:outline-none focus:border-forest transition-colors text-charcoal placeholder:text-charcoal-light/50" placeholder="Nama Anda" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">Email</label>
                  <input id="email" type="email" required className="w-full bg-white px-4 py-3 border border-sand focus:outline-none focus:border-forest transition-colors text-charcoal placeholder:text-charcoal-light/50" placeholder="email@anda.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">Pesan</label>
                  <textarea id="message" rows={5} required className="w-full bg-white px-4 py-3 border border-sand focus:outline-none focus:border-forest transition-colors text-charcoal placeholder:text-charcoal-light/50 resize-none" placeholder="Tulis pesan Anda..." />
                </div>
                <button type="submit" className="w-full bg-forest text-white py-4 text-sm font-semibold tracking-wide hover:bg-forest-dark transition-colors duration-300">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="h-[400px] bg-forest relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.6789!2d117.1234!3d-0.5022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzAnMDcuOSJTIDExN8KwMDcnMjQuMCJF!5e0!3m2!1sid!2sid!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(0.5) opacity(0.8)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Nusa Furnitur"
        />
      </div>
    </div>
  );
}
