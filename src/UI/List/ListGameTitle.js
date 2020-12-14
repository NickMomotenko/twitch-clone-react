import React from "react";

import styled from "styled-components";

const ListGameTitleWrapp = styled.div`
  font-size: 14px;
  color: #996fe9;
  margin-top: 4px;
`;

const ListGameTitle = ({ title }) => {
  return <ListGameTitleWrapp>{title}</ListGameTitleWrapp>;
};

export default ListGameTitle;
