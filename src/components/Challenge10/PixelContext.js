import React from "react";

const PixelContext = React.createContext({
  color: "lightGrey",
  setColor: (color) => {},
});

export default PixelContext;
