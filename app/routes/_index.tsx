import GameNotStarted from "~/components/GameNotStarted";
import GameStarted from "~/components/GameStarted";
import Loading from "~/components/Loading";
import { useFetchIsStarted } from "~/libs/fetchRealtimeDatabase";

import type { MetaFunction } from "@remix-run/cloudflare";

import "../styles/index.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Bingo 2024" },
    { name: "description", content: "Bingo 2024" },
  ];
};

export default function Index() {
  const isStarted = useFetchIsStarted();
  return (
    <>
      {isStarted === null ? (
        <Loading />
      ) : isStarted ? (
        <GameStarted />
      ) : (
        <GameNotStarted />
      )}
    </>
  );
}
