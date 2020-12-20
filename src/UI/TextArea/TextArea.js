import React from "react";

import styled from "styled-components";

import smileIcon from "../../assets/icons/smile-face.svg";

import ButtonOption from "../Button/ButtonOption";

const TextAreaWrapp = styled.textarea`
  border: 1px solid #5b79a2;
  border-radius: 5px;

  width: 100%;

  min-height: 50px;
  resize: none;
  padding: 16px 15px;
  color: #5b79a2;
  font-size: 14px;

  ::placeholder {
    color: #5b79a2;
    font-size: 14px;
  }
`;

const TextArea = ({ placeholder, name }) => {
  return (
    <TextAreaWrapp placeholder={placeholder} name={name}>
      {/* <ButtonOption url={smileIcon} /> */}
    </TextAreaWrapp>
  );
};

export default TextArea;
