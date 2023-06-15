import React from "react";

import { IconContact, WrapperIcons } from "./contactElements";
import {
  ContainerColumn,
  ContainerOne,
  LinkIcon,
  LineaVertical,
} from "./contactElements";

import GithubIcon from "../../icon/githubIcon.png";
import LinkedinIcon from "../../icon/linkedin.png";
import DiscordIcon from "../../icon/discord.png";

const ContactItems = () => {
  return (
    <ContainerColumn>
      <ContainerOne className="container-one">
        <WrapperIcons>
          <LinkIcon href="https://github.com/diegoalfonsoc18" target="_blank">
            <IconContact src={GithubIcon} />
          </LinkIcon>
          <LinkIcon
            href="https://www.linkedin.com/in/diego-alfonso-castillo/"
            target="_blank"
          >
            <IconContact src={LinkedinIcon} />
          </LinkIcon>
          <LinkIcon
            href="https://discordapp.com/users/984941402783895642"
            target="_blank"
          >
            <IconContact src={DiscordIcon} />
          </LinkIcon>
        </WrapperIcons>
        <LineaVertical />
      </ContainerOne>
    </ContainerColumn>
  );
};

export default ContactItems;
