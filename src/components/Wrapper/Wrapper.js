import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";

import App from "../../App";

import styled from "styled-components";

import { withAuth } from "../../hoc/Auth";

import { PrivateRoute } from "../../routes/PrivateRoute";

const WrapperBlock = styled.div`
  height: 100%;
  width: 100%;
`;

const Wrapper = (props) => {
  return (
    <WrapperBlock>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/registration" component={Registration} />
        <PrivateRoute
          path="/app"
          isLoggedIn={props.isLoggedIn}
          component={App}
        />
        <Redirect to="/" />
      </Switch>
    </WrapperBlock>
  );
};

export default withAuth(Wrapper);
