import React, { useState } from "react";
import {
  Wrapper,
  WrapperCard,
  Image,
  WrapperImg,
  WrapperInfo,
  TextCard,
  ButtonCard,
  TitleSection,
  WrapperTitle,
  ContainerCard,
  WrapperBackground,
  ButtonR,
  ButtonL,
} from "./projects.elements";
import ProjectOne from "../../Img/index.png";
import ProjectTwo from "../../Img/proyecto3.png";
import ProjectThree from "../../Img/proyecto4.png";
import ProjectFour from "../../Img/proyecto5.png";
import IconGitHub from "../../icon/githubProject.png";
import IconInternet from "../../icon/global.png";
import IconArrowR from "../../icon/right-arrow.png";
import IconArrowL from "../../icon/left-arrow.png";

const Projects = () => {
  const imgs = [
    {
      title: "Landing Page",
      img: ProjectOne,
      id: 1,
      link: "https://diegoalfonsoc18.github.io/landing/",
      icon: IconGitHub,
      backgroundImage: ProjectOne,
    },
    {
      title: "Apple Shop",
      img: ProjectTwo,
      id: 2,
      link: "https://diegoalfonsoc18.github.io/tribute-page/",
      icon: IconGitHub,
      backgroundImage: ProjectTwo,
    },
    {
      title: "WordPress",
      img: ProjectThree,
      id: 3,
      link: "https://www.appleshop.com.co/?v=8fab2b569f00",
      icon: IconInternet,
      backgroundImage: ProjectThree,
    },
    {
      title: "Landing Page",
      img: ProjectFour,
      id: 4,
      link: "https://diegoalfonsoc18.github.io/Hackathon-2023/",
      icon: IconGitHub,
      backgroundImage: ProjectFour,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imgs.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + imgs.length) % imgs.length);
  };

  return (
    <Wrapper>
      <WrapperTitle>
        <TitleSection>Projects</TitleSection>
      </WrapperTitle>
      <ContainerCard>
        <ButtonL src={IconArrowL} onClick={handlePrevSlide}></ButtonL>
        {imgs.map((img, index) => (
          <WrapperBackground
            key={index}
            backgroundImage={img.backgroundImage}
            style={{ display: index === currentSlide ? "block" : "none" }}
          >
            <WrapperCard isOdd={index % 2 !== 0}>
              <TextCard isOdd={index % 2 !== 0}>{`${img.title}`}</TextCard>
              <ButtonCard
                href={img.link}
                target="_blank"
                isOdd={index % 2 !== 0}
              >
                Live Now 🔗
              </ButtonCard>
              <WrapperImg>
                <Image src={img.img} alt={img.title} />
              </WrapperImg>
              <WrapperInfo></WrapperInfo>
            </WrapperCard>
          </WrapperBackground>
        ))}
        <ButtonR src={IconArrowR} onClick={handleNextSlide}></ButtonR>
      </ContainerCard>
    </Wrapper>
  );
};

export default Projects;
