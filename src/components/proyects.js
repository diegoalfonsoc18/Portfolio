import React from "react";
import {
  ProyectImg,
  SectionProyects,
  WrapperProyects,
} from "./proyects.elements";
import ProyectoOne from "../index.png";
import ProyectoTwo from "../proyecto2.png";

const Proyects = () => {
  return (
    <SectionProyects>
      <WrapperProyects>
        <ProyectImg src={ProyectoOne}></ProyectImg>
      </WrapperProyects>
      <WrapperProyects>
        <ProyectImg src={ProyectoTwo}></ProyectImg>
      </WrapperProyects>
      <WrapperProyects>
        <ProyectImg></ProyectImg>
      </WrapperProyects>
      <WrapperProyects>
        <ProyectImg></ProyectImg>
      </WrapperProyects>
    </SectionProyects>
  );
};

export default Proyects;
