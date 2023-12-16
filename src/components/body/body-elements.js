import styled from "styled-components";

export const WrapperMain = styled.div`
  display: flex;
  justify-content: center;
  
  width: 100%;
  
`;

export const Sect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;

export const WrapperArticle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  position: relative;
`;

export const WrapperText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 15em;
  
`;

export const Text = styled.p`
  color: var(--white);
  font-size: large;
  margin: 0;
`;
export const TitleText = styled.h2`
  color: var(--white);
  font-size: xx-large;
  margin: 0;
`;
export const Text2 = styled.p`
  color: var(--white);
  font-size: large;
  margin: 0;
`;


export const ContainerImg = styled.div`
  position: relative;
  z-index: 1;
  height: 15em;
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
    /* linear-gradient(to bottom, transparent 10%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0) 95%); */
    opacity: 0;
    transition: all 0.3s ease;
  }
  &:hover::before {
    opacity: 1;
  }
`;
export const WrapperIcons = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100px;
  
`;

export const WrapperArticleIcons = styled.span`
  position: relative;
  z-index: 2;
  width: 40px;
  margin: 0 10px;
  height: 40px;
  
  
  
`;

export const Icons = styled.img`
  width: 100%;
  height: 100%;
  border: 0;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  
  
  animation: animate 15s linear infinite;
  animation-duration: calc(125s / 20);
  :nth-child(even){
    background: #ff2d75;
    box-shadow: 0 0 0 10px #ff2d7544,
    0 0 50px #ff2d75, 
    0 0 100px #ff2d75;
  animation: animate 15s linear infinite;
  }

  @keyframes animate{
    0% {
      transform: translateY(100vh) scale(0);
    }
    100%{
      transform: translateY(-10vh) scale(1);
    }
  }
 
`;


export const MemojiMain = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  object-fit: cover;
  height: 60%;
  padding: 10px;

  @media (min-width: 740px) {
    height: 80%;
  }
`;
export const Memoji = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 6;
  height: 11em;
  transform: translateY(25%);
  transition: 0.3s ease;
  opacity: 0;

  @media (min-width: 740px) {
    height: 15em;
  }

  &:hover {
    opacity: 1;
    transform: translateY(10%);
  }
`;




export const TextSection = styled.div`
  width: 80%;
  height: 15em;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;








