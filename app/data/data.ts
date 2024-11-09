import { Prize } from "~/types/dataTypes";

// ビンゴに存在する番号
const numbers: number[] = [...Array(75)].map((_, i) => i + 1);

// ビンゴの景品
const prizes: Prize[] = [
  {
    id: 1,
    name: "商品券",
    amount: 10,
  },
  {
    id: 2,
    name: "土地10平米",
    amount: 100,
  },
];

export { numbers, prizes };
