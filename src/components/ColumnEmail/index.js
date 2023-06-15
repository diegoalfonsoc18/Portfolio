import {
  ContainerEmail,
  LineaVertical,
  LinkEmailIcon,
  MailText,
  WrapperColumnEmail,
} from "./emailElements";
const ColumnEmail = () => {
  const Mail = "dlalfonso57@gmail.com";

  return (
    <WrapperColumnEmail>
      <ContainerEmail className="container-two">
        <LinkEmailIcon href={`mailto: ${Mail}`}>
          <MailText style={{ marginBottom: "5px", fontSize: "15px" }}>
            dlalfonso57@gmail.com
          </MailText>
        </LinkEmailIcon>
        <LineaVertical />
      </ContainerEmail>
    </WrapperColumnEmail>
  );
};

export default ColumnEmail;
