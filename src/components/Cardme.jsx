import React from "react";
import styled from "styled-components";

const Cardme = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-photo">
          <img src="/public/images/yo.jpeg"></img>
        </div>

        <div className="card-title">
          Adriana Brandan <br />
          <span>Front-end Developer</span>
        </div>
        <div className="card-socials">
          <a
            href="https://github.com/AdriBrandy"
            target="_blank"
            rel="noopener noreferrer"
            className="card-socials-btn github"
          >
            <svg
              viewBox="0 0 24 24"
              height={33}
              width={33}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/adriana-brandan/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-socials-btn github"
          >
            <svg
              height={512}
              viewBox="0 0 512 512"
              width={512}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z" />
            </svg>
          </a>

          <a
            href="https://wa.me/5491164258475"
            target="_blank"
            rel="noopener noreferrer"
            className="card-socials-btn whatsapp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={33}
              width={33}
              viewBox="0 0 448 512"
            >
              <path d="M380.9 97.1C339-3.6 212.3-32 122.8 35.2 53.7 89.5 36.2 176.1 70.1 250.4L24 448l200.4-47.7c73.8 32.1 159.9 8.9 210.4-57.2 47.6-61.9 45.2-153.3-8.2-218zm-35.7 190.2c-5.6 15.7-27.9 29.6-38.3 31.6-10.3 2-22.9 2.8-36.9-2.3-8.5-2.8-19.4-6.3-33.6-12.4-59.2-25.5-97.8-84.3-100.8-88.2s-24-31.9-24-61.1 15.1-43.4 20.6-49.3c5.1-5.4 13.6-7.9 21.8-5.4 5.6 1.8 13.1 4.8 22.2 19.1 7.5 11.4 13.3 24.3 14.9 27.7 3.1 6.3 0.6 13.8-3.4 18.8-2.9 3.7-6.3 8.3-8.9 11.2-2.9 3.1-6 6.4-2.6 12.4 3.4 6 15 24.9 32.1 40.3 22.1 19.5 40.7 25.7 47.3 28.3 6.6 2.6 10.5 2.2 14.4-1.3 3.9-3.4 16.6-19.4 21.1-26.1s8.8-5.4 14.8-3.3c6 2 37.5 17.7 43.9 21.3 6.3 3.6 10.5 5.4 12 8.3 1.5 2.9 1.5 16.6-4.1 32.3z" />
            </svg>
          </a>

          <a
            href="mailto:adriana_brandan22@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card-socials-btn correo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={33}
              width={33}
              viewBox="0 0 512 512"
            >
              <path
                d="M502.3 190.8 327.4 338.3c-15.3 13.1-37.5 13.1-52.8 0L9.7 190.8C3.8 186 0 179 0 171.6V128c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32v43.6c0 7.4-3.8 14.4-9.7 19.2zM0 215.6v200.8c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V215.6L341.9 368.5c-25.5 21.9-62.3 21.9-87.8 0L0 215.6z"
              />
            </svg>
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 200px;
    height: 354px;
    --font-color: #323232;
    --font-color-sub: #323232;
    --bg-color: #fff;
    --main-color: rgb(102, 54, 165);
    background: var(--bg-color);
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    overflow: hidden;
    position: relative;
    padding-top: 10px;
    transition: all 0.3s ease;
    font-family: "Mona Sans", sans-serif;
  }

  .card-photo {
    width: 150px;
    height: 200px;
    margin-top: 10px;
    transition: transform 0.4s ease;
  }
  .card-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
  .card-title {
    text-align: center;
    color: var(--font-color);
    font-size: 20px;
    font-weight: 400;
    font-family: "Mona Sans", sans-serif;
  }

  .card-title span {
    font-size: 16px;
    color: var(--font-color-sub);
    font-family: "Mona Sans", sans-serif;
  }

  .card-socials {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.4s ease;
    pointer-events: none;
  }

  .card-socials-btn {
    width: 25px;
    height: 25px;
    border: none;
    background: transparent;
    cursor: pointer;
    pointer-events: all;
  }

  .card-socials-btn svg {
    width: 100%;
    height: 100%;
    fill: var(--main-color);
    pointer-events: all;
  }
  .card:hover .card-photo {
    transform: translateY(-10px);
  }

  .card:hover .card-socials {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .card-socials-btn:hover {
    transform: translateY(-5px);
    transition: all 0.15s;
  }
`;

export default Cardme;
