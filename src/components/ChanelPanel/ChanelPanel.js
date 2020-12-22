import React from "react";

import styled from "styled-components";

import uploadIcon from "../../assets/icons/upload.svg";

import VideoPlayer from "../VideoPlayer/VideoPlayer";

import Avatar from "../../UI/Avatar/Avatar";
import Button from "../../UI/Button/Button";
import ButtonOption from "../../UI/Button/ButtonOption";

import { AlertSmall } from "../../modules/Alert/AlertSmall";

import Title from "../../UI/General/Title";
import Description from "../../UI/General/Description";
import ListGameTitle from "../../UI/List/ListGameTitle";

const ChanelPanelWrapp = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChanelPanelRow = styled.div`
  flex: 1;

  display: flex;
  justify-content: space-between;
`;

const ChanelPanelColumn = styled.div``;

const ChanelPanel = () => {
  return (
    <ChanelPanelWrapp>
      <ChanelPanelRow>
        <VideoPlayer />
      </ChanelPanelRow>
      <ChanelPanelRow>
        <ChanelPanelColumn>
          <Avatar />
          <Title title="Title text" />
          <Description text="Some description" />
          <ListGameTitle title="Fortnite" />
        </ChanelPanelColumn>
        <ChanelPanelColumn>
          <ChanelPanelRow>
            <Button label="Отслеживать" />
            <Button label="Подписаться" />
          </ChanelPanelRow>
          <ChanelPanelRow>
            <ButtonOption icon={uploadIcon}>
              <AlertSmall text="Поделиться" />
            </ButtonOption>
            <ButtonOption icon={uploadIcon}>
              <AlertSmall text="Параметры" />
            </ButtonOption>
          </ChanelPanelRow>
        </ChanelPanelColumn>
      </ChanelPanelRow>
    </ChanelPanelWrapp>
  );
};

export default ChanelPanel;
