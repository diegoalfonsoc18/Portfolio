import React from "react";
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
  const imgs = [ProjectOne, ProjectTwo, ProjectThree, ProjectFour, ProjectFive];
  return (
    <Wrapper>
      <WrapperSlider>
        {imgs.map((img) => (
          <WrapperImage>
            <Image src={img}></Image>
          </WrapperImage>
        ))}
      </WrapperSlider>
      <PointsUl>
        <PointsLi></PointsLi>
        <PointsLi></PointsLi>
        <PointsLi></PointsLi>
        <PointsLi></PointsLi>
        <PointsLi></PointsLi>
      </PointsUl>
    </Wrapper>
  );
};
export default Projects;
