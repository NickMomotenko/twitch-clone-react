import React from "react";

import styled from "styled-components";

const InputWrapp = styled.input`
  border-radius: 7px;
  border: 1px solid #18171c;
  background-color: #1f1d24;
  padding: 18px 19px;

  ::placholder {
    font-size: 16px;
    color: #656565;
  }
`;

const Input = ({ placeholder }) => {
  return <InputWrapp placeholder={placeholder}></InputWrapp>;
};

export default Input;
