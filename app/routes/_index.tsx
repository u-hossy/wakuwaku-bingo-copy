import type { MetaFunction } from "@remix-run/cloudflare";
import { useState } from "react";
import Numbers from "~/components/Numbers";
import Prizes from "~/components/Prizes";
import PrizeBox from "~/components/PrizeBox";

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
      <PrizeBox name="aaa" amount={2} isSold={false} />
      {nowPage === "numbers" ? <Numbers /> : <Prizes />}
      
    </>
  )
}
