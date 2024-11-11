import type { MetaFunction } from "@remix-run/cloudflare";
import { useEffect, useState } from "react";

import Numbers from "~/components/Numbers";
import Prizes from "~/components/Prizes";
import "../index.css";
import PrizeBox from "~/components/PrizeBox";

import type { MetaFunction } from "@remix-run/cloudflare";
import "../styles/index.css";

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
      <div className="tab-container">
        <button className={nowPage === "numbers" ? "active tab-button" : "inactive tab-button" } onClick={() => setNowPage("numbers")}>NUMBERS</button>
        <button className={nowPage === "prizes" ? "active tab-button" : "inactive tab-button" } onClick={() => setNowPage("prizes")}>PRIZES</button>
        <PrizeBox image="img/pizza_toast.png" name="aaa"  amount={3} isSold={true}/>
      </div >
      
      {nowPage === "numbers" ? <Numbers /> : <Prizes />}
    </>
  );
}