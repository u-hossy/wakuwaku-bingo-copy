import { useState } from 'react'
import { Form } from "@remix-run/react";
import { auth } from 'firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth';
import Input from './Input';
import Button from './Button';

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
            <Form onSubmit={handleSubmit} className="flex flex-col items-center">
                <div className="h-8 py-2 text-red-500">{errorMessages && <span>{errorMessages}</span>}</div>
                <Input label="メールアドレス" name="email" type="email" description="メールアドレスを入力してください" />
                <Input label="パスワード" name="password" type="password" description="パスワードを入力してください" />
                <Button type="submit">
                    サインイン
                </Button>
            </Form>
        </>
    )
}
