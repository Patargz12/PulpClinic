import React from "react";
import styled from "styled-components";
import whitening from "../../assets/whitening.jpg";

const Card3 = () => {
  return (
    <StyledWrapper>
      <h1 class="max-w-2xl mb-4 mt-8 text-xl font-extrabold leading-none md:text-5xl xl:text-3xl">
        <span className="text-primary">TEETH</span> WHITENING
      </h1>
      <div className="card ">
        <img src={whitening} />
        <div className="card__content p-2 sm:p-1 md:p-4 lg:p-6 ">
          <p className="card__title text-lg sm:text-base md:text-xl lg:text-2xl font-bold">
            WHAT IS <span className="text-primary">TEETH WHITENING?</span>
          </p>
          <p className="card__description text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            A cosmetic procedure designed to lighten the color of teeth and
            remove stains or discoloration. It uses bleaching agents to brighten
            the teeth, enhancing overall smile appearance.
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    border-radius: 10px;
    margin-left: 14px;
    height: 50%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  @media only screen and (max-width: 627px) {
    .card {
      margin-left: 0px;
      height: auto;
      width: auto;
    }
  }

  .card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card:hover {
    transform: rotate(-5deg) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .card__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 100%;
    height: 100%;

    box-sizing: border-box;
    background-color: #fff;
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card:hover .card__content {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
  }

  .card__title {
    margin: 0;

    color: #333;
  }

  .card__description {
    margin: 10px 0 0;

    color: #777;
    line-height: 1.4;
  }

  .card:hover svg {
    scale: 0;
    transform: rotate(-45deg);
  }
`;

export default Card3;
