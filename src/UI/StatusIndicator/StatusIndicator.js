import React from "react";

import styled from "styled-components";

const StatusIndicatorWrapp = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ status, statusColor }) =>
    status && statusColor ? statusColor : "#4cdb05"};
  position: absolute;
  right: -2px;
  top: -4px;
  border: 2px solid
    ${({ statusBorderColor }) =>
      statusBorderColor ? statusBorderColor : "#52299e"};
`;

const StatusIndicator = ({ ...props }) => {
  return <StatusIndicatorWrapp {...props}></StatusIndicatorWrapp>;
};

export default StatusIndicator;
