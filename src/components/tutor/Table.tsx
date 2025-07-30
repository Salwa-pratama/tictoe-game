import Square from "./Square";
import calculateWinner from "./CalculateWinner";

// Ini tipe data untuk props element Board kita
interface tipeProps {
  xIsNext: any;
  squares: any;
  onPlay: any;
}

export default function Board({ xIsNext, squares, onPlay }: tipeProps) {
  const data = Array.from({ length: 9 }, (_, i) => i);

  // Ini fungsi handleClick nya
  function handleClick(i: any) {
    const nextSquares = squares.slice();

    // Ini logika untuk mengii nilai pada square
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    // ini logika untuk mengisi satu square hanya dengan satu nilai
    if (squares[i]) {
      return;
    }
    // ini untuk menentukan pemenang
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    onPlay(nextSquares, i);
    // setXIsNext(!xIsNext);
  }

  const result = calculateWinner(squares);
  const winner = result?.winner;
  const winningLine = result?.line || [];
  const isDraw = !winner && squares.every((square: any) => square !== null);
  let status: string;
  if (winner) {
    status = "pemenang: " + winner;
  } else if (isDraw) {
    status = "Hasil Seri";
  } else {
    status = "Giliran: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div>
        <h1 className="text-2xl bg-sky-400 w-fit p-2 rounded m-2 mx-auto">
          {status}
        </h1>
        <div className="w-[300px] h-[300px] border border-black mx-auto">
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
                    highLight={winningLine.includes(nilai)}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
