import React from "react";
import { raul } from "../assets/";
import { dr_img } from "../assets/";
import Socials from "./Socials";

const Profile = () => {
  return (
    <div className="container mx-auto flex pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden">
      <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full md:w-1/2 lg:pr-12 mt-16 sm:mt-2 mx-auto">
          <h4
            data-aos="fade-right"
            className="text-xl lg:text-2xl mb-4 text-center md:text-left text-primary leading-tight font-bold"
          >
            Meet your doctor!
          </h4>

          <h1
            data-aos="fade-right"
            data-aos-delay="1300"
            class="mb-4 mt-6 text-3xl font-extrabold leading-none text-center md:text-left md:text-5xl xl:text-5xl"
          >
            <span class="text-primary"> DR. </span> RAUL ARGANZA
          </h1>

          <h3
            data-aos="fade-right"
            data-aos-delay="1300"
            className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-500"
          >
            Compassionate dentist focused on quality care, specializing in
            preventive, restorative, and cosmetic dentistry to enhance smiles.
          </h3>
          <div
            data-aos="zoom-in"
            data-aos-delay="2300"
            className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start"
          >
            <Socials />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="1700"
          className="w-full md:w-1/2 lg:w-[500px] flex justify-center mt-6  mx-auto md:mt-0"
        >
          <img
            src={dr_img}
            className="md:w-full rounded-3xl shadow-2xl"
            alt="Doctor"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
