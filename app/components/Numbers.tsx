import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "firebase/config";

export default function Numbers() {
    const [numbers, setNumbers] = useState<{ "order": number }[]>([]);

    useEffect(() => {
        const numberRef = ref(db, "number/");
        onValue(numberRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if (data) {
                setNumbers(Object.values(data));
            }
        });
    }, [numbers]);


    return (
        <>
            <div>Numbers</div>
            {numbers.map((number, index) => {
                return <div key={index}>{number.order}</div>
            })}
        </>
    )
}
