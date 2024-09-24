import React from "react";
import { dentist_img1 } from "../assets";
import { experience } from "../assets";

const Gallery = () => {
  return (
    <div>
      <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div class="relative mb-12">
              <img
                class="w-full rounded-md shadow-lg"
                data-aos="zoom-out-down"
                data-aos-delay="1600"
                src={experience}
                alt=""
              />
              <div class="absolute w-3/4 max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl left-1/2 -bottom-12">
                <div
                  class="overflow-hidden bg-white rounded shadow-lg"
                  data-aos="zoom-out-down"
                  data-aos-delay="1700"
                >
                  <div class="px-6 py-4 md:px-10">
                    <div class="flex items-center">
                      <p class="flex-shrink-0 text-2xl font-bold text-primary sm:text-3xl md:text-4xl lg:text-4xl">
                        14+
                      </p>
                      <p class="pl-4 text-lg font-bold leading-tight text-black sm:text-xl md:text-2xl lg:text-2xl">
                        Years of Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2
                data-aos="zoom-out"
                class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight"
              >
                A dentist who has proved excellency.
              </h2>
              <p
                data-aos="zoom-out"
                data-aos-delay="600"
                class="mt-6 text-lg leading-relaxed text-gray-600"
              >
                An exceptional dentist known for consistently delivering
                outstanding care and achieving remarkable results through
                expertise and dedication.
              </p>
              <div data-aos="zoom-out" data-aos-delay="1000" className="mt-8">
                <button
                  class="button-primary"
                  onClick={() =>
                    window.open(
                      "https://www.polyhealth.ph/services?63e35809_page=4"
                    )
                  }
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
