import React from "react";
import Socials from "./misc/social_icons";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <div class="border-t mt-10">
      <div class="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div class="p-5 sm:w-2/12 border-r">
          <div class="text-sm uppercase text-primary font-bold">Menu</div>
          <ul>
            <li class="my-2">
              <Link className="hover:text-primary" to="/">
                Home
              </Link>
            </li>
            <li class="my-2">
              <Link className="hover:text-primary" to="/About">
                About
              </Link>
            </li>
            <li class="my-2">
              <Link className="hover:text-primary" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div class="p-5 sm:w-7/12 border-r text-left sm:text-left xl:text-center ">
          <h3 class="font-bold text-xl text-primary mb-4">
            Pulp Dental Clinic
          </h3>
          <p class="text-gray-500 text-sm mb-10">
            Pulp Dental Clinic offers comprehensive dental care with a focus on
            patient comfort and cutting-edge technology. Our experienced team is
            dedicated to providing personalized treatments for all your dental
            needs, ensuring a healthy and beautiful smile.
          </p>
        </div>

        <div class="p-5 sm:w-3/12">
          <div class="text-sm uppercase text-primary font-bold">Contact Us</div>
          <ul>
            <li class="my-2">8th Avenue Caloocan City</li>
            <li class="my-2">pulpclinic@gmail.com</li>
            <li class="my-2">+63 915 427 7984</li>
          </ul>
        </div>
      </div>
      <div class="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <Socials />
        </div>
        <div class="my-5">© Copyright 2024. All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
