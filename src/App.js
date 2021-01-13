import React from "react";

import { Route, Switch, useHistory } from "react-router-dom";

import { useSwipeable } from "react-swipeable";

import styled from "styled-components";

import { useData } from "./hooks/data";
import { useUsersData } from "./hooks/users";
import { useSlider, Slider } from "./hooks/slider";

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
import ProfileDashboard from "./components/ProfileDashboard/Profile";

import Login from "./pages/Login/Login";
import { Row } from "./UI/Layout/Layout";
import ButtonOption from "./UI/Button/ButtonOption";

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
  overflow-y: scroll;
`;

const AppButton = styled.div`
  button {
    margin-bottom: 20px;
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const App = () => {
  const { topGames, recommendedGames } = useData();
  const { data } = useUsersData();

  const history = useHistory();

  // const { initSlider } = useSlider();

  const testref = React.useRef();

  React.useEffect(() => {
    // initSlider(testref.current, recommendedGames);
  }, []);

  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log("User Swiped!", eventData),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

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
            <AppButton>
              <Button
                label="My profile"
                icon={streamingIcon}
                onClick={() => history.push("/app/profile")}
              />
              <Button
                label="Streaming"
                icon={streamingIcon}
                onClick={() => history.push("/app/dash")}
              />
            </AppButton>
          </AppRow>
          <Menu />
        </AppBarContent>
        <AppBarContent bg="#52299e" position="relative">
          <AppBarContentButton>
            <ButtonCircle icon={arrowIcon} />
          </AppBarContentButton>
          <AppRow>
            {data?.map((item) => (
              <ListItem key={item.id} {...item} />
            ))}
          </AppRow>
        </AppBarContent>
      </AppBar>
      <AppMainDashboadr>
        <Header />
        <AppMainContent>
          <Switch>
            <Route path="/app/dash" component={ChanelDashboard} />
            <Route path="/app/profile" component={ProfileDashboard} />
            <Route path="/app">
              <AppMainContentBlock>
                <AppMainContentTitle>
                  <Title title="Recommended for you" />
                </AppMainContentTitle>

                <GeneralList
                  marginRight="40"
                  overflow="hidden"
                  wrap="false"
                  {...handlers}
                >
                  {/* <Slider ref={testref}>
                    {recommendedGames.map((item) => (
                      <Item
                        key={item.id}
                        widthCount={3.3}
                        iconHeight={250}
                        marginRight="40"
                        {...item}
                      />
                    ))}
                  </Slider> */}
                </GeneralList>

                <AppMainContentTitle>
                  <Title title="Top Games" />
                  <Button label="More games" bgColor="#1f1d24" />
                </AppMainContentTitle>
                <GeneralList marginRight="30">
                  {topGames.map((item) => (
                    <Item
                      key={item.id}
                      widthCount={9}
                      marginRight="30"
                      {...item}
                    />
                  ))}
                </GeneralList>
              </AppMainContentBlock>
            </Route>
          </Switch>
        </AppMainContent>
      </AppMainDashboadr>
    </AppWrapper>
  );
};

export default App;
