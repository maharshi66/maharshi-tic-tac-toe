import React from "react";

const Block = ({ value, onClick, border }) => {
  const style = value ? `blocks ${border} ${value}` : `blocks ${border}`;

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Block;