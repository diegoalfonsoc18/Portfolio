import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  background: radial-gradient(
    circle at 4% 100%,
    rgba(56, 8, 47, 1) 2%,
    rgba(33, 5, 33, 1) 11%,
    rgba(38, 5, 43, 1) 22%,
    rgba(33, 3, 32, 1) 37%,
    rgba(20, 2, 19, 1) 100%
  );

  box-shadow: 0px 20px 40px 0px rgba(205, 28, 104, 0.08);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 90%;
  height: 100%;
  padding: 15px 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: var(--black);
  width: 3rem;
`;

export const LogoDev = styled.img`
  width: 100%;
  height: 100%;
`;
export const IconContainerMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: var(--black);
  width: 3rem;
`;
export const IconMobile = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContainerMenu = styled.div`
  justify-content: space-around;
  align-items: center;
  font-size: 1.2rem;
  color: var(--black);
  width: 250px;

  @media (max-width: 640px) {
    display: none;
  }
`;
export const ResponsiveIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 100%;

  @media (min-width: 640px) {
    display: none;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.2rem;
  color: var(--white);

  font-weight: bold;

  &.menu-mobile {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    width: 100px;
    margin: 0;
  }
`;

export const ContainerResponsive = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 40px;
`;

export const MenuItem = styled.li`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const MenuItemLink = styled.a`
  text-decoration: none;
  position: relative;
  font-weight: 500;
  font-size: 18px;
  border-radius: 7px;
  display: inline-block;
  text-decoration: none;
  color: var(--white);
  &.icon-linkedin {
    color: var(--green);
  }

  &.icon-gmail {
    color: var(--green);
  }

  &.icon-gitHub {
    color: var(--green);
  }
`;

export const DropdownContact = styled.div`
  display: flex;
  position: absolute;
  justify-content: end;
  width: auto;
  margin-top: 50px;

  z-index: 1;
`;
export const DropdownContactUl = styled.ul`
  list-style-type: none;
  display: flex;
  width: 100px;
  justify-content: space-around;
  position: relative;
`;
export const DropdownContactli = styled.li`
  display: flex;
  flex-direction: colum;
`;

export const MenuItemLinkC = styled.a`
  text-decoration: none;
  position: fixed;
  border-radius: 7px;
  display: inline-block;

  &.icon-linkedin {
    color: var(--white);
  }
`;
