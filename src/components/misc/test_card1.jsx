"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import { sarah } from "../../assets/";

const TestimonialCard = ({
  name = "Sarah J.",
  title = "Call Center Agent",
  testimonial = "I had a fantastic experience at this dental clinic! The staff was incredibly friendly, and the dentist was very professional and caring. My teeth feel great, and I’m no longer afraid of going to the dentist!",
  stars = 5,
  image = sarah,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
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
