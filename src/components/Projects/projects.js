import React from "react";
import {
  ImgProjects,
  LinkImg,
  SectionProjects,
  Arrows,
  WrapperCarrousel,
} from "./projects.elements";
import ProyectoOne from "../../Img/index.png";
import ProyectoTwo from "../../Img/proyecto2.png";
import ProyectoThree from "../../Img/proyecto3.png";
import ProyectoFour from "../../Img/proyecto4.png";
import arrowL from "../../icon/flecha.png";
import arrowR from "../../icon/flechaR.png";

const Projects = () => {
  return (
    <SectionProjects>
      <WrapperCarrousel>
        <Arrows>
          <img src={arrowL} alt="arrowL" />
        </Arrows>
        {[ProyectoOne, ProyectoTwo, ProyectoThree, ProyectoFour].map(
          (srcUrl) => (
            <LinkImg>
              <ImgProjects src={srcUrl} alt="img"></ImgProjects>
            </LinkImg>
          )
        )}
        <Arrows>
          <img src={arrowR} alt="arrowR" />
        </Arrows>
      </WrapperCarrousel>
    </SectionProjects>
  );
};
export default Projects;
