import React from "react";

import styled from "styled-components";

const ListTitleWrapp = styled.div`
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 2px;
`;

const ListTitle = ({ title }) => {
  return <ListTitleWrapp>{title}</ListTitleWrapp>;
};

export default ListTitle;
