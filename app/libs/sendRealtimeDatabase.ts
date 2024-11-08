// 使わんかも

import { ref, set } from "firebase/database";
import { realtimeDatabase } from "firebase/config";

function sendData(directory: string, content: object) {
  set(ref(realtimeDatabase, directory), content);
}

function sendNumber(name: number, order: number) {
  const content = {
    name: name,
    order: order,
  };
  sendData("number/", content);
}

export { sendNumber };
