import React from "react";

import styled from "styled-components";

import logoIcon from "../../assets/logo.png";
import logoSmallIcon from "../../assets/twitch.svg";

const LogoWrapper = styled.a`
  display: inline-block;

  height: ${(props) => props.size && props.size};
  width: ${(props) => props.size && props.size};
`;

const LogoIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Logo = ({ size }) => {
  return (
    <LogoWrapper href="#" size={size ? `40px` : "initial"}>
      <LogoIcon url={size == "small" ? logoSmallIcon : logoIcon} />
    </LogoWrapper>
  );
};

export default Logo;
