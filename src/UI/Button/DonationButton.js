import React from "react";

import styled from "styled-components";

import arrows from "../../assets/donation/arrows.svg";
import right_arrow from "../../assets/donation/right-arrow.svg";

const DonationButtonWrapp = styled.div`
  padding: 14px 30px;
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 7px;
`;

const DonationButtonContent = styled.div`
  display: flex;
  align-items: center;
`;

const DonationButtonValue = styled.div`
  font-size: 20px;
  font-weight: 700;
  transition: color 0.4s;
  color: ${(props) => (props.onActive ? "#0077ff" : "#fff")};
  margin-right: 15px;

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
  transition: background-color 0.4s, transform 0.4s;
  background-color: ${(props) => (props.onActive ? "#0077ff" : "#eef1f6")};
  transform: scale(${(props) => (props.onActive ? "1.2" : "1")});

  text-align: center;
  position: relative;

  visibility: ${(props) => (!props.onActive ? "visible" : "hidden")};

  &:before {
    content: "";
    display: inline-block;
    height: 18px;
    width: 15px;
    background: url(${arrows}) center no-repeat;
    background-size: cover;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const DonationButtonClicker = styled(DonationButtonChanger)`
  height: 15px;
  width: 15px;
  transform: none;

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

const DonationButton = (props) => {
  const [onActive, setOnActive] = React.useState(true);

  const [counterValue, setCounterValue] = React.useState(5);

  const [statusDone, setStatusDone] = useState(false);

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
    <DonationButtonWrapp
      onMouseOver={() => setOnActive(true)}
      onMouseLeave={() => setOnActive(false)}
    >
      <DonationButtonContent>
        <DonationButtonValue onActive={onActive}>
          {counterValue}
        </DonationButtonValue>
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
      </DonationButtonContent>
    </DonationButtonWrapp>
  );
};

export default DonationButton;
