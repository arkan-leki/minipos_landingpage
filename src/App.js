// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

function App() {
  return (
    <div className="h-screen bg-indigo-600 " dir='rtl'>
      <Header/>
      <Hero/>
    </div>
  );
}

export default App;
