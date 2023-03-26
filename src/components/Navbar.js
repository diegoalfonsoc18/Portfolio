import React from "react";
import {
  Container,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  Wrapper,
  DropdownMenu,
} from "./Navbar.elements";
import { GrApple } from "react-icons/gr";

const Navbar = () => (
  <Container onClick={DropdownMenu}>
    <Wrapper>
      <LogoContainer>
        <GrApple />
        <p>Diego Alfonso</p>
      </LogoContainer>
      <Menu>
        <MenuItem>
          <MenuItemLink>Home</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink>About me</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink>Portfolio</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink>Contact</MenuItemLink>
        </MenuItem>
      </Menu>
    </Wrapper>
  </Container>
);

export default Navbar;
