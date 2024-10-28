import { useState, useEffect } from 'react'
import { Button } from "@headlessui/react";
import { signOut } from "firebase/auth";
import { set, onValue, ref } from "firebase/database";
import { realtimeDatabase, auth } from "firebase/config";
import { BingoNumber } from "~/types/dataTypes";
import { Form } from "@remix-run/react";
import InputField from './InputField';



export default function AdminConsole() {
    console.log("AdminConsole");

    const [fetchNumbers, setFetchNumbers] = useState<BingoNumber[]>([]);
    const [db] = useState(realtimeDatabase);

    useEffect(() => {
        const numberRef = ref(db, "number/");
        onValue(numberRef, (snapshot) => {
            const _data = snapshot.val();
            console.log(_data);
            if (_data) {
                const dataExceptOrder0 = _data.filter((data: { order: number }) => data.order > 0);
                const sortedData = dataExceptOrder0.sort((a: { order: number }, b: { order: number }) => b.order - a.order);
                setFetchNumbers(Object.values(sortedData));
            }
        });
    }, [db]);

    const input = "TEST";

    console.log(fetchNumbers);

    const sendData = async () => {
        console.log(input);
        set(ref(realtimeDatabase, "data/"), {
            value: input,
            time: Date.now()
        });
        console.log("Data sent");
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const number = form.get("number");
        if (number) {
            if (window.confirm(`${number}をビンゴ済みにしますか？`)) {
                await set(ref(realtimeDatabase, `number/${number}`), {
                    name: number,
                    order: fetchNumbers.filter((n) => n.order > 0).length + 1
                });
                window.alert(`${number}をビンゴ済みにしました`);
            } else {
                window.alert("キャンセルしました");
            }
        }
    }
    return (
        <div className='min-h-screen bg-neutral-950 text-neutral-50'>
            <h1 className='text-center text-2xl py-4'>BINGO ADMIN for RFC</h1>
            <Button onClick={sendData}>sendData</Button>
            <Button onClick={() => signOut(auth)}>signOut</Button>
            <Form onSubmit={handleSubmit}>
                <InputField
                    name="number"
                    label="番号入力"
                    description="ビンゴになった番号を半角で入力し、Enterを押してください"
                    isdark={true}
                    type="number" />
            </Form>

        </div>
    )
}
