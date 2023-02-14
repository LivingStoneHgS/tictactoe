import React from "react";

function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  return (
    <React.Fragment>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
      </React.Fragment> 
  );

  /* Note : +0.5 pts à ce celui qui comprend pourquoi
  je n'ai pas réussi à utiliser le "empty tag" à la place de React.Fragment */

}
