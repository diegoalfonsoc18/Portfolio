import {
  ContainerMain,
  Iconitem,
  ImgItem,
  ItemText,
  TitleSkill,
  WrapperItems,
  WrapperSkills,
  WrapperTitleSkills,
} from "./components.skills";
import html from "../../icon/html.png";
import css from "../../icon/css.png";
import javascript from "../../icon/js.png";
import react from "../../icon/react.svg";
import github from "../../icon/github-svgrepo-com.svg";
import docker from "../../icon/docker2-svgrepo-com.svg";
import photoshop from "../../icon/photoshop-svgrepo-com.svg";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React",
      icon: react,
    },
  ];

  // const others = [
  //   {
  //     name: "Github",
  //     icon: github,
  //   },
  //   {
  //     name: "Docker",
  //     icon: docker,
  //   },
  //   {
  //     name: "Photoshop",
  //     icon: photoshop,
  //   },
  // ];

  return (
    <ContainerMain>
      <WrapperTitleSkills>
        <TitleSkill>Skills</TitleSkill>
      </WrapperTitleSkills>

      <WrapperSkills>
        {skills.map((skill) => (
          <WrapperItems>
            <ImgItem>
              <Iconitem src={skill.icon} />
            </ImgItem>
            <ItemText>{`${skill.name}`}</ItemText>
          </WrapperItems>
        ))}
      </WrapperSkills>
      <WrapperTitleSkills>
        <TitleSkill>Others</TitleSkill>
      </WrapperTitleSkills>
      <WrapperSkills></WrapperSkills>
    </ContainerMain>
  );
};
export default Skills;
