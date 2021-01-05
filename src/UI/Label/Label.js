import React from "react";

import styled from "styled-components";

const LabelWrapp = styled.label`
  text-align: left;
`;

const LabelTitle = styled.span`
  display: inline-block;
  color: #fff;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Label = ({ title, children }) => {
  return (
    <LabelWrapp>
      <LabelTitle>{title}</LabelTitle>

      {children}
    </LabelWrapp>
  );
};

export default Label;
