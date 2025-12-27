import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <Navbar />
      <main className="pt-20">
        <HeroBanner />
      </main>
    </div>
  );
}

export default App;
