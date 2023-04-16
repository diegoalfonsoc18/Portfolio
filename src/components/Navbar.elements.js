import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;

  border-radius: 7px;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1300px
  flex-wrap: wrap;
  justify-content: space-between;
  
  
  

`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #000;
  width: 120px;
`;

export const LogoCode = styled.figure`
  display: flex;
  margin: 0;
  width: 50px;
  height: 50px;
`;

export const ContainerMenu = styled.div`
  justify-content: space-around;
  align-items: center;
  font-size: 1.2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #000;
  width: 250px;
`;
export const Menu = styled.ul`
  height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;
  color: #fff;
  font-family: sans-serif;
  font-weight: bold;
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
  border-radius: 7px;
  display: inline-block;

  &.li-contact {
    position: absolute;
  }

  &.icon-link {
    color: #222016;
    font-size: 20px;
  }

  &.icon-linkedin {
    color: #1ee40e;
  }

  &.icon-gmail {
    color: #1ee40e;
  }

  &.icon-gitHub {
    color: #1ee40e;
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
    color: #fff;
`;
