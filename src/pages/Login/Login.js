import React from "react";

import styled from "styled-components";

import Logo from "../../components/Logo/Logo";
import { withAuth } from "../../hoc/Auth";

// import { useData } from "../../hooks/login";

import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import Label from "../../UI/Label/Label";

const LoginWrapp = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginContent = styled.form`
  display: flex;
  flex-direction: column;

  width: 51%;
  box-shadow: 0 0 12px #fff;
  border-radius: 10px;
  overflow: hidden;
`;

const LoginBg = styled.div`
  background-color: purple;

  transition: all 0.5s;

  min-height: ${(props) => props.size && props.size};
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .sc-hOqqkJ {
    font-size: 27px;
    margin-left: 20px;
  }
`;

const LoginBlock = styled.div`
  text-align: center;
  padding: 40px 11%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  label {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0 !important;
    }
  }
`;

const LoginBlockTitle = styled.div`
  font-weight: 700;
  color: #fff;
  font-size: 41px;
`;

const LoginBlockSubtitle = styled(LoginBlockTitle)`
  font-weight: 500;
  color: #d5d0d0;
  font-size: 20px;
  margin-top: 28px;
`;

const LoginBlockButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 65px;

  button {
    flex: 1;
    margin-right: 25px;
    text-align: center;
    display: inline-flex;
    justify-content: center;
    padding: 8px 30px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Login = (props) => {
  const [isGetStarted, setIsGetStarted] = React.useState(true);

  const {
    data: { login, password },
    onChange,
    logIn,
    registration,
  } = props;

  let bgSizeBlock = !isGetStarted ? "232px" : "100px";

  return (
    <LoginWrapp>
      <LoginContent>
        <LoginBg size={bgSizeBlock}>
          <Logo size={isGetStarted ? "small" : ""} />
          {isGetStarted && (
            <LoginBlockTitle>Login in to Twitch</LoginBlockTitle>
          )}
        </LoginBg>
        <LoginBlock>
          {!isGetStarted && (
            <>
              <LoginBlockTitle>Welcome to Twitch</LoginBlockTitle>
              <LoginBlockSubtitle>
                Before your first stream , we will help you set up you mic ,
                webcam, layouts and settings
              </LoginBlockSubtitle>
            </>
          )}

          {isGetStarted && (
            <>
              <Label title="Username">
                <Input
                  placeholder="name"
                  name="login"
                  value={login}
                  onChange={onChange}
                />
              </Label>
              <Label title="Password">
                <Input
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </Label>
            </>
          )}

          <LoginBlockButtons>
            {isGetStarted ? (
              <>
                <Button
                  label="Registration"
                  bgColor="#3a373f"
                  onClick={() => registration}
                />
                <Button label="Login" onClick={logIn} />
              </>
            ) : (
              <Button
                label="Get started"
                onClick={() => setIsGetStarted(!isGetStarted)}
              />
            )}
          </LoginBlockButtons>
        </LoginBlock>
      </LoginContent>
    </LoginWrapp>
  );
};

export default withAuth(Login);
