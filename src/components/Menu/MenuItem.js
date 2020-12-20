import React from "react";

import styled from "styled-components";

import sprite from "../../assets/menu/sprite.svg";

const MenuItemWrapp = styled.li`
  margin-bottom: 25px;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
`;

const MenuItemTitle = styled.div`
  color: ${({ item, active }) => (item.id === active.id ? "#fff" : "#9b81cb")};
  transition: color 0.4s;
`;

const MenuItemIcon = styled.svg`
  display: inline-block;
  height: 15px;
  width: 15px;
  margin-right: 35px;
  fill: #fff;
`;

const MenuItemLink = styled.a`
  display: inline-flex;
  align-items: center;

  &:hover {
    ${MenuItemTitle} {
      color: #fff;
    }

    ${MenuItemIcon} {
      fill: #fff;
    }
  }
`;

const MenuItem = ({ item, active, setActive }) => {
  return (
    <MenuItemWrapp>
      <MenuItemLink href="#" onClick={() => setActive(item)}>
        <MenuItemIcon active={active} item={item}>
          <use href={sprite + `#${item.iconID}`}></use>
        </MenuItemIcon>
        <MenuItemTitle active={active} item={item}>
          {item.title}
        </MenuItemTitle>
      </MenuItemLink>
    </MenuItemWrapp>
  );
};

export default MenuItem;
