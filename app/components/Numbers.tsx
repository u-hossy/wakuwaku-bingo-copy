import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "firebase/config";

export default function Numbers() {
    const [numbers, setNumbers] = useState<{ "order": number }[]>([]);
    const [database] = useState(db);

    useEffect(() => {
        const numberRef = ref(database, "number/");
        onValue(numberRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setNumbers(Object.values(data));
            }
        });
    }, [database]);


    return (
        <>
            <div>Numbers</div>
            {numbers.map((number, index) => {
                return <div key={index}>{number.order}</div>
            })}
        </>
    )
}
