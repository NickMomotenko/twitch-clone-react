import React from "react";

import styled from "styled-components";

const VideoTrackWrapp = styled.div`
  width: ${(props) => props.count && `calc(100% / ${props.count})`};
  margin-right: 20px;

  height: 145px;

  cursor: pointer;
  position: relative;
`;

const VideoTrackPreview = styled.div`
  height: 100%;
  width: 100%;
`;

const VideoPreviewImg = styled.img.attrs((props) => ({
  src: props.url,
}))`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const VideoTrackViewers = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 5;
  margin: 5px;
  padding: 3px 5px;
  border-radius: 3px;
  color: #fff;
  background-color: #000;
  opacity: 0.7;
`;

const VideoTrackContent = styled.div``;

const VideoTrackTitle = styled.div`
  color: #fff;
  font-size: 18px;
`;

const VideoTrackDesc = styled.div`
  color: #aea1a1;
`;

const VideoTrackDate = styled(VideoTrackViewers)`
  top: 0;
  left: 0;
  bottom: auto;
  right: auto;
`;

const VideoTrack = ({
  title,
  tags,
  text,
  preview,
  date,
  viewers,
  comments,
  count,
}) => {
  return (
    <VideoTrackWrapp count={count}>
      <VideoTrackPreview>
        <VideoPreviewImg url={preview} />
        <VideoTrackViewers>{`${viewers} просмотров`}</VideoTrackViewers>
        <VideoTrackDate>{date}</VideoTrackDate>
      </VideoTrackPreview>
      <VideoTrackContent>
        <VideoTrackTitle>{title}</VideoTrackTitle>
        <VideoTrackDesc>{text}</VideoTrackDesc>
      </VideoTrackContent>
    </VideoTrackWrapp>
  );
};

export default VideoTrack;
