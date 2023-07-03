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
    </ContainerMain>
  );
};

export default Skills;
