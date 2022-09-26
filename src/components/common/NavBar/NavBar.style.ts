import styled from "styled-components";

interface NavProps {
  current: string
  text: string
}

export const Contaienr = styled.aside`
  width: 100%;
  height: 80px;

  background: #FFFFFF;
  box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.1);

  display: flex;

  justify-content: center;

  position: fixed;
  bottom: 0%;
`;

export const NavWrapper = styled.nav`
  width: 375px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled.a<NavProps>`
  cursor: pointer;

  width: 100px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-decoration: none;
  text-align: center;

  span {
    color: ${({current, text}) => current === text ? '#000000' : '#B4B4B4'};
  }
`;