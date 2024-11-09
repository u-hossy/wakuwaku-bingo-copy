import Button from './Button';

function AdminBingoNumberInput({ number, downOrder, upOrder, deleteNumber }: { number: number, downOrder: (n: number) => void, upOrder: (n: number) => void, deleteNumber: (n: number) => void }) {
    return (
        <div className="flex flex-row">
            {number}
            <Button onClick={downOrder}>↓</Button>
            <Button onClick={upOrder}>↑</Button>
            <Button onClick={deleteNumber}>削除</Button>
        </div>
    );
}

function AdminNotBingoNumberInput({ number, bingoNumber }: { number: number, bingoNumber: (n: number) => void }) {
    return (
        <div className="flex flex-row">
            {number}
            <Button onClick={bingoNumber}>登録</Button>
        </div>
    );
}

export { AdminBingoNumberInput, AdminNotBingoNumberInput };