import './App.scss';
import Hero from './components/Hero-Section/Hero';
import About from './components/About-Section/About';
import Services from './components/Services-Section/Services';
import Tech from './components/Tech-Section/Tech';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Services />
      <Tech />
    </div>
  );
}

export default App;
