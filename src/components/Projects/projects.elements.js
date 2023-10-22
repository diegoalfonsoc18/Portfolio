import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  padding: 1.5rem 0;
  width: 100%;
`;

export const WrapperSlider = styled.div`
  display: flex;
  padding: 1.5rem;
  justify-content: center;
  width: 80%;
`;

export const WrapperCard = styled.div`
  flex: 0 0 220px;
  height: 340px;
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  margin-left: 1.5rem;
  background-color: ${(props) => (props.isOdd ? "#fff" : "#000")};
  box-shadow: 2px 4px 12px rgb(0, 0, 0, 0.08);
`;
export const WrapperImg = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: 18rem;
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
  color: ${(props) => (props.isOdd ? "#000" : "#fff")};
  top: 0;
  padding-left: 10px;
  margin-bottom: 1rem;
  font-size: 12px;
  margin-bottom: 1rem;
  margin: 10px 0 0 0;
`;

export const IconCard = styled.img`
  width: 1.3em;
  color: red;
`;
export const ButtonCard = styled.a`
  display: flex;
  justify-content: start;
  font-size: 21px;
  height: 1.6em;
  width: 100%;
  text-decoration: none;
  color: ${(props) => (props.isOdd ? "#000" : "#fff")};
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 12px;
  padding-left: 10px;
`;

export const Hr = styled.hr`
  width: 80%;
  border: none;
  height: 2px;
  background-color: var(--black);
  margin: 0;
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 12px;
  height: 50px;
  margin-top: 20px;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
export const TitleSection = styled.p`
  color: var(--black);
  font-size: 2em;
  font-weight: 500;
  line-height: 48px;
`;
