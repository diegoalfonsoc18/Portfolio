import styled from "styled-components";

export const SectionProjects = styled.div`
  aspect-ratio: 10 / 14;
  width: 300px;
  position: relative;
  display: flex;
  overflow: scroll;
  scroll-snap-type: x mandatory;
`;

export const LinkImg = styled.a`
  width: 100%;
  left: 0;
  position: sticky;
  object-fit: cover;
  border-radius: 5px;
  scroll-snap-alignx: center;
`;

export const ImgProjects = styled.img`
  height: 100%;
`;
