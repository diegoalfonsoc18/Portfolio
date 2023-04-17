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
  LineaVertical,
  MailText,
  LinkIcon,
} from "./body-elements";
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { BsDiscord } from "react-icons/bs";
import memoji from "../memojic-mac.png";
import memoji3 from "../memoji3.png";
const Body = () => {
  return (
    <Sect>
      <SectionBody className="container-one">
        <LinkIcon href="https://github.com/diegoalfonsoc18" target="_blank">
          <GrGithub
            style={{
              color: "rgba(0,157,35,1)",
              height: "30px",
              width: "30px",
              marginBottom: "5px",
            }}
          />
        </LinkIcon>
        <LinkIcon
          href="https://www.linkedin.com/in/diego-alfonso-castillo/"
          target="_blank"
        >
          <GrLinkedin
            style={{
              color: "rgba(0, 157, 35, 1)",
              height: "30px",
              width: "30px",
              marginBottom: "5px",
            }}
          />
        </LinkIcon>
        <LinkIcon
          href="https://discordapp.com/users/984941402783895642"
          target="_blank"
        >
          <BsDiscord
            style={{
              color: "rgba(0,157,35,1)",
              height: "30px",
              width: "30px",
              marginBottom: "5px",
            }}
          />
        </LinkIcon>
        <LineaVertical />
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
        <LinkIcon>
          <MailText style={{ marginBottom: "5px" }}>
            dlalfonso57@gmail.com
          </MailText>
        </LinkIcon>
        <LineaVertical />
      </SectionBody>
    </Sect>
  );
};

export default Body;
