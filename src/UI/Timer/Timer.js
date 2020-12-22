import React from "react";

import styled from "styled-components";

const TimerWrapp = styled.div``;

const Timer = () => {
  const [seconds, setSeconds] = React.useState(0);

  return <TimerWrapp>{`${seconds} секунд`}</TimerWrapp>;
};

export default Timer;
