import React from "react";

import styled from "styled-components";

import MenuItem from "./MenuItem";

const MenuListWrapp = styled.ul``;

const MenuList = ({ list, ...rest }) => {
  return (
    <MenuListWrapp>
      {list.map((item) => (
        <MenuItem key={item.id} item={item} {...rest} />
      ))}
    </MenuListWrapp>
  );
};

export default MenuList;
