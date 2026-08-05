import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import WhatsappButton from './components/WhatsappButton/WhatsappButton.jsx';
import Hero from './sections/Hero/Hero.jsx';
import WhyChooseUs from './sections/WhyChooseUs/WhyChooseUs.jsx';
import Packages from './sections/Packages/Packages.jsx';
import TaxiServices from './sections/TaxiServices/TaxiServices.jsx';
import Gallery from './sections/Gallery/Gallery.jsx';
import Reviews from './sections/Reviews/Reviews.jsx';
import Contact from './sections/Contact/Contact.jsx';

export default function App() {
  return (
    <div id="home">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Packages />
        <TaxiServices />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
