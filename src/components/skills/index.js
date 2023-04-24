import {
  ContainerSkills,
  ContainerItems,
  TittleSkills,
  WrapperMain,
  ContainerMain,
} from "./components.skills";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaWordpress,
  FaGithubSquare,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
const Skills = () => {
  return (
    <ContainerMain>
      <ContainerSkills>
        <WrapperMain>
          <TittleSkills>My Skills</TittleSkills>
          <ContainerItems className="skills-container">
            <FaHtml5 style={{ fontSize: "30px", color: "#f74d0d" }} />
            <FaCss3Alt style={{ fontSize: "30px", color: "#0097ff" }} />
            <DiJavascript style={{ fontSize: "30px", color: "#f5cf0d" }} />
            <FaReact style={{ fontSize: "30px", color: "#0ddcf5" }} />
          </ContainerItems>
        </WrapperMain>
        <WrapperMain>
          <TittleSkills>Others</TittleSkills>
          <ContainerItems className="others-container">
            <FaWordpress style={{ color: "#0097ff", fontSize: "30px" }} />
            <FaGithubSquare style={{ color: "#fff", fontSize: "30px" }} />
          </ContainerItems>
        </WrapperMain>
      </ContainerSkills>
    </ContainerMain>
  );
};

export default Skills;
