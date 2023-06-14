import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const WrapperSlider = styled.div`
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  width: 90%;
  height: 400px;
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1.5em;
  background-color: var(--dark);
  border-radius: 10px;
  box-shadow: 4px 5px 20px rgba(10, 9, 10, 0.8), 0 3px 20px rgba(10, 9, 10, 0.8);
`;

export const Image = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 10px;
  box-shadow: 4px 5px 20px rgba(10, 9, 10, 0.8), 0 3px 20px rgba(10, 9, 10, 0.8);
`;

export const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0.7em;
`;

export const IconCard = styled.img`
  height: 2em;
  width: 2em;
`;
export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2em;
  width: 7em;
  color: var(--dark);
  border-radius: 30px;
  font-size: 16px;
  box-shadow: 0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px;
  background: var(--white);
  &.button-hover:hover {
    border: solid 1px #da59b1;
    height: 40px;
    font-family: Roboto;
    color: #da59b1;
    background: #ffffff;
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
  box-shadow: 4px 5px 20px rgba(10, 9, 10, 0.8), 0 3px 20px rgba(10, 9, 10, 0.8);
`;
