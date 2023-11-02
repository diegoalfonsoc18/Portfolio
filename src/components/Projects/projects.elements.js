import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #fdd;
`;

export const ContainerCard = styled.div`
  width: 70%;
  height: auto;
  background-color: antiquewhite;
  
@media (min-width: 735px) {
    display: grid;
    grid-template: 50% 50% / 50% 50%;
    padding: 10px;
  grid-gap: 12px;
  }
  @media (min-width: 735px) {
    display: grid;
    
    grid-template: 50% 50% / 50% 50%;
    
  }
`;
export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 380px;
  width: 100%;
  background-color: ${(props) => (props.isOdd ? "rgb(0, 0, 0)" : "#fff")};
  //box-shadow: 2px 4px 12px rgb(0, 0, 0, 0.08);

  
`;
export const WrapperImg = styled.div`
  width: 100%;
  
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  
  
`;

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

export const TextCard = styled.p`
  display: flex;
  justify-content: start;
  width: 100%;
  color: ${(props) => (props.isOdd ? "#fff" : "rgb(0, 0, 0)")};
  top: 0;
  padding-left: 10px;
  margin-bottom: 1rem;
  font-size: 12px;
  margin-bottom: 1rem;
  margin: 10px 0 0 0;
`;


export const ButtonCard = styled.a`
  display: flex;
  justify-content: start;
  font-size: 21px;
  height: 1.6em;
  width: 100%;
  text-decoration: none;
  color: ${(props) => (props.isOdd ? "#fff" : "rgb(0, 0, 0)")};
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 12px;
  padding-left: 10px;
`;



export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 12px;
  margin: 10px 0 10px 0;
  height: 50px;
  

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
export const TitleSection = styled.p`
  color: var(--dark);
  font-size: 2em;
  font-weight: 500;
  line-height: 48px;
  margin: 0;
`;
