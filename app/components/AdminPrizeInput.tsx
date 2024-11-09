import Button from './Button';
import { Input } from '@headlessui/react';

export default function AdminPrizeInput({ value, onChange, decreaseAmount, increaseAmount }: { value: number, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, decreaseAmount: (id: number) => void, increaseAmount: (id: number) => void }) {
  return (
    <>
      <Button onClick={decreaseAmount}>-</Button>
      <Input
        type="number"
        className="my-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white"
        value={value}
        onChange={onChange}
      />
      <Button onClick={increaseAmount}>+</Button>
    </>
  );
}
