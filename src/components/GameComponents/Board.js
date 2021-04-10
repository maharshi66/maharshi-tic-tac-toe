import React from "react";
import Block from "./Block";

const Board = ({ blocks, onClick }) => (
  <div className='game-body'>
    <div className="board">
      {blocks.map((block, i) => (
        <Block key={i} value={block} onClick={() => onClick(i)} />
      ))}
    </div>
  </div>
);

export default Board;