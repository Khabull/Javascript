import React from "react";

const Massive = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      {numbers.map((number) => (
        <h1>{number}</h1>
      ))}
    </div>
  );
};

export default Massive;
