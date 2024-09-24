import React from "react";
import styled from "styled-components";
import Card1 from "./misc/card1";
import Card2 from "./misc/card2";
import Card3 from "./misc/card3";
import Card4 from "./misc/card4";

const Services = () => {
  return (
    <StyledWrapper>
      <div className="container mx-auto mb-2 sm:mb-2 md:mb-2">
        <div className="header flex justify-center items-center">
          <h1
            data-aos="zoom-in-down"
            className="title max-w-2xl mb-4 text-3xl font-extrabold text-center leading-none md:text-5xl xl:text-5xl"
          >
            <span className="text-primary">SERVICES</span> WE OFFER
          </h1>
        </div>
        <p
          className="subtitle max-w-lg mx-auto text-center text-gray-600 text-lg md:text-xl mt-2"
          data-aos="zoom-in-down"
        >
          Comprehensive dental care tailored to your needs, from routine
          check-ups to advanced treatments.
        </p>
        <div className="content block">
          <div className="grid py-20 px-6 md:px-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <div
              className="card-wrapper flex justify-center items-center"
              data-aos="zoom-in-right"
            >
              <Card1 />
            </div>
            <div
              className="card-wrapper flex justify-center items-center"
              data-aos="zoom-in-left"
            >
              <Card2 />
            </div>
            <div
              className="card-wrapper flex justify-center items-center"
              data-aos="zoom-in-right"
            >
              <Card3 />
            </div>
            <div
              className="card-wrapper flex justify-center items-center"
              data-aos="zoom-in-left"
            >
              <Card4 />
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

// Styled-component CSS
const StyledWrapper = styled.div`
  @media only screen and (max-width: 1022px) {
    .header {
      margin-top: 72px;
    }
  }
`;

export default Services;
