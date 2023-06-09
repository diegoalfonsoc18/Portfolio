import styled from "styled-components";

export const SectionProjects = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const LinkImg = styled.a`
  flex: 0 0 auto;
  width: 300px;
  margin-right: 20px;
  scroll-snap-align: start;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const ImgProjects = styled.img`
  width: 100px;
  height: 100px;
`;
export const Arrows = styled.figure`
  display: flex;
  width: 40px;
  height: 40px;
`;
