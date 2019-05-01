import React from "react";

export const Dimensions = dimensions => {
  return (
    <div>
      <div>Package Dimensions</div>
      <div>{`W: ${dimensions.width}mm`}</div>
      <div>{`H: ${dimensions.height}mm`}</div>
      <div>{`L: ${dimensions.length}mm`}</div>
    </div>
  );
};
