import React from "react";

import styled from "styled-components";

const ButtonOptionWrapp = styled.button`
  position: relative;
`;

const ButtonOptionIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  display: inline-block;

  height: ${(props) => (props.size ? props.size : "17px")};
  width: ${(props) => (props.size ? props.size : "17px")};
`;

const ButtonOptionAlert = styled.div`
  display: inline-block;
  min-height: 17px;
  line-height: 17px;
  min-width: 20px;
  background-color: #ff2121;
  border-radius: 3px;

  color: #f5f5f5;
  font-size: 12px;
  text-align: center;

  position: absolute;
  top: -16px;
  right: -10px;
`;

// const ButtonOption = React.forwardRef({ icon, counter, onClick, size ,ref }) => {
//   return (
//     <ButtonOptionWrapp onClick={onClick} ref={ref}>
//       <ButtonOptionIcon url={icon} size={size} />
//       {counter && <ButtonOptionAlert>{counter}</ButtonOptionAlert>}
//     </ButtonOptionWrapp>
//   );
// });

const ButtonOption = React.forwardRef(
  ({ icon, counter, onClick, size, children }, ref) => (
    <ButtonOptionWrapp onClick={onClick} ref={ref}>
      <ButtonOptionIcon url={icon} size={size} />
      {counter && <ButtonOptionAlert>{counter}</ButtonOptionAlert>}

      {children}
    </ButtonOptionWrapp>
  )
);

export default ButtonOption;
