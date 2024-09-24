import React from "react";
import WhyCard from "./misc/why_card1";
import WhyCard2 from "./misc/why_card2";
import WhyCard3 from "./misc/why_card3";
import WhyCard4 from "./misc/why_card4";
import WhyCard5 from "./misc/why_card5";
import WhyCard6 from "./misc/why_card6";

const Why = () => {
  return (
    <div class=" px-2 py-10">
      <div id="features" class="mx-auto max-w-6xl">
        <div class="flex justify-center items-center">
          <h1
            data-aos="fade-up"
            class="max-w-2xl mb-4 mt-8 text-3xl font-extrabold text-center leading-none md:text-5xl xl:text-5xl"
          >
            <span class="text-primary">WHY </span> CHOOSE US?
          </h1>
        </div>
        <p
          data-aos="fade-up"
          class="max-w-lg mx-auto text-center text-gray-600 text-lg md:text-xl mt-2"
        >
          Expert care, modern technology, and a commitment to your smile.
        </p>
        <ul class="mt-16 grid grid-cols-1 text-center gap-6 text-slate-700 md:grid-cols-3 justify-items-center">
          <WhyCard />
          <WhyCard2 />
          <WhyCard3 />
          <WhyCard4 />
          <WhyCard5 />
          <WhyCard6 />
        </ul>
      </div>
    </div>
  );
};

export default Why;
