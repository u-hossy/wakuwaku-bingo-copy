import { Prize } from "~/types/dataTypes";

// ビンゴに存在する番号
const numbers: number[] = [...Array(75)].map((_, i) => i + 1);

// ビンゴの景品
const prizes: Prize[] = [
  {
    id: 1,
    name: "Apple Watch SE	",
    amount: 1,
  },
  {
    id: 2,
    name: "Yogibo Mini",
    amount: 1,
  },
  {
    id: 3,
    name: "Amazon ギフトカード10000円分",
    amount: 1,
  },
  {
    id: 4,
    name: "Anker Soundcore Life Q35",
    amount: 1,
  },
  {
    id: 5,
    name: "MiCOLA イオンドライヤー スタンダードモデル HDR-M101",
    amount: 1,
  },
  {
    id: 6,
    name: "Anker Soundcore A25i",
    amount: 1,
  },
  {
    id: 7,
    name: "JBL GO ESSENTIAL",
    amount: 1,
  },
  {
    id: 8,
    name: "サーモス　真空断熱ケータイタンブラー/JOV-320･420",
    amount: 1,
  },
  {
    id: 9,
    name: "Anker PowerCore 5000",
    amount: 1,
  },
  {
    id: 10,
    name: "[山善] ホットプレート 一人用",
    amount: 1,
  },
  {
    id: 11,
    name: "エナジードリンク",
    amount: 600,
  }
  ,
  {
    id: 12,
    name: "チップスター",
    amount: 300,
  },
  {
    id: 13,
    name: "クッション",
    amount: 1,
  },
  {
    id: 14,
    name: "マスクケース",
    amount: 100,
  },
  {
    id: 15,
    name: "ペーパーソープ",
    amount: 200,
  },
  {
    id: 16,
    name: "カラオケパセラ",
    amount: 10,
  },
  {
    id: 17,
    name: "東京タワー",
    amount: 3,
  },
  {
    id: 18,
    name: "トゥースブラッシング",
    amount: 300,
  },
  {
    id: 19,
    name: "キッチンカー割引券",
    amount: 50
  }
];

export { numbers, prizes };
