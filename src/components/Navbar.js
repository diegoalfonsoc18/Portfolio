import React, { useState } from "react";
import {
  Container,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  Wrapper,
  DropdownContact,
  DropdownContactUl,
  DropdownContactli,
  ContainerMenu,
} from "./Navbar.elements";
import { FaDocker } from "react-icons/fa";
import { GrLinkedin, GrGithub, GrTwitter, GrInstagram } from "react-icons/gr";

const Navbar = () => {
  const [openContact, setOpenContact] = useState(false);
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <FaDocker />
          <p>Diego Alfonso</p>
        </LogoContainer>
        <ContainerMenu>
          <Menu>
            <MenuItem>
              <MenuItemLink>About Me</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>Portfolios</MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink onClick={() => setOpenContact(!openContact)}>
                Contact
              </MenuItemLink>
            </MenuItem>
            {openContact && (
              <DropdownContact>
                <DropdownContactUl>
                  <DropdownContactli>
                    <MenuItemLink
                      href="https://github.com/diegoalfonsoc18"
                      target="_blank"
                    >
                      <GrGithub />
                    </MenuItemLink>
                  </DropdownContactli>
                  <DropdownContactli>
                    <MenuItemLink
                      href="https://www.linkedin.com/in/diego-alfonso-castillo/"
                      target="_blank"
                    >
                      <GrLinkedin />
                    </MenuItemLink>
                  </DropdownContactli>
                  <DropdownContactli>
                    <MenuItemLink
                      href="https://twitter.com/diegoalfonso54"
                      target="_blank"
                    >
                      <GrTwitter />
                    </MenuItemLink>
                  </DropdownContactli>
                  <DropdownContactli>
                    <MenuItemLink
                      href="https://www.instagram.com/dlalfonso54/"
                      target="_blank"
                    >
                      <GrInstagram />
                    </MenuItemLink>
                  </DropdownContactli>
                </DropdownContactUl>
              </DropdownContact>
            )}
          </Menu>
        </ContainerMenu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
