import React from "react";

export default function Board() {
  return (
    <React.Fragment>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </React.Fragment> 
  );

  /* Note : +0.5 pts à ce cellui qui comprend pourquoi
  je n'ai pas réussi à utiliser le "empty tag" à la place de React.Fragment */
}
