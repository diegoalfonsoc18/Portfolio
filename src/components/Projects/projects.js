import React, { useState } from "react";
import {
  Wrapper,
  WrapperCard,
  WrapperSlider,
  Image,
  WrapperImg,
  WrapperInfo,
  IconCard,
  TextCard,
  ButtonCard,
} from "./projects.elements";
import ProjectOne from "../../Img/index.png";
import ProjectTwo from "../../Img/proyecto3.png";
import ProjectThree from "../../Img/proyecto4.png";
import ProjectFour from "../../Img/proyecto5.png";
import IconGitHub from "../../icon/githubProject.png";

const Projects = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  const imgs = [
    {
      title: "Landing Page",
      img: ProjectOne,
      id: 1,
      link: "https://diegoalfonsoc18.github.io/landing/",
    },
    {
      title: "Landing Page",
      img: ProjectTwo,
      id: 2,
      link: "https://diegoalfonsoc18.github.io/tribute-page/",
    },
    {
      title: "Landing Page",
      img: ProjectThree,
      id: 3,
      link: "https://diegoalfonsoc18.github.io/Project-portfolio/",
    },
    {
      title: "Landing Page",
      img: ProjectFour,
      id: 4,
      link: "https://diegoalfonsoc18.github.io/Hackathon-2023/",
    },
  ];

  return (
    <Wrapper>
      <WrapperSlider>
        {imgs.map((imgs) => (
          <WrapperCard>
            <WrapperImg>
              <Image src={imgs.img}></Image>;
            </WrapperImg>
            <WrapperInfo>
              <TextCard>{`${imgs.title}`}</TextCard>
              <IconCard src={IconGitHub} />
            </WrapperInfo>
            <ButtonCard>Live Now</ButtonCard>
          </WrapperCard>
        ))}
      </WrapperSlider>
    </Wrapper>
  );
};
export default Projects;
