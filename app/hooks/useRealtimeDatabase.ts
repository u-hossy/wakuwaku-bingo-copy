import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { realtimeDatabase } from "firebase/config";
import { BingoNumber } from "~/types/dataTypes";

export function useFetchNumber() {
  const [numbers, setNumbers] = useState<BingoNumber[]>([]);
  const [db] = useState(realtimeDatabase);

  useEffect(() => {
    const numberRef = ref(db, "number/");
    onValue(numberRef, (snapshot) => {
      const _data = snapshot.val();
      console.log(_data);
      if (_data) {
        const dataExceptOrder0 = _data.filter(
          (data: { order: number }) => data.order > 0
        );
        const sortedData = dataExceptOrder0.sort(
          (a: { order: number }, b: { order: number }) => b.order - a.order
        );
        setNumbers(Object.values(sortedData));
      }
    });
  }, [db]);

  return [numbers];
}
