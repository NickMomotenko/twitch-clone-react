import React from "react";

import styled from "styled-components";

import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

const HeaderWrapp = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderCol = styled.div`
  flex: 1;
  display: flex;

  .eLgXuF {
    margin-right: 10px;
  }
`;

const Header = () => {
  return (
    <HeaderWrapp>
      <HeaderCol>
        <Input placeholder="Search streamers" />
        <Button label="Get bites" icon="" />
      </HeaderCol>
      <HeaderCol></HeaderCol>
    </HeaderWrapp>
  );
};

export default Header;
