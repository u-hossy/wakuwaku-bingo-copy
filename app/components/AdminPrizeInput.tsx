import Button from './Button';

export default function AdminPrizeInput({ name, amount, decreaseAmount, increaseAmount }: { name: string, amount: number, decreaseAmount: (id: number) => void, increaseAmount: (id: number) => void }) {
  return (
    <div className="flex flex-row">
      <span>{name}</span>
      <Button onClick={decreaseAmount}>-</Button>
      {amount}
      <Button onClick={increaseAmount}>+</Button>
    </div>
  );
}
