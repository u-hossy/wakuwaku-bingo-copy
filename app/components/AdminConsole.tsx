// import React from 'react'
import { Button } from "@headlessui/react";
import { signOut } from "firebase/auth";
import { set, ref } from "firebase/database";
import { realtimeDatabase, auth } from "firebase/config";


export default function AdminConsole() {
    console.log("AdminConsole");

    const input = "TEST";

    const sendData = async () => {
        console.log(input);
        set(ref(realtimeDatabase, "data/"), {
            value: input,
            time: Date.now()
        });
        console.log("Data sent");
    }

    return (
        <>
            <h1>Admin</h1>
            <Button onClick={sendData}>sendData</Button>
            <Button onClick={() => signOut(auth)}>signOut</Button>
        </>
    )
}
