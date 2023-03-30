import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  border: 1px solid yellow;
  border-radius: 7px;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 95%;
  max-width: 1300px
  flex-wrap: wrap;
  justify-content: space-between;
  
  
  

`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;
  color: #ffff;
  width: 150px;
`;
export const ContainerMenu = styled.div`
  justify-content: space-around;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;
  color: #ffff;
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
    color: #cc0;
    font-size: 20px;
  }
`;

export const DropdownContact = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: center;
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
  position: relative;
  border-radius: 7px;
  display: inline-block;
`;
