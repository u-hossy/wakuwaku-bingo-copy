import type { MetaFunction } from "@remix-run/cloudflare";
import { useState } from "react";
import Numbers from "~/components/Numbers";
import Prizes from "~/components/Prizes";
import { NowPage } from "../types/NowPage";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [nowPage, setNowPage] = useState("numbers");
  return (
    <>
      <ol>
        <button onClick={() => setNowPage("numbers")}>NUMBERS</button>
        <button onClick={() => setNowPage("prizes")}>PRIZES</button>
      </ol >
      {nowPage === "numbers" ? <Numbers /> : <Prizes />}
    </>
  );
}
