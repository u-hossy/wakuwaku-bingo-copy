// import React from 'react'
import { auth } from 'firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth';
import AdminConsole from '~/components/AdminConsole';
import SignIn from '~/components/SignIn';


export default function Admin() {
    const [user, loading] = useAuthState(auth);
    return (
        <div className="bg-slate-950 min-h-screen">
            {loading && <div>Loading...</div>}
            {user ? <AdminConsole /> : <SignIn />}
        </div>
    )
}
