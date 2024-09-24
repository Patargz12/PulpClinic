import React from "react";
import Navbar from "../components/Navbar";
import ContactUs from "./General";
import Footer from "../components/Footer";
import Careers from "../Contact/Careers";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Set animation duration (optional)
      once: true, // Animation will occur only once when scrolling down (optional)
    });
  }, []);
  return (
    <div>
      <Navbar />
      <ContactUs />
      <Careers />
      <Footer />
    </div>
  );
};

export default Services;
