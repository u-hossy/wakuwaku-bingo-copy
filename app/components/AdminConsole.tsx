// import React from 'react'
import { Button } from "@headlessui/react";
import { signOut } from "firebase/auth";
import { auth } from "firebase/config";


export default function AdminConsole() {
    console.log("AdminConsole");
    return (
        <>
            <h1>Admin</h1>
            <Button onClick={() => signOut(auth)}>signOut</Button>
        </>
    )
}
