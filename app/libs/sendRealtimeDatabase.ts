import { ref, set, update } from "firebase/database";
import { realtimeDatabase } from "firebase/config";
import { BingoNumber, Prize } from "~/types/dataTypes";

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
  sendData(`number/${name}/`, content);
}

function sendNumberAsLatest(name: number, fetchNumbers: BingoNumber[] | null) {
  const order =
    fetchNumbers && fetchNumbers.length > 0
      ? fetchNumbers.filter((n) => n.order > 0).length + 1
      : 1;
  sendNumber({ name, order });
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

function exchangePrizeOrder() {}

function updatePrizeAmount({ id, amount }: Prize) {
  const content = { amount: amount };
  updateData(`prize/${id}/`, content);
}

// function decreasePrizeAmount() {}

// function increasePrizeAmount() {}

export {
  sendNumber,
  sendNumberAsLatest,
  exchangeNumberOrder,
  deleteNumber,
  exchangePrizeOrder,
  updatePrizeAmount,
  // decreasePrizeAmount,
  // increasePrizeAmount,
};
