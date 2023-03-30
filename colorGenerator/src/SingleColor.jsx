import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ color: { rgb, type } }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  }, [clicked]);

  var textColor = "black";
  if (type == "shade") {
    textColor = "white";
  }
  const displayColor = rgbToHex(rgb[0], rgb[1], rgb[2]);

  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText(displayColor);
        setClicked(true);
      }}
      className="w-full p-2 relative active:opacity-80"
      style={{
        cursor: `pointer`,
        background: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
      }}
    >
      <div className="">
        <span
          style={{
            color: `${textColor}`,
          }}
        >
          {displayColor}
        </span>
        <div
          className="clipboard-alert"
          style={{
            opacity: `${clicked ? 1 : 0}`,
          }}
        >
          copied to clipboard!
        </div>
      </div>
    </div>
  );
};

export default SingleColor;
