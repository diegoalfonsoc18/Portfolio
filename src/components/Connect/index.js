import {
  WrapperConnect,
  ConnectText,
  ContainerSocial,
  ImgSocial,
  ContainerItemSocial,
  Paragrahp,
} from "./connectComponents";

import GithubSocial from "../../icon/githubSocial.png";

const Connect = () => {
  const social = [
    {
      name: "Github",
      img: GithubSocial,
    },
  ];

  return (
    <WrapperConnect>
      <WrapperConnect>
        <ConnectText>Connect whit me</ConnectText>
      </WrapperConnect>
      <ContainerSocial>
        {social.map((icon, index) => (
          <ContainerItemSocial>
            <Paragrahp key={index}>{`${icon.name}`}</Paragrahp>
            <ImgSocial key={index} src={icon.img}></ImgSocial>
          </ContainerItemSocial>
        ))}
      </ContainerSocial>
    </WrapperConnect>
  );
};

export default Connect;
