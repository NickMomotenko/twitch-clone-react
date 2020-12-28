import React, { useState } from "react";

import styled from "styled-components";

import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

import { generateID } from "../../utils";

import { useMessagesData } from "../../hooks/messages";

import sendIcon from "../../assets/chat/send.svg";
import smileIcon from "../../assets/icons/winking_face.gif";
import smileIcon1 from "../../assets/icons/smile-face.svg";
import optionIcon from "../../assets/icons/gear-option.svg";
import closeIcon from "../../assets/icons/close.svg";

import OnlineStatus from "../../UI/OnlineStatus/OnlineStatus";

import ButtonOption from "../../UI/Button/ButtonOption";

import TextArea from "../../UI/TextArea/TextArea";
import Message from "../../UI/Message/Message";

const ChatBoardWrapp = styled.div`
  height: 100%;
  transition: width 1s;

  padding: 10px;

  position: relative;
`;

const ChatBoardContent = styled.div`
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  width: 360px;
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
  padding: 0 20px;
  margin-bottom: 20px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 3px;
    background-color: transparent;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #818a96;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;

const ChatBoardBottom = styled.div``;

const ChatBoardTextArea = styled.div``;

const ChatBoardButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;

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
  transition-delay: ${(props) => (props.active ? "1s" : "0")};
  left: ${(props) => (props.active ? "0" : "initial")};
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

const ChatBoardPickerBlock = styled.div`
  position: absolute;
  width: 100%;
  bottom: 100%;
  margin-bottom: 80px;

  .emoji-mart {
    max-width: 100%;
  }
`;

const ChatBoard = (props) => {
  const [isEmojiPickerActive, setIsEmojiPickerActive] = useState(false);

  const chatBlockRef = React.useRef(null);
  const pickerRef = React.useRef(null);
  const chatBoardContentRef = React.useRef(null);
  const closeButtonRef = React.useRef(null);

  let { isFullSize, setIsFullSize } = props;
  const { messages } = useMessagesData();

  React.useEffect(() => {
    chatBlockRef.current.scrollTop = chatBlockRef.current.scrollHeight;
  }, [messages]);

  React.useEffect(() => {
    if (isFullSize) {
      chatBoardContentRef.current.style.visibility = "hidden";
      closeButtonRef.current.style.transform = `rotate(180deg)`;
    } else {
      chatBoardContentRef.current.style.visibility = "visible";
      closeButtonRef.current.style.transform = `rotate(0)`;
    }
  }, [isFullSize]);

  return (
    <ChatBoardWrapp>
      <ChatBoardContent ref={chatBoardContentRef} active={isFullSize}>
        <ChatBoardHeader>
          <ChatBoardHeaderCol>
            <ChatBoardRules>Chat rules</ChatBoardRules>
          </ChatBoardHeaderCol>
          <ChatBoardHeaderCol>
            {/* <OnlineStatus counter={20} /> */}
          </ChatBoardHeaderCol>

          <ChatBoardHeaderCol>
            <ButtonOption icon={optionIcon} />
            <ButtonOption
              icon={closeIcon}
              onClick={() => setIsFullSize(true)}
            />
          </ChatBoardHeaderCol>
        </ChatBoardHeader>
        <ChatBoardMain ref={chatBlockRef}>
          {messages &&
            messages.map((item) => <Message key={item.id} {...item} />)}
        </ChatBoardMain>
        <ChatBoardBottom>
          <ChatBoardTextArea>
            <TextArea placeholder="Send message..." name="send" />
          </ChatBoardTextArea>
          <ChatBoardButtons>
            {isEmojiPickerActive ? (
              <ChatBoardPickerBlock>
                <Picker ref={pickerRef} />
              </ChatBoardPickerBlock>
            ) : (
              <></>
            )}
            <ButtonOption icon={smileIcon1} size="25px" />
            <ButtonOption
              icon={smileIcon}
              onClick={() => setIsEmojiPickerActive(true)}
              size="25px"
            />
            <ButtonOption icon={sendIcon} size="25px" />
          </ChatBoardButtons>
        </ChatBoardBottom>
      </ChatBoardContent>

      <ChatBoardBack active={isFullSize}>
        <ButtonOption
          ref={closeButtonRef}
          icon={closeIcon}
          onClick={() => setIsFullSize(false)}
        />
        {/* <OnlineStatus counter={398} /> */}
        <ChatBoardMessageButton>New message</ChatBoardMessageButton>
      </ChatBoardBack>
    </ChatBoardWrapp>
  );
};

export default ChatBoard;
