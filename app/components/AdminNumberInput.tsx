import Button from './Button';

function AdminBingoNumberInput({ number, downOrder, upOrder, deleteNumber }: { number: number, downOrder: (n: number) => void, upOrder: (n: number) => void, deleteNumber: (n: number) => void }) {
    return (
        <div className="pb-2 flex flex-row justify-between items-center">
            <span className="w-1/2 text-center">{number}</span>
            <Button onClick={downOrder}>↓</Button>
            <Button onClick={upOrder}>↑</Button>
            <Button onClick={deleteNumber}>削除</Button>
        </div>
    );
}

function AdminNotBingoNumberInput({ number, bingoNumber }: { number: number, bingoNumber: (n: number) => void }) {
    return (
        <div className="pb-2 flex flex-row justify-between items-center">
            <span className="w-1/2 text-center">{number}</span>
            <Button onClick={bingoNumber}>登録</Button>
        </div>
    );
}

export { AdminBingoNumberInput, AdminNotBingoNumberInput };