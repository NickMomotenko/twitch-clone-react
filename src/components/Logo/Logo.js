import React from "react";

import styled from "styled-components";

import logoIcon from "../../assets/logo.png";

const LogoWrapper = styled.a`
  display: inline-block;
`;

const LogoIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))``;

const Logo = () => {
  return (
    <LogoWrapper href="#">
      <LogoIcon url={logoIcon} />
    </LogoWrapper>
  );
};

export default Logo;
