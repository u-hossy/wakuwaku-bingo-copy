import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { realtimeDatabase } from "firebase/config";
import { BingoNumber, Prize } from "~/types/dataTypes";

function useFetch<T>(directory: string) {
  const [data, setData] = useState<T[]>([]);
  const [db] = useState(realtimeDatabase);

  useEffect(() => {
    const dataRef = ref(db, directory);
    onValue(dataRef, (snapshot) => {
      const _data = snapshot.val();
      console.log(_data);
      if (_data) {
        const dataExceptOrder0 = _data.filter(
          (data: { order: number }) => data.order > 0
        );
        const sortedData = dataExceptOrder0.sort(
          (a: { order: number }, b: { order: number }) => b.order - a.order
        );
        setData(Object.values(sortedData));
      }
    });
  }, [db, directory]);
  return data;
}

export function useFetchNumber(): BingoNumber[] | null {
  return useFetch<BingoNumber>("number/");
}

export function useFetchPrize(): Prize[] | null {
  return useFetch<Prize>("prize/");
}
