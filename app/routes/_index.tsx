import { useState } from "react";

import GameNotStarted from "~/components/GameNotStarted";
import Numbers from "~/components/Numbers";
import Prizes from "~/components/Prizes";
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
  const [nowPage, setNowPage] = useState("numbers");

  if (isStarted) {
    return (
      <>
        <div className="tab-container">
          <button
            className={
              nowPage === "numbers"
                ? "active tab-button"
                : "inactive tab-button"
            }
            onClick={() => setNowPage("numbers")}
          >
            NUMBERS
          </button>
          <button
            className={
              nowPage === "prizes" ? "active tab-button" : "inactive tab-button"
            }
            onClick={() => setNowPage("prizes")}
          >
            PRIZES
          </button>
        </div>

        {nowPage === "numbers" ? <Numbers /> : <Prizes />}
      </>
    );
  } else {
    return (
      <>
        <GameNotStarted />
      </>
    );
  }
}
