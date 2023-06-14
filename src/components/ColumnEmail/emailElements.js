import styled from "styled-components";

export const WrapperColumnEmail = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ContainerEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 30%;
  right: 0;
  width: 15%;
  height: 100%;
`;

export const LinkEmailIcon = styled.a``;

export const MailText = styled.p`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  white-space: nowrap;
  color: var(--green);
`;

export const LineaVertical = styled.hr`
  border: none;
  border-left: 2px solid var(--green);
  height: 50%;
  margin: 0;
`;
