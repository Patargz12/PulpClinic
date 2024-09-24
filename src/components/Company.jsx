import {
  Comp_Cocolife,
  Comp_Eastwest,
  Comp_Intellicare,
  Comp_Maxicare,
  Comp_Medicard,
  Comp_Valucare,
  Comp_Wellcare,
  Comp_Inlife,
} from "../assets";

const Company = () => {
  return (
    <section class="py-10 bg-white mb-8 sm:py-16 lg:py-24">
      <div class="flex justify-center items-center">
        <h1
          data-aos="zoom-in-down"
          class="max-w-2xl mb-4 mt-8 text-3xl font-extrabold text-center leading-none md:text-5xl xl:text-5xl"
        >
          <span class="text-primary">WE </span> ACCEPT
        </h1>
      </div>
      <p
        data-aos="zoom-in-down"
        class="max-w-lg mx-auto text-center text-gray-600 text-lg md:text-xl mt-2"
      >
        We accept payments through major insurance providers, ensuring a simple
        and flexible payment process.
      </p>
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid items-center max-w-4xl grid-cols-2 mx-auto mt-12 md:mt-20 md:grid-cols-4 gap-x-10 gap-y-16">
          <div>
            <img
              class="object-contain w-full h-24 mx-auto"
              data-aos="zoom-out"
              src={Comp_Cocolife}
              alt=""
            />
          </div>

          <div>
            <img
              class="object-contain w-full h-24 mx-auto"
              data-aos="zoom-out"
              data-aos-delay="200"
              src={Comp_Eastwest}
              alt=""
            />
          </div>

          <div>
            <img
              class="object-contain w-full h-24 mx-auto"
              data-aos="zoom-out"
              data-aos-delay="400"
              src={Comp_Intellicare}
              alt=""
            />
          </div>

          <div>
            <img
              class="object-contain w-full h-24 mx-auto"
              data-aos="zoom-out"
              data-aos-delay="600"
              src={Comp_Maxicare}
              alt=""
            />
          </div>

          <div class="md:block">
            <img
              class="object-contain w-full h-24 mx-auto"
              data-aos="zoom-out"
              data-aos-delay="800"
              src={Comp_Medicard}
              alt=""
            />
          </div>

          <div class=" md:block">
            <img
              class="object-contain w-full h-24 mx-auto"
              data-aos="zoom-out"
              data-aos-delay="1000"
              src={Comp_Valucare}
              alt=""
            />
          </div>

          <div class=" md:block">
            <img
              class="object-contain w-full h-24 mx-auto"
              data-aos="zoom-out"
              data-aos-delay="1200"
              src={Comp_Wellcare}
              alt=""
            />
          </div>

          <div class="md:block">
            <img
              class="object-contain w-full h-24 mx-auto"
              data-aos="zoom-out"
              data-aos-delay="1400"
              src={Comp_Inlife}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
