import React, { useEffect, useState } from "react";
import {
  WrapperMain,
  Sect,
  Memoji,
  ContainerImg,
  MemojiMain,
  WrapperArticle,
  WrapperIcons,
  WrapperText,
  Text,
  Text2,
  Paragrahp,
  WrapperTextDiv,
  WrapperBody,
  WrapperBoddyIcons,
} from "./body-elements";
import memoji from "../../Img/memojic-mac.png";
import memoji3 from "../../Img/memoji3.png";
import github from "../../icon/githubBody.png";
import docker from "../../icon/docker.png";
import js from "../../icon/js.png";
import html from "../../icon/html.png";
import css from "../../icon/bodyCss.png";
import react from "../../icon/reactBody.png";
import sql from "../../icon/sqlBody.png";
import python from "../../icon/pythonBody.png";
import photoshop from "../../icon/photoshopBody.png";
import nodejs from "../../icon/nodejs.png";
import git from "../../icon/gitBody.png";
import pandas from "../../icon/pandasBody.png";
import machine from "../../icon/machineBody.png";
import oracle from "../../icon/oracleBody.png";
import styledComponent from "../../icon/styledComponents.png";
const ArticleMain = () => {
  const icons = [
    {
      img: github,
      top: "90px",
      left: "50px",
      width: "2.5rem",
      height: "2.5rem",
    },
    {
      img: docker,
      top: "-20px",
      right: "-10px",
      width: "30%",
      height: "20%",
    },
    {
      img: js,
      top: "-20px",
      left: "-25%",
      width: "50%",
      height: "40%",
    },
    {
      img: html,
      top: "40px",
      right: "-10px",
      width: "2.5rem",
      height: "2.5rem",
      filter: "blur(2px)",
    },
    {
      img: css,
      top: "70px",
      left: "0px",
      width: "2rem",
      height: "2rem",
      filter: "blur(2px)",
    },
    {
      img: react,
      top: "100px",
      right: "-10px",
      width: "2.5rem",
      height: "2.5rem",
    },
    {
      img: sql,
      top: "-100px",
      left: "50px",
      width: "40%",
      height: "30%",
    },
    {
      img: python,
      right: "-10px",
      width: "2.5rem",
      height: "2.5rem",
    },
    {
      img: photoshop,
      top: "-70px",
      left: "-10px",
      width: "2rem",
      height: "2rem",
    },
    {
      img: nodejs,
      right: "-10px",
      width: "2.5rem",
      height: "2.5rem",
    },
    {
      img: git,
      top: "40px",
      left: "0px",
      width: "4rem",
      height: "4rem",
    },
    {
      img: pandas,
      right: "-10px",
      width: "2.5rem",
      height: "2.5rem",
    },
    {
      img: oracle,
      top: "-120px",
      left: "-20px",
      width: "2.8rem",
      height: "2.8rem",
    },
    {
      img: machine,
      right: "-10px",
      width: "2.5rem",
      height: "2.5rem",
    },
    {
      img: styledComponent,
      top: "-100px",
      left: "30px",
      width: "2.5rem",
      height: "2.5rem",
    },
  ];

  const incosPares = icons.filter((_, index) => index % 2 === 0);
  const iconsImpares = icons.filter((_, index) => index % 2);

  return (
    <WrapperMain>
      <Sect>
        <WrapperBoddyIcons>
          {incosPares.map((icon) => (
            <WrapperIcons
              key={icon.img}
              src={icon.img}
              style={{
                position: "relative",
                top: icon.top,
                left: icon.left,
                width: icon.width,
                height: icon.height,
                filter: icon.filter,
              }}
            />
          ))}
        </WrapperBoddyIcons>
        <WrapperArticle>
          <WrapperBody>
            <ContainerImg>
              <MemojiMain src={memoji3}></MemojiMain>
              <Memoji src={memoji} />
            </ContainerImg>
            <WrapperTextDiv>
              <WrapperText>
                <Text>Hi, I am Diego</Text>
              </WrapperText>
              <WrapperText>
                <Text2>Web Developer</Text2>
              </WrapperText>
              <WrapperText>
                <Paragrahp>
                  Web developer experienced in HTML, CSS, JavaScript, React, and
                  MySQL. Committed to continuous learning and delivering
                  creative, quality solutions.
                </Paragrahp>
              </WrapperText>
            </WrapperTextDiv>
          </WrapperBody>
        </WrapperArticle>
        <WrapperBoddyIcons>
          {iconsImpares.map((icon) => (
            <WrapperIcons
              key={icon.img}
              src={icon.img}
              style={{
                position: "relative",
                top: icon.top,
                right: icon.right,
                width: icon.width,
                height: icon.height,
                filter: icon.filter,
              }}
            />
          ))}
        </WrapperBoddyIcons>
      </Sect>
    </WrapperMain>
  );
};

export default ArticleMain;
