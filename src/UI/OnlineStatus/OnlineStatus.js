import React from "react";

import styled from "styled-components";

const OnlineStatusWrapp = styled.div`
  color: #dda7a7;

  :before {
    content: "";
    display: inline-block;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background-color: #dda7a7;
    vertical-align: middle;
    margin-right: 5px;
  }
`;

const OnlineStatus = ({ counter }) => {
  return <OnlineStatusWrapp>{`${counter} online`}</OnlineStatusWrapp>;
};

export default OnlineStatus;
