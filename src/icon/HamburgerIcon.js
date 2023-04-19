import React from "react";
import styled from "styled-components";
const Svg = styled.svg`
  height: 24px;
  width: 24px;

  & path:nth-of-type(2) {
    fill: url(#grad);
  }
`;
const IconHamburger = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      //   fill="#000000"
    >
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "rgba(75, 168, 16, 1)" }} />
        <stop offset="45%" style={{ stopColor: "rgba(26, 235, 19, 1)" }} />
        <stop offset="100%" style={{ stopColor: "rgba(39, 191, 22, 1)" }} />
      </linearGradient>

      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </Svg>
  );
};

export default IconHamburger;
