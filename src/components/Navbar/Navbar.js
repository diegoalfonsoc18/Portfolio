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
  ResponsiveIcon,
  ContainerResponsive,
  LogoDev,
} from "./Navbar.elements";
import IconHamburger from "../../icon/HamburgerIcon";

import { GrLinkedin, GrGithub, GrMail } from "react-icons/gr";
import code from "../../icon/code.png";

const Navbar = () => {
  const [openContact, setOpenContact] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <LogoDev src={code} alt="logoDev" />
        </LogoContainer>
        <ResponsiveIcon
          onClick={() => {
            setOpenNavbar(!openNavbar);
          }}
        >
          <IconHamburger />
        </ResponsiveIcon>

        <ContainerMenu>
          <Menu>
            <MenuItem>
              <MenuItemLink>About me</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink href="#porfolio">Portfolio</MenuItemLink>
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
                        className="icon-gitHub"
                      >
                        <GrGithub />
                      </MenuItemLink>
                    </DropdownContactli>
                    <DropdownContactli>
                      <MenuItemLink
                        href="https://www.linkedin.com/in/diego-alfonso-castillo/"
                        target="_blank"
                        className="icon-linkedin"
                      >
                        <GrLinkedin />
                      </MenuItemLink>
                    </DropdownContactli>
                    <DropdownContactli>
                      <MenuItemLink
                        href=""
                        target="_blank"
                        className="icon-gmail"
                      >
                        <GrMail />
                      </MenuItemLink>
                    </DropdownContactli>
                  </DropdownContactUl>
                </DropdownContact>
              )}
            </MenuItem>
          </Menu>
        </ContainerMenu>
      </Wrapper>
      {openNavbar && (
        <ContainerResponsive>
          <Menu className="menu-mobile">
            <MenuItem>About me</MenuItem>
            <MenuItem>Portfolio</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </ContainerResponsive>
      )}
    </Container>
  );
};

export default Navbar;
