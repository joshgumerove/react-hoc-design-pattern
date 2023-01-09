import React, { useState, useRef, useEffect } from "react";

// need to pass Comp1 as the component to achieve wanted functionality
const widthDimensions = (Component) => {
  return function WidthDimensions(props) {
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);

    const compRef = useRef();

    useEffect(() => {
      if (compRef.current) {
        setWidth(compRef.current.offsetWidth);
        setHeight(compRef.current.offsetHeight);
      }
    }, [compRef]);

    return <Component ref={compRef} height={height} width={width} />;
  };
};

// note: this is the HOC component

export default widthDimensions;
