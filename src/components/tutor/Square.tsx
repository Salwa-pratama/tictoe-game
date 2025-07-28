import { SquareStyle } from "../../styles/style";
import { useState } from "react";
export default function Square({ nilai }: { nilai: number }) {
  const [value, setValue] = useState("");

  function handleClick() {
    setValue("X");
  }
  return (
    // mengembalikan element button
    <button
      className={`${SquareStyle} cursor-pointer hover:bg-slate-600`}
      onClick={handleClick}
    >
      {nilai} {value}
    </button>
  );
}
