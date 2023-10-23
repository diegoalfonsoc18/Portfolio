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

export const ArticleMain = () => {
  const icons = [{ iconHtml }];
  return (
    <WrapperMain>
      <Sect>
        <WrapperArticle>
          <ContainerImg>
            <MemojiMain src={memoji3}></MemojiMain>
            <Memoji src={memoji} />
          </ContainerImg>
        </WrapperArticle>

        {icons.map((Icon, index) => (
          <WrapperArticle>
            <iconBanner />
          </WrapperArticle>
        ))}
      </Sect>
    </WrapperMain>
  );
};
