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
      top: "15%",
      right: "-20px",
      width: "30%",
    },
    {
      img: docker,
      top: "-5%",
      right: "30%",
      width: "27%",
    },
    {
      img: js,
      top: "80%",
      left: "-20%",
      width: "70%",
      filter: "blur(1px)",
    },
    {
      img: html,
      top: "40px",
      right: "-20%",
      width: "80px",
      maxWidth: "80%",
      filter: "blur(2px)",
    },
    {
      img: css,
      top: "20%",
      left: "20%",
      width: "35%",
      filter: "blur(1px)",
    },
    {
      img: react,
      top: "20px",
      left: "-20px",
      width: "40px",
      maxWidth: "100%",
    },
    {
      img: sql,
      top: "-3%",
      right: "-20%",
      width: "26%",
      filter: "blur(1px)",
    },
    {
      img: python,
      top: "165px",
      left: "30%",
      width: "36%",
      filter: "blur(0.6px)",
    },
    {
      img: photoshop,
      top: "50%",
      right: "0%",
      width: "30%",
      filter: "blur(1px)",
    },
    {
      img: nodejs,
      top: "280px",
      right: "10px",
      width: "50%",
    },
    {
      img: git,
      top: "-25px",
      left: "5px",
      width: "50%",
    },
    {
      img: pandas,
      top: "90px",
      left: "15%",
      width: "30%",
      filter: "blur(1px)",
    },
    {
      img: oracle,
      top: "190px",
      left: "7px",
      height: "2.8rem",
    },
    {
      img: machine,
      top: "230px",
      left: "10%",
      width: "35%",
      filter: "blur(1px)",
    },
    {
      img: styledComponent,
      top: "220px",
      left: "20px",
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
