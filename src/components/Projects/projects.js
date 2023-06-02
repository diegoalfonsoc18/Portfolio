import React from "react";
import { ImgProjects, LinkImg, SectionProjects } from "./projects.elements";
import ProyectoOne from "../../Img/index.png";
import ProyectoTwo from "../../Img/proyecto2.png";
import ProyectoThree from "../../Img/proyecto3.png";
import ProyectoFour from "../../Img/proyecto4.png";

const Projects = () => {
  return (
    <SectionProjects>
      {[ProyectoOne, ProyectoTwo, ProyectoThree, ProyectoFour].map((srcUrl) => (
        <LinkImg>
          <ImgProjects src={srcUrl} alt="img"></ImgProjects>
        </LinkImg>
      ))}
    </SectionProjects>
  );
};
export default Projects;
