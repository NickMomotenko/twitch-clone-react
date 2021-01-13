import React from "react";

import styled from "styled-components";

const RowWrapp = styled.div`
  display: flex;
`;

const ColumnWrapp = styled.div``;

const PaperWrapp = styled.div`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #fff;

  display: inline-block;

  width: 100%;
  background-color: #fff;
`;

export const Row = ({ children, ...rest }) => (
  <RowWrapp {...rest}>{children}</RowWrapp>
);

export const Column = ({ children, ...rest }) => (
  <ColumnWrapp {...rest}>{children}</ColumnWrapp>
);

export const Paper = ({ children, ...rest }) => (
  <PaperWrapp {...rest}>{children}</PaperWrapp>
);
