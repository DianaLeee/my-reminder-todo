import React from "react";
import styled from "styled-components";

import NavTabItem from "./NavTabItem";
import { navItems, INavigation } from "../constants/navigation";

const NavTabContainer = styled.div`
  width: inherit;
  height: inherit;
`;

const ListContainer = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavTab = () => {
  return (
    <NavTabContainer>
      <ListContainer>
        {navItems.map((item: INavigation, idx: number) => (
          <NavTabItem key={idx} title={item.title} path={item.path} />
        ))}
      </ListContainer>
    </NavTabContainer>
  );
};

export default NavTab;
