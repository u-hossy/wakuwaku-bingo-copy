import { useState } from "react"
import { signOut } from "firebase/auth";
import { auth } from "firebase/config";
import Input from "./Input";
import Button from "./Button";
import { useFetchNumber } from "~/libs/fetchRealtimeDatabase";
import { sendNumberAsLatest } from "~/libs/sendRealtimeDatabase";
import AdminNumberList from "./AdminNumberList";
import AdminPrizeList from "./AdminPrizeList";
import AdminReset from "./AdminReset";
import AdminProjector from "./AdminProjector";



export default function AdminConsole() {

    const [bingoNumberForm, setBingoNumberForm] = useState<number | "">("");

    const fetchNumbers = useFetchNumber();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const _number = bingoNumberForm;
        if (_number) {
            const number = _number;
            sendNumberAsLatest(number, fetchNumbers);
            setBingoNumberForm("");
            event.currentTarget.reset();
        }
    }

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col">
            <div className="flex flex-row items-center justify-between px-4 py-2">
                <div className="w-1/6"></div>
                <h1 className="flex-grow">BINGO-ADMIN</h1>
                <div className="w-1/6 flex items-center justify-end"><Button onClick={() => signOut(auth)}>サインアウト</Button></div>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-1/3 px-4 pb-4">
                    <AdminProjector />
                    <AdminReset />
                </div>
                <div className="flex flex-col w-1/3 px-4">
                    <div className="pb-4">
                        <h2>ビンゴ番号管理</h2>
                        <div className="pb-4">
                            <form onSubmit={handleSubmit}>
                                <Input
                                    name="number"
                                    label="番号入力"
                                    description="ビンゴになった番号を半角で入力し、Enterを押してください"
                                    type="number"
                                    value={bingoNumberForm}
                                    onChange={(e) => setBingoNumberForm(e.target.value === "" ? "" : parseInt(e.target.value))}
                                />
                                <div className="flex justify-center">
                                    <Button type="submit">送信</Button>
                                </div>
                            </form>
                        </div>
                        <AdminNumberList />
                    </div>
                </div>
                <div className="flex flex-col w-1/3 px-4">
                    <div className="pb-4">
                        <h2>景品管理</h2>
                        <AdminPrizeList />
                    </div>
                </div>

            </div>

            {/* <Button onClick={sendData}>sendData</Button>
            
             */}

        </div >
    )
}
