import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      className={`mb-4 rounded-lg transition-all duration-300 ease-in-out overflow-hidden
        ${
          isOpen
            ? "shadow-[0_10px_30px_-5px_rgba(233,174,66,0.3)] bg-gradient-animated shadow-xl"
            : "border border-gray-200"
        }`}
    >
      <button
        className="flex justify-between items-center w-full text-left p-6 focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-semibold text-gray-800">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-[#e9ae42] transition-transform duration-300 ease-in-out" />
        ) : (
          <ChevronDown className="h-6 w-6 text-gray-400 transition-transform duration-300 ease-in-out" />
        )}
      </button>
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can schedule an appointment by calling our clinic or visiting us in person. We’re here to help!",
  },
  {
    question: "What should I do in a dental emergency?",
    answer:
      "In a dental emergency, please contact our clinic immediately. We prioritize urgent cases and will provide instructions for care.",
  },
  {
    question: "Are your treatments suitable for children?",
    answer:
      "Absolutely! We provide comprehensive dental care for patients of all ages, including pediatric dentistry tailored to children’s needs.",
  },
  {
    question: "What payment options do you provide?",
    answer:
      "We accept various payment options, including credit cards, cash, and flexible financing plans to make dental care accessible.",
  },
];

export default function Component() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <style jsx global>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .bg-gradient-animated {
          background: linear-gradient(90deg, #fff8e1, #fffdf7, #fff8e1);
          background-size: 200% 200%;
          animation: gradientAnimation 3s ease infinite;
        }
      `}</style>
      <div className="max-w-3xl mx-auto">
        <div class="flex justify-center items-center">
          <h1
            data-aos="zoom-in"
            class="max-w-2xl mb-4 mt-8 text-3xl font-extrabold text-center leading-none md:text-5xl xl:text-5xl"
          >
            <span class="text-primary">COMMON </span> QUESTIONS
          </h1>
        </div>
        <p
          data-aos="zoom-in"
          class="max-w-lg mx-auto text-center mb-12 text-gray-600 text-lg md:text-xl mt-2"
        >
          Answers to common inquiries about our services. Contact us for more.
        </p>

        <div className="space-y-6" data-aos="zoom-in-down">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
