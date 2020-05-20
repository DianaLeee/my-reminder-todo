import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./NavTabItem.css";

interface INavTabItemProps {
  text?: string;
  path: string;
  active?: boolean;
  onClick?: any;
}

const Text = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a9b1bb;
`;

const Border = styled.div`
  width: 100%;
  height: 10%;
  background-color: "none";
`;

const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
`;

const NavTabItem = (props: INavTabItemProps) => {
  return (
    <StyledNavLink to={props.path} exact activeClassName="active">
      <NavContainer className="container">
        <Text className="text">{props.text}</Text>
        <Border className="border" />
      </NavContainer>
    </StyledNavLink>
  );
};

export default NavTabItem;
