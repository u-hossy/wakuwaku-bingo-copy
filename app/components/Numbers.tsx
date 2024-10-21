import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "firebase/config";

export default function Numbers() {
    const [numbers, setNumbers] = useState<{ "order": number }[]>([]);

    useEffect(() => {
        // const getData = () => {
        //     const dataRef = ref(db, "number/");
        //     onValue(dataRef, (snapshot) => {
        //         const data = snapshot.val();
        //         console.log(data);
        //         setNumbers(data);
        //         console.log("Data received");
        //     });
        // }
        // getData();
        const dataRef = ref(db, "number/");
        return onValue(dataRef, (snapshot) => {
            const data = snapshot.val();
            if (snapshot.exists()) {
                (data).map((number) => {
                    setNumbers((prev) => {
                        return [...prev, { order: number as number }]
                    })
                })
            }
        })
    });

    return (
        <>
            <div>Numbers</div>
            {numbers.map((number, index) => {
                return <div key={index}>{number.order}</div>
            })}
        </>
    )
}
