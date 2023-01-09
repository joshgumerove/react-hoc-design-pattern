import React from "react";
import widthDimensions from "./WidthDimensions";

const Comp1 = (props) => {
  return (
    <div className="comp1">
      Hey I am Comp1 and my width is: {props.dummyProps}
    </div>
  );
};

export default widthDimensions(Comp1); //
