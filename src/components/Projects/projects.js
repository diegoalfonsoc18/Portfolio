import React, { useState } from "react";
import {
  Wrapper,
  WrapperCard,
  WrapperSlider,
  Image,
  PointsUl,
  PointsLi,
  Button,
} from "./projects.elements";
import ProjectOne from "../../Img/index.png";
import ProjectTwo from "../../Img/proyecto3.png";
import ProjectThree from "../../Img/proyecto4.png";
import ProjectFour from "../../Img/proyecto5.png";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imgs = [
    { img: ProjectOne, id: 1 },
    { img: ProjectTwo, id: 2 },
    { img: ProjectThree, id: 3 },
    { img: ProjectFour, id: 4 },
  ];

  return (
    <Wrapper>
      <WrapperSlider>
        <WrapperCard>
          <Image src={imgs[currentIndex].img}></Image>
          <Button className="button-hover">Go</Button>
        </WrapperCard>
      </WrapperSlider>

      <PointsUl>
        {imgs.map((_, index) => (
          <PointsLi
            onClick={() => {
              setCurrentIndex(index);
              console.log("Hola!!");
            }}
          ></PointsLi>
        ))}
      </PointsUl>
    </Wrapper>
  );
};
export default Projects;
