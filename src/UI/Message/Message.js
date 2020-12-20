import React from "react";

import styled from "styled-components";

import { generateUniqColor } from "../../utils";

const MessageWrapp = styled.div`
  display: flex;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const MessageUserStatus = styled.div``;

const MessageFullName = styled.div`
  color: ${(props) => (props.color ? props.color : "blue")};
`;

const MessageTime = styled.div`
  color: #e6bdbd;
  font-size: 15px;
  margin-left: 10px;
  min-width: 32px;
`;

const MessageText = styled.div`
  color: #eee7e7;
  margin-left: 10px;
`;

const Message = ({ iconStatus, fullname = "king01", time = "12:10", text }) => {
  return (
    <MessageWrapp>
      {iconStatus && <MessageUserStatus></MessageUserStatus>}

      <MessageFullName color={generateUniqColor()}>{fullname}</MessageFullName>
      <MessageTime>{time}</MessageTime>
      <MessageText>{text}</MessageText>
    </MessageWrapp>
  );
};

export default Message;
