import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Why from "./components/Why";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Faq from "./components/faq"; // Make sure 'Faq' matches your file's case
import News from "./components/News";
import Company from "./components/Company";

import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Set animation duration (optional)
      once: true, // Animation will occur only once when scrolling down (optional)
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Why />
      <Company />
      <Testimonials />
      <Faq />
      <News />
      <Footer />
    </div>
  );
}

export default App;
