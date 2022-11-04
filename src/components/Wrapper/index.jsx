import React from "react";

function Wrapper(props) {
  return <div className="w-full py-4 px-8">{props.children}</div>;
}

export default Wrapper;
