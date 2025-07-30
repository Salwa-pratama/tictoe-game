import Board from "./tutor/Table";
import { ContainerStyle } from "../styles/style";
import { useState } from "react";

export default function Game() {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
      position: null,
    },
  ]);

  // membaca histori saat ini
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;

  function handlePlay(nextSquares: any, clickedIndex: number) {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      { squares: nextSquares, position: clickedIndex },
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: any) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((step, move) => {
    const { position } = step;
    let row = null;
    let col = null;
    if (position !== null) {
      row = Math.floor(position / 3) + 1;
      col = (position % 3) + 1;
    }
    let description;
    if (move > 0) {
      description = `Pergi ke langkah #${move} (${row}, ${col})`;
    } else {
      description = "Pergi ke awal permainan";
    }
    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          className="bg-gray-500 my-1 p-1 rounded "
        >
          {description}
        </button>
      </li>
    );
  });
  // Posisi
  const [isAscending, setIsascending] = useState(true);

  return (
    <>
      <div className={ContainerStyle}>
        {/* ini table nya */}
        <div className="flex items-center justify-center gap-5">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <p>Posisi ke: {currentMove} </p>
        <button
          className="bg-sky-500 p-1 rounded"
          onClick={() => setIsascending(!isAscending)}
        >
          urutan: {isAscending ? "naik" : "turun"}
        </button>
        <ul className="border-black border h-[150px] flex flex-wrap p-1 mt-1 gap-2 ">
          {isAscending ? moves : [...moves].reverse()}
        </ul>
      </div>
    </>
  );
}

// Ada PR dari react
//**
// 1. Untuk langkah saat ii saja, tampilkan "Anda berada di langkah # ✅"
// 2. Tulis ulang Board untuk menggunakan dua loop untuk membuat kotak alih
//     - alih menulisnya satu persatu (Udehhh✅)
// 3. Tambahkan tombol sakelar yang memungkinkan anda mengurutkan langkah
//    dalam urutan naik atau turun.   Udehhh✅
// 4. Ketika seseorang menang, sorot tiga kotak yang menyebabkan kemenangan
//    tersebut(dan ketika tidak ada yang menang, tampilkan pesan bahwa hasilnya
//     seri/draw) ✅
// 5. Menampilkan lokasi untuk setiap langkah dalam format (baris, kolom) dalam
//    daftar riwayat langkah */  ✅
