import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  border: 1px solid;
  border-radius: 7px;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  max-width: 1300px
  flex-wrap: wrap;
  justify-content: space-between;
  margin: a
  

`;

export const LogoContainer = styled.div`
  margin-left: 1rem;

  width: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;
  color: #ffff;
`;

export const Menu = styled.ul`
  height: 100%;
  width: 30%;
  margin: 0;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;
  color: #fff;
  font-family: sans-serif;
`;

export const MenuItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const MenuItemLink = styled.a`
  text-decoration: none;

  border-radius: 7px;
  display: inline-block;
`;
