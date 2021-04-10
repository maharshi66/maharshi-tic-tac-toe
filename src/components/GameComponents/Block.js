import React from "react";

const Block = ({ value, onClick }) => {
  const style = value ? `blocks ${value}` : `blocks`;

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Block;