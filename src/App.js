import './App.css';
import { Cards } from './Components/Cards';
import { Company } from './Components/Company';
import { Contact } from './Components/Contact';
import { Content } from './Components/Content';
import { Feature } from './Components/Feature';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { Pricing } from './Components/Pricing';
import { Quote } from './Components/Quote';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Company />
      <Cards />
      <Pricing />
      <Quote />
      <Content />
      <Feature />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
