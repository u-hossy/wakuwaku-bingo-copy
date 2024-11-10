import { numbers } from '~/data/data';
import { deleteNumber, exchangeNumberOrder, sendNumberAsLatest } from '~/libs/sendRealtimeDatabase';

import { AdminBingoNumberInput, AdminNotBingoNumberInput } from './AdminNumberInput';
import { useFetchNumber } from '../libs/fetchRealtimeDatabase';

export default function AdminNumberList() {
    const fetchNumbers = useFetchNumber();

    const notBingoNumbers = fetchNumbers ? numbers.filter((n) => !fetchNumbers.some((f) => f.name === n)) : numbers;
    return (
        <div>
            <div className="pb-4">
                <h3>ビンゴ済みの番号</h3>
                {fetchNumbers?.map((n, index) => (
                    <AdminBingoNumberInput number={n.name}
                        downOrder={() => exchangeNumberOrder(n, fetchNumbers[index + 1])}
                        upOrder={() => exchangeNumberOrder(n, fetchNumbers[index - 1])}
                        deleteNumber={() => deleteNumber(n.name)}
                        key={n.name} />
                ))}
            </div>
            <div className="pb-4">
                <h3>未ビンゴの番号</h3>
                {notBingoNumbers.map((n) => (
                    <AdminNotBingoNumberInput
                        number={n}
                        bingoNumber={() => sendNumberAsLatest(n, fetchNumbers)} key={n} />
                ))}
            </div>
        </div>
    )
}
