import React from "react";
import Navbar from "../components/Navbar";
import Profile from "./Profile";
import Build from "./Build";
import Gallery from "./Gallery";
import Footer from "../components/Footer";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Set animation duration (optional)
      once: true, // Animation will occur only once when scrolling down (optional)
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Profile />
      <Build />
      <Gallery />
      <Footer />
    </div>
  );
};

export default About;
