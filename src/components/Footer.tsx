import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-charcoal text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4">Nusa Furnitur</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              CV. Nusa Furnitur — perusahaan mebel dan interior yang berdedikasi
              menyediakan produk berkualitas tinggi sejak 2024.
            </p>
            <div className="space-y-2 text-white/50 text-sm">
              <p>Jalan Nusantara 7, RT. 33 No. 19</p>
              <p>Kel. Sungai Pinang Dalam, Kec. Sungai Pinang</p>
              <p>Kota Samarinda</p>
              <p className="pt-2">Telp/WA: +62 812 585 0373</p>
              <p>Email: nusafurnitur@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase mb-5 text-white/90">
              Halaman
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Tentang Kami', to: '/tentang-kami' },
                { label: 'Layanan', to: '/layanan' },
                { label: 'Portfolio', to: '/portfolio' },
                { label: 'Tim Kami', to: '/tim-kami' },
                { label: 'Kontak', to: '/kontak' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase mb-5 text-white/90">
              Layanan
            </h4>
            <ul className="space-y-3">
              {[
                'Pembuatan Mebel',
                'Desain Interior',
                'Renovasi Interior',
                'Konsultasi',
                'Instalasi',
              ].map((link) => (
                <li key={link}>
                  <Link
                    to="/layanan"
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.15em] uppercase mb-5 text-white/90">
              Keunggulan
            </h4>
            <ul className="space-y-3">
              {[
                'Kualitas Terbaik',
                'Desain Inovatif',
                'Customisasi',
                'Harga Kompetitif',
                'Pelayanan Prima',
              ].map((link) => (
                <li key={link}>
                  <Link
                    to="/keunggulan"
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} CV. Nusa Furnitur. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/40 text-sm hover:text-white/70 transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
