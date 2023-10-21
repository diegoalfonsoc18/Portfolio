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
} from "./body-elements";
import memoji from "../../Img/memojic-mac.png";
import memoji3 from "../../Img/memoji3.png";

const ArticleMain = () => {
  return (
    <WrapperMain>
      <Sect>
        <WrapperArticle>
          <ContainerImg>
            <MemojiMain src={memoji3}></MemojiMain>
            <Memoji src={memoji} />
          </ContainerImg>
        </WrapperArticle>
        <WrapperArticle>
          <TextSection>
            <Paragraph>`Hello 👋🏽 I'm Diego`</Paragraph>
            <H1memoji>Diego Alfonso</H1memoji>
            <H2memoji>Web developer</H2memoji>
          </TextSection>
        </WrapperArticle>
      </Sect>
    </WrapperMain>
  );
};

export default ArticleMain;
