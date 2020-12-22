import React from "react";

import styled from "styled-components";

import ChatBoard from "../Chat/ChatBoard";
import ChanelPanel from "../ChanelPanel/ChanelPanel";

const ChanelDashboardWrapp = styled.div`
  display: flex;
  height: 100%;
`;

const ChanelDashboardCol = styled.div`
  height: 100%;

  &:first-child {
    flex: 1;
    min-width: 50%;
    transition: min-width 0.5s;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 3px;
      background-color: transparent;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: transparent;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }
  }
`;

const ChanelDashboard = () => {
  const [isFullSize, setIsFullSize] = React.useState(false);

  const chatContentRef = React.useRef(null);

  React.useEffect(() => {
    if (isFullSize) {
      chatContentRef.current.style.minWidth = `100%`;
    } else {
      chatContentRef.current.style.minWidth = `50%`;
    }
  }, [isFullSize]);

  return (
    <ChanelDashboardWrapp>
      <ChanelDashboardCol ref={chatContentRef}>
        <ChanelPanel />
      </ChanelDashboardCol>
      <ChanelDashboardCol>
        <ChatBoard isFullSize={isFullSize} setIsFullSize={setIsFullSize} />
      </ChanelDashboardCol>
    </ChanelDashboardWrapp>
  );
};

export default ChanelDashboard;
