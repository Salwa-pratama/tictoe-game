import { SquareStyle } from "../../styles/style";
export default function Square({
  value,
  onSquareClick,
  highLight = false,
}: {
  value: any;
  onSquareClick: any;
  highLight: boolean;
}) {
  return (
    // mengembalikan element button
    <button
      onClick={onSquareClick}
      className={`${SquareStyle} cursor-pointer hover:bg-slate-600 ${
        highLight ? "bg-green-400" : "bg-white"
      }`}
    >
      {value}
    </button>
  );
}
