import React, { useState } from "react";

import styled from "styled-components";

export const useSlider = () => {
  const [sliderInVisin, setSliderInVisin] = useState([]);

  const [nativeDOM, setNativeDOM] = useState([]);

  const initSlider = (ref, list) => {
    let arr = Array.from(ref.children);

    handleChangeSlider(arr, 1);

    arr.forEach((elem, index) => {
      elem.addEventListener("click", (e) => {
        handleChangeSlider(arr, index);
      });
    });

    setNativeDOM(arr);
    setSliderInVisin(list);
  };

  const handleChangeSlider = (arr, id) => {
    arr.forEach((elem, index) => {
      elem.style.transition = `all .5s`;
      elem.style.cursor = `pointer`;
      if (index === id) {
        elem.style.transform = `scale(1.1)`;
        elem.style.opacity = `1`;
      } else {
        elem.style.transform = `scale(.9)`;
        elem.style.opacity = `.5`;
      }
    });
  };

  return { initSlider };
};

const SliderWrapp = styled.div`
  display: flex;
`;

export const Slider = React.forwardRef((props, ref) => {
  return <SliderWrapp ref={ref}>{props.children}</SliderWrapp>;
});
