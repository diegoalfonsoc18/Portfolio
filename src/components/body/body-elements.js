import styled from "styled-components";

export const WrapperMain = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(
    circle at 11% 14%,
    rgba(66, 6, 18, 1) 0%,
    rgba(33, 7, 13, 1) 19%,
    rgba(26, 6, 8, 1) 26%,
    rgba(3, 1, 2, 1) 79%
  );
`;

export const Sect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const TextSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Paragraph = styled.h3`
  margin: 0;
  color: var(--white);
  font-size: 2em;
`;
export const H1memoji = styled.h1`
  margin: 0;
  font-size: 4em;
  color: var(--white);
`;
export const H2memoji = styled.h2`
  margin: 0;
  font-size: 3em;
  background-image: linear-gradient(
    90deg,
    rgba(134, 11, 140, 1) 0%,
    rgba(190, 7, 7, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text; /* Para navegadores basados en WebKit */
  color: transparent;
`;
export const WrapperArticle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
`;

export const ContainerImg = styled.article`
  position: relative;
  width: 50%;
  height: 300px;
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

  @media (max-width: 640px) {
  }
`;
export const Memoji = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 250px;
  transform: translateY(25%);
  transition: 0.3s ease;
  opacity: 0;

  &:hover {
    opacity: 1;
    transform: translateY(10%);
  }
`;

export const Hr = styled.hr`
  width: 80%;
  border: none;
  height: 1px;
  background-color: var(--white);
  margin: 10px 0;
`;
