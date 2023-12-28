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
    },
    {
      img: docker,
    },
    {
      img: js,
    },
    {
      img: html,
    },
    {
      img: css,
    },
  ];

  return (
    <WrapperMain>
      <Sect>
        <WrapperBoddyIcons>
          {icons.map((icon) => (
            <WrapperIcons src={icon.img} />
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
            <WrapperIcons src={icon.img} />
          ))}
        </WrapperBoddyIcons>
      </Sect>
    </WrapperMain>
  );
};

export default ArticleMain;
