// import { useEffect, useState } from "react";
// import { ref, onValue } from "firebase/database";
// import { realtimeDatabase } from "firebase/config";
// import { BingoNumber } from "~/types/dataTypes";
import { useFetchNumber } from "~/hooks/useFetchData";

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
