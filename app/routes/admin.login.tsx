import { Form, } from "@remix-run/react";
import { Button, Input } from "@headlessui/react";

export default function AdminLogin() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("submitted");
        console.log(event);
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        console.log(email);
    }


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <Input name="email" type="email" className="mt-3 block w-full rounded-lg border bg-white/5 py-1.5 px-3 text-sm/6"></Input>
                <label htmlFor="password">password</label>
                <Input name="password" type="password" className="mt-3 block w-full rounded-lg border bg-white/5 py-1.5 px-3 text-sm/6"></Input>
                <Button type="submit" className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                    Sign In
                </Button>
            </Form>
        </>
    );
}