import React, { useState } from "react";

import styled from "styled-components";

import { useData } from "./hooks/data";
import { useUsersData } from "./hooks/users";

import streamingIcon from "./assets/icons/mic.png";
import arrowIcon from "./assets/icons/left-arrow.png";

import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";

import Button from "./UI/Button/Button";
import ButtonCircle from "./UI/Button/ButtonCircle";
import ListItem from "./UI/List/ListItem";

import Title from "./UI/General/Title";
import Item from "./UI/General/Item";
import GeneralList from "./UI/General/GeneralList";

import ChanelDashboard from "./components/ChanelDashboard/ChanelDashboard";

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const AppBar = styled.div`
  background-color: #6441a4;
  width: 220px;

  display: flex;
  flex-direction: column;
`;

const AppRow = styled.div`
  margin-bottom: 60px;
`;

const AppLogo = styled(AppRow)`
  text-align: center;
`;

const AppMainDashboadr = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
`;

const AppMainContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AppBarContent = styled.div`
  padding: 40px 25px;
  background-color: ${({ bg }) => bg};
  position: ${(props) => (props.position ? props.position : "static")};

  &:last-child {
    flex: 1;
  }
`;

const AppMainContentBlock = styled.div``;

const AppBarContentButton = styled.div`
  display: inline-block;

  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
`;

const AppMainContent = styled.div`
  height: 83%;
`;

const App = () => {
  const [recommendation, setRecommendation] = useState([
    {
      id: 1,
      avatar:
        "https://lh3.googleusercontent.com/proxy/e04v6gmEhkiHH2XZosp4kMXikH0bIz1-POReFyuoq-GjP_CcAoHM5SfGMV60nUvyoRwonoPu6aCw98BuEzWEAFj_3S0JVf0gPJu-HtL0ag",
      online: true,
      viewer: 565,
      title: "Test title",
      category: "Fortnite",
    },
    {
      id: 2,
      avatar:
        "https://lh3.googleusercontent.com/proxy/e04v6gmEhkiHH2XZosp4kMXikH0bIz1-POReFyuoq-GjP_CcAoHM5SfGMV60nUvyoRwonoPu6aCw98BuEzWEAFj_3S0JVf0gPJu-HtL0ag",
      online: false,
      viewer: 977,
      title: "Test title 2",
      category: "Fortnite",
    },
  ]);

  const { topGames, recommendedGames } = useData();
  // const { data } = useUsersData();

  return (
    <AppWrapper>
      <AppBar>
        <AppBarContent>
          <AppRow>
            <AppLogo>
              <Logo />
            </AppLogo>
          </AppRow>
          <AppRow>
            <Button label="Streaming" icon={streamingIcon} />
          </AppRow>
          <Menu />
        </AppBarContent>
        <AppBarContent bg="#52299e" position="relative">
          <AppBarContentButton>
            <ButtonCircle icon={arrowIcon} />
          </AppBarContentButton>
          <AppRow>
            {recommendation.map((item) => (
              <ListItem key={item.id} {...item} />
            ))}
          </AppRow>
        </AppBarContent>
      </AppBar>
      <AppMainDashboadr>
        <Header />
        <AppMainContent>
          {/* <AppMainContentBlock>
            <AppMainContentTitle>
              <Title title="Recommended for you" />
            </AppMainContentTitle>
            <GeneralList marginRight="40" wrap="false">
              {recommendedGames.map((item) => (
                <Item
                  key={item.id}
                  widthCount={3.3}
                  iconHeight={250}
                  marginRight="40"
                  {...item}
                />
              ))}
            </GeneralList>

            <AppMainContentTitle>
              <Title title="Top Games" />
              <Button label="More games" bgColor="#1f1d24" />
            </AppMainContentTitle>
            <GeneralList marginRight="30">
              {topGames.map((item) => (
                <Item key={item.id} widthCount={9} marginRight="30" {...item} />
              ))}
            </GeneralList>
          </AppMainContentBlock> */}
          <ChanelDashboard />
        </AppMainContent>
      </AppMainDashboadr>
    </AppWrapper>
  );
};

export default App;
