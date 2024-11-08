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
      const _data = Object.values(snapshot.val()) as T[];
      console.log(_data);
      setData(_data);
    });
  }, [db, directory]);
  return data;
}

export function useFetchNumber(): BingoNumber[] | null {
  const data = useFetch<BingoNumber>("number/");
  const dataExceptOrder0 = data.filter((c) => c.order > 0);
  const sortedData = dataExceptOrder0.sort((a, b) =>
    a.order > b.order ? -1 : 1
  );
  return sortedData;
}

export function useFetchPrize(): Prize[] | null {
  const data = useFetch<Prize>("prize/");
  const dataExceptOrder0 = data.filter((c) => c.order > 0);
  const sortedData = dataExceptOrder0.sort((a, b) =>
    a.order < b.order ? -1 : 1
  );
  return sortedData;
}
