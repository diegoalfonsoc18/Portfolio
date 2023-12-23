import styled, { keyframes } from "styled-components";

const fadeInLeft = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const fadeInRight = keyframes`
  from {
    transform: translateZ(1000px) scale(1.5);
    opacity: 0;
  }
  to {
    transform: translateZ(0) scale(1);
    opacity: 1;
  }
`;

export const WrapperMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Sect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media (min-width: 740px) {
    width: 70%;
  }
  @media (min-width: 1200px) {
    width: 80%;
  }
`;

export const WrapperArticle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 800px;
  width: 90%;

  @media (min-width: 740px) {
    flex-direction: row;
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 90%;
  }
`;
export const WrapperBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  @media (min-width: 740px) {
    flex-direction: row;
  }
`;
export const Icons = styled.img`
  width: 100%;
  height: 100%;
  border: 0;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  animation: animate 20s linear infinite;
  animation-duration: calc(125s / 10);
  :nth-child(even) {
    background: #ff2d75;
    box-shadow: 0 0 0 10px #ff2d7544, 0 0 50px #ff2d75, 0 0 100px #ff2d75;
    animation: animate 15s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: translateY(20vh) scale(0);
    }
    100% {
      transform: translateY(-100vh) scale(1);
    }
  }
`;

export const ContainerImg = styled.div`
  position: relative;
  z-index: 1;
  height: 15em;
  width: 100%;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInRight} 1s ease-in-out;

  &:hover {
    transform: perspective(250px) rotateX(10deg) translateY(-5%) translateZ(0);
  }
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    /* linear-gradient(to bottom, transparent 10%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0) 95%); */
    opacity: 0;
    transition: all 0.3s ease;
  }
  &:hover::before {
    opacity: 1;
  }

  @media (min-width: 740px) {
    width: 50%;
    order: 2;
  }
`;

export const MemojiMain = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  object-fit: cover;
  height: 60%;
  padding: 10px;

  @media (min-width: 740px) {
    height: 80%;
  }
`;
export const Memoji = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 6;
  height: 11em;
  transform: translateY(25%);
  transition: 0.3s ease;
  opacity: 0;

  @media (min-width: 740px) {
    height: 15em;
  }

  &:hover {
    opacity: 1;
    transform: translateY(10%);
  }
`;
export const WrapperTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  animation: ${fadeInLeft} 1s ease-in-out;

  @media (min-width: 740px) {
    width: 50%;
    order: 1;
  }
`;

export const WrapperText = styled.div`
  :nth-child(1) {
    display: flex;
    height: auto;
    width: 100%;
    padding: 5px;

    justify-content: start;
  }
  :nth-child(2) {
    padding: 5px;
    width: 100%;
    height: auto;
  }

  :nth-child(3) {
    padding: 5px;
    width: 100%;
    height: auto;
  }

  @media (min-width: 740px) {
    width: 50%;
  }
`;

export const Text = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  color: var(--white);
  font-size: large;
  margin: 0;
  border-radius: 25px;
  width: 9rem;
  height: 3rem;
  border: 1px solid var(--white);

  @media (min-width: 740px) {
    font-size: x-large;
    width: 12rem;
    height: 3rem;
  }
  @media (min-width: 1200px) {
    font-size: xx-large;
    width: 15rem;
    border-radius: 30px;
    height: 5rem;
  }
`;
export const TitleText = styled.h2`
  color: var(--white);
  font-size: x-large;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;
export const Text2 = styled.h2`
  color: var(--white);
  font-size: x-large;
  font-weight: 400;
  margin: 0;

  @media (min-width: 740px) {
    font-size: x-large;
  }
  @media (min-width: 1200px) {
    font-size: x-large;
  }
`;
export const Paragrahp = styled.p`
  font-size: large;
  color: var(--white);
  margin: 0;
  @media (min-width: 740px) {
    font-size: x-large;
  }

  @media (min-width: 1200px) {
    font-size: xx-large;
  }
`;
export const TextSection = styled.div`
  width: 80%;
  height: 15em;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WrapperIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100px;

  @media (min-width: 740px) {
    justify-content: center;
    order: 3;
  }
`;

export const WrapperArticleIcons = styled.span`
  position: relative;
  z-index: 2;
  width: 40px;
  margin: 0 10px;
  height: 40px;
  @media (min-width: 740px) {
    width: 60px;
    height: 60px;
  }
`;
