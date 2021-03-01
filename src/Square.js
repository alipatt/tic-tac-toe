import React from "react";

export default function Square(props) {


 const renderSquare = (elem)=>{
   return(
  <button
    id={elem}
    key={elem}
    className={props.square[elem].value}
    onClick={() => props.fillSquare(elem)}
    disabled={props.square[elem].value === "" ? false : true}
  >
    {props.square[elem].value}
  </button>)
 }

  return (
    <div className="container">
      <div className="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
