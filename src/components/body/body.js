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
      top: "70px",
      right: "0px",
      width: "2.5rem",
      height: "2.5rem",
    },
    {
      img: docker,
      top: "-10px",
      right: "50%",
      width: "30px",
      height: "30px",
    },
    {
      img: js,
      top: "200px",
      left: "-5%",
      width: "50px",
      height: "5em",
      filter: "blur(1px)",
    },
    {
      img: html,
      top: "40px",
      right: "-4%",
      width: "50%",
      height: "25%",
      filter: "blur(2px)",
    },
    {
      img: css,
      top: "50px",
      left: "20%",
      width: "2rem",
      height: "2rem",
      filter: "blur(1px)",
    },
    {
      img: react,
      top: "30px",
      left: "-20px",
      width: "2.4rem",
      height: "2.4rem",
    },
    {
      img: sql,
      top: "0px",
      right: "-17px",
      width: "2.5em",
      height: "2.5em",
      filter: "blur(1px)",
    },
    {
      img: python,
      top: "140px",
      left: "10%",
      width: "2.5em",
      height: "2.5em",
      filter: "blur(0.6px)",
    },
    {
      img: photoshop,
      top: "50%",
      right: "0%",
      width: "2rem",
      height: "2rem",
      filter: "blur(1px)",
    },
    {
      img: nodejs,
      top: "210px",
      left: "10px",
      width: "2.5em",
      height: "2.5em",
    },
    {
      img: git,
      top: "-10px",
      left: "5px",
      width: "3.5em",
      height: "3.5em",
      filter: "blur(1px)",
    },
    {
      img: pandas,
      top: "80px",
      left: "12%",
      width: "2.2rem",
      height: "2.2rem",
      filter: "blur(1px)",
    },
    {
      img: oracle,
      top: "110px",
      left: "7px",
      width: "2.8rem",
      height: "2.8rem",
    },
    {
      img: machine,
      top: "180px",
      right: "0%",
      width: "2.5rem",
      height: "2.5rem",
      filter: "blur(1px)",
    },
    {
      img: styledComponent,
      top: "140px",
      left: "30px",
      width: "2rem",
      height: "2rem",
      zIndex: "-2",
      filter: "blur(1px)",
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
                position: "absolute",
                top: icon.top,
                left: icon.left,
                right: icon.right,
                width: icon.width,
                height: icon.height,
                filter: icon.filter,
                zIndex: icon.zIndex,
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
                position: "absolute",
                top: icon.top,
                right: icon.right,
                left: icon.left,
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
