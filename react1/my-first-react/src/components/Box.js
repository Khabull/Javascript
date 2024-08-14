import React from "react";

const Box = ({ text, coloR }) => {
  return (
    <>
      {coloR == "1" && <div className="box">{text}</div>}
      {coloR == "2" && <div className="box box2">{text}</div>}
      {coloR == "3" && <div className="box box3">{text}</div>}
    </>
  );
};

export default Box;
