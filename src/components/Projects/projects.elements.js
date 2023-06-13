import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const WrapperSlider = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px; /* Ancho del contenedor */
  height: 200px; /* Altura del contenedor */
  position: relative;
  overflow: hidden;
`;

export const WrapperImage = styled.div``;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out;
`;

export const ItemImage = styled.div``;

export const WrapperArrow = styled.div`
  width: 50px;
  height: 50px;
`;
export const ArrowRight = styled.img`
  width: 100%;
  height: 100%;
`;
export const ArrowLeft = styled.img`
  width: 100%;
  height: 100%;
`;
