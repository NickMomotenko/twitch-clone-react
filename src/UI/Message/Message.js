import React from "react";

import styled from "styled-components";

import { generateUniqColor, getCurrentTime } from "../../utils";

import returnIcon from "../../assets/chat/return.svg";

import ButtonOption from "../Button/ButtonOption";

import { AlertSmall } from "../../modules/Alert/AlertSmall";

const MessageWrapp = styled.div`
  margin-bottom: 15px;
  position: relative;
  cursor: pointer;
  opacity: 0;

  padding: 3px 9px;
  border-radius: 4px;

  transition: background-color 0.2s;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: #332f40;

    .sc-jrAGrp {
      visibility: visible;
    }
  }

  .sc-jrAGrp {
    position: absolute;
    visibility: hidden;
    top: -13px;
    right: 0;
    z-index: 5;
    background: #fff;
    border-radius: 4px;
    line-height: 100%;

    &:hover {
      .sc-cTkwdZ {
        visibility: visible;
      }
    }
  }
`;

const MessageUserStatus = styled.div``;

const MessageFullName = styled.span`
  color: ${(props) => (props.color ? props.color : "blue")};
`;

const MessageTime = styled.span`
  color: #e6bdbd;
  font-size: 15px;
  margin-left: 10px;
  min-width: 32px;
`;

const MessageText = styled.span`
  color: #eee7e7;
  margin-left: 10px;
`;

const Message = ({ iconStatus, data: { fullname, text, time } }) => {
  React.useEffect(() => {
    setTimeout(() => {
      refTest.current.style.transition = "opacity .4s";
      refTest.current.style.opacity = "1";
    }, 500);
  }, []);

  let refTest = React.useRef(null);

  return (
    <MessageWrapp ref={refTest}>
      {iconStatus && <MessageUserStatus></MessageUserStatus>}

      <MessageFullName color={generateUniqColor()}>{fullname}</MessageFullName>
      <MessageTime>{getCurrentTime(time)}</MessageTime>
      <MessageText>{text}</MessageText>
      <ButtonOption icon={returnIcon}>
        <AlertSmall text="Щелкните, чтобы ответить" />
      </ButtonOption>
    </MessageWrapp>
  );
};

export default Message;
