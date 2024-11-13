import { useFetchNumber } from "~/libs/fetchRealtimeDatabase";

import NumberBox from "./NumberBox";

export default function Numbers() {
    const numbers = useFetchNumber();
    return (
        <>
            <div className="flex justify-center">Numbers</div>
            <div className="flex justify-center">
                {numbers && numbers[0] ? <NumberBox size="large" calledNumber={numbers[0].name} /> : <></>}
            </div>
            <ul className="mx-2 inline-flex flex-wrap justify-start">
                {numbers?.slice(1) ? numbers.slice(1).map((number) => {
                    return <li key={number.name}><NumberBox size="small" calledNumber={number.name} /></li>
                }) : <></>}
            </ul>
        </>
    )
}
