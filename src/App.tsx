import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { About } from './components/About';
import { Categories } from './components/Categories';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { TentangKami } from './pages/TentangKami';
import { VisiMisi } from './pages/VisiMisi';
import { Layanan } from './pages/Layanan';
import { TimKami } from './pages/TimKami';
import { Keunggulan } from './pages/Keunggulan';
import { Kontak } from './pages/Kontak';
import { Portfolio } from './pages/Portfolio';

function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <About />
      <Categories />
      <Testimonials />
      <Newsletter />
    </main>
  );
}

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/visi-misi" element={<VisiMisi />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/tim-kami" element={<TimKami />} />
        <Route path="/keunggulan" element={<Keunggulan />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
