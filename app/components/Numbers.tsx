import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { realtimeDatabase } from "firebase/config";

export default function Numbers() {
    const [numbers, setNumbers] = useState<{ "order": number }[]>([]);
    const [db] = useState(realtimeDatabase);

    useEffect(() => {
        const numberRef = ref(db, "number/");
        onValue(numberRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setNumbers(Object.values(data));
            }
        });
    }, [db]);


    return (
        <>
            <div>Numbers</div>
            {numbers.map((number, index) => {
                return <div key={index}>{number.order}</div>
            })}
        </>
    )
}
