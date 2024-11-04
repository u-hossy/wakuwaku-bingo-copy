import { useFetchNumber } from "~/hooks/useRealtimeDatabase";

export default function Numbers() {
    const [numbers] = useFetchNumber();
    return (
        <>
            <div>Numbers</div>
            <ul>
                {numbers.map((number, index) => {
                    return <li key={index}>{number.name}</li>
                })}
            </ul>
        </>
    )
}
