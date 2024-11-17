import { useState } from "react";

import Numbers from "~/components/Numbers";
import Prizes from "~/components/Prizes";

export default function GameStarted() {
  const [nowPage, setNowPage] = useState("numbers");
  return (
    <>
      <div className="tab-container">
        <button
          className={
            nowPage === "numbers" ? "active tab-button" : "inactive tab-button"
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
}
