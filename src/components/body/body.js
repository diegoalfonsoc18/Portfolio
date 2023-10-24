import React from "react";
import {
  WrapperMain,
  Sect,
  Memoji,
  ContainerImg,
  MemojiMain,
  WrapperArticle,
  Icons,
} from "./body-elements";
import memoji from "../../Img/memojic-mac.png";
import memoji3 from "../../Img/memoji3.png";
import jsIcon from "../../icon/jsIcon.png";
import htmlIcon from "../../icon/htmlIcon.png";
const ArticleMain = () => {
  const iconBanner = [
    {
      img: jsIcon,
    },
    {
      img: htmlIcon,
    },
  ];

  return (
    <WrapperMain>
      <Sect>
        <WrapperArticle>
          <ContainerImg>
            <MemojiMain src={memoji3}></MemojiMain>
            <Memoji src={memoji} />
          </ContainerImg>
          {iconBanner.map((icon) => (
            <WrapperArticle>
              <Icons src={icon.img} />
            </WrapperArticle>
          ))}
        </WrapperArticle>
      </Sect>
    </WrapperMain>
  );
};

export default ArticleMain;
