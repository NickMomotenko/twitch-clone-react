import React from "react";

import styled from "styled-components";

import StatusIndicator from "../StatusIndicator/StatusIndicator";

const AvatarWrapp = styled.div`
  display: inline-block;
  width: ${({ size }) => (size ? `${size}px` : "45px")};
  height: ${({ size }) => (size ? `${size}px` : "45px")};
  position: relative;
`;

const AvatarIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : "50%"};
`;

const Avatar = ({
  url,
  status,
  size,
  borderRadius,
  statusColor,
  statusBorderColor,
}) => {
  return (
    <AvatarWrapp size={size}>
      <AvatarIcon url={url} borderRadius={borderRadius} />
      {status && (
        <StatusIndicator
          status={status}
          statusColor={statusColor}
          statusBorderColor={statusBorderColor}
        />
      )}
    </AvatarWrapp>
  );
};

export default Avatar;
