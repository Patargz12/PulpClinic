"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import { mark } from "../../assets/";

const TestimonialCard = ({
  name = "Mark T.",
  title = "Civil Engineer",
  testimonial = "I was really impressed by the level of care I received here. The hygienist took the time to explain every step of the cleaning process, and my smile has never looked better",
  stars = 5,
  image = mark,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full max-w-md mx-auto bg-white mt-6 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-8">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < stars ? "text-yellow-400 fill-current" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <blockquote className="text-lg italic text-gray-700 mb-6">
          "{testimonial}"
        </blockquote>
        <div className="flex items-center">
          <img
            className="w-16 h-16 rounded-full mr-4 object-cover"
            src={image}
            alt={name}
          />
          <div>
            <div className="font-bold text-xl">{name}</div>
            <div className="text-gray-600">{title}</div>
          </div>
        </div>
      </div>
      <div
        className={`bg-gradient-to-r from-primary to-primary-foreground h-2 transition-all duration-300 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default TestimonialCard;
