import { useState } from "react"
import { signOut } from "firebase/auth";
import { auth } from "firebase/config";
import Input from "./Input";
import ToggleSwitch from "./ToggleSwitch";
import Button from "./Button";
import { useFetchIsStarted, useFetchNumber, useFetchProjectorMode } from "~/libs/fetchRealtimeDatabase";
import { resetAll, resetNumbers, resetPrizes, sendIsStarted, sendNumberAsLatest, sendProjectorMode } from "~/libs/sendRealtimeDatabase";
import AdminNumberList from "./AdminNumberList";
import AdminPrizeList from "./AdminPrizeList";



export default function AdminConsole() {
    const isStarted = useFetchIsStarted();
    const projectorMode = useFetchProjectorMode();

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

    const handleNumberReset = () => {
        if (window.confirm("本当に番号をすべてリセットしますか？")) {
            resetNumbers();
            window.alert("番号をリセットしました");
        } else {
            window.alert("キャンセルしました");
        }
    }

    const handlePrizeReset = () => {
        if (window.confirm("本当に景品をリセットしますか？")) {
            resetPrizes();
            window.alert("景品をリセットしました");
        } else {
            window.alert("キャンセルしました");
        }
    }

    const handleAllReset = () => {
        if (window.confirm("本当にすべてリセットしますか？")) {
            resetAll();
            window.alert("すべてリセットしました");
        } else {
            window.alert("キャンセルしました");
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
                    <div className="pb-4">
                        <h2>プロジェクター</h2>
                        <ul className="pb-2">
                            <li className="flex flex-row justify-between py-1">
                                <span>ビンゴを開始状態にする</span>
                                <ToggleSwitch checked={isStarted} onClick={() => sendIsStarted(!isStarted)} />
                            </li>
                            <li className="flex flex-row justify-between py-1">
                                <span>プロジェクターに番号履歴を表示する</span>
                                <ToggleSwitch checked={projectorMode === "history"} onClick={() => sendProjectorMode(projectorMode === "history" ? "latest" : "history")} />
                            </li>
                        </ul>
                    </div>
                    <div className="pb-4">
                        <h2>ビンゴのリセット</h2>
                        <ul className="pb-2">
                            <li className="py-1 flex flex-row justify-between items-center">
                                <span>番号を初期状態にリセット</span>
                                <Button onClick={handleNumberReset}>実行</Button>
                            </li>
                            <li className="py-1 flex flex-row justify-between items-center">
                                <span>景品をを初期状態にリセット</span>
                                <Button onClick={handlePrizeReset}>実行</Button>
                            </li>
                            <li className="py-1 flex flex-row justify-between items-center">
                                <span>すべてを初期状態にリセット</span>
                                <Button onClick={handleAllReset}>実行</Button>
                            </li>
                        </ul>
                    </div>
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
