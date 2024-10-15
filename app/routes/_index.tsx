import type { MetaFunction } from "@remix-run/cloudflare";
import { useState } from "react";
import { onValue, ref, set } from "firebase/database";
import { db } from "firebase/config";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const sendData = async () => {
    console.log(input);
    set(ref(db, "data/"), {
      value: input,
      time: Date.now()
    });
    console.log("Data sent");
  }

  const getData = async () => {
    try {
      const dataRef = ref(db, "data/");
      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        setData(data.value);
        console.log("Data received");
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={sendData}>send</button>

      <button onClick={getData}>get</button>
      <p>Data: {data}</p>
    </>
  );
}
