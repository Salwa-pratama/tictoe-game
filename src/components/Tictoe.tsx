import Board from "./tutor/Table";
import TimeTravel from "./tutor/TimeTravel";
import { ContainerStyle } from "../styles/style";
import { useState } from "react";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // membaca histori saat ini
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: any) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: any) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "pergi ke langkah #" + move;
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
          <TimeTravel moves={moves} />
        </div>
      </div>
    </>
  );
}

// Ada PR dari react

//**
// 1. Untuk langkah saat ii saja, tampilkan "Anda berada di langkah #"
// 2. Tulis ulang Board untuk menggunakan dua loop untuk membuat kotak alih
//     - alih menulisnya satu persatu (Udehhh✅)
// 3. Tambahkan tombol sakelar yang memungkinkan anda mengurutkan langkah
//    dalam urutan naik atau turun
// 4. Ketika seseorang menang, sorot tiga kotak yang menyebabkan kemenangan
//    tersebut(dan ketika tidak ada yang menang, tampilkan pesan bahwa hasilnya
//     seri/draw)
// 5. Menampilkan lokasi untuk setiap langkah dalam format (baris, kolom) dalam
//    daftar riwayat langkah */
