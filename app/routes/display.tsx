import { MetaFunction } from "@remix-run/cloudflare";

import GameNotStarted from "~/components/GameNotStarted";
import Loading from "~/components/Loading";
import NumberHistory from "~/components/NumberHistory";
import NumberLatest from "~/components/NumberLatest";
import {
  useFetchIsStarted,
  useFetchProjectorMode,
} from "~/libs/fetchRealtimeDatabase";
import "../styles/display.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Bingo 2024" },
    { name: "description", content: "Bingo 2024" },
  ];
};

export default function Display() {
  const projectorMode = useFetchProjectorMode();
  const isStarted = useFetchIsStarted();

  // if (isStarted) {
  //   return (
  //     <>{projectorMode === "latest" ? <NumberLatest /> : <NumberHistory />}</>
  //   );
  // } else {
  //   return <GameNotStarted />;
  // }
  return (
    <>
      {isStarted === null || projectorMode === null ? (
        <Loading />
      ) : !isStarted ? (
        <GameNotStarted />
      ) : projectorMode === "latest" ? (
        <NumberLatest />
      ) : (
        <NumberHistory />
      )}
    </>
  );
}
