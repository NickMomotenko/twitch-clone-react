import React from "react";

import styled from "styled-components";

import Button from "../../UI/Button/Button";
import ButtonOption from "../../UI/Button/ButtonOption";

import Input from "../../UI/Input/Input";

import UserBlock from "../UserBlock/UserBlock";

import primeIcon from "../../assets/icons/prime-time.svg";
import envelopeIcon from "../../assets/icons/envelope.svg";
import bellIcon from "../../assets/icons/alarm.svg";

const HeaderWrapp = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 15px;
  margin-bottom: 38px;

  border-bottom: 1px solid #3f3c3c;
`;

const HeaderCol = styled.div`
  flex: 1;
  display: flex;

  .eLgXuF {
    margin-right: 10px;
  }

  &:last-child {
    justify-content: flex-end;
  }
`;

const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
  margin-left: 44px;

  button {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const HeaderButton = styled.div`
  margin-left: 15px;
`;

const HeaderInput = styled.div`
  min-width: 350px;
`;

const Header = () => {
  const options = [
    {
      id: 1,
      icon: primeIcon,
      title: "prime",
      counter: 1,
      func: () => {},
    },
    {
      id: 2,
      icon: envelopeIcon,
      title: "envelope",
      counter: 0,
      func: () => {},
    },
    {
      id: 3,
      icon: bellIcon,
      title: "bell",
      counter: 10,
      func: () => {},
    },
  ];
  return (
    <HeaderWrapp>
      <HeaderCol>
        <HeaderInput>
          <Input placeholder="Search streamers" />
        </HeaderInput>
        <HeaderButton>
          <Button label="Get bites" icon="" />
        </HeaderButton>
      </HeaderCol>
      <HeaderCol>
        <UserBlock />
        <HeaderOptions>
          {options.map(({ id, icon, ...rest }) => (
            <ButtonOption key={id} icon={icon} {...rest} />
          ))}
        </HeaderOptions>
      </HeaderCol>
    </HeaderWrapp>
  );
};

export default Header;
