import React from "react";
import {
  ProyectImg,
  SectionProyects,
  WrapperProyects,
  LinkProyects,
} from "./proyects.elements";
import ProyectoOne from "../index.png";
import ProyectoTwo from "../proyecto2.png";
import ProyectoThree from "../proyecto3.png";
import ProyectoFour from "../proyecto4.png";

const Proyects = () => {
  return (
    <SectionProyects>
      <WrapperProyects>
        <LinkProyects
          href="https://diegoalfonsoc18.github.io/landing/"
          target="_blank"
        >
          <ProyectImg src={ProyectoOne}></ProyectImg>
        </LinkProyects>
      </WrapperProyects>
      <WrapperProyects>
        <LinkProyects
          href="https://diegoalfonsoc18.github.io/technical-documentation-page/"
          target="_blank"
        >
          <ProyectImg src={ProyectoTwo}></ProyectImg>
        </LinkProyects>
      </WrapperProyects>
      <WrapperProyects>
        <LinkProyects
          href="https://diegoalfonsoc18.github.io/tribute-page/"
          target="_blank"
        >
          <ProyectImg src={ProyectoThree}></ProyectImg>
        </LinkProyects>
      </WrapperProyects>
      <WrapperProyects>
        <LinkProyects
          href="https://www.appleshop.com.co/?v=8fab2b569f00"
          target="_blank"
        >
          <ProyectImg src={ProyectoFour}></ProyectImg>
        </LinkProyects>
      </WrapperProyects>
    </SectionProyects>
  );
};

export default Proyects;
