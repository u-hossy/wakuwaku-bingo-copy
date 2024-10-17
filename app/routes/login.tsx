import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Button, Input } from "@headlessui/react";
import { app } from "firebase/config";
import { getUID } from "firebase/getUID";


export default function AdminLogin() {
    const navigate = useNavigate();

    useEffect(() => {
        if (getUID() !== null) {
            navigate("/admin");
        }
    });

    const [errorMessages, setErrorMessages] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const email = form.get("email") as string;
        const password = form.get("password") as string;
        console.log(email, password);
        const auth = getAuth(app);
        console.log(auth);

        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // Signed in 
                // const user = userCredential.user;
                navigate("/admin");
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
    );
}