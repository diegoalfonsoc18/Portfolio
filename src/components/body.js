import React from "react";
import {
  WrapperMain,
  Sect,
  Memoji,
  Paragraph,
  H1memoji,
  H2memoji,
  ContainerImg,
  MemojiMain,
  SectionBody,
  BodySection,
} from "./body-elements";
import memoji from "../memojic-mac.png";
import memoji3 from "../memoji3.png";
import ContactItems from "./ContactColums";
import ColumnEmail from "./ColumnEmail/index";
import Proyects from "./proyects";
const Body = () => {
  return (
    <WrapperMain>
      <ContactItems></ContactItems>
      <Sect>
        <BodySection>
          <SectionBody className="container-emoji">
            <Paragraph>Hello 👋🏽 I'm</Paragraph>
            <H1memoji>Diego Alfonso</H1memoji>
            <H2memoji>Web developer</H2memoji>
            <ContainerImg>
              <MemojiMain src={memoji3}></MemojiMain>
              <Memoji src={memoji} />
            </ContainerImg>
          </SectionBody>
        </BodySection>
        <Proyects></Proyects>
      </Sect>
      <ColumnEmail></ColumnEmail>
    </WrapperMain>
  );
};

export default Body;
