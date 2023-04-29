import {} from "./contactElements";
import {
  ContainerColumn,
  ContainerOne,
  LinkIcon,
  LineaVertical,
} from "./contactElements";

import InkedinIcon from "./LinkedinIcon";
import { DiscordIcon } from "./discord";
import GithubIcon from "../icon/GithubIcon";
const ContactItems = () => {
  return (
    <ContainerColumn>
      <ContainerOne className="container-one">
        <LinkIcon href="https://github.com/diegoalfonsoc18" target="_blank">
          <GithubIcon />s
        </LinkIcon>
        <LinkIcon
          href="https://www.linkedin.com/in/diego-alfonso-castillo/"
          target="_blank"
        >
          <InkedinIcon />
        </LinkIcon>
        <LinkIcon
          href="https://discordapp.com/users/984941402783895642"
          target="_blank"
        >
          <DiscordIcon className="discord" />
        </LinkIcon>
        <LineaVertical />
      </ContainerOne>
    </ContainerColumn>
  );
};

export default ContactItems;
