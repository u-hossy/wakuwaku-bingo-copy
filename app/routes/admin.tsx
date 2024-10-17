import { Button } from "@headlessui/react";
import { signOut } from "firebase/auth";
import { useNavigate } from "@remix-run/react";
import { auth } from "firebase/config";

export default function Admin() {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/login");

        }).catch((error) => {
            // An error happened.
            console.error(error);
        });
    }

    return (
        <div>
            <h1>Admin</h1>
            <Button onClick={handleSignOut}>ログアウト</Button>
        </div>
    );
}