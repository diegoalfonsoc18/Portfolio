import React from "react";
import {
  Container,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  Wrapper,
  DropdownAbout,
  DropdownContact,
} from "./Navbar.elements";
import { GrApple } from "react-icons/gr";

const Navbar = () => (
  <Container>
    <Wrapper>
      <LogoContainer>
        <GrApple />
        <p>Diego Alfonso</p>
      </LogoContainer>
      <Menu>
        <MenuItem>
          <MenuItemLink onMouseEnter={DropdownAbout}>About Me</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink>Portfolio</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink onMouseEnter={DropdownContact}>Contact</MenuItemLink>
        </MenuItem>
      </Menu>
    </Wrapper>
  </Container>
);

export default Navbar;
