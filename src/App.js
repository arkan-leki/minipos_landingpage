import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink-900 font-sans" dir="rtl" lang="ckb">
      <Header />
      <main>
        <Hero />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;
