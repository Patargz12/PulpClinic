import React from "react";
import News_Card from "./misc/news_card";

const News = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-900 mt-8">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div
            data-aos="zoom-out-right"
            class="mr-auto place-self-center lg:col-span-7"
          >
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              <span className="text-primary"> Subscribe</span> to our newsletter
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Don't miss out on exclusive updates, expert tips, and special
              offers. Subscribe to our newsletter and be the first to hear about
              the latest in dental care, health advice, and more!
            </p>
          </div>
          <div
            data-aos="zoom-out-left"
            data-aos-delay="200"
            class=" lg:mt-0 sm:mt-8 md:mt-8 mt-10 lg:col-span-5 lg:flex"
          >
            <News_Card />
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
