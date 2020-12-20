import React, { useState } from "react";

import styled, { css } from "styled-components";

import { generateID } from "../../utils";

import sendIcon from "../../assets/chat/send.svg";
import smileIcon from "../../assets/icons/smile-face.svg";
import optionIcon from "../../assets/icons/gear-option.svg";
import closeIcon from "../../assets/icons/close.svg";

import OnlineStatus from "../../UI/OnlineStatus/OnlineStatus";

import ButtonOption from "../../UI/Button/ButtonOption";

import TextArea from "../../UI/TextArea/TextArea";
import Message from "../../UI/Message/Message";

const ChatBoardWrapp = styled.div`
  height: 100%;
  transition: width 1s;
  width: 360px;
  padding: 10px;

  overflow: hidden;
  position: relative;
`;

const ChatBoardContent = styled.div`
  height: 100%;
  display: inline-flex;
  flex-direction: column;
`;

const ChatBoardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #4a3c3c;

  padding-bottom: 15px;
  margin-bottom: 27px;
`;

const ChatBoardHeaderCol = styled.div`
  display: flex;
`;

const ChatBoardRules = styled.button`
  color: #818a96;

  :before {
    content: "";
    display: inline-block;

    width: 9px;
    height: 14px;

    background: url(../../assets/icons/penalty-card.svg);
  }
`;

const ChatBoardMain = styled.div`
  flex: 1;
  /* overflow-y: scroll; */
  padding: 20px;

  /* ::-webkit-scrollbar { width: 3px; height: 3px;};
    ::-webkit-scrollbar-button {  background-color: #666; };
    ::-webkit-scrollbar-track {  background-color: #999;};
    ::-webkit-scrollbar-track-piece { background-color: #ffffff;};
    ::-webkit-scrollbar-thumb { height: 50px; background-color: #666; border-radius: 3px;};
    ::-webkit-scrollbar-corner { background-color: #999;}};
    ::-webkit-resizer { background-color: #666;}; */
`;

const ChatBoardBottom = styled.div``;

const ChatBoardTextArea = styled.div``;

const ChatBoardButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    &:last-child {
      transform: rotate(45deg);
    }
  }
`;

const ChatBoardMessageButton = styled.button`
  color: #fff;
  font-size: 15px;
`;

const ChatBoardBack = styled.div`
  height: 100%;
  width: 50px;
  top: 0;
  position: absolute;
  transition: all 0.5s;
  right: ${(props) => (props.active ? "0" : "-50px")};
  opacity: ${(props) => (props.active ? "1" : "0")};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .eSxEXq {
    white-space: nowrap;

    position: absolute;
    top: 50%;
    left: -15%;
    transform: rotate(-90deg) translate(-50%, -50%);
  }

  ${ChatBoardMessageButton} {
    left: -61%;
    transform: rotate(-90deg) translateX(-50%);
    white-space: nowrap;
    position: absolute;
    bottom: 18%;
  }
`;

const ChatBoard = () => {
  const [messages, setMessages] = useState([
    {
      id: generateID(),
      first_name: "Pavel",
      last_name: "Mourton",
      text: "Hello ;)",
      time: "14:34",
    },
    {
      id: generateID(),
      first_name: "Stella",
      last_name: "Allright",
      text: "Hello ;)",
      time: "8:15",
    },
    {
      id: generateID(),
      first_name: "Cobb",
      last_name: "Pashler",
      text: "Quisque id justo",
      time: "13:07",
    },
    {
      id: generateID(),
      first_name: "Allx",
      last_name: "Vauter",
      text:
        "Id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
      time: "13:29",
    },

    {
      id: generateID(),
      first_name: "Berrie",
      last_name: "Basilio",
      text: "Etiam pretium iaculis justo",
      time: "18:28",
    },
    {
      id: generateID(),
      first_name: "Berrie",
      last_name: "Basilio",
      text: "Etiam pretium iaculis justo",
      time: "18:28",
    },
    {
      id: generateID(),
      first_name: "Berrie",
      last_name: "Basilio",
      text: "Etiam pretium iaculis justo",
      time: "18:28",
    },
    {
      id: generateID(),
      first_name: "Berrie",
      last_name: "Basilio",
      text: "Etiam pretium iaculis justo",
      time: "18:28",
    },
    {
      id: generateID(),
      first_name: "Berrie",
      last_name: "Basilio",
      text: "Etiam pretium iaculis justo",
      time: "18:28",
    },
    {
      id: generateID(),
      first_name: "Berrie",
      last_name: "Basilio",
      text: "Etiam pretium iaculis justo",
      time: "18:28",
    },
  ]);

  const [isFullSize, setIsFullSize] = useState(false);

  const changeChatBoardSize = () => {
    setIsFullSize(!isFullSize);
  };

  return (
    <ChatBoardWrapp>
      <ChatBoardContent active={isFullSize}>
        <ChatBoardHeader>
          <ChatBoardHeaderCol>
            <ChatBoardRules>Chat rules</ChatBoardRules>
          </ChatBoardHeaderCol>
          <ChatBoardHeaderCol>
            <OnlineStatus counter={398} />
          </ChatBoardHeaderCol>

          <ChatBoardHeaderCol>
            <ButtonOption icon={optionIcon} />
            <ButtonOption icon={closeIcon} onClick={changeChatBoardSize} />
          </ChatBoardHeaderCol>
        </ChatBoardHeader>
        <ChatBoardMain>
          {messages.map((item) => (
            <Message key={item.id} {...item} />
          ))}
        </ChatBoardMain>
        <ChatBoardBottom>
          <ChatBoardTextArea>
            <TextArea placeholder="Send message..." name="send" />
          </ChatBoardTextArea>
          <ChatBoardButtons>
            <ButtonOption icon={smileIcon} />
            <ButtonOption icon={sendIcon} size="25px" />
          </ChatBoardButtons>
        </ChatBoardBottom>
      </ChatBoardContent>

      <ChatBoardBack active={isFullSize}>
        <OnlineStatus counter={398} />
        <ChatBoardMessageButton>New message</ChatBoardMessageButton>
      </ChatBoardBack>
    </ChatBoardWrapp>
  );
};

export default ChatBoard;
