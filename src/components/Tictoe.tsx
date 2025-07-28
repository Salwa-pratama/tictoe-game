import Table from "./tutor/Table";
import { ContainerStyle } from "../styles/style";

export default function Game() {
  return (
    <>
      <div className={ContainerStyle}>
        {/* ini table nya */}
        <Table />
      </div>
    </>
  );
}
