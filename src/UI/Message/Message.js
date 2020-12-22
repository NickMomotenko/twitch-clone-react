import React from "react";

import styled from "styled-components";

import { generateUniqColor } from "../../utils";

import returnIcon from "../../assets/chat/return.svg";

import ButtonOption from "../Button/ButtonOption";

import { AlertSmall } from "../../modules/Alert/AlertSmall";

const MessageWrapp = styled.div`
  display: flex;
  margin-bottom: 15px;
  position: relative;
  cursor: pointer;

  padding: 3px 9px;
  border-radius: 4px;

  transition: background-color 0.2s;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: #332f40;

    .sc-kEjbxe {
      visibility: visible;
    }
  }

  .sc-kEjbxe {
    position: absolute;
    visibility: hidden;
    top: -13px;
    right: 0;
    z-index: 5;
    background: #fff;
    border-radius: 4px;
    line-height: 100%;

    &:hover {
      .sc-iBaPrD {
        visibility: visible;
      }
    }
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
      <ButtonOption icon={returnIcon}>
        <AlertSmall text="Щелкните, чтобы ответить" />
      </ButtonOption>
    </MessageWrapp>
  );
};

export default Message;
