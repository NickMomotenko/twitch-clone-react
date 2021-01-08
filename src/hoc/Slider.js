import React from "react";

export const SliderContext = React.createContext();

export const SliderProvider = ({ children }) => {
  const data = [1, 23];

  const init = () => {
    console.log(1);
  };

  <SliderContext.Provider value={{ init, data }}>
    {children}
  </SliderContext.Provider>;
};

export const withSlider = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <SliderContext.Consumer>
          {(value) => {
            return <WrappedComponent {...value} {...this.props} />;
          }}
        </SliderContext.Consumer>
      );
    }
  };
};
