import React from "react";

function Wrapper(props) {
  return <div className="w-full">{props.children}</div>;
}

export default Wrapper;
