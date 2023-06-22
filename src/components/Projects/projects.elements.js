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
  max-width: 80%;
  height: auto;
  margin-top: 20px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }

  @media (min-width: 1440px) {
  }
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: min(15em, 25em);
  border-radius: 12px;
  background: #1e1b33;
  border-radius: 12px;
  margin: 20px 1em;
  /* @media (min-width: 768px) {
  } */
`;
export const WrapperImg = styled.div`
  width: 90%;
  height: auto;
  border-radius: 8px;
  padding: 10px 5px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

export const TextCard = styled.p`
  color: var(--white);
`;

export const IconCard = styled.img`
  width: 1.3em;
  color: red;
`;
export const ButtonCard = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.6em;
  width: 80%;
  font-size: smaller;
  text-decoration: none;
  color: var(--white);
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 12px;
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

export const Hr = styled.hr`
  width: 80%;
  border: none;
  height: 2px;
  background-color: var(--white);
  margin: 0;
`;
