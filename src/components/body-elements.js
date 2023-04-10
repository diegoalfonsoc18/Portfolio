import styled from "styled-components";

export const Sect = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Paragraph = styled.h3`
  margin: 0;
`;
export const H1memoji = styled.h1`
  margin: 0;
  font-size: 3em;
`;
export const H2memoji = styled.h2`
  margin: 0;
  font-size: 2em;
  color: #03c03c;
`;

export const ContainerImg = styled.article`
  position: relative;
  width: 250px;
  transition: all 0.3s ease;

  &.article MemojiMain {
    box-shadow: 0 60px 60px -60px rgba(0, 30, 255, 0.5);
    border-radius: 4px;
    object-fit: cover;
    width: 100%;
  }

  &.article img:last-child {
    position: absolute;
    width: 200px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(25%);
    transition: 0.3s ease;
    opacity: 0;
  }
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
  box-shadow: 0 60px 60px -60px rgba(0, 30, 255, 0.5);
  border-radius: 4px;
  object-fit: cover;
  width: 100%;
`;
export const Memoji = styled.img`
  position: absolute;
  width: 200px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateY(25%);
  transition: 0.3s ease;
  opacity: 0;

  &:hover {
    opacity: 1;
    transform: translateY(10%);
  }
`;
export const Section = styled.div``;
