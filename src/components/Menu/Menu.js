import React, { useState } from "react";

import styled from "styled-components";
import MenuList from "./MenuList";

const MenuWrapp = styled.nav``;

const Menu = () => {
  const list = [
    {
      id: 1,
      title: "Homepage",
      iconID: "twitch",
    },
    {
      id: 2,
      title: "Category",
      iconID: "camera",
    },
    {
      id: 3,
      title: "Gaming",
      iconID: "console",
    },
    {
      id: 4,
      title: "Friends",
      iconID: "friend",
    },
    {
      id: 5,
      title: "Get bites",
      iconID: "diamond",
    },
    {
      id: 6,
      title: "Prime",
      iconID: "crown",
    },
  ];

  const [active, setActive] = useState(list[1]);

  return (
    <MenuWrapp>
      <MenuList list={list} active={active} setActive={setActive} />
    </MenuWrapp>
  );
};

export default Menu;
