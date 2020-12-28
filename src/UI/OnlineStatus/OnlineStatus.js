import React from "react";

import styled from "styled-components";

import { getRandomNumber } from "../../utils";

const OnlineStatusWrapp = styled.div`
  color: #dda7a7;

  :before {
    content: "";
    display: inline-block;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background-color: #dda7a7;
    vertical-align: middle;
    margin-right: 5px;
  }
`;

const OnlineStatus = ({ counter }) => {
  const defaultValue = 0;
  const [counterValue, setCounterValue] = React.useState(counter);

  const counterRef = React.useRef(null);

  React.useEffect(() => {
    counterAnimation(defaultValue, counterValue, 3500);
  }, []);

  React.useEffect(() => {
    setInterval(() => {
      let randomNumber = getRandomNumber(100);
      counterAnimation(counterValue, randomNumber, 5000);

      setCounterValue(randomNumber);
    }, 10000);
  }, [counterValue]);

  const counterAnimation = (start, end, duration) => {
    let startTimestamp;

    const step = (timestamp) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }

      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      counterRef.current.innerText = `${Math.floor(
        progress * (end - start) + start
      )} viewers`;

      if (progress < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  };
  return <OnlineStatusWrapp ref={counterRef}></OnlineStatusWrapp>;
};

export default OnlineStatus;
