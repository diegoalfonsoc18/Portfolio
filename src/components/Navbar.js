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
          <FaDocker style={{ fontSize: "40px" }} />
        </LogoContainer>
        <ContainerMenu>
          <Menu>
            <MenuItem>
              <MenuItemLink>About me</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>Portfolio</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                onClick={() => setOpenContact(!openContact)}
                className="li-contact"
              >
                Contact
              </MenuItemLink>
              {openContact && (
                <DropdownContact>
                  <DropdownContactUl>
                    <DropdownContactli>
                      <MenuItemLink
                        href="https://github.com/diegoalfonsoc18"
                        target="_blank"
                        className="icon-link"
                      >
                        <GrGithub />
                      </MenuItemLink>
                    </DropdownContactli>
                    <DropdownContactli>
                      <MenuItemLink
                        href="https://www.linkedin.com/in/diego-alfonso-castillo/"
                        target="_blank"
                        className="icon-link"
                      >
                        <GrLinkedin />
                      </MenuItemLink>
                    </DropdownContactli>
                    <DropdownContactli>
                      <MenuItemLink
                        href="https://twitter.com/diegoalfonso54"
                        target="_blank"
                        className="icon-link"
                      >
                        <GrTwitter />
                      </MenuItemLink>
                    </DropdownContactli>
                    <DropdownContactli>
                      <MenuItemLink
                        href="https://www.instagram.com/dlalfonso54/"
                        target="_blank"
                        className="icon-link"
                      >
                        <GrInstagram />
                      </MenuItemLink>
                    </DropdownContactli>
                  </DropdownContactUl>
                </DropdownContact>
              )}
            </MenuItem>
          </Menu>
        </ContainerMenu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
