import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Tentang Kami', href: '/tentang-kami' },
    { label: 'Layanan', href: '/layanan' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Tim Kami', href: '/tim-kami' },
    { label: 'Kontak', href: '/kontak' },
  ];

  const textColor = scrolled || !isHome ? 'text-forest' : 'text-white';
  const textColorLink = scrolled || !isHome ? 'text-charcoal' : 'text-white/90';
  const bgClass = scrolled || !isHome
    ? 'bg-warm-white/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className={`font-display text-2xl font-bold tracking-tight transition-colors duration-300 ${textColor}`}
          >
            Nusa Furnitur
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70 ${textColorLink}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/kontak"
              className="bg-terracotta text-white px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-terracotta-dark transition-colors duration-300"
            >
              Konsultasi Gratis
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled || !isHome ? 'bg-charcoal' : 'bg-white'
                } ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled || !isHome ? 'bg-charcoal' : 'bg-white'
                } ${mobileOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled || !isHome ? 'bg-charcoal' : 'bg-white'
                } ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="bg-warm-white/98 backdrop-blur-md px-6 py-6 space-y-4 border-t border-cream-dark">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="block text-charcoal text-base font-medium"
          >
            Beranda
          </Link>
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-charcoal text-base font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/kontak"
            onClick={() => setMobileOpen(false)}
            className="inline-block bg-terracotta text-white px-6 py-2.5 text-sm font-medium"
          >
            Konsultasi Gratis
          </Link>
        </div>
      </div>
    </nav>
  );
}
