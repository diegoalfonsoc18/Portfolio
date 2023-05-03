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
  background: linear-gradient(
    90deg,
    rgba(75, 168, 16, 1) 0%,
    rgba(26, 235, 19, 1) 45%,
    rgba(39, 191, 22, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const LineaVertical = styled.hr`
  border: none;
  border-left: 2px solid rgba(0, 157, 35, 1);
  height: 50%;
  margin: 0;
`;
