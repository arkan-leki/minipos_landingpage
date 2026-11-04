// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-indigo-600" dir='rtl'>
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
