import BeamCard from "./BeamCard";
import { IoLocationSharp } from "react-icons/io5";
import BeamCard2 from "./BeamCard2";

export default function Careers() {
  return (
    <section className="py-12 px-4 bg-background">
      <div className="max-w-7xl mx-auto text-center">
        <h2 data-aos="zoom-in" className="text-xl font-bold text-foreground">
          Join With Us
        </h2>
        <div data-aos="zoom-in" class="flex justify-center items-center">
          <h1
            data-aos="zoom-in"
            class="max-w-2xl mb-2 mt-2 text-3xl font-extrabold text-center leading-none md:text-5xl xl:text-5xl"
          >
            <span class="text-primary">OPEN </span> POSITIONS
          </h1>
        </div>
        <p data-aos="zoom-in" className="mt-4 text-muted-foreground">
          Join our dedicated team and contribute to providing top-notch dental
          care. Explore exciting opportunities and grow your career with us!
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            data-aos="zoom-out-up"
            className="bg-card p-6 rounded-lg duration-300"
          >
            <BeamCard2 />
          </div>

          <div
            data-aos="zoom-out-up"
            data-aos-delay="500"
            className="bg-card p-6 rounded-lg duration-300"
          >
            <BeamCard />
          </div>
        </div>
      </div>
    </section>
  );
}
