import React from "react";

import {} from "./contactElements";
import {
  ContainerColumn,
  ContainerOne,
  LinkIcon,
  LineaVertical,
} from "./contactElements";

import GithubIcon from "../../icon/GithubIcon";
import LinkedinIcon from "../../icon/LinkedinIcon";
import DiscordIcon from "../../icon/DiscordIcon";

const ContactItems = () => {
  return (
    <ContainerColumn>
      <ContainerOne className="container-one">
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
          <DiscordIcon></DiscordIcon>
        </LinkIcon>
        <LineaVertical />
      </ContainerOne>
    </ContainerColumn>
  );
};

export default ContactItems;
