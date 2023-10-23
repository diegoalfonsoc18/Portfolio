import React from "react";
import {
  WrapperMain,
  Sect,
  Memoji,
  ContainerImg,
  MemojiMain,
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
      </Sect>
    </WrapperMain>
  );
};

export default ArticleMain;
