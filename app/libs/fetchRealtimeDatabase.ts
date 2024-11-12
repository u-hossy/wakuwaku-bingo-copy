import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

import { realtimeDatabase } from "firebase/config";
import {
  BingoNumber,
  Prize,
  ProjectorMode,
  IsStarted,
} from "~/types/dataTypes";

function useFetch<T>(directory: string) {
  const [data, setData] = useState<T[]>([]);
  const [db] = useState(realtimeDatabase);

  useEffect(() => {
    const dataRef = ref(db, directory);
    onValue(dataRef, (snapshot) => {
      const _data = Object.values(snapshot.val()) as T[];
      setData(_data);
    });
  }, [db, directory]);
  return data;
}

function useFetchNumber(): BingoNumber[] | null {
  const data = useFetch<BingoNumber>("number/");
  const dataExceptOrder0 = data.filter((c) => c.order > 0);
  const sortedData = dataExceptOrder0.sort((a, b) =>
    a.order > b.order ? -1 : 1
  );
  return sortedData;
}

function useFetchPrize(): Prize[] | null {
  const data = useFetch<Prize>("prize/");
  const dataExceptId0 = data.filter((c) => c.id > 0);
  const sortedData = dataExceptId0.sort((a, b) => (a.id < b.id ? -1 : 1));
  return sortedData;
}

function useFetchPrizeRemaining(): Prize[] | null {
  const data = useFetchPrize();
  const remainingData = data
    ? data.filter((data: { amount: number }) => data.amount > 0)
    : null;
  return remainingData;
}

function useFetchPrizeSoldOut(): Prize[] | null {
  const data = useFetchPrize();
  const soldOutData = data
    ? data.filter((data: { amount: number }) => data.amount === 0)
    : null;
  return soldOutData;
}

function useFetchValue<T>(directory: string) {
  const [data, setData] = useState<T>();
  const [db] = useState(realtimeDatabase);

  useEffect(() => {
    const dataRef = ref(db, directory);
    onValue(dataRef, (snapshot) => {
      const _data = Object.values(snapshot.val())[0] as T;
      setData(_data);
    });
  }, [db, directory]);
  return data;
}

function useFetchProjectorMode(): ProjectorMode {
  const data = useFetchValue<ProjectorMode>("projector_mode/");
  return data ? data : "latest";
}

function useFetchIsStarted(): IsStarted {
  const data = useFetchValue<IsStarted>("is_started/");
  return data ? data : false;
}

export {
  useFetchNumber,
  useFetchPrize,
  useFetchPrizeRemaining,
  useFetchPrizeSoldOut,
  useFetchProjectorMode,
  useFetchIsStarted,
};
