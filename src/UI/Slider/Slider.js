import React from "react";

import styled from "styled-components";

import { withSlider } from "../../hoc/Slider";

const SliderWrapp = styled.div`
  display: flex;
`;

const Slider = (props) => {
  console.log(props);

  return <SliderWrapp></SliderWrapp>;
};

export default withSlider(Slider);
