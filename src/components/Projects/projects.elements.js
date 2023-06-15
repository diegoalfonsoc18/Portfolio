import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const WrapperSlider = styled.div`
  display: flex;
  transition: all 0.5s ease;
  width: 90%;
  max-width: 550px;
  height: 28em;
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
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 1.2em;
  background-color: var(--dark);
  border-radius: 10px;
  box-shadow: 4px 5px 20px rgba(10, 9, 10, 0.8), 0 3px 20px rgba(10, 9, 10, 0.8);
`;
export const WrapperImg = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 60%;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  border-radius: 10px;
  box-shadow: 4px 5px 20px rgba(10, 9, 10, 0.8), 0 3px 20px rgba(10, 9, 10, 0.8);
  transition: opacity 0.3s ease-in-out;
  &.active {
    width: 200%;
    height: 80%;
  }
  &.disabled {
    width: 10%;
    max-width: fit-content;
    height: 80%;
    opacity: 0.5;
  }
`;

export const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 1em;
`;

export const IconCard = styled.img`
  height: 2em;
  width: 2em;
  color: red;
`;
export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2em;
  width: 7em;
  text-decoration: none;
  color: var(--dark);
  font-weight: bold;
  border-radius: 30px;
  font-size: 18px;
  box-shadow: 0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px;
  background: var(--white);

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

export const PointsUl = styled.ul`
  width: 80%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 3em;
  margin: 0;
`;

export const PointsLi = styled.li`
  list-style-type: none;
  width: 0.6em;
  height: 0.6em;
  background-color: var(--white);
  border-radius: 50%;
  margin: 0 0.3em;
`;
