import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const WrapperSlider = styled.div`
  display: flex;
  padding: 1.5rem;
  justify-content: center;
  width: 80%;
`;

export const WrapperCard = styled.div`
  flex: 0 0 250px;
  height: 400px;
  overflow: hidden;
  border-radius: 18px;
  margin-left: 1.5rem;
  box-shadow: 2px 4px 12px rgb(0, 0, 0, 0.08);
  /* @media (min-width: 768px) {
  } */
`;
export const WrapperImg = styled.div``;

export const Image = styled.img`
  width: 100%;
  color: var(--black);
`;

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

export const TextCard = styled.p`
  color: var(--black);
  top: 0;
  padding: 5px;
  margin-bottom: 1rem;
`;

export const IconCard = styled.img`
  width: 1.3em;
  color: red;
`;
export const ButtonCard = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.6em;
  width: 80%;
  font-size: smaller;
  text-decoration: none;
  color: var(--black);
  font-weight: bold;
  border-radius: 5px;
  margin-bottom: 12px;
  border: 0.5px solid rgba(231, 231, 231, 0.4);
  /* background: var(
    --linear,
    linear-gradient(88deg, #0500fa 11.52%, #e01e5a 100%)
  ); */
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
