import React from "react";

import styled, { keyframes } from "styled-components";

// import arrows from "../../assets/donation/arrows.svg";
import right_arrow from "../../assets/donation/right-arrow.svg";
import heartIcon from "../../assets/donation/heart.svg";

import { AlertSmall } from "../../modules/Alert/AlertSmall";

const DonationButtonWrapp = styled.div`
  padding: 14px 30px;
  margin-right: 10px;

  position: relative;
`;

const DonationButtonContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const DonationButtonDisplay = styled.div`
  display: flex;
  align-items: center;
`;

const DonationButtonValue = styled.div`
  font-size: 20px;
  font-weight: 700;
  transition: color 0.4s;
  color: ${(props) => (props.onActive ? "#0077ff" : "#fff")};
  margin-left: 15px;

  min-width: 35px;

  &:before {
    content: "$";
    color: #cbbbbb;
    margin-right: 5px;
    vertical-align: middle;
  }
`;

const DonationButtonChanger = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  height: 30px;
  width: 20px;
  border-radius: 5px;

  position: relative;

  visibility: ${(props) => (props.onActive ? "visible" : "hidden")};
`;

const DonationButtonClicker = styled(DonationButtonChanger)`
  height: 15px;
  width: 15px;
  transform: none;

  transition: background-color 0.4s;
  background-color: ${(props) => props.onActive && "#0077ff"};

  visibility: ${(props) => (props.onActive ? "visible" : "hidden")};
  position: relative;

  &:hover {
    box-shadow: 0 0 5px #fff;
  }

  &:before {
    display: none;
  }

  &:after {
    content: "";
    display: inline-block;
    height: 10px;
    width: 10px;
    background: url(${right_arrow}) center no-repeat;
    transform: rotate(90deg) translate(-50%, -50%);
    transform-origin: 0 0;
    position: absolute;
    top: 50%;
    left: 55%;
  }
`;

const testAnim = keyframes`
  0% {
  background-position: 0 0;
  }
  100% {
    background-position: -2800px 0;
  }
`;

const DonationButtonHeart = styled.div`
  display: inline-block;
  height: 35px;
  width: 35px;
  margin-left: 10px;

  background: url(${heartIcon}) center no-repeat;
  transition: transform 0.4s;

  cursor: pointer;

  position: relative;

  &:hover {
    transform: scale(1.1);
  }

  &:after {
    content: "";

    display: inline-block;
    height: 100px;
    width: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: url(https://cssanimation.rocks/images/posts/steps/heart.png)
      no-repeat;
    background-position: ${(props) => (props.done ? "-2800px 0" : "0 0")};
    opacity: ${(props) => (props.done ? "1" : "0")};
    visibility: ${(props) => (props.done ? "visible" : "hidden")};
    cursor: pointer;
    transition: background 1s steps(28), opacity 0.1s;
    animation: ${testAnim} 2s steps(28);
  }
`;

const DonationAlert = styled(AlertSmall)``;

const DonationButton = () => {
  const [onActive, setOnActive] = React.useState(false);

  const [counterValue, setCounterValue] = React.useState(5);

  const [statusDone, setStatusDone] = React.useState(true);

  const donationButtonRef = React.useRef(null);
  const testRef = React.useRef(null);

  React.useEffect(() => {
    if (statusDone) {
      donationButtonRef.current.style.pointerEvents = "none";
      setTimeout(() => {
        setStatusDone(false);

        setTimeout(() => {
          donationButtonRef.current.style.pointerEvents = "all";
        }, 600);
      }, 400);
    }
  }, [statusDone]);

  React.useEffect(() => console.log(testRef.current), []);

  const incrementCounterValue = () => {
    setCounterValue(counterValue + 1);
  };

  const decrementCounterValue = () => {
    if (counterValue === 1) {
      setCounterValue(1);
    } else {
      setCounterValue(counterValue - 1);
    }
  };

  return (
    <DonationButtonWrapp>
      <DonationButtonContent>
        <DonationButtonDisplay
          onMouseOver={() => setOnActive(true)}
          onMouseLeave={() => setOnActive(false)}
        >
          <DonationButtonChanger onActive={onActive}>
            <DonationButtonClicker
              style={{ transform: `rotate(180deg)` }}
              onActive={onActive}
              as="button"
              onClick={incrementCounterValue}
            />
            <DonationButtonClicker
              onActive={onActive}
              as="button"
              onClick={decrementCounterValue}
            />
          </DonationButtonChanger>
          <DonationButtonValue onActive={onActive}>
            {counterValue}
          </DonationButtonValue>
        </DonationButtonDisplay>

        <DonationButtonHeart
          ref={donationButtonRef}
          done={statusDone}
          onClick={() => setStatusDone(!statusDone)}
        />

        <DonationAlert
          text={`Донат в ${counterValue}$ отправлен`}
          ref={testRef}
        />
      </DonationButtonContent>
    </DonationButtonWrapp>
  );
};

export default DonationButton;
