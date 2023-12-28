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
import github from "../../icon/github.png";
import docker from "../../icon/docker.png";
import js from "../../icon/js.png";
import html from "../../icon/html.png";
import css from "../../icon/bodyCss.png";

const ArticleMain = () => {
  const icons = [
    {
      img: github,
      top: "-50px",
      left: "-10px",
    },
    {
      img: docker,
      top: "-20px",
      left: "40px",
    },
    {
      img: js,
      top: "20px",
      left: "10px",
    },
    {
      img: html,
      top: "40px",
      left: "20px",
    },
    {
      img: css,
      top: "100px",
      left: "0px",
    },
  ];

  return (
    <WrapperMain>
      <Sect>
        <WrapperBoddyIcons>
          {icons.map((icon) => (
            <WrapperIcons
              key={icon.img}
              src={icon.img}
              style={{
                position: "relative",
                top: icon.top,
                left: icon.left,
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
                  Web developer with experience in personal projects using HTML,
                  CSS, JavaScript, React, and MySQL. Passionate about continuous
                  learning and committed to delivering creative and quality
                  solutions.
                </Paragrahp>
              </WrapperText>
            </WrapperTextDiv>
          </WrapperBody>
        </WrapperArticle>
        <WrapperBoddyIcons>
          {icons.map((icon) => (
            <WrapperIcons key={icon.img} src={icon.img} />
          ))}
        </WrapperBoddyIcons>
      </Sect>
    </WrapperMain>
  );
};

export default ArticleMain;
