import { ref, set, update } from "firebase/database";

import { realtimeDatabase } from "firebase/config";
import { numbers, prizes } from "~/data/data";
import {
  BingoNumber,
  IsStarted,
  Prize,
  ProjectorMode,
} from "~/types/dataTypes";

function sendData(directory: string, content: object) {
  set(ref(realtimeDatabase, directory), content);
}

function updateData(directory: string, content: object) {
  update(ref(realtimeDatabase, directory), content);
}

function sendNumber({ name, order }: BingoNumber) {
  const content = {
    name: name,
    order: order,
  };
  if (numbers.includes(name)) {
    sendData(`number/${name}/`, content);
  } else {
    window.alert(`${name}は範囲外です`);
  }
}

function sendNumberAsLatest(name: number, fetchNumbers: BingoNumber[] | null) {
  const order =
    fetchNumbers && fetchNumbers.length > 0
      ? fetchNumbers.filter((n) => n.order > 0).length + 1
      : 1;
  if (!fetchNumbers || !fetchNumbers.map((n) => n.name).includes(name)) {
    sendNumber({ name, order });
  } else {
    window.alert(`${name}はすでにビンゴ済みです`);
  }
}

function exchangeNumberOrder(mainTarget: BingoNumber, subTarget: BingoNumber) {
  const mainContent = {
    name: mainTarget.name,
    order: subTarget.order,
  };
  const subContent = {
    name: subTarget.name,
    order: mainTarget.order,
  };
  sendData(`number/${mainTarget.name}/`, mainContent);
  sendData(`number/${subTarget.name}/`, subContent);
}

function deleteNumber(n: number) {
  const content = {
    name: n,
    order: 0,
  };
  sendData(`number/${n}/`, content);
}

// function exchangePrizeOrder() {}

function updatePrizeAmount({ id, amount }: Prize) {
  const content = { amount: amount };
  updateData(`prize/${id}/`, content);
}

// function decreasePrizeAmount() {}

// function increasePrizeAmount() {}

function sendProjectorMode(value: ProjectorMode) {
  sendData("projector_mode/", { value });
}

function sendIsStarted(value: IsStarted) {
  sendData("is_started/", { value });
}

function resetNumbers() {
  for (const n of numbers) {
    deleteNumber(n);
  }
}

function resetPrizes() {
  const _prizes = Object.fromEntries(prizes.map((p) => [p.id, p]));
  sendData("prize/", _prizes);
}

function resetAll() {
  resetNumbers();
  resetPrizes();
}

export {
  sendNumber,
  sendNumberAsLatest,
  exchangeNumberOrder,
  deleteNumber,
  // exchangePrizeOrder,
  updatePrizeAmount,
  // decreasePrizeAmount,
  // increasePrizeAmount,
  sendProjectorMode,
  sendIsStarted,
  resetNumbers,
  resetPrizes,
  resetAll,
};
