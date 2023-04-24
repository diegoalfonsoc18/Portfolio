import styled from "styled-components";
export const ContainerMain = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const ContainerSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  width: 70%;
  height: auto;
  align-items: center;
  justify-items: center;
`;
export const WrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 1024px) {
    width: 70%;
  }
`;
export const TittleSkills = styled.h2`
  display: flex;
  justify-content: center;
  color: #fff;
  margin: 5px auto;
`;
export const ContainerItems = styled.div`
  display: flex;
  gap: 5px;

  &.skills-container {
    justify-content: space-around;

    @media (min-width: 740px) {
      width: 40%;
    }
  }

  &.others-container {
    justify-content: space-evenly;
    width: 30%;
  }
`;
