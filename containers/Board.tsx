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

  function setSquareValue(index) {
    const newData = square.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "❌" ? "🟢" : "❌");
  }

  return (
    <div>
      <p>Hey {currentPlayer}, your turn now!</p>

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
  );
}

export default Board;
