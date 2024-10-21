import type { MetaFunction } from "@remix-run/cloudflare";
import { useRef } from "react";
import Numbers from "~/components/Numbers";
import Prizes from "~/components/Prizes";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

type NowPage = "prizes" | "numbers";

export default function Index() {
  const nowPage = useRef<NowPage>("numbers");
  return (
    <>
      {nowPage.current === "numbers" ? <Numbers /> : <Prizes />}
    </>
  );
}
