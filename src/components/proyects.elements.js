import styled from "styled-components";

export const SectionProyects = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  justify-content: center;

  grid-template-columns: 300px 300px;
  grid-template-rows: 300px 300px;
  column-gap: 20px;
  row-gap: 20px;
  margin-top: 100px;
`;
export const WrapperProyects = styled.div`
  transition: all 0.3 ease;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  &:hover {
    box-shadow: 0 0 20px 10px rgba(76, 76, 76, 1);
  }
`;
export const ProyectImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: solid 0.1px #5b5b5b;
`;

export const LinkProyects = styled.a`
  cursor: pointer;
`;
