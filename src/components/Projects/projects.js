import React, { useState } from "react";
import {
  Wrapper,
  WrapperImage,
  WrapperSlider,
  Image,
  PointsUl,
  PointsLi,
} from "./projects.elements";
import ProjectOne from "../../Img/index.png";
import ProjectTwo from "../../Img/proyecto2.png";
import ProjectThree from "../../Img/proyecto3.png";
import ProjectFour from "../../Img/proyecto4.png";
import ProjectFive from "../../Img/proyecto5.png";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imgs = [
    { img: ProjectOne, id: 1 },
    { img: ProjectTwo, id: 2 },
    { img: ProjectThree, id: 3 },
    { img: ProjectFour, id: 4 },
    { img: ProjectFive, id: 5 },
  ];

  return (
    <Wrapper>
      <WrapperSlider>
        <WrapperImage>
          <Image src={imgs[currentIndex].img}></Image>
        </WrapperImage>
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
