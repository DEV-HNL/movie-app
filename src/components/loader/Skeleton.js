import React from "react";
import "../../page/style.scss";
const Skeleton = (props) => {
  return (
    <div
      className={`skeleton`}
      style={{
        height: props.height,
        width: props.width || "100%",
        borderRadius: props.radius,
      }}
    ></div>
  );
};

export default Skeleton;
