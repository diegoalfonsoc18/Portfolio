import React, { useState } from "react";
import {
  Wrapper,
  WrapperCard,
  WrapperSlider,
  Image,
  PointsUl,
  PointsLi,
  Button,
  WrapperInfo,
  IconCard,
} from "./projects.elements";
import ProjectOne from "../../Img/index.png";
import ProjectTwo from "../../Img/proyecto3.png";
import ProjectThree from "../../Img/proyecto4.png";
import ProjectFour from "../../Img/proyecto5.png";
import IconGitHub from "../../icon/githubProject.png";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imgs = [
    {
      img: ProjectOne,
      id: 1,
      link: "https://diegoalfonsoc18.github.io/landing/",
    },
    {
      img: ProjectTwo,
      id: 2,
      link: "https://diegoalfonsoc18.github.io/tribute-page/",
    },
    {
      img: ProjectThree,
      id: 3,
      link: "https://diegoalfonsoc18.github.io/Project-portfolio/",
    },
    {
      img: ProjectFour,
      id: 4,
      link: "https://diegoalfonsoc18.github.io/Hackathon-2023/",
    },
  ];

  return (
    <Wrapper>
      <WrapperSlider>
        <WrapperCard>
          <Image src={imgs[currentIndex].img}></Image>
          <WrapperInfo>
            <IconCard src={IconGitHub} />
            <Button
              href={imgs[currentIndex].link}
              target="_blank"
              className="button-hover"
            >
              Go
            </Button>
          </WrapperInfo>
        </WrapperCard>
      </WrapperSlider>
      <PointsUl>
        {imgs.map((_, index) => (
          <PointsLi
            onClick={() => {
              setCurrentIndex(index);
            }}
          ></PointsLi>
        ))}
      </PointsUl>
    </Wrapper>
  );
};
export default Projects;
