import React from "react";
import styled from "styled-components";
import { IoLocationSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";

const BeamCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="bg">
          <div className="bg-card p-6 rounded-lg">
            <h4 className="text-2xl md:text-3xl font-bold text-foreground">
              Dental Assistant
            </h4>
            <p className="mt-4 md:mt-8 text-muted-foreground text-base md:text-lg">
              Support dentists with patient care and clinical tasks.
            </p>
            <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
              <span className="text-muted-foreground flex items-center text-sm md:text-base">
                <IoLocationSharp className="mr-2" />
                Caloocan City
              </span>
              <span className="text-muted-foreground flex items-center text-sm md:text-base">
                <FaBuilding className="mr-2" />
                Full-time
              </span>
            </div>
          </div>
        </div>
        <div className="blob"></div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 100%;
    max-width: 400px; /* Set a max width for responsiveness */
    height: 250px; /* Responsive height */
    padding: 1rem;
    border-radius: 14px;
    z-index: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 10px 10px 20px #bebebe, -10px -10px 20px #ffffff;
    margin: 20px auto;
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 97%; /* Responsive width */
    height: 95%; /* Responsive height */
    z-index: 2;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid white;
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #e9ae42;
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }

    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }

    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }

    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }

    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }

  @media (max-width: 768px) {
    .card {
      max-width: 95%; /* Shrink card width on smaller screens */
    }

    .blob {
      width: 150px; /* Shrink blob size for smaller screens */
      height: 150px;
    }

    .bg {
      width: 96%; /* Adjust background size */
      height: 96%;
    }
  }
`;

export default BeamCard;
