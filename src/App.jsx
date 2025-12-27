import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ChatSupport from './components/ChatSupport';
import BMICalculator from './components/BMICalculator';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <Navbar />
      <main className="pt-20">
        <HeroBanner />
      </main>
      <Services />
      <Pricing />
      <Reviews />
      <Blog />
      <Footer />
      <ChatSupport />
      <BMICalculator />
    </div>
  );
}

export default App;
