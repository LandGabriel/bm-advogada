import { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Professional from './components/Professional';
import Practice from './components/Practice';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Posts from './components/Posts';
import WhatsAppButton from './components/WhatsAppButton';




import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Header />
      <About />
      <Professional />
      <Posts />
      <Practice />
      <Contact />
      <Footer />
      <WhatsAppButton />
      



    </>
  );
}

export default App;
