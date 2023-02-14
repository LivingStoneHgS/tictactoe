import React from "react";
import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    console.log("Printing an X!");
    setValue('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <React.Fragment>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </React.Fragment>
  );

  /* Note : +0.5 pts à ce celui qui comprend pourquoi
  je n'ai pas réussi à utiliser le "empty tag" à la place de React.Fragment */

}
