import Button from './Button';

function AdminBingoNumberInput({ number, downOrder, upOrder, deleteNumber }: { number: number, downOrder: (n: number) => void, upOrder: (n: number) => void, deleteNumber: (n: number) => void }) {
    return (
        <>
            {number}
            <Button onClick={downOrder}>↓</Button>
            <Button onClick={upOrder}>↑</Button>
            <Button onClick={deleteNumber}>削除</Button>
        </>
    );
}

function AdminNotBingoNumberInput({ number, bingoNumber }: { number: number, bingoNumber: (n: number) => void }) {
    return (
        <>
            {number}
            <Button onClick={bingoNumber}>登録</Button>
        </>
    );
}

export { AdminBingoNumberInput, AdminNotBingoNumberInput };