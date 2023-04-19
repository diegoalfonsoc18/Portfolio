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
  BodySection,
} from "./body-elements";
import { GrLinkedin } from "react-icons/gr";

import memoji from "../memojic-mac.png";
import memoji3 from "../memoji3.png";
import GithubIcon from "../icon/GithubIcon";
import LinkedinIcon from "../icon/LinkedinIcon";
import DiscordIcon from "../icon/DiscordIcon";
const Body = () => {
  return (
    <Sect>
      <BodySection>
        <SectionBody className="container-one">
          <LinkIcon href="https://github.com/diegoalfonsoc18" target="_blank">
            <GithubIcon />
          </LinkIcon>
          <LinkIcon
            href="https://www.linkedin.com/in/diego-alfonso-castillo/"
            target="_blank"
          >
            <LinkedinIcon />
          </LinkIcon>
          <LinkIcon
            href="https://discordapp.com/users/984941402783895642"
            target="_blank"
          >
            <DiscordIcon />
          </LinkIcon>
          <LineaVertical />
        </SectionBody>
        <SectionBody className="container-emoji">
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
            <MailText style={{ marginBottom: "5px", fontSize: "15px" }}>
              dlalfonso57@gmail.com
            </MailText>
          </LinkIcon>
          <LineaVertical />
        </SectionBody>
      </BodySection>
    </Sect>
  );
};

export default Body;
