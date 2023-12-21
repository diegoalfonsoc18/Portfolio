import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  height: 400px;
`;
export const WrapperBackground = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    filter: blur(10px);
    z-index: -1;
  }
`;
export const WrapperCard = styled.div`
  height: 100px;
  border-radius: 18px;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
  background-color: ${(props) => (props.isOdd ? "rgb(0, 0, 0)" : "#f5f5f7")};
  @media (min-width: 768px) {
  }
`;

export const WrapperImg = styled.div`
  width: 100%;

  height: 100%;
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
  padding: 12px;
  margin: 10px 0 10px 0;
  height: 50px;
  justify-content: center;
  align-items: center;
`;
export const TitleSection = styled.p`
  color: var(--white);
  font-size: 2em;
  font-weight: 400;
  margin: 0;
`;
