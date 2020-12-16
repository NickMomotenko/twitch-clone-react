import React from "react";

import styled from "styled-components";

const ButtonWrapp = styled.button`
  display: flex;
  align-items: center;
  border-radius: 7px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#52299e")};
  padding: 14px 30px;
  transition: all 0.4s;

  &:hover {
    background-color: #4d2596;
  }
`;

const ButtonTitle = styled.div`
  font-size: 16px;
  color: #ebe7f4;
`;

const ButtonIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: inline-block;
  height: 15px;
  margin-right: 6px;
`;

const Button = ({ label, icon, bgColor }) => {
  return (
    <ButtonWrapp bgColor={bgColor}>
      {icon && <ButtonIcon url={icon} />}
      {label && <ButtonTitle>{label}</ButtonTitle>}
    </ButtonWrapp>
  );
};

export default Button;
