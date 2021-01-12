import React, { useState } from "react";

import styled from "styled-components";

export const useSlider = () => {
  const [sliderInVisin, setSliderInVisin] = useState([]);

  let position = 0;

  let currentIndex = 1;

  // const initSlider = (ref, list) => {
  //   let arr = Array.from(ref.children);

  //   addCustomStyles(arr, currentIndex);

  //   arr.forEach((elem, index) => {
  //     elem.addEventListener("click", (e) => {
  //       handleChangeSlider(ref, arr, index);
  //     });
  //   });

  //   setSliderInVisin(list);
  // };

  const addCustomStyles = (arr, ndx) => {
    arr.forEach((elem, index) => {
      elem.style.transition = `all .5s`;
      elem.style.cursor = `pointer`;
      if (index === ndx) {
        elem.style.transform = `scale(1.1)`;
        elem.style.opacity = `1`;
      } else {
        elem.style.transform = `scale(1)`;
        elem.style.opacity = `.5`;
      }
    });
  };

  const handleChangeSlider = (ref, arr, ndx) => {
    let itemWidth = arr[0].offsetWidth;

    addCustomStyles(arr, ndx);

    if (currentIndex === ndx || ndx === 0 || ndx === arr.length - 1) {
      return;
    } else {
      if (currentIndex > ndx) {
        currentIndex = ndx;

        position += itemWidth;

        preformTransition(ref, position, "next");
      } else {
        currentIndex = ndx;

        position -= itemWidth;

        preformTransition(ref, position, "prev");
      }
    }
  };

  const preformTransition = (list, pos, direction) => {
    list.style.transition = `transform .5s`;

    if (direction == "next") {
      list.style.transform = `translateX(-${pos}px)`;
    } else {
      list.style.transform = `translateX(${pos}px)`;
    }
  };

  // return { initSlider };
};

const SliderWrapp = styled.div`
  display: flex;
  padding: 20px 0;
`;

export const Slider = React.forwardRef((props, ref) => {
  return <SliderWrapp ref={ref}>{props.children}</SliderWrapp>;
});
