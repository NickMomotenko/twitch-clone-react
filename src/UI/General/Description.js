import React from "react";

import styled from "styled-components";

const DescriptionWrapp = styled.div`
  font-size: 18px;
  margin-bottom: 45px;
  color: #fff;
`;

const Description = ({ text }) => {
  return <DescriptionWrapp>{text}</DescriptionWrapp>;
};

export default Description;
