import NumberBox from "./NumberBox";
import { useFetchNumber } from "../libs/fetchRealtimeDatabase";

export default function NumberLatest() {
  const numbers = useFetchNumber();

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

  return (
    <div>
      <ul style={styles.ul}>
        {numbers ? (
          numbers.map((number) => {
            return (
              <li key={number.name}>
                <NumberBox size="medium" calledNumber={number.name} />
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
  );
}
