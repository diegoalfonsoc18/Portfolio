import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const WrapperSlider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 80%;
  height: auto;
  margin: 20px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }

  @media (min-width: 1440px) {
  }
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: min(15em, 25em);
  border-radius: 12px;
  background: #1e1b33;
  border-radius: 12px;
  margin: 20px 1em;
  /* @media (min-width: 768px) {
  } */
`;
export const WrapperImg = styled.div`
  width: 90%;
  height: auto;
  border-radius: 8px;
  padding: 10px 5px;
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
  color: var(--white);
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
  color: var(--white);
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
  background-color: var(--white);
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
