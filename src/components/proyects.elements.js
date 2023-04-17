import styled from "styled-components";

export const SectionProyects = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleProjects = styled.h2`
  display: flex;
  justify-content: center;
  color: #fff;
`;
export const WrapperProyects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 20px;
  row-gap: 20px;

  @media (min-width: 640px) {
    display: grid;
    height: 1000px;
    justify-content: center;
    align-content: center;
    grid-template-columns: 350px 350px;
    grid-template-rows: 350px 350px;
    column-gap: 30px;
    row-gap: 30px;
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
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
`;

export const LinkProyects = styled.a`
  cursor: pointer;
  width: 250px;
  height: 250px;
`;
