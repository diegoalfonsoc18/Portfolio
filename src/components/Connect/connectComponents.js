import styled from "styled-components";

export const WrapperConnect = styled.div`
  width: 100%;
  height: auto;

  :nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
  }
`;

export const ContainerSocial = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: antiquewhite;
  height: auto;
  width: 100%;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;
export const ContainerItemSocial = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 80px;
  width: 100%;
`;
export const Paragrahp = styled.p`
  font-size: xx-large;
  color: var(--white);
`;
export const ImgSocial = styled.img`
  height: 40px;
  width: 40px;
`;
export const ConnectText = styled.h2`
  color: var(--white);
`;

export const WrapperMail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: #353745;
`;
