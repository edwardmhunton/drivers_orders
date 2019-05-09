import React from "react";

interface Dimensions {
  width: string;
  height: string;
  length: string;
}

export const Dimensions = (dimensions: Dimensions) => {
  return (
    <div>
      <div>Package Dimensions</div>
      <div>{`W: ${dimensions.width}mm`}</div>
      <div>{`H: ${dimensions.height}mm`}</div>
      <div>{`L: ${dimensions.length}mm`}</div>
    </div>
  );
};
