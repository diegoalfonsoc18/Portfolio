import styled from "styled-components";

export const ContainerColumn = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ContainerOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 30%;
  left: 0;
  width: 15%;
  height: 100%;
`;
export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LinkIcon = styled.a`
  width: 1.5em;
  height: 1.5em;
  margin-bottom: 0.4em;
`;
export const IconContact = styled.img`
  width: 100%;
  height: 100%;
`;

export const LineaVertical = styled.hr`
  border: none;
  border-left: 2px solid var(--green);
  height: 50%;
  margin: 0;
`;
