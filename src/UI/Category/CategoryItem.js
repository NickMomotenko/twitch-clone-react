import React from "react";

import styled from "styled-components";

const CategoryItemWrapp = styled.div`
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  display: inline-block;

  border-radius: 7px;

  background-color: #6441a4;

  padding: 7px 14px;
  margin: 0 5px;
`;

const CategoryItem = ({ label }) => {
  return <CategoryItemWrapp>{label}</CategoryItemWrapp>;
};

export default CategoryItem;
