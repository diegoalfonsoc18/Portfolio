import styled from "styled-components";

export const SectionProyects = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 100vw;
`;

export const TitleProjects = styled.h2`
  display: flex;
  justify-content: center;
  color: #fff;
  width: 100vw;
`;
export const WrapperProyects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  row-gap: 20px;

  @media (min-width: 640px) {
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;
    height: 100%;

    grid-template-columns: 250px 250px;
    grid-template-rows: 250px 250px;
    column-gap: 30px;
    row-gap: 30px;
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ProyectImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  border: solid 0.1px #5b5b5b;
  &:hover {
    box-shadow: 0 0 20px 10px rgba(76, 76, 76, 1);
    border: none;
  }

  @media (min-width: 640px) {
    width: 100%;
    height: 100%;
  }
`;

export const LinkProyects = styled.a`
  cursor: pointer;
`;
