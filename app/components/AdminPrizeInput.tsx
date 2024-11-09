import Button from './Button';

export default function AdminPrizeInput({ name, amount, decreaseAmount, increaseAmount }: { name: string, amount: number, decreaseAmount: (id: number) => void, increaseAmount: (id: number) => void }) {
  return (
    <div className="pb-2 flex flex-row justify-between items-center">
      <span className="w-2/3 text-center">{name}</span>
      <Button onClick={decreaseAmount}>-</Button>
      <span className="w-6 text-right">{amount}</span>
      <Button onClick={increaseAmount}>+</Button>
    </div>
  );
}
