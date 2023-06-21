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
} from "./body-elements";
import memoji from "../../Img/memojic-mac.png";
import memoji3 from "../../Img/memoji3.png";
const ArticleMain = () => {
  return (
    <WrapperMain>
      <Sect>
        <TextSection>
          <Paragraph>Hello 👋🏽 I'm</Paragraph>
          <H1memoji>Diego Alfonso</H1memoji>
          <H2memoji>Web developer</H2memoji>
        </TextSection>
        <WrapperArticle>
          <ContainerImg>
            <MemojiMain src={memoji3}></MemojiMain>
            <Memoji src={memoji} />
          </ContainerImg>
        </WrapperArticle>
      </Sect>
      <Hr />
    </WrapperMain>
  );
};

export default ArticleMain;
