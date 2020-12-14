import React from "react";

import styled from "styled-components";

const ViewerWrapp = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #fff;
`;

const Viewer = ({ value }) => {
  return <ViewerWrapp>{`${value} viewers`}</ViewerWrapp>;
};

export default Viewer;
