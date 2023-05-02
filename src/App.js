import './App.scss';
import Hero from './components/Hero-Section/Hero';
import About from './components/About-Section/About';
import Services from './components/Services-Section/Services';
import Tech from './components/Tech-Section/Tech';
import Process from './components/Process-Section/Process';
import Form from './components/Form-Section/Form';
import Footer from './components/Footer-Section/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Services />
      <Tech />
      <Process />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
