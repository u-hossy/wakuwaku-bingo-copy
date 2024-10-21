import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "firebase/config";

export default function NumberLatest() {
    const [number, setNumber] = useState<number>();

    const getData = async () => {
        try {
            const dataRef = ref(db, "data/");
            onValue(dataRef, (snapshot) => {
                const data = snapshot.val();
                console.log(data.value);
                setNumber(data);
                console.log("Data received");
            });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    });
    return (
        <div>NumberLatest: {number}</div>
    )
}
