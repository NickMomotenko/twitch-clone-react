import React from "react";

import styled from "styled-components";

import offlineImg from "../../assets/video/offline.png";

const VideoPlayerWrapp = styled.div`
  height: 670px;
`;

const VideoPlayerOfflineImg = styled.img.attrs(({url}) => ({
  src: url,
}))`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const VideoPlayer = () => {
  return (
    <VideoPlayerWrapp>
      <VideoPlayerOfflineImg url={offlineImg} />
    </VideoPlayerWrapp>
  );
};

export default VideoPlayer;
