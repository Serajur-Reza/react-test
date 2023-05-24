import React from "react";

function Person(props) {
  const { name } = props;
  return (
    <div role="contentInfo">
      <h1>I am {name}</h1>
      <button onClick={() => console.log("Hello")}>Radioactive</button>
    </div>
  );
}

export default Person;
