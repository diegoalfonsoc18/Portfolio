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
          <ContainerItems>
            <FaHtml5 style={{ fontSize: "35px", color: "#f74d0d" }} />
            <FaCss3Alt style={{ fontSize: "35px", color: "#0097ff" }} />
            <DiJavascript style={{ fontSize: "35px", color: "#f5cf0d" }} />
            <FaReact style={{ fontSize: "35px", color: "#0ddcf5" }} />
          </ContainerItems>
        </WrapperMain>
        <WrapperMain>
          <TittleSkills>Others</TittleSkills>
          <ContainerItems>
            <FaWordpress style={{ color: "#0097ff", fontSize: "35px" }} />
            <FaGithubSquare style={{ color: "#fff", fontSize: "35px" }} />
          </ContainerItems>
        </WrapperMain>
      </ContainerSkills>
    </ContainerMain>
  );
};

export default Skills;
