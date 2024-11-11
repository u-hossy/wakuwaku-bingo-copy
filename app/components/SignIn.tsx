import { Form, Link } from "@remix-run/react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react'

import { auth } from 'firebase/config'


import Button from './Button';
import Input from './Input';

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
        <div className="pt-4 px-8">
            <h1 className="text-center text-2xl text-neutral-50">委員向けログイン画面</h1>
            <Form onSubmit={handleSubmit} className="flex flex-col items-center">
                <div className="h-8 py-2 text-red-500">{errorMessages && <span>{errorMessages}</span>}</div>
                <Input label="メールアドレス" name="email" type="email" description="メールアドレスを入力してください" />
                <Input label="パスワード" name="password" type="password" description="パスワードを入力してください" />
                <div className="flex flex-row gap-4">
                    <Link to="/"><Button>一般向けページに戻る</Button></Link>
                    <Button type="submit">
                        サインイン
                    </Button>
                </div>

            </Form>
        </div>
    )
}
