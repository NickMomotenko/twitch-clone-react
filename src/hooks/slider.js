import React, { useState } from "react";

import styled from "styled-components";

export const useSlider = () => {
  const [sliderInVisin, setSliderInVisin] = useState([]);

  const [nativeDOM, setNativeDOM] = useState([]);

  let position = 0;

  let currentIndex = 1;

  const initSlider = (ref, list) => {
    let arr = Array.from(ref.children);

    addCustomStyles(arr, currentIndex);

    arr.forEach((elem, index) => {
      elem.addEventListener("click", (e) => {
        handleChangeSlider(ref, arr, index);
      });
    });

    setNativeDOM(arr);
    setSliderInVisin(list);
  };

  const addCustomStyles = (arr, id) => {
    arr.forEach((elem, index) => {
      elem.style.transition = `all .5s`;
      elem.style.cursor = `pointer`;
      if (index === id) {
        elem.style.transform = `scale(1.1)`;
        elem.style.opacity = `1`;
      } else {
        elem.style.transform = `scale(1)`;
        elem.style.opacity = `.5`;
      }
    });
  };

  const handleChangeSlider = (ref, arr, index) => {
    let itemWidth = arr[0].offsetWidth;

    addCustomStyles(arr, index);

    if (currentIndex == index) {
      return;
    } else {
      currentIndex = index;
      position += itemWidth;

      if (arr.length == ++currentIndex) {
        return;
      } else {
        preformTransition(ref, position, "next");
      }
    }
  };

  const preformTransition = (list, pos, direction) => {
    list.style.transition = `transform .5s`;

    if (direction == "next") {
      list.style.transform = `translateX(-${pos}px)`;
    }
  };

  return { initSlider };
};

const SliderWrapp = styled.div`
  display: flex;
`;

export const Slider = React.forwardRef((props, ref) => {
  return <SliderWrapp ref={ref}>{props.children}</SliderWrapp>;
});
