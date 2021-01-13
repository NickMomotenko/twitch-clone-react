import React from "react";

import styled from "styled-components";

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

const TextArea = ({ placeholder, value, name, onChange }) => {
  return (
    <TextAreaWrapp
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    ></TextAreaWrapp>
  );
};

export default TextArea;
