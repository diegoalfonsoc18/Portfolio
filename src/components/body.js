import React from "react";
import {
  Sect,
  Memoji,
  Paragraph,
  H1memoji,
  H2memoji,
  ContainerImg,
  MemojiMain,
  SectionBody,
} from "./body-elements";
import { GrLinkedin, GrGithub, GrMail } from "react-icons/gr";

import memoji from "../memojic-mac.png";
import memoji3 from "../memoji3.png";
const Body = () => {
  return (
    <Sect>
      <SectionBody className="container-one">
        <GrGithub
          style={{ color: "rgba(0,157,35,1)", height: "30px", width: "30px" }}
        />
        <GrLinkedin
          style={{
            color: "rgba(0, 157, 35, 1)",
            height: "30px",
            width: "30px",
          }}
        />
        <GrMail
          style={{ color: "rgba(0,157,35,1)", height: "30px", width: "30px" }}
        />
      </SectionBody>
      <SectionBody>
        <Paragraph>Hello 👋🏽 I'm</Paragraph>
        <H1memoji>Diego Alfonso</H1memoji>
        <H2memoji>Web developer</H2memoji>
        <ContainerImg>
          <MemojiMain src={memoji3}></MemojiMain>
          <Memoji src={memoji} />
        </ContainerImg>
      </SectionBody>
      <SectionBody className="container-two">
        <GrGithub
          style={{ color: "rgba(0,157,35,1)", height: "30px", width: "30px" }}
        />
        <GrLinkedin
          style={{
            color: "rgba(0, 157, 35, 1)",
            height: "30px",
            width: "30px",
          }}
        />
        <GrMail
          style={{ color: "rgba(0,157,35,1)", height: "30px", width: "30px" }}
        />
      </SectionBody>
    </Sect>
  );
};

export default Body;
