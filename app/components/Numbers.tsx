import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "firebase/config";

export default function Numbers() {
    const [numbers, setNumbers] = useState<{ "order": number }[]>([]);

    return (
        <>
            <div>Numbers</div>
            {numbers.map((number, index) => {
                return <div key={index}>{number.order}</div>
            })}
        </>
    )
}
