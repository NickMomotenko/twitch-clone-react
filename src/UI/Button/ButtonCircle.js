import React from "react";

import styled from "styled-components";

const ButtonCircleWrapp = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #52299e;
  box-shadow: 0 0 3px #fff;
  transition: all 0.4s;

  position: relative;

  &:hover {
    box-shadow: 0 0 5px #fff;
  }
`;

const ButtonCircleIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: inline-block;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonCircle = ({ icon }) => {
  return (
    <ButtonCircleWrapp>
      <ButtonCircleIcon url={icon} />
    </ButtonCircleWrapp>
  );
};

export default ButtonCircle;
