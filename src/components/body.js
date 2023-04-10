import React from "react";
import {
  Sect,
  Memoji,
  Paragraph,
  H1memoji,
  H2memoji,
  ContainerImg,
  MemojiMain,
} from "./body-elements";
import memoji from "../memojic-mac.png";
import memoji2 from "../memoji2.png";
const Body = () => {
  return (
    <Sect>
      <Paragraph>Hello 👋🏽 I'm</Paragraph>
      <H1memoji>Diego Alfonso</H1memoji>
      <H2memoji>Web developer</H2memoji>
      <ContainerImg>
        <MemojiMain src={memoji2}></MemojiMain>
        <Memoji src={memoji} />
      </ContainerImg>
    </Sect>
  );
};

export default Body;
