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

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

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
