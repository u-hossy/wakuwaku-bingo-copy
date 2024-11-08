import { ref, set } from "firebase/database";
import { realtimeDatabase } from "firebase/config";

function useSend(directory: string, data: string) {
  console.log(data);
  set(ref(realtimeDatabase, directory), {
    value: data,
    time: Date.now(),
  });
  console.log("Data sent");
}

export { useSend };
