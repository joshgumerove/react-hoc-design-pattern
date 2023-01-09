import React from "react";

// need to pass Comp1 as the component to achieve wanted functionality
const widthDimensions = (Component) => {
  return function WidthDimensions() {
    return <Component dummyProps="some value" />;
  };
};

// note: this is the HOC component

export default widthDimensions;
