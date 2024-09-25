import React from "react";
import styled from "styled-components";
import Toast from "../Toast";

const News_Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="banner">
          <span className="banner-text">SUBSCRIBE</span>
          <span className="banner-text">JOIN US</span>
        </div>
        <span className="card__title">SIGN UP</span>
        <p className="card__subtitle">Learn more about us</p>
        <form className="card__form">
          <input placeholder="Your Email" type="email" required />
          <button className="sign-up">SUBMIT</button>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 320px;
    padding: 30px;
    background: #fff;
    border: 8px solid #000;
    box-shadow: 15px 15px 0 #000;
    transform: rotate(-2deg);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  .card:active {
    animation: shake 0.5s ease-in-out;
  }
  .card:hover {
    transform: rotate(0deg) scale(1.02);
    box-shadow: 20px 20px 0 #000;
  }
  .banner {
    position: absolute;
    top: 3px;
    right: -95px;
    background: #000;
    color: #fff;
    padding: 15px;
    width: 350px;
    text-align: center;
    transform: rotate(45deg);
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 2px;
    overflow: hidden;
    transition: background 0.5s ease;
  }
  .banner-text {
    display: inline-block;
    transition: opacity 0.5s ease, transform 0.5s ease;
    width: 100%;
    position: absolute;
    left: 13%;
    top: 50%;
    transform: translateY(-50%);
  }
  .banner:hover .banner-text:first-child {
    opacity: 0;
    transform: translateY(-100%);
  }
  .banner:hover .banner-text:last-child {
    opacity: 1;
    transform: translateY(-40%);
  }
  .banner-text:last-child {
    opacity: 0;
    transform: translateY(60%);
  }
  .banner:hover {
    background: red;
  }
  .card__title {
    font-size: 24px;
    font-weight: 700;
    color: #000;
    text-transform: uppercase;
    margin-bottom: 10px;
    display: block;
    border-bottom: 2px solid #000;
    width: 50%; /* or any other percentage or pixel value */
  }
  .card__subtitle {
    font-size: 16px;
    line-height: 1.4;
    color: #333;
    margin-bottom: 20px;
    padding-bottom: 10px;
  }
  .card__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .card__form input {
    padding: 12px;
    border: 4px solid #000;
    font-size: 16px;
    font-family: "Proxima Nova", sans-serif;
    transition: all 0.3s ease;
    background-color: #fff;
  }
  .card__form input:focus {
    outline: none;
    transform: scale(1.05);
  }
  .sign-up {
    border: 4px solid #000;
    background: #000;
    color: #fff;
    padding: 12px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .sign-up:hover {
    background: #fff;
    color: #000;
    transform: translateY(-5px);
    box-shadow: 0 5px 0 #000;
  }
  .sign-up:active {
    animation: shake 0.5s ease-in-out;
    transform: translateY(0);
    box-shadow: none;
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export default News_Card;
