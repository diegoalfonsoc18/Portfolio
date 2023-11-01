import React from "react";
import {
  WrapperMain,
  Sect,
  Memoji,
  ContainerImg,
  MemojiMain,
  WrapperArticle,
  Icons,
  WrapperArticleIcons
} from "./body-elements";
import memoji from "../../Img/memojic-mac.png";
import memoji3 from "../../Img/memoji3.png";
import jsIcon from "../../icon/jsIcon.png";
import htmlIcon from "../../icon/htmlIcon.png";
import cssIcon from "../../icon/cssIcon.png";
const ArticleMain = () => {
  const iconBanner = [
    {
      img: jsIcon,
    },
    {
      img: htmlIcon,
    },
    {
      img: cssIcon,
    }
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
            <WrapperArticleIcons>
              <Icons src={icon.img} />
            </WrapperArticleIcons>
          ))}
        </WrapperArticle>
      </Sect>
    </WrapperMain>
  );
};

export default ArticleMain;
