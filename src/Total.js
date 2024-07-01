import React from "react";

function Total({ bill }) {
  return <>{bill > 0 ? <h2>You pay ${bill}</h2> : <h2>Input some value</h2>}</>;
}

export default Total;
