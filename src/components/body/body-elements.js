import styled from "styled-components";

export const WrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-items: center;
  background: radial-gradient(
    ellipse at 13% 29%,
    rgba(66, 6, 18, 1) 1%,
    rgba(66, 6, 18, 1) 5%,
    rgba(33, 7, 13, 1) 26%,
    rgba(26, 6, 8, 1) 43%,
    rgba(3, 1, 2, 1) 76%,
    rgba(66, 6, 18, 1) 94%,
    rgba(66, 6, 18, 1) 98%
  );
`;

export const Sect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  @media (min-width: 740px) {
    flex-direction: row;
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

export const Paragraph = styled.h3`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  color: var(--white);
  font-size: 1.3em;

  @media (min-width: 740px) {
    font-size: 2em;
  }
`;
export const H1memoji = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0;
  width: 100%;
  font-size: 2em;
  color: var(--white);

  @media (min-width: 740px) {
    font-size: 3em;
  }

  @media (min-width: 1440px) {
    font-size: 4em;
  }
`;
export const H2memoji = styled.h2`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  font-size: 2em;
  background-image: linear-gradient(rgba(6, 4, 91, 1), rgba(224, 30, 90, 1));
  background-clip: text;
  -webkit-background-clip: text; /* Para navegadores basados en WebKit */
  color: transparent;

  @media (min-width: 740px) {
    font-size: 3em;
  }

  @media (min-width: 1440px) {
    font-size: 3.5em;
  }
`;
export const WrapperArticle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  position: relative;
`;

export const ContainerImg = styled.div`
  position: relative;
  width: 80%;
  height: 15em;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

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

export const Hr = styled.hr`
  width: 80%;
  border: none;
  height: 2px;
  background-color: var(--white);
  margin: 0;
`;

export const WrapperIcons = styled.div`
  border-radius: 52px;
  position: absolute;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 44px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;
export const Icons = styled.img`
  width: 100%;
  height: 100%;
`;
