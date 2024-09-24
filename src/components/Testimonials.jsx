import React from "react";
import Test_card1 from "./misc/test_card1";
import Test_card2 from "./misc/test_card2";
import Test_card3 from "./misc/test_card3";
import Test_card4 from "./misc/test_card4";

const Testimonials = () => {
  return (
    <div>
      <section class="max-w-5xl mx-auto w-full px-1 dark:bg-gray-800 dark:text-white">
        <div class="flex justify-center items-center" data-aos="zoom-in-down">
          <h1 class="max-w-2xl mb-4 mt-8 text-3xl font-extrabold text-center leading-none md:text-5xl xl:text-5xl">
            <span class="text-primary">PATIENT </span> REVIEWS
          </h1>
        </div>
        <p
          class="max-w-lg mx-auto mb-12 text-center text-gray-600 text-lg md:text-xl mt-2"
          data-aos="zoom-in-down"
        >
          See what our patients have to say about their experience with us.
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
          <div
            data-aos="fade-down-right"
            class="border p-7 rounded-xl bg-white dark:bg-gray-700 drop-shadow-md border-neutral-200/50 col-span-2 flex flex-col gap-y-10 justify-between"
          >
            <Test_card1 />
          </div>
          <div
            data-aos="fade-down-left"
            data-aos-delay="300"
            class="border p-7 rounded-xl bg-white dark:bg-gray-700 drop-shadow-md border-neutral-200/50 col-span-3 flex flex-col gap-y-10 justify-between"
          >
            <Test_card2 />
          </div>
          <div
            data-aos="fade-up-right"
            data-aos-delay="600"
            class="border p-7 rounded-xl bg-white dark:bg-gray-700 drop-shadow-md border-neutral-200/50 col-span-3 flex flex-col gap-y-10 justify-between"
          >
            <Test_card3 />
          </div>
          <div
            data-aos="fade-up-left"
            data-aos-delay="900"
            class="border p-7 rounded-xl bg-white dark:bg-gray-700 drop-shadow-md border-neutral-200/50 col-span-2 flex flex-col gap-y-10 justify-between"
          >
            <Test_card4 />
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default Testimonials;
