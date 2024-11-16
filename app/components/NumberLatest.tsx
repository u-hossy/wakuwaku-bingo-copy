import NumberBox from "./NumberBox";
import { useFetchNumber } from "../libs/fetchRealtimeDatabase";

export default function NumberLatest() {
  const numbers = useFetchNumber();
  return (
    <div className="flex justify-center h-screen items-center">
      {numbers && numbers[0] ? (
        <NumberBox size="large" calledNumber={numbers[0].name} />
      ) : (
        <></>
      )}
    </div>
  );
}
