import React from "react";

import styled from "styled-components";

const ViewerWrapp = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => (props.color ? props.color : "#fff")};
`;

const Viewer = ({ value, ...rest }) => {
  return <ViewerWrapp {...rest}>{`${value} viewers`}</ViewerWrapp>;
};

export default Viewer;
