import React from "react";
import styled from "styled-components";
import { tooth } from "../assets";

const Socials = () => {
  return (
    <StyledWrapper>
      <div className="animate">
        <div className="parent">
          <div className="card">
            <div className="logo">
              <span className="circle circle1" />
              <span className="circle circle2" />
              <span className="circle circle3" />
              <span className="circle circle4" />
              <span className="circle circle5">
                <img src={tooth} className="size-7" alt="tooth" />
              </span>
            </div>
            <div className="glass" />
            <div className="content">
              <span className="title">Follow Me!</span>
            </div>
            <div className="bottom">
              <div className="social-buttons-container">
                <button className="social-button .social-button1">
                  <a
                    href="https://www.instagram.com/raularganza/"
                    target="_blank"
                  >
                    <svg
                      viewBox="0 0 30 30"
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg"
                    >
                      <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                    </svg>
                  </a>
                </button>
                <button className="social-button .social-button2">
                  <a
                    href="https://www.linkedin.com/in/raul-arganza-339115198/"
                    target="_blank"
                  >
                    <svg
                      xmlns="https://www.linkedin.com/in/raul-arganza-339115198/"
                      x="0px"
                      y="0px"
                      className="svg"
                      viewBox="0 0 50 50"
                    >
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                    </svg>
                  </a>
                </button>
                <button className="social-button .social-button3">
                  <a
                    href="https://www.facebook.com/docraul2012"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      className="svg"
                      viewBox="0 0 50 50"
                    >
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                    </svg>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .animate {
    animation: float 3s ease-in-out infinite;
  }

  .parent {
    width: 300px;
    height: 200px;
    perspective: 1000px;
  }

  @media (max-width: 510px) {
    .parent {
      margin-left: 5%;
      justify-content: center;
      align-items: center;
    }
  }

  .card {
    height: 100%;
    border-radius: 50px;
    background: linear-gradient(
      135deg,
      rgb(233, 174, 66) 0%,
      rgb(233, 174, 66) 100%
    );
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px,
      rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 8px;
    border-radius: 55px;
    border-top-right-radius: 100%;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.349) 0%,
      rgba(255, 255, 255, 0.815) 100%
    );
    /* -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px); */
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    transition: all 0.5s ease-in-out;
  }

  .content {
    padding: 75px 60px 0px 30px;
    transform: translate3d(0, 0, 26px);
  }

  .content .title {
    display: block;
    color: #000;
    font-weight: 900;
    font-size: 20px;
  }

  .content .text {
    display: block;
    color: #000;
    font-size: 15px;
    margin-top: 20px;
  }

  .bottom {
    padding: 10px 12px;
    transform-style: preserve-3d;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translate3d(0, 0, 26px);
  }

  .bottom .view-more {
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: flex-end;
    transition: all 0.2s ease-in-out;
  }

  .bottom .view-more:hover {
    transform: translate3d(0, 0, 10px);
  }

  .bottom .view-more .view-more-button {
    background: none;
    border: none;
    color: #00c37b;
    font-weight: bolder;
    font-size: 12px;
  }

  .bottom .view-more .svg {
    fill: none;
    stroke: #000;
    stroke-width: 3px;
    max-height: 30px;
  }

  .bottom .social-buttons-container {
    display: flex;
    gap: 10px;
    transform-style: preserve-3d;
  }

  .bottom .social-buttons-container .social-button {
    width: 40px;
    aspect-ratio: 1;
    padding: 5px;
    background: rgb(255, 255, 255);
    border-radius: 50%;
    border: none;
    display: grid;
    place-content: center;
    box-shadow: rgb(233, 174, 66) 0px 7px 5px -5px;
  }

  .bottom .social-buttons-container .social-button:first-child {
    transition: transform 0.2s ease-in-out 0.4s,
      box-shadow 0.2s ease-in-out 0.4s;
  }

  .bottom .social-buttons-container .social-button:nth-child(2) {
    transition: transform 0.2s ease-in-out 0.6s,
      box-shadow 0.2s ease-in-out 0.6s;
  }

  .bottom .social-buttons-container .social-button:nth-child(3) {
    transition: transform 0.2s ease-in-out 0.8s,
      box-shadow 0.2s ease-in-out 0.8s;
  }

  .bottom .social-buttons-container .social-button .svg {
    width: 30px;
    fill: #000;
  }

  .bottom .social-buttons-container .social-button:hover {
    background: black;
  }

  .bottom .social-buttons-container .social-button:hover .svg {
    fill: white;
  }

  .bottom .social-buttons-container .social-button:active {
    background: rgb(255, 234, 0);
  }

  .bottom .social-buttons-container .social-button:active .svg {
    fill: black;
  }

  .logo {
    position: absolute;
    right: 0;
    top: 0;
    transform-style: preserve-3d;
  }

  .logo .circle {
    display: block;
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50%;
    top: 0;
    right: 0;
    box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background: rgb(237, 193, 111);
    transition: all 0.5s ease-in-out;
  }

  .logo .circle1 {
    width: 170px;
    transform: translate3d(0, 0, 20px);
    top: 8px;
    right: 8px;
  }

  .logo .circle2 {
    width: 140px;
    transform: translate3d(0, 0, 40px);
    top: 10px;
    right: 10px;
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
    transition-delay: 0.4s;
  }

  .logo .circle3 {
    width: 110px;
    transform: translate3d(0, 0, 60px);
    top: 17px;
    right: 17px;
    transition-delay: 0.8s;
  }

  .logo .circle4 {
    width: 80px;
    transform: translate3d(0, 0, 80px);
    top: 23px;
    right: 23px;
    transition-delay: 1.2s;
  }

  .logo .circle5 {
    width: 50px;
    transform: translate3d(0, 0, 100px);
    top: 30px;
    right: 30px;
    display: grid;
    place-content: center;
    transition-delay: 1.6s;
  }

  .logo .circle5 .svg {
    width: 20px;
    fill: white;
  }

  .parent:hover .card {
    transform: rotate3d(1, 1, 0, 30deg);
    box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px,
      rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
  }

  .parent:hover .card .bottom .social-buttons-container .social-button {
    transform: translate3d(0, 0, 50px);
    box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px;
  }

  .parent:hover .card .logo .circle2 {
    transform: translate3d(0, 0, 60px);
  }

  .parent:hover .card .logo .circle3 {
    transform: translate3d(0, 0, 80px);
  }

  .parent:hover .card .logo .circle4 {
    transform: translate3d(0, 0, 100px);
  }

  .parent:hover .card .logo .circle5 {
    transform: translate3d(0, 0, 120px);
  }
`;

export default Socials;
