import React, { useState } from "react";
import Square from "./Square";
import calculateWinner from "./Winner";

export default function Game() {
  const [moves, setMoves] = useState("x");
  const [square, setSquare] = useState([
    { block: 0, value: "" },
    { block: 1, value: "" },
    { block: 2, value: "" },
    { block: 3, value: "" },
    { block: 4, value: "" },
    { block: 5, value: "" },
    { block: 6, value: "" },
    { block: 7, value: "" },
    { block: 8, value: "" },
  ]);
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);

  const fillSquare = (block) => {
    let newSquare = square;
    newSquare[block].value = moves;

    if(calculateWinner(square) !== null){
      setMoves("")
    }
    else if (moves === "x") setMoves("o");
    else setMoves("x");
    setSquare(newSquare);
  };

  const currentMoves = () => {
    return (
      <h3>
        Current Player : <strong>{moves}</strong>
      </h3>
    );
  };
  function reset(res = false) {
    setSquare([
      { block: 0, value: "" },
      { block: 1, value: "" },
      { block: 2, value: "" },
      { block: 3, value: "" },
      { block: 4, value: "" },
      { block: 5, value: "" },
      { block: 6, value: "" },
      { block: 7, value: "" },
      { block: 8, value: "" },
    ]);
    
    if (res === true) {
      setPlayer2(0);
      setPlayer1(0);
      setMoves("x")
    } else {
      if (calculateWinner(square) === "x") {
        setPlayer2((prevState) => prevState + 1);
        setMoves("o");
      } else if (calculateWinner(square) === "o") {
        setPlayer1((prevState) => prevState + 1);
        setMoves("x");
      }
    }
  }
  const final = () => {
    if (calculateWinner(square) === "Draw") {
      return (
        <h3>
          <strong>{calculateWinner(square)}</strong>
        </h3>
      );
    } else {
      return (
        <h3>
          Winner : <strong>{calculateWinner(square)}</strong>
        </h3>
      );
    }
  };

  return (
    <div className="main">
      <div className="scoreboard">
        <h4 id="player1">Player O : {player1}</h4>
        <h4 id="player2">Player X : {player2}</h4>
      </div>
      <div className="game">
        <h3>TIC TAC TOE</h3>
        <Square square={square} fillSquare={fillSquare} />
        {calculateWinner(square) === null ? currentMoves() : final()}
        <div className="resetButtons">
          <button onClick={reset}>
            {calculateWinner(square) === null ? "Reset" : "Play Again"}{" "}
          </button>
          <button onClick={() => reset(true)}>Reset All</button>
        </div>
      </div>
    </div>
  );
}
