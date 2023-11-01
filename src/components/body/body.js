import React from "react";
import {
  WrapperMain,
  Sect,
  Memoji,
  ContainerImg,
  MemojiMain,
  WrapperArticle,
  Icons,
  WrapperArticleIcons,
  WrapperIcons
} from "./body-elements";
import memoji from "../../Img/memojic-mac.png";
import memoji3 from "../../Img/memoji3.png";
import jsIcon from "../../icon/jsIcon.png";
import htmlIcon from "../../icon/htmlIcon.png";
import cssIcon from "../../icon/cssIcon.png";
import pythonIcon from "../../icon/pythonIcon.png";
import reacIcon from "../../icon/reactIcon.png";
import dataIcon from "../../icon/databaseIcon.png";
const ArticleMain = () => {
  const iconBanner = [
    
    {
      img: htmlIcon,
    },
    {
      img: cssIcon,
    },
    {
      img: jsIcon,
    },
    {
      img: pythonIcon,
    },
    {
      img: reacIcon,
    }, 
    {
      img: dataIcon,
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
          <WrapperIcons>
          {iconBanner.map((icon, index) => (
            <WrapperArticleIcons key={index} >
              <Icons src={icon.img} key={icon.key} />
            </WrapperArticleIcons>
          ))}
          </WrapperIcons>
        </WrapperArticle>
      </Sect>
    </WrapperMain>
  );
};

export default ArticleMain;
