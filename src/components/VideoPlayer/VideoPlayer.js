import React from "react";

import { useSelector } from "react-redux";

import styled from "styled-components";

const VideoPlayerWrapp = styled.div`
  height: 670px;
`;

const VideoPlayerOfflineImg = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const VideoPlayer = () => {
  const previewImg = useSelector((state) => state.user.chanelInfo.previewImage);
  return (
    <VideoPlayerWrapp>
      <VideoPlayerOfflineImg url={previewImg} />
    </VideoPlayerWrapp>
  );
};

export default VideoPlayer;
