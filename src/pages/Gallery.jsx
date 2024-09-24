import React from "react";
import {
  gallery_1,
  gallery_2,
  gallery_3,
  gallery_4,
  gallery_5,
  gallery_6,
  gallery_7,
  gallery_8,
  gallery_9,
} from "../assets";

const Gallery = () => {
  return (
    <>
      <div class="flex justify-center items-center" data-aos="zoom-in-up">
        <h1 class="max-w-2xl mb-4 mt-24 text-3xl font-extrabold text-center leading-none md:text-5xl xl:text-5xl">
          <span class="text-primary">TREATMENT </span> SHOWCASE
        </h1>
      </div>
      <p
        class="max-w-lg mx-auto text-center text-gray-600 text-lg md:text-xl mt-2"
        data-aos="zoom-in-up"
      >
        Browse images of our operations and treatments, showcasing our
        commitment to patient care.
      </p>
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-5 mt-[90px] px-20">
        <div className="flex justify-center">
          <img
            className="w-full h-auto object-cover rounded-lg mx-2"
            data-aos="zoom-out-right"
            src={gallery_1}
            alt="Gallery image"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-full h-auto object-cover rounded-lg mx-2"
            data-aos="zoom-out-down"
            data-aos-delay="200"
            src={gallery_2}
            alt="Gallery image"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-full h-auto object-cover rounded-lg mx-2"
            data-aos="zoom-out-left"
            data-aos-delay="400"
            src={gallery_3}
            alt="Gallery image"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-full h-auto object-cover rounded-lg mx-2"
            data-aos="zoom-out-right"
            data-aos-delay="600"
            src={gallery_4}
            alt="Gallery image"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-full h-auto object-cover rounded-lg mx-2"
            data-aos="zoom-out-down"
            data-aos-delay="800"
            src={gallery_5}
            alt="Gallery image"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-full h-auto object-cover rounded-lg mx-2"
            data-aos="zoom-out-left"
            data-aos-delay="1000"
            src={gallery_6}
            alt="Gallery image"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-full h-auto object-cover rounded-lg mx-2"
            data-aos="zoom-out-right"
            data-aos-delay="1200"
            src={gallery_7}
            alt="Gallery image"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-full h-auto object-cover rounded-lg mx-2"
            data-aos="zoom-out-down"
            data-aos-delay="1400"
            src={gallery_8}
            alt="Gallery image"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="w-full h-auto object-cover rounded-lg mx-2"
            data-aos="zoom-out-left"
            data-aos-delay="1600"
            src={gallery_9}
            alt="Gallery image"
          />
        </div>
      </div>

      <br />
      <br />
    </>
  );
};

export default Gallery;
