import Board from "./tutor/Table";
import TimeTravel from "./tutor/TimeTravel";
import { ContainerStyle } from "../styles/style";

export default function Game() {
  return (
    <>
      <div className={ContainerStyle}>
        {/* ini table nya */}
        <div className="flex items-center justify-center gap-5">
          <Board />
          <TimeTravel />
        </div>
      </div>
    </>
  );
}
