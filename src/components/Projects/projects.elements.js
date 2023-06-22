import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: radial-gradient(
    ellipse at 99% 0%,
    rgba(66, 6, 18, 1) 1%,
    rgba(66, 6, 18, 1) 5%,
    rgba(33, 7, 13, 1) 26%,
    rgba(26, 6, 8, 1) 43%,
    rgba(3, 1, 2, 1) 76%,
    rgba(66, 6, 18, 1) 94%,
    rgba(66, 6, 18, 1) 98%
  );
`;

export const WrapperSlider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: auto;
  max-height: fit-content;

  @media (min-width: 768px) {
    height: 700px;
  }

  @media (min-width: 1440px) {
  }
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 435px;
  width: 312px;
  border-radius: 12px;
  box-sizing: border-box;
  background: #1e1b33;
  border-radius: 12px;
  margin-top: 20px;
`;
export const WrapperImg = styled.div`
  width: 264px;
  height: 232px;
  border-radius: 8px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  &.active {
    grid-area: imgMain;
    width: 60%;
    height: 80%;
  }
  &.disabled {
    grid-area: img;
    width: 40%;
    max-width: fit-content;
    height: 60%;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 1em;
`;

export const TextCard = styled.p`
  color: var(--white);
`;

export const IconCard = styled.img`
  height: 2em;
  width: 2em;
  color: red;
`;
export const ButtonCard = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2em;
  width: 90%;
  text-decoration: none;
  color: var(--white);
  font-weight: bold;
  border-radius: 10px;
  font-size: 18px;
  /* box-shadow: 0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px; */
  border: solid 1px var(--white);
  &.button-hover:hover {
    border: solid 1px #da59b1;
    height: 40px;
    font-family: Roboto;
    color: #da59b1;
    background: var(--green);
    width: 35%;
    border-color: linear-gradient(to top right, #8162ce, #f54ba5);
    border-radius: 30px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);
  }
`;
