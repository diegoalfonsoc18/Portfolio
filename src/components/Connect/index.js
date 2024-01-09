import {
  WrapperConnect,
  ConnectText,
  ContainerSocial,
  ImgSocial,
  ContainerItemSocial,
  Paragrahp,
  WrapperMail,
  LinkSocial,
} from "./connectComponents";

import GithubSocial from "../../icon/githubSocial.png";
import LinkedinSocial from "../../icon/linkedinSocial.png";
import DiscordSocial from "../../icon/discordSocial.png";
import MailSocial from "../../icon/emailSocial.png";
const Connect = () => {
  const social = [
    {
      name: "Github",
      img: GithubSocial,
      backgroundColor: "#353745",
      link: "https://github.com/diegoalfonsoc18",
    },
    {
      name: "Linkedin",
      img: LinkedinSocial,
      backgroundColor: "#0077b5",
      link: "https://www.linkedin.com/in/diego-alfonso-castillo/",
    },
    {
      name: "Discord",
      img: DiscordSocial,
      backgroundColor: "#7289da",
      link: "discord.com/channels/984941402783895642",
    },
  ];
  const email = "dlalfonso57@gmail.com";

  return (
    <WrapperConnect>
      <WrapperConnect>
        <ConnectText>Connect whit me</ConnectText>
      </WrapperConnect>
      <ContainerSocial>
        {social.map((icon, index) => (
          <ContainerItemSocial
            key={index}
            style={{
              backgroundColor: icon.backgroundColor,
            }}
          >
            <LinkSocial
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Paragrahp key={index}>{`${icon.name}`}</Paragrahp>
              <ImgSocial key={index} src={icon.img}></ImgSocial>
            </LinkSocial>
          </ContainerItemSocial>
        ))}
      </ContainerSocial>

      <WrapperMail>
        <LinkSocial href={`mailto:${email}`}>
          <Paragrahp>Shoot me a mail</Paragrahp>
          <ImgSocial src={MailSocial}></ImgSocial>
        </LinkSocial>
      </WrapperMail>
    </WrapperConnect>
  );
};

export default Connect;
