import NumberBox from "./NumberBox";
import { useFetchNumber } from "../libs/fetchRealtimeDatabase";

export default function NumberLatest() {
  const numbers = useFetchNumber();


    const styles : {
        ul: React.CSSProperties,
    } = {
        ul: {
            display: "inline-flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            margin: "0 4lvw",
        },
    }

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
      </ul>
    </div>
  );
}
