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
        <Menu>
          <MenuItem>
            <MenuItemLink>About Me</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink>Portfolio</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setOpenContact(!openContact)}>
              Contact
            </MenuItemLink>
            {openContact && (
              <DropdownContact>
                <DropdownContactUl>
                  <DropdownContactli>
                    <MenuItemLink>
                      <GrGithub />
                    </MenuItemLink>
                  </DropdownContactli>
                  <DropdownContactli>
                    <MenuItemLink>
                      <GrLinkedin />
                    </MenuItemLink>
                  </DropdownContactli>
                  <DropdownContactli>
                    <MenuItemLink>
                      <GrTwitter />
                    </MenuItemLink>
                  </DropdownContactli>
                  <DropdownContactli>
                    <MenuItemLink>
                      <GrInstagram />
                    </MenuItemLink>
                  </DropdownContactli>
                </DropdownContactUl>
              </DropdownContact>
            )}
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
