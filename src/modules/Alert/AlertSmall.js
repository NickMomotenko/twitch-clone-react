import React from "react";

import styled from "styled-components";

const AlertSmallWrapp = styled.div`
  display: inline-block;
  background-color: #fff;
  color: #000000;
  font-weight: 600;
  min-width: 100px;
  padding: 5px;

  position: absolute;
  visibility: hidden;
  bottom: 100%;
  right: 0;
  margin-bottom: 8px;
  z-index: 5;
  background: #fff;
  border-radius: 4px;
  line-height: 100%;

  white-space: nowrap;

  ::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 100%;
    right: 7px;

    border: 4px solid transparent;
    border-top-color: #fff;
  }
`;

export const AlertSmall = ({ text }) => {
  return <AlertSmallWrapp>{text}</AlertSmallWrapp>;
};
