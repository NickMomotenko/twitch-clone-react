import React from "react";

import styled from "styled-components";

import ChatBoard from "../Chat/ChatBoard";

const ChanelDashboardWrapp = styled.div`
  display: flex;
  height: 100%;
`;

const ChanelDashboardCol = styled.div`
  &:first-child {
    flex: 1;
  }
`;

const ChanelDashboard = () => {
  return (
    <ChanelDashboardWrapp>
      <ChanelDashboardCol></ChanelDashboardCol>
      <ChanelDashboardCol>
        <ChatBoard />
      </ChanelDashboardCol>
    </ChanelDashboardWrapp>
  );
};

export default ChanelDashboard;
