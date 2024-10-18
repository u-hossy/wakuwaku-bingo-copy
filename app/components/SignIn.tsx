import { useState } from 'react'
import { Form } from "@remix-run/react";
import { Button, Input } from "@headlessui/react";
import { auth } from 'firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function SignIn() {
    const [errorMessages, setErrorMessages] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const email = form.get("email") as string;
        const password = form.get("password") as string;
        console.log(email, password);
        console.log(auth);

        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // Signed in 
                // const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessages(`${errorCode}: ${errorMessage}`);
            });

    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                {errorMessages && <div className="text-red-500">{errorMessages}</div>}
                <label htmlFor="email">email</label>
                <Input name="email" type="email" className="mb-3 block w-full rounded-lg border bg-white/5 py-1.5 px-3 text-sm/6"></Input>
                <label htmlFor="password">password</label>
                <Input name="password" type="password" className="mb-3 block w-full rounded-lg border bg-white/5 py-1.5 px-3 text-sm/6"></Input>
                <Button type="submit" className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                    Sign In
                </Button>
            </Form>
        </>
    )
}
