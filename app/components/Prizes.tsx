import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

import { realtimeDatabase } from "firebase/config";
import { Prize } from "~/types/dataTypes";

export default function Prizes() {
    const [remainingPrizes, setRemainingPrizes] = useState<Prize[]>([]);
    const [soldOutPrizes, setSoldOutPrizes] = useState<Prize[]>([]);
    const [db] = useState(realtimeDatabase);

    useEffect(() => {
        const numberRef = ref(db, "prize/");
        onValue(numberRef, (snapshot) => {
            const _data = snapshot.val();
            console.log(_data);
            if (_data) {
                const dataExceptOrder0 = _data.filter((data: { order: number }) => data.order > 0);
                const sortedData = dataExceptOrder0.sort((a: { order: number }, b: { order: number }) => a.order - b.order);
                const _remainingPrizes = sortedData.filter((data: { amount: number }) => data.amount > 0);
                const _soldOutPrizes = sortedData.filter((data: { amount: number }) => data.amount === 0);
                setRemainingPrizes(Object.values(_remainingPrizes));
                setSoldOutPrizes(Object.values(_soldOutPrizes));
            }
        });
    }, [db]);
    return (
        <>
            <div>Prizes</div>
            <h3>のこってるやつ</h3>
            <ul>
                {remainingPrizes.map((prize, index) => {
                    return <li key={index}>{prize.name}, × {prize.amount}</li>
                })}
            </ul>
            <h3>うりきれたやつ</h3>
            <ul>
                {soldOutPrizes.map((prize, index) => {
                    return <li key={index}>{prize.name}</li>
                })}
            </ul>
        </>
    )
}
