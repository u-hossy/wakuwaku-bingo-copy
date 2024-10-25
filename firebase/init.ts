import { ref, set } from "firebase/database";
import { realtimeDatabase } from "firebase/config";

export const initDatabase = () => {
  // 番号の初期化
  for (let i = 1; i < 75; i++) {
    set(ref(realtimeDatabase, `number/${i}`), {
      order: 0,
    });
  }

  // プロジェクターモードの初期化
  set(ref(realtimeDatabase, "projector_mode"), {
    value: "latest",
  });

  // ゲーム非開始状態にする
  set(ref(realtimeDatabase, "is_started"), {
    value: false,
  });
};
