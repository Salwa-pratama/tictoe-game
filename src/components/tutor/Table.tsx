import Square from "./Square";

export default function () {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
                <Square key={kolomIndex} nilai={nilai} />
              ))}
          </div>
        ))}
      </div>
    </>
  );
}
