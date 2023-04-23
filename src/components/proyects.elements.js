import styled from "styled-components";

export const SectionProyects = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100vw;
`;
export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
`;

export const TitleProjects = styled.h2`
  display: flex;
  justify-content: center;
  color: #fff;
  width: 100%;
`;

export const WrapperProyects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: auto;
  gap: 1em;

  @media (min-width: 740px) {
    display: grid;
    justify-items: center;
    height: auto;
    max-width: 500px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repaet(2, 1fr);
    grid-column-gap: 25px;
    grid-row-gap: 25px;
  }

  @media (min-width: 1300px) {
    display: grid;
    justify-items: center;
    max-width: 1000px;
    height: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repaet(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
`;

export const ProjectItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;

  @media (min-width: 600px) {
    width: 100%;
  }
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
