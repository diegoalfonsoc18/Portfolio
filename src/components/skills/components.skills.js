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
`;
export const TittleSkills = styled.h2`
  display: flex;
  justify-content: center;
  color: #fff;
  margin: 5px auto;
`;
export const ContainerItems = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  gap: 5px;
@media (min-width: 600px) {
  width: 60%;
}
  @media (min-width: 1300px) {
    width: 40%;
`;
