import React from "react";

import { useSelector } from "react-redux";

import styled from "styled-components";
import Avatar from "../../UI/Avatar/Avatar";
import Button from "../../UI/Button/Button";
import { Column, Paper, Row } from "../../UI/Layout/Layout";

import followIcon from "../../assets/chat/heart.svg";
import { AlertSmall } from "../../modules/Alert/AlertSmall";
import VideoTrack from "../VideoPlayer/VideoTrack";

const ProfileWrapp = styled.div`
  position: relative;
`;

const ProfilePreview = styled.div`
  height: 400px;
`;

const ProfilePreviewBg = styled.img.attrs((props) => ({
  src: props.url,
}))`
  max-height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ProfilePreviewContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 45px 0;
  margin-right: 25px;
  max-width: 220px;
  width: 100%;
  background-color: #fff;

  button {
    width: 100%;
  }
`;

const ProfileOnlineStatus = styled.div`
  background: #4c426a;
  display: inline-block;
  color: #fff;
  border-radius: 3px;
  padding: 2px 5px;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  align-self: center;
  margin-left: 10px;
`;

const ProfileUserName = styled.div`
  font-size: 21px;
  font-weight: 700;
  margin-top: 20px;
`;

const ProfileUserInfo = styled.div`
  font-size: 16px;
  margin-top: 2px;
`;

const ProfileButton = styled.div`
  position: relative;
  margin-top: 22px;

  button {
    &:hover {
      &.cLUyYi {
        visibility: visible;
      }
    }
  }
`;

const ProfileFollowersText = styled.div`
  font-weight: 600;
  font-size: 17px;
`;

const ProfileFollowersCounter = styled(ProfileOnlineStatus)``;

const ProfileMainContent = styled.div`
  padding: 0 15%;
  position: relative;
  margin-top: 40px;
`;

const ProfileTitle = styled.div`
  color: #fff;
  font-size: 29px;

  font-weight: 700;
  margin-bottom: 25px;
`;

const Profile = () => {
  const user = useSelector((state) => state.user);

  let onlineStatus = user.online ? "online" : "offline";

  console.log(user.videos);

  return (
    <ProfileWrapp>
      <ProfilePreview>
        <ProfilePreviewBg url={user.chanelInfo.previewImage} />

        <ProfilePreviewContent>
          <Paper>
            <Row>
              <Avatar url={user.avatar} />
              <ProfileOnlineStatus>{onlineStatus}</ProfileOnlineStatus>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <ProfileFollowersText>Followers: </ProfileFollowersText>
              <ProfileFollowersCounter>
                {user.chanelInfo.followers}
              </ProfileFollowersCounter>
            </Row>
            <ProfileUserName>{user.fullname}</ProfileUserName>

            <ProfileUserInfo>
              {user.chanelInfo.smallDescription}
            </ProfileUserInfo>
            <ProfileButton>
              <Button
                label="Отслеживать"
                icon={followIcon}
                onClick={() => {}}
              />
              <AlertSmall text="Отслеживать" />
            </ProfileButton>
          </Paper>
        </ProfilePreviewContent>
      </ProfilePreview>
      <ProfileMainContent>
        <Paper style={{ padding: "40px" }}>
          <Row>
            <Column style={{ textAlign: "center" }}>
              <Avatar url={user.avatar} size="70" />
              <Row style={{ marginTop: "20px" }}>
                <ProfileFollowersText>Followers: </ProfileFollowersText>
                <ProfileFollowersCounter>
                  {user.chanelInfo.followers}
                </ProfileFollowersCounter>
              </Row>
            </Column>
            <Column style={{ marginLeft: "20px" }}>
              <ProfileUserName style={{ marginTop: 0 }}>
                {`Информация: ${user.fullname}`}
              </ProfileUserName>
              <ProfileUserInfo style={{ marginTop: "15px" }}>
                {user.chanelInfo.description}
              </ProfileUserInfo>
            </Column>
          </Row>
        </Paper>
        <Row style={{ justifyContent: "flex-end", marginTop: "20px" }}>
          <Button label="Редактировать описание" onClick={() => {}} />
        </Row>

        <ProfileTitle>Последние трансляции</ProfileTitle>
        <Row style={{ marginRight: "-20px" }}>
          {user.videos.map((video) => (
            <VideoTrack key={video.id} count={3} {...video} />
          ))}
        </Row>
      </ProfileMainContent>
    </ProfileWrapp>
  );
};

export default Profile;
