import styled from "styled-components";

export const SectionProyects = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const TitleProjects = styled.h2`
  display: flex;
  color: #fff;
  justify-content: center;
`;
export const WrapperProyects = styled.div`
  display: grid;
  height: 1000px;
  justify-content: center;
  align-content: center;
  grid-template-columns: 350px 350px;
  grid-template-rows: 350px 350px;
  column-gap: 30px;
  row-gap: 30px;
`;
export const ProyectImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: solid 0.1px #5b5b5b;
  &:hover {
    box-shadow: 0 0 20px 10px rgba(76, 76, 76, 1);
    border: none;
  }
`;

export const LinkProyects = styled.a`
  cursor: pointer;
`;
