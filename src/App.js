import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Why from "./components/Why";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Faq from "./components/faq";
import News from "./components/News";
import Company from "./components/Company";
import Cookie from "./components/Cookie";

import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

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
      <Cookie />
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
