import React from "react";
import {
  WrapperMain,
  Sect,
  Memoji,
  Paragraph,
  H1memoji,
  H2memoji,
  ContainerImg,
  MemojiMain,
  TextSection,
  WrapperArticle,
  Hr,
  Icons,
  WrapperIcons,
} from "./body-elements";
import memoji from "../../Img/memojic-mac.png";
import memoji3 from "../../Img/memoji3.png";
import html from "../../icon/html.png";
import javascript from "../../icon/js.png";
const ArticleMain = () => {
  const icons = [html, javascript];

  return (
    <WrapperMain>
      <Sect>
        <WrapperArticle>
          <ContainerImg>
            <MemojiMain src={memoji3}></MemojiMain>
            <Memoji src={memoji} />
          </ContainerImg>
          {icons.map((icon) => (
            <WrapperIcons>
              <Icons src={icon} />
            </WrapperIcons>
          ))}
        </WrapperArticle>
        <TextSection>
          <Paragraph>`Hello 👋🏽 I'm Diego`</Paragraph>
          <H1memoji>Diego Alfonso</H1memoji>
          <H2memoji>Web developer</H2memoji>
        </TextSection>
      </Sect>
      <Hr />
    </WrapperMain>
  );
};

export default ArticleMain;
