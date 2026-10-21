import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Reels from '@/components/Reels';
import PriceList from '@/components/PriceList';
import WhyElan from '@/components/WhyElan';
import Hours from '@/components/Hours';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <PriceList />
        <Gallery />
        <Reels />
        <WhyElan />
        <Hours />
      </main>
      <Footer />
    </div>
  );
}

export default App;
