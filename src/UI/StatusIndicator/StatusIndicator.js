import React from "react";

import styled from "styled-components";

const StatusIndicatorWrapp = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ status }) => status && "#4cdb05"};
  position: absolute;
  right: -2px;
  top: -4px;
  border: 2px solid #52299e;
`;

const StatusIndicator = ({ status }) => {
  return <StatusIndicatorWrapp status={status}></StatusIndicatorWrapp>;
};

export default StatusIndicator;
