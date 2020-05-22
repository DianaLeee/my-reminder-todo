import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import "./NavTabItem.css";
import { THEME } from "../constants/color";

interface INavTabItemProps {
  key: number;
  title: string;
  path: string;
}
const StyledNavLink = styled(NavLink)`
  width: 100%;
  text-decoration: none;
  color: inherit;
`;

const NavContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${THEME.palette.subText};
`;

const Border = styled.div`
  height: 10%;
  background-color: none;
`;

const NavTabItem = (props: INavTabItemProps) => {
  return (
    <StyledNavLink to={props.path} exact activeClassName="active">
      <NavContainer className="container">
        <Text className="text">{props.title}</Text>
        <Border className="border" />
      </NavContainer>
    </StyledNavLink>
  );
};

export default NavTabItem;
