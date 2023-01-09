import React, { forwardRef } from "react";
import widthDimensions from "./WidthDimensions";

const Comp1 = (props, forwardedRef) => {
  console.log("ref: ", forwardedRef);
  return (
    <div ref={forwardedRef} className="comp1">
      Hey I am Comp1 and my width is: {props.width}
    </div>
  );
};

export default widthDimensions(forwardRef(Comp1)); //
