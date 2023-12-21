import styled from "styled-components";

export const WrapperConnect = styled.div`
  width: 100%;
  height: auto;
  background-color: #cc0;

  :nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
  }
  :nth-child(2) {
    width: 100%;
    height: 50px;
  }
`;

export const ConnectText = styled.h2`
  color: var(--white);
`;
