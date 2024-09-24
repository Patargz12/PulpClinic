import React from "react";
import styled from "styled-components";

const Socials = () => {
  return (
    <StyledWrapper>
      <div className="parent">
        <div className="child child-2">
          <button className="button btn-2">
            <a href="https://www.instagram.com/raularganza/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.3em"
                viewBox="0 0 448 512"
                fill="#ff00ff"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </button>
        </div>
        <div className="child child-3">
          <button className="button btn-3">
            <a href="https://www.facebook.com/docraul2012" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                height="1.5em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#039be5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                ></path>
              </svg>
            </a>
          </button>
        </div>
        <div className="child child-4">
          <button className="button btn-4">
            <a
              href="https://www.linkedin.com/in/patrick-arganza-816331173/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
            </a>
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .parent {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .child {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transition: all 0.5s ease-in-out;
    border-radius: 50%;
    margin: 0 5px;
  }

  .child:hover {
    background-color: white;
    background-position: -100px 100px, -100px 100px;
    transform: rotate3d(0.5, 1, 0, 30deg);
    transform: perspective(180px) rotateX(60deg) translateY(2px);
    box-shadow: 0px 10px 10px rgb(233, 174, 66);
  }

  button {
    border: none;
    background-color: transparent;
    font-size: 20px;
  }

  .button:hover {
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate3d(0px, 0px, 15px) perspective(180px) rotateX(-35deg)
      translateY(2px);
    border-radius: 50%;
  }
`;

export default Socials;
