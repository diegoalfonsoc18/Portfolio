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
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { GrLinkedin, GrGithub, GrTwitter, GrInstagram } from "react-icons/gr";
import { DiJavascript } from "react-icons/di";
const Navbar = () => {
  const [openContact, setOpenContact] = useState(false);
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <FaHtml5 style={{ fontSize: "40px", color: "#f74d0d" }} />
          <FaCss3Alt style={{ fontSize: "40px", color: "#0097ff" }} />
          <DiJavascript style={{ fontSize: "44px", color: "#f5cf0d" }} />
          <FaReact style={{ fontSize: "43px", color: "#0ddcf5" }} />
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
