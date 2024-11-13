import { useFetchNumber } from "~/libs/fetchRealtimeDatabase";

import NumberBox from "./NumberBox";

export default function Numbers() {
    const numbers = useFetchNumber();
    return (
        <>
            <div className="flex justify-center">Numbers</div>
            <ul className="mx-2  inline-flex flex-wrap justify-start">
                {numbers ? numbers.map((number) => {
                    return <li key={number.name}><NumberBox size="medium" calledNumber={number.name} /></li>
                }) : <></>}
            </ul>
        </>
    )
}
