import { useFetchNumber } from '../hooks/useRealtimeDatabase';

export default function NumberLatest() {
    const number = useFetchNumber();
    console.log(number);
    return (
        <div>NumberLatest: {number ? <span>{number[0].name}</span> : <></>}</div>
    )
}
