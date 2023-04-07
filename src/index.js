import React from "react";
import ReactDOM from "react-dom";
import Number from "./Component/NumbersPage";

function Numbers(x) {
  return (
    <>
      <Number />
    </>
  );
}

ReactDOM.render(<Numbers />, document.getElementById("root"));
