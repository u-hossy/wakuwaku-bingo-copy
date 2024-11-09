import { useState } from "react"
import { signOut } from "firebase/auth";
import { auth } from "firebase/config";
import { IsStarted, ProjectorMode } from "~/types/dataTypes";
import Input from "./Input";
import ToggleSwitch from "./ToggleSwitch";
import Button from "./Button";
import { useFetchNumber } from "~/libs/fetchRealtimeDatabase";
import { sendNumberAsLatest } from "~/libs/sendRealtimeDatabase";
import AdminNumberList from "./AdminNumberList";
import AdminPrizeList from "./AdminPrizeList";



export default function AdminConsole() {
    const [isStarted, setIsStarted] = useState<IsStarted>(false);
    const [projectorMode, setProjectorMode] = useState<ProjectorMode>("latest");

    const [bingoNumberForm, setBingoNumberForm] = useState<number | "">("");

    const fetchNumbers = useFetchNumber();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const _number = bingoNumberForm;
        if (_number) {
            const number = _number;
            if (number > 0) {
                // if (window.confirm(`${number}をビンゴ済みにしますか？`)) {
                console.log(fetchNumbers);
                sendNumberAsLatest(number, fetchNumbers);
                setBingoNumberForm("");
                event.currentTarget.reset();
                // window.alert(`${number}をビンゴ済みにしました`);
                // } else {
                //     window.alert("キャンセルしました");
                // }
            } else {
                window.alert("不正な値が入力されました");
            }
        }
    }

    const handleReset = async () => {
        if (window.confirm("ビンゴをリセットしますか？")) {
            // await set(ref(realtimeDatabase, "number/"), []);
            window.alert("ビンゴをリセットしました");
        } else {
            window.alert("キャンセルしました");
        }
    }

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col">
            <div className="flex flex-row items-center justify-between px-4 py-2">
                <h1 className="text-2xl py-4 flex-grow text-center">BINGO-ADMIN</h1>
                <Button onClick={() => signOut(auth)}>サインアウト</Button>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col w-1/3 px-4 pb-4">
                    <div className="pb-4">
                        <h2>プロジェクター</h2>
                        <ul className="pb-2">
                            <li className="flex flex-row justify-between">
                                <span>ビンゴを開始状態にする</span>
                                <ToggleSwitch checked={isStarted} onChange={setIsStarted} />
                            </li>
                            <li className="flex flex-row justify-between">
                                <span>プロジェクターに番号履歴を表示する</span>
                                <ToggleSwitch checked={projectorMode === "history"} onChange={() => projectorMode === "history" ? setProjectorMode("latest") : setProjectorMode("history")} />
                            </li>
                        </ul>
                    </div>
                    <div className="pb-4">
                        <h2>ビンゴのリセット</h2>
                        <ul className="pb-2">
                            <li className="flex flex-row justify-between">
                                <span>すべての内容をリセットする</span>
                                <Button onClick={handleReset}>実行</Button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col w-1/3 px-4">
                    <div className="pb-4">
                        <h2>ビンゴ番号管理</h2>
                        <div className="pb-4">
                            <h3>番号をビンゴ済にする</h3>
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
