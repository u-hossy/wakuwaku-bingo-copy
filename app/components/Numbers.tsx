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
          <NumberBox size="large" calledNumber={numbers[0].name} />
        ) : (
          <></>
        )}
      </div>
      <ul style={styles.ul}>
        {numbers?.slice(1) ? (
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
        <div style={styles.emptyLi}></div>
        <div style={styles.emptyLi}></div>
        <div style={styles.emptyLi}></div>
        <div style={styles.emptyLi}></div>
      </ul>
    </div>
  );
}
