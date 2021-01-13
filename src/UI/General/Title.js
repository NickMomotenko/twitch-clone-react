import React from "react";

import styled from "styled-components";

const TitleWrapp = styled.div`
  font-size: 25px;
  /* margin-bottom: 45px; */
  color: #fff;
`;

const Title = ({ title }) => {
  return <TitleWrapp>{title}</TitleWrapp>;
};

export default Title;
