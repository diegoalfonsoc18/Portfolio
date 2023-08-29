import styled from "styled-components";
export const ContainerMain = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const WrapperSkills = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  height: auto;
`;
export const WrapperTitleSkills = styled.div`
  width: 80%;
`;
export const TitleSkill = styled.h2`
  font-size: 2em;
  color: var(--white);
`;

export const WrapperItems = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1em;
  align-items: center;
  flex-wrap: wrap;
  width: 14em;
  height: 5em;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid rgba(231, 231, 231, 0.4);
  background: #1e1b33;
  box-shadow: 20px 20px 50px 0px rgba(49, 49, 49, 0.05);
  background-color: #1e1b33;
`;

export const ImgItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 52px;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    background: lightgray;
    opacity: 0.3;
    border-radius: 52px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;

export const Iconitem = styled.img`
  width: 60%;
  height: 60%;
`;
export const ItemText = styled.p`
  font-size: larger;
  color: var(--white);
`;
