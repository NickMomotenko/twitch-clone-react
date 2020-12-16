import React from "react";

import styled from "styled-components";

import Viewer from "../Viewer/Viewer";

import CategoryItem from "../Category/CategoryItem";

const ItemWrapp = styled.div`
  margin-right: ${({ right }) => (right ? `${right}px` : "0")};
  width: ${({ count, right }) =>
    count ? `calc(100% / ${count} - ${right}px)` : "100%"};
  flex-shrink: 0;

  &:last-child {
    margin-right: 0;
  }
`;

const ItemCol = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${(props) => props.spaceBtw && "space-between"};
`;

const ItemImg = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: block;
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : "180px")};
  margin-bottom: 14px;
`;

const ItemTitle = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 3px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemContent = styled.div`
  max-width: 100%;
`;

const ItemCategory = styled.div``;

const Item = ({
  widthCount,
  marginRight,
  icon,
  iconHeight,
  title,
  viewer,
  category,
}) => {
  return (
    <ItemWrapp count={widthCount} right={marginRight}>
      <ItemCol>
        <ItemImg url={icon} height={iconHeight} />
      </ItemCol>
      <ItemCol spaceBtw>
        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
          <Viewer value={viewer} color="#8c8c8c" />
        </ItemContent>
        <ItemCategory>
          {category &&
            category.map((item) => <CategoryItem key={item} label={item} />)}
        </ItemCategory>
      </ItemCol>
    </ItemWrapp>
  );
};

export default Item;
