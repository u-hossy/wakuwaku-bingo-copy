import { useFetchNumber } from '../libs/fetchRealtimeDatabase';
import { numbers } from '~/data/data';
import { AdminBingoNumberInput, AdminNotBingoNumberInput } from './AdminNumberInput';
import { sendNumberAsLatest } from '~/libs/sendRealtimeDatabase';

export default function AdminNumberList() {
    const fetchNumbers = useFetchNumber();

    const notBingoNumbers = fetchNumbers ? numbers.filter((n) => !fetchNumbers.some((f) => f.name === n)) : numbers;
    return (
        <div>AdminNumberList
            {notBingoNumbers}

            <div>
                {fetchNumbers?.map((n) => (
                    <AdminBingoNumberInput number={n.name} downOrder={() => console.log("test")} upOrder={() => console.log("test")} deleteNumber={() => console.log("test")} key={n.name} />
                ))}
            </div>

            <div>
                {notBingoNumbers.map((n) => (
                    <AdminNotBingoNumberInput number={n} bingoNumber={() => sendNumberAsLatest(n, fetchNumbers)} key={n} />
                ))}
            </div>
        </div>
    )
}
