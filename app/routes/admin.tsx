// import React from 'react'
import { MetaFunction } from '@remix-run/cloudflare';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from 'firebase/config'
import AdminConsole from '~/components/AdminConsole';
import SignIn from '~/components/SignIn';

import "../styles/admin.css";

export default function Admin() {
    const [user] = useAuthState(auth);
    return (
        <div className="bg-slate-950 min-h-screen">
            {user ? <AdminConsole /> : <SignIn />}
        </div>
    )
}

export const meta: MetaFunction = () => {
    return [
        { title: "BingoAdmin" },
    ];
};
