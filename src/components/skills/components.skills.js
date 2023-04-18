import styled from "styled-components";
export const ContainerMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const ContainerSkills = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 200px;
  width: 400px;
  height: 300px;
  align-items: center;
  justify-items: center;
`;
export const WrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const TittleSkills = styled.h2`
  display: flex;
  justify-content: center;
  color: #fff;
`;
export const ContainerItems = styled.div`
  display: flex;
  width: auto;
  justify-content: space-around;
  gap: 5px;
`;
