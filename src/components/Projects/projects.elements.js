import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #fff;
  margin-bottom: 20px;
`;

export const ContainerCard = styled.div`
   display: flex;
    overflow-x: auto; /* Creamos un div scrollable de forma horizontal */
    scrollbar-width: none; /* Escondemos la scrollbar en Firefox */
    padding: 1.5rem 0; 
    ::-webkit-scrollbar {
    display: none;
  }
    
`;

export const WrapperCard = styled.div`
  position: relative; /* Esta posición para poder posicionar el texto de la clase "body" */
    flex: 0 0 309px; /* flex grow 0 para que todas ocupen el mismo espacio, flex-shrink 0 para que no se encojan y flex-basis 309px de ancho. */
    height: 450px;
    overflow: hidden; /* Para poder ver el borde redondeado */
    margin-left: 1.5rem;
    border-radius: 18px;
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
  background-color: ${(props) => (props.isOdd ? "rgb(0, 0, 0)" : "#fff")};
 
  
`;




export const WrapperImg = styled.div`
  width: 100%;
  
`;

export const Image = styled.img`
  width: 100%;
  
  
  
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
