import React from "react";

import styled from "styled-components";

const ButtonWrapp = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#52299e")};
  padding: 14px 30px;
  transition: all 0.4s;
  max-width: 100%;
  /* width:100%; */

  &:hover {
    background-color: #4d2596;
  }
`;

const ButtonTitle = styled.div`
  font-size: 16px;
  color: #ebe7f4;

  &:before {
    content: "";
    background-image: url(${(props) => props.icon});
    background-repeat: no-repeat;
    vertical-align: middle;

    display: inline-block;
    height: ${(props) => (props.icon ? "15px" : 0)};
    width: ${(props) => (props.icon ? "15px" : 0)};
    margin-right: ${(props) => (props.icon ? "6px" : 0)};
  }
`;

const Button = ({ label, icon, bgColor, onClick, type }) => {
  return (
    <ButtonWrapp
      type={type ? type : "button"}
      bgColor={bgColor}
      onClick={onClick}
    >
      {label && <ButtonTitle icon={icon}>{label}</ButtonTitle>}
    </ButtonWrapp>
  );
};

export default Button;
