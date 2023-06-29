import {
  ContainerMain,
  Iconitem,
  ImgItem,
  ItemText,
  WrapperItems,
  WrapperSkills,
} from "./components.skills";
import html from "../../icon/html.png";
import css from "../../icon/css.png";

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
  ];

  return (
    <ContainerMain>
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
