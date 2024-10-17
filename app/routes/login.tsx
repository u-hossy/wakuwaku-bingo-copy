import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form, } from "@remix-run/react";
import { Button, Input } from "@headlessui/react";
import { ActionFunctionArgs, redirectDocument } from "@remix-run/cloudflare";

export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const auth = getAuth();
    const isOK: boolean = await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            return true;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
            return false;
            // return json({ errorCode: errorCode, errorMessage: errorMessage }, { status: 400 });
        });

    if (isOK == true) {
        return redirectDocument("/admin");
    } else {
        return redirectDocument("/login");
    }
}

export default function AdminLogin() {
    return (
        <>
            <Form method="POST">
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