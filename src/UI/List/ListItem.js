import React from "react";

import styled from "styled-components";

import Avatar from "../Avatar/Avatar";

import ListTitle from "../List/ListTitle";
import ListGameTitle from "../List/ListGameTitle";

import Viewer from "../Viewer/Viewer";

const ListItemWrapp = styled.div`
  margin-bottom: 25px;
  display: flex;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ListItemCol = styled.div`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const ListItem = ({ avatar, online, title, viewer, category }) => {
  return (
    <ListItemWrapp>
      <ListItemCol>
        <Avatar url={avatar} status={online} />
      </ListItemCol>
      <ListItemCol>
        <ListTitle title={title} />
        <Viewer value={viewer} />
        <ListGameTitle title={online ? category : "12 minute ago"} />
      </ListItemCol>
    </ListItemWrapp>
  );
};

export default ListItem;
