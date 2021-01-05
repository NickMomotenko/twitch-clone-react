import React from "react";

import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;

  &:before {
    content: "";
    display: ${(props) => (props.icon ? "inline-block" : "none")};
    height: 20px;
    width: 20px;
    background-image: url(${(props) => props.icon && props.icon});
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    z-index: 5;
    cursor: pointer;
  }
`;

const InputWrapp = styled.input`
  border-radius: 7px;
  border: 1px solid #18171c;
  background-color: #1f1d24;
  padding: 18px 19px;
  padding-left: ${(props) => props.icon && "51px"};
  font-size: 16px;
  color: #656565;
  width: 100%;

  ::placholder {
    font-size: 16px;
    color: #656565;
  }
`;

const Input = ({ placeholder, value, name, onChange, icon }) => {
  return (
    <InputContainer icon={icon}>
      <InputWrapp
        placeholder={placeholder}
        value={value ? value : ""}
        icon={icon ? true : false}
        name={name}
        onChange={(event) => onChange(event.target.name, event.target.value)}
      />
    </InputContainer>
  );
};

export default Input;
