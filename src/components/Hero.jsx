import React, { useEffect, useState } from "react";
import { hero_pic } from "../assets";

const Hero = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1041);

  // This effect will monitor window resizing and set the state accordingly
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1041);
    };

    // Attach the event listener to handle resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <section className="bg-white h-[100vh] items-center mt-20 sm:mt-14 justify-center">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 sm:mt-4 lg:grid-cols-12">
          <div
            className="mr-auto place-self-center lg:col-span-7"
            data-aos="fade-up-right"
            {...(isLargeScreen && { "data-aos-delay": "2500" })}
          >
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              <span className="text-primary">PULP</span> DENTAL CLINIC
            </h1>
            <p className="max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              At Pulp Dental Clinic, we prioritize your well-being with
              safety-first practices, delivering quality services through
              advanced technology and compassionate care to transform your
              smile.
            </p>

            <div className="center">
              <button
                className="button-primary"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/",
                    "_blank",
                    "noopener noreferrer"
                  )
                }
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex place-self-center">
            {/* Conditionally add/remove the animate-image-move class */}
            <img
              src={hero_pic}
              alt="mockup"
              className={
                isLargeScreen
                  ? "animate-image-move animate-float  "
                  : "animate-float"
              }
              data-aos={isLargeScreen ? "" : "zoom-in"}
              data-aos-delay={isLargeScreen ? "" : "1000"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
