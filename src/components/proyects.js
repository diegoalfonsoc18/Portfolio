import React from "react";
import { ImgProjects, LinkImg, SectionProjects } from "./proyects.elements";
import ProyectoOne from "../index.png";
import ProyectoTwo from "../proyecto2.png";
import ProyectoThree from "../proyecto3.png";
import ProyectoFour from "../proyecto4.png";

const Proyects = () => {
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
export default Proyects;
