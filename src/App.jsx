import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MapSection from './components/MapSection';
import ModelSection from './components/ModelSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans ">
      <Header />
        <HeroSection />
      <main className='container'>
        <ModelSection />
      </main>
        <Footer />
    </div>
  );
}

export default App;