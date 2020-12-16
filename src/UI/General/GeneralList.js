import React, { Children } from "react";

import styled from "styled-components";

const GeneralListWrapp = styled.div`
  display: flex;
  flex-wrap: ${({ wrap }) => (wrap !== "false" ? "wrap" : "nowrap")};
  margin-right: ${(props) =>
    props.marginRight ? `-${props.marginRight}px` : "0"};
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const GeneralList = ({ children, ...rest }) => {
  return <GeneralListWrapp {...rest}>{children}</GeneralListWrapp>;
};

export default GeneralList;
