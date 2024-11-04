import { useFetchNumber } from '../hooks/useRealtimeDatabase';

export default function NumberLatest() {
    const number = useFetchNumber();
    console.log(number);
    return (
        <div>NumberLatest: {number && number.length > 0 ? <span>{number[0].name}</span> : <></>}</div>
        // <p>{number[0].name}</p>
    )
}
