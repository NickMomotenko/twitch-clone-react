import React, { useState } from "react";

import styled from "styled-components";

import streamingIcon from "./assets/icons/mic.png";
import arrowIcon from "./assets/icons/left-arrow.png";

import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";

import Button from "./UI/Button/Button";
import ButtonCircle from "./UI/Button/ButtonCircle";
import ListItem from "./UI/List/ListItem";

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
`;

const AppBarContent = styled.div`
  padding: 40px 25px;
  background-color: ${({ bg }) => bg};
  position: ${(props) => (props.position ? props.position : "static")};

  &:last-child {
    flex: 1;
  }
`;

const AppBarContentButton = styled.div`
  display: inline-block;

  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
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
      </AppMainDashboadr>
    </AppWrapper>
  );
};

export default App;
