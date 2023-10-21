import {
  Wrapper,
  WrapperCard,
  WrapperSlider,
  Image,
  WrapperImg,
  WrapperInfo,
  IconCard,
  TextCard,
  ButtonCard,
  Hr,
  TitleSection,
  WrapperTitle,
} from "./projects.elements";
import ProjectOne from "../../Img/index.png";
import ProjectTwo from "../../Img/proyecto3.png";
import ProjectThree from "../../Img/proyecto4.png";
import ProjectFour from "../../Img/proyecto5.png";
import IconGitHub from "../../icon/githubProject.png";
import IconInternet from "../../icon/global.png";
const Projects = () => {
  const imgs = [
    {
      title: "Landing Page",
      img: ProjectOne,
      id: 1,
      link: "https://diegoalfonsoc18.github.io/landing/",
      icon: IconGitHub,
    },
    {
      title: "Apple Shop",
      img: ProjectTwo,
      id: 2,
      link: "https://diegoalfonsoc18.github.io/tribute-page/",
      icon: IconGitHub,
    },
    {
      title: "WordPress",
      img: ProjectThree,
      id: 3,
      link: "https://www.appleshop.com.co/?v=8fab2b569f00",
      icon: IconInternet,
    },
    {
      title: "Landing Page",
      img: ProjectFour,
      id: 4,
      link: "https://diegoalfonsoc18.github.io/Hackathon-2023/",
      icon: IconGitHub,
    },
  ];

  return (
    <Wrapper>
      <WrapperTitle>
        <TitleSection>Projects</TitleSection>
      </WrapperTitle>
      <WrapperSlider>
        {imgs.map((imgs) => (
          <WrapperCard>
            <TextCard>{`${imgs.title}`}</TextCard>
            <WrapperImg>
              <Image src={imgs.img}></Image>;
            </WrapperImg>
            <WrapperInfo></WrapperInfo>
            <ButtonCard href={imgs.link} target="_blank">
              Live Now
            </ButtonCard>
          </WrapperCard>
        ))}
      </WrapperSlider>
      <Hr />
    </Wrapper>
  );
};
export default Projects;
