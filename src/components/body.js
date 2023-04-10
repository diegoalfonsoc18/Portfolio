import React from "react";
import { Sect, Memoji } from "./body-elements";
import memoji from "../memojic-mac.png";
const Body = () => {
  return (
    <Sect>
      <Memoji src={memoji} />
    </Sect>
  );
};

export default Body;
