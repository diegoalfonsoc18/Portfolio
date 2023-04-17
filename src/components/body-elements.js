import styled from "styled-components";

export const Sect = styled.div`
  width: 100%;
  height: 730px;
  display: flex;

  margin: 0;
`;

export const LinkIcon = styled.a``;
export const BodySection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const SectionBody = styled.div`
  display: flex;

  width: 100%;
  height: 600px;
  flex-direction: column;

  &.container-one {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    right: 75%;
    top: 500px;
    width: 33%;
  }

  &.container-emoji {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 33%;
    height: 100%;
  }
  &.container-two {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    right: 20%;
    top: 500px;
    width: 33%;
  }
`;

export const LineaVertical = styled.hr`
  border: none;
  border-left: 2px solid rgba(0, 157, 35, 1);
  height: 100vh;
  margin: 0;
`;

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

export const Paragraph = styled.h3`
  margin: 0;
  color: #fff;
`;
export const H1memoji = styled.h1`
  margin: 0;
  font-size: 3em;
  color: #fff;
`;
export const H2memoji = styled.h2`
  margin: 0;
  font-size: 2em;
  background: linear-gradient(
    90deg,
    rgba(75, 168, 16, 1) 0%,
    rgba(26, 235, 19, 1) 45%,
    rgba(39, 191, 22, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ContainerImg = styled.article`
  position: relative;
  width: 300px;
  height: 300px;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    transform: perspective(250px) rotateX(10deg) translateY(-5%) translateZ(0);
  }
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    linear-gradient(to bottom, transparent 10%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0) 95%);
    opacity: 0;
    transition: all 0.3s ease;
  }
  &:hover::before {
    opacity: 1;
  }
`;
export const MemojiMain = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  object-fit: cover;
  height: 82%;
  padding: 10px;

  @media (max-width: 640px) {
  }
`;
export const Memoji = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 345px;
  transform: translateY(25%);
  transition: 0.3s ease;
  opacity: 0;

  &:hover {
    opacity: 1;
    transform: translateY(10%);
  }
`;
export const Section = styled.div``;
