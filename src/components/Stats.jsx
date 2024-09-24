import React from "react";
import Trophy from "../components/misc/Trophy";

const Stats = () => {
  return (
    <section className="text-gray-600 body-font mt-16 mb-16">
      <div className="container px-5  xl:mx-auto flex items">
        <div className="flex flex-col lg:flex-row lg:mx-16 w-full items-center">
          <div
            className="flex flex-col lg:w-1/2 w-full pl-4 mb-8"
            data-aos="zoom-out-up"
          >
            <h1 className="max-w-2xl mb-2 text-3xl font-extrabold text-left leading-none md:text-5xl xl:text-5xl">
              <span className="text-primary">CLINIC </span> STATISTICS
            </h1>

            <p className="leading-relaxed mx-4 md:text-md xl:text-xl">
              Here are the key statistics reflecting our clinic's commitment to
              quality care and patient satisfaction:
            </p>

            <div className="flex flex-wrap w-full mt-4">
              <div className="flex flex-col sm:w-1/2 lg:w-1/2">
                <div className="p-4 w-full">
                  <h2 className="title-font font-bold text-3xl text-primary">
                    2000+
                  </h2>
                  <p className="leading-relaxed font-bold">Treated Patients</p>
                </div>
                <div className="p-4 w-full">
                  <h2 className="title-font font-bold text-3xl text-primary">
                    8+
                  </h2>
                  <p className="leading-relaxed font-bold">
                    Years of Operation
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:w-1/2 lg:w-1/2">
                <div className="p-4 w-full">
                  <h2 className="title-font font-bold text-3xl text-primary">
                    95%
                  </h2>
                  <p className="leading-relaxed font-bold">Satisfaction Rate</p>
                </div>
                <div className="p-4 w-full">
                  <h2 className="title-font font-bold text-3xl text-primary">
                    3000+
                  </h2>
                  <p className="leading-relaxed font-bold">Dental Checkups</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trophy SVG */}
          <div
            className="relative lg:w-1/2 flex justify-center"
            data-aos="zoom-out-down"
          >
            <Trophy className="w-full max-w-xs h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
