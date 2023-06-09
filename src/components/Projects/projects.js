import React from "react";
import {
  Wrapper,
  WrapperImage,
  WrapperSlider,
  Image,
  ArrowLeft,
  ArrowRight,
  WrapperArrow,
} from "./projects.elements";
import ProjectOne from "../../Img/index.png";
import ProjectTwo from "../../Img/proyecto2.png";
import ProjectThree from "../../Img/proyecto3.png";
import ProjectFour from "../../Img/proyecto4.png";
import ProjectFive from "../../Img/proyecto5.png";
import ArrowL from "../../icon/flecha.png";
import ArrowR from "../../icon/flechaR.png";

const Projects = () => {
  return (
    <Wrapper>
      <WrapperSlider>
        <WrapperArrow>
          <ArrowLeft src={ArrowL} onClick={() => {}} />
        </WrapperArrow>
        {[ProjectOne, ProjectTwo, ProjectThree, ProjectFour, ProjectFive].map(
          (srcUrl) => (
            <WrapperImage>
              <Image src={srcUrl}></Image>
            </WrapperImage>
          )
        )}
        <WrapperArrow>
          <ArrowRight src={ArrowR} />
        </WrapperArrow>
      </WrapperSlider>
    </Wrapper>
  );
};
export default Projects;
