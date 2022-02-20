import { useState } from "react";
import Square from "../components/Square";

function Board() {
  // creating an array with 9 elements (squares on the board), empty ones
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"❌" | "🟢">(
    // creating a random value between ❌ and 🟢
    Math.round(Math.random() * 1) === 1 ? "❌" : "🟢"
  );

  // set winner
  const [winner, setWinner] = useState(null);

  function reset() {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "❌" : "🟢");
  }

  function setSquareValue(index) {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "❌" ? "🟢" : "❌");
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  return (
    <div>
      <p>Hey {currentPlayer}, your turn now!</p>
      <div className="grid">
        {/* display all squares ↓ */}
        {Array(9)
          .fill(null)
          .map((_, i) => {
            return (
              <Square
                winner={winner}
                key={i}
                onClick={() => setSquareValue(i)}
                value={squares[i]}
              />
            );
          })}
        {/* generally setting the i like this is not advised because if it changes we'll have to rerender the square or the entire array, but in this case i isn't going to change */}
      </div>
      <button className="reset" onClick={reset}>
        RESET
      </button>
    </div>
  );
}

export default Board;
