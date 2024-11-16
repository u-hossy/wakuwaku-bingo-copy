import { useFetchNumber } from "~/libs/fetchRealtimeDatabase";

import NumberBox from "./NumberBox";

export default function Numbers() {
  const styles: {
    ul: React.CSSProperties;
    emptyLi: React.CSSProperties;
  } = {
    ul: {
      display: "inline-flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "1lvw",
    },
    emptyLi: {
      position: "relative",
      width: "23lvw",
      height: "23lvw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  const numbers = useFetchNumber();
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        {numbers && numbers[0] ? (
          <div>
            <h2 className="text-4xl font-bold text-slate-50 mt-4 z-10">
              ただいまの番号
            </h2>
            <NumberBox size="large" calledNumber={numbers[0].name} />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>
        {numbers?.slice(1) && numbers?.slice(1).length > 0 ? (
          <div className="flex flex-col items-center">
            <div className="w-11/12 border border-top"></div>
            <h2 className="text-4xl font-bold text-slate-50 mt-4 z-10">
              これまでの番号
            </h2>
          </div>
        ) : (
          <></>
        )}
        <ul style={styles.ul}>
          {numbers?.slice(1) && numbers?.slice(1).length > 0 ? (
            numbers.slice(1).map((number) => {
              return (
                <li key={number.name}>
                  <NumberBox size="small" calledNumber={number.name} />
                </li>
              );
            })
          ) : (
            <></>
          )}
          <li style={styles.emptyLi}></li>
          <li style={styles.emptyLi}></li>
          <li style={styles.emptyLi}></li>
          <li style={styles.emptyLi}></li>
        </ul>
      </div>
    </div>
  );
}
