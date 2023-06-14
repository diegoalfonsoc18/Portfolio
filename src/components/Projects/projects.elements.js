import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #cc0;
`;

export const WrapperSlider = styled.div`
  background-color: #454545;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  width: 80%;
  height: 500px;
  padding: 1em;
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1.5em;
  background-color: #31394d;
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 10px;
`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 35%;
  font-size: 16px;
  background: rgb(2, 36, 0);
  background: linear-gradient(
    90deg,
    rgba(2, 36, 0, 1) 0%,
    rgba(52, 111, 53, 1) 0%,
    rgba(0, 255, 49, 1) 100%
  );
  border-radius: 30px;
  margin-top: 1em;
  box-shadow: 0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px;

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
  width: 100%;
  background-color: red;
  padding: 1em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 3em;
`;

export const PointsLi = styled.li`
  list-style-type: none;
  width: 2em;
  height: 2em;
  background-color: #379237;
  margin: 1em;
  border-radius: 50%;
`;

// export const WrapperArrow = styled.div`
//   width: 50px;
//   height: 50px;
// `;
// export const ArrowRight = styled.img`
//   width: 100%;
//   height: 100%;
// `;
// export const ArrowLeft = styled.img`
//   width: 100%;
//   height: 100%;
