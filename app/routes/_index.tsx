import type { MetaFunction } from "@remix-run/cloudflare";
import { useEffect, useState } from "react";
import Numbers from "~/components/Numbers";
import Prizes from "~/components/Prizes";
import "../index.css";

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
        <button className={nowPage === "numbers" ? "active" : "inactive" } onClick={() => setNowPage("numbers")}>NUMBERS</button>
        <button className={nowPage === "prizes" ? "active" : "inactive" } onClick={() => setNowPage("prizes")}>PRIZES</button>
      </ol >
      
      {nowPage === "numbers" ? <Numbers /> : <Prizes />}
    </>
  );
}
