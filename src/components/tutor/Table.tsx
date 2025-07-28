import Square from "./Square";
import { useState } from "react";

export default function Board() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // Ini tu mengii semua kotak dengan null
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i: any) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="w-[300px] h-[300px] border border-black">
        {[0, 1, 2].map((indexBaris) => (
          <div
            key={indexBaris}
            className="row h-[100px] border-black border flex"
          >
            {data
              .slice(indexBaris * 3, indexBaris * 3 + 3)
              .map((nilai, kolomIndex) => (
                <Square
                  key={kolomIndex}
                  value={squares[nilai]}
                  onSquareClick={() => handleClick(nilai)}
                />
              ))}
          </div>
        ))}
      </div>
    </>
  );
}
