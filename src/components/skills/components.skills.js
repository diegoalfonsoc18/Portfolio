import styled from "styled-components";
export const ContainerMain = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperSkills = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  height: auto;
  @media (min-width: 768px) {
    width: 40%;
  }
`;
export const WrapperTitleSkills = styled.div`
  width: 80%;
`;
export const TitleSkill = styled.h2`
  display: flex;
  font-size: 2em;
  font-weight: 400;
  color: var(--white);
  margin: 0;
  justify-content: center;
  align-items: center;
`;

export const WrapperItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  align-items: center;
  flex-wrap: wrap;

  width: 8em;
  height: 3.3rem;
  flex-shrink: 0;
  border-radius: 35px;
  border: 1px solid rgba(231, 231, 231, 0.4);

  box-shadow: 20px 20px 50px 0px rgba(49, 49, 49, 0.05);
`;

export const ImgItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 52px;
  position: relative;
  z-index: 0;

  ::before {
    content: "";
    //background: var(--black);
    opacity: 0.3;
    border-radius: 52px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;

export const Iconitem = styled.img`
  width: 60%;
  height: 60%;
`;
export const ItemText = styled.p`
  font-size: small;
  margin: 0;
  color: var(--white);
`;
