import React from "react";
import styled from "styled-components";
import { comprehensive } from "../../assets";

const Card4 = () => {
  return (
    <StyledWrapper data-aos="zoom-out" data-aos-delay="1200">
      <div className="card">
        <div className="card-image" />
        <p className="card-title">Comprehensive Services</p>
        <p className="card-text">
          We offer a full range of dental services, from preventive care to
          cosmetic, orthodontic, and surgical treatments.
        </p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    padding: 20px;
    width: 330px;
    text-align: left;
    min-height: 370px;
    border-radius: 20px;
    background: #fff;
    box-shadow: 1px 1px 2px #e9ae42, -3px -3px 4px #e9ae42;
    transition: 0.4s;
  }

  .card:hover {
    translate: 0 -10px;
  }

  .card-title {
    font-size: 18px;
    font-weight: 600;
    color: #000;
    margin: 24px 0 0 0; /* Remove left margin */
  }

  .card-image {
    min-height: 170px;
    background-image: url(${comprehensive});
    background-size: cover; /* Ensure the image covers the entire area */
    background-position: center; /* Center the image in the container */
    border-radius: 15px;
    box-shadow: inset 8px 8px 10px #c3c3c3, inset -8px -8px 10px #cfcfcf;
  }

  .card-body {
    color: rgb(31, 31, 31);
    text-align: left;
    font-size: 15px;
  }

  .card-text {
    color: rgb(31, 31, 31);
    text-align: left;
    margin-top: 20px;
    font-size: 15px;
  }
`;

export default Card4;
