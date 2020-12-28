import React from "react";

import styled from "styled-components";

import { useUserData } from "../../hooks/userData";

import arrowIcon from "../../assets/icons/arrow-down.svg";

import Avatar from "../../UI/Avatar/Avatar";
import { Column, Paper, Row } from "../../UI/Layout/Layout";

const UserBlockPaper = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 5;
  transition: all 0.5s;
`;

const UserBlockWrapp = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    display: inline-block;

    height: 8px;
    width: 13px;

    background-image: url(${(props) => props.icon && props.icon});
    background-repeat: no-repeat;
    vertical-align: middle;
    margin-left: 13px;
  }

  .VVxXf {
    visibility: ${(props) => (props.active ? "visible" : "hidden")};
  }
`;

const UserBlockCol = styled.div`
  /* margin-right: 20px; */

  &:first-child {
    text-align: right;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const UserBlock = () => {
  const {
    data: { online, avatar },
  } = useUserData();

  const [isOptionActive, setIsOptionActive] = React.useState(false);

  const options = [
    { title: "Канал", path: "/chanel" },
    { title: "Видеостудия", path: "/chanel" },
    { title: "Панель управления автора", path: "/chanel" },
    { title: "Друзья", path: "/chanel" },
    { title: "Подписки", path: "/chanel" },
    { title: "Дропс", path: "/chanel" },
    { title: "Настройки", path: "/chanel" },
    { title: "Темное оформление", path: "/chanel" },
    { title: "Выход", path: "/chanel", func: () => {} },
  ];

  return (
    <UserBlockWrapp
      icon={arrowIcon}
      onClick={() => setIsOptionActive(!isOptionActive)}
    >
      <UserBlockCol>
        <Avatar
          size="56"
          borderRadius="5"
          status={online}
          statusColor="#12ff3f"
          statusBorderColor="#25222d"
          url="https://vignette.wikia.nocookie.net/nu-pogodi/images/8/82/%D0%92%D1%8B%D0%BF%D1%83%D1%81%D0%BA_7-%D0%B9.jpg/revision/latest/top-crop/width/360/height/450?cb=20200417145938&path-prefix=ru"
        />
      </UserBlockCol>
      {isOptionActive ? (
        <UserBlockPaper active={isOptionActive}>
          <Paper>
            <Row>
              <Column>
                <Avatar url={avatar} />
              </Column>
              <Column></Column>
            </Row>
            <Row>
              <Column>
                {options.map((item) => (
                  <Row key={item.title}>{item.title}</Row>
                ))}
              </Column>
            </Row>
          </Paper>
        </UserBlockPaper>
      ) : null}
    </UserBlockWrapp>
  );
};

export default UserBlock;
