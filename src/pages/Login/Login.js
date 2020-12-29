import React from "react";

import styled from "styled-components";

import Logo from "../../components/Logo/Logo";

import Button from "../../UI/Button/Button";

const LoginWrapp = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginContent = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  max-height: 60%;

  border: 1px solid #fff;
  border-radius: 10px;
  overflow: hidden;
`;

const LoginBg = styled.div`
  background-color: purple;

  max-height: 40%;
  height: 100%;
  position: relative;

  .sc-bdfBwQ {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const LoginBlock = styled.div``;

const LoginBlockTitle = styled.div``;

const LoginBlockSubtitle = styled.div``;

const LoginBlockButtons = styled.div``;

const Login = () => {
  return (
    <LoginWrapp>
      <LoginContent>
        <LoginBg>
          <Logo />
        </LoginBg>
        <LoginBlock>
          <LoginBlockTitle>Welcome to Twitch</LoginBlockTitle>
          <LoginBlockSubtitle>
            Before your first stream , we will help you set up you mic , webcam,
            layouts and settings
          </LoginBlockSubtitle>
          <LoginBlockButtons>
            <Button label="Get started" />
            <Button label="Registration" />
          </LoginBlockButtons>
        </LoginBlock>
      </LoginContent>
    </LoginWrapp>
  );
};

export default Login;
