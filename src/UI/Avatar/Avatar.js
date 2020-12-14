import React from "react";

import styled from "styled-components";

import StatusIndicator from "../StatusIndicator/StatusIndicator";

const AvatarWrapp = styled.div`
  display: inline-block;
  width: 45px;
  height: 45px;
  position: relative;
`;

const AvatarIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const Avatar = ({ url, status }) => {
  return (
    <AvatarWrapp>
      <AvatarIcon url={url} />
      {status && <StatusIndicator status={status} />}
    </AvatarWrapp>
  );
};

export default Avatar;
