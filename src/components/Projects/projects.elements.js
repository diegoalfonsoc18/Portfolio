import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  background-color: #cc0;
`;

export const WrapperSlider = styled.div`
  width: 500%;
  background-color: orange;
  display: flex;
  flex-direction: row nowrap;
  justify-content: flex-start;
  align-items: center;

  transition: all 0.5s ease;
  transform: translateX(0%);
`;

export const WrapperImage = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: lime;
`;

export const Image = styled.img`
  width: calc(100% / 5);
`;

export const PointsUl = styled.div`
  width: 100%;
  background-color: red;
  padding: 1em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export const PointsLi = styled.img`
  list-style-type: none;
  width: 2em;
  height: 2em;
  background-color: orange;
  margin: 1em;
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
