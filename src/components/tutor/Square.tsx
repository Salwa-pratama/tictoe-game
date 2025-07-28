import { SquareStyle } from "../../styles/style";
export default function Square({
  value,
  onSquareClick,
}: {
  value: any;
  onSquareClick: any;
}) {
  return (
    // mengembalikan element button
    <button
      onClick={onSquareClick}
      className={`${SquareStyle} cursor-pointer hover:bg-slate-600`}
    >
      {value}
    </button>
  );
}
