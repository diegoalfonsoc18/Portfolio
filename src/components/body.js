import React from "react";
import { Sect, Memoji, Paragraph, H1memoji, H2memoji } from "./body-elements";
import memoji from "../memojic-mac.png";
const Body = () => {
  return (
    <Sect>
      <Paragraph>Hello 👋🏽 I'm</Paragraph>
      <H1memoji>Diego Alfonso</H1memoji>
      <H2memoji>Web developer</H2memoji>
      <Memoji src={memoji} />
    </Sect>
  );
};

export default Body;
