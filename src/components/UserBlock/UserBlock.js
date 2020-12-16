import React from "react";

import styled from "styled-components";

import Avatar from "../../UI/Avatar/Avatar";

const UserBlockWrapp = styled.div`
  display: flex;
  cursor: pointer;
`;

const UserBlockCol = styled.div`
  margin-right: 20px;

  &:first-child {
    text-align: right;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const UserBlockName = styled.div`
  font-size: 16px;
  color: #c9c6d4;
  margin-bottom: 5px;
`;

const UserBlockStatus = styled.div`
  font-size: 14px;
  color: #757cff;
`;

const UserBlock = () => {
  const user = {
    online: true,
    fullname: "Nick Spark",
  };

  return (
    <UserBlockWrapp>
      <UserBlockCol>
        <UserBlockName>{user.fullname}</UserBlockName>
        <UserBlockStatus>{user.online ? "online" : "offline"}</UserBlockStatus>
      </UserBlockCol>
      <UserBlockCol>
        <Avatar
          size="56"
          borderRadius="5"
          status={user.online}
          statusColor="#12ff3f"
          statusBorderColor="#25222d"
          url="https://vignette.wikia.nocookie.net/nu-pogodi/images/8/82/%D0%92%D1%8B%D0%BF%D1%83%D1%81%D0%BA_7-%D0%B9.jpg/revision/latest/top-crop/width/360/height/450?cb=20200417145938&path-prefix=ru"
        />
      </UserBlockCol>
    </UserBlockWrapp>
  );
};

export default UserBlock;
