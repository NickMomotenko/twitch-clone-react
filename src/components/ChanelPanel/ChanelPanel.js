import React from "react";

import styled from "styled-components";

import { useUserData } from "../../hooks/userData";

import uploadIcon from "../../assets/icons/upload.svg";
import followIcon from "../../assets/chat/heart.svg";
import starIcon from "../../assets/chat/star.svg";

import VideoPlayer from "../VideoPlayer/VideoPlayer";

import { Row, Column } from "../../UI/Layout/Layout";

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

  &:last-child {
    margin-top: 20px;
  }

  .eMGwzZ {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const ChanelPanelColumn = styled.div``;

const ChanelPanel = () => {
  const {
    data: { avatar, fullname },
  } = useUserData();

  return (
    <ChanelPanelWrapp>
      <ChanelPanelRow>
        <VideoPlayer />
      </ChanelPanelRow>
      <ChanelPanelRow>
        <ChanelPanelColumn>
          <Row>
            <Column>
              <Avatar url={avatar} />
            </Column>
            <Column>
              <Title title={fullname} />
              <Description text="Some description" />
              <ListGameTitle title="URL" />
            </Column>
          </Row>
        </ChanelPanelColumn>
        <ChanelPanelColumn>
          <ChanelPanelRow>
            <Button label="Отслеживать" icon={followIcon} />
            <Button label="Подписаться" icon={starIcon} />
          </ChanelPanelRow>
          {/* <ChanelPanelRow>
            <ButtonOption icon={uploadIcon}>
              <AlertSmall text="Поделиться" />
            </ButtonOption>
            <ButtonOption icon={uploadIcon}>
              <AlertSmall text="Параметры" />
            </ButtonOption>
          </ChanelPanelRow> */}
        </ChanelPanelColumn>
      </ChanelPanelRow>
    </ChanelPanelWrapp>
  );
};

export default ChanelPanel;
