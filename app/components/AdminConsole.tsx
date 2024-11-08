import { useState } from "react"
import { signOut } from "firebase/auth";
import { set, ref } from "firebase/database";
import { realtimeDatabase, auth } from "firebase/config";
import { IsStarted, ProjectorMode } from "~/types/dataTypes";
import { Form } from "@remix-run/react";
import Input from "./Input";
import ToggleSwitch from "./ToggleSwitch";
import Button from "./Button";
import { useFetchNumber } from "~/libs/fetchRealtimeDatabase";



export default function AdminConsole() {
    console.log("AdminConsole");
    const [isStarted, setIsStarted] = useState<IsStarted>(false);
    const [projectorMode, setProjectorMode] = useState<ProjectorMode>("latest");


    const fetchNumbers = useFetchNumber();

    console.log(fetchNumbers);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const _number = form.get("number");
        if (_number) {
            const number = parseInt(_number as string);
            if (number > 0) {
                if (window.confirm(`${number}をビンゴ済みにしますか？`)) {
                    await set(ref(realtimeDatabase, `number/${number}`), {
                        name: number,
                        order: fetchNumbers ? fetchNumbers.filter((n) => n.order > 0).length + 1 : 1
                    });
                    window.alert(`${number}をビンゴ済みにしました`);
                } else {
                    window.alert("キャンセルしました");
                }
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
                            <Form onSubmit={handleSubmit}>
                                <Input
                                    name="number"
                                    label="番号入力"
                                    description="ビンゴになった番号を半角で入力し、Enterを押してください"
                                    type="number" />
                                <div className="flex justify-center">
                                    <Button type="submit">送信</Button>
                                </div>
                            </Form>
                        </div>
                        <div className="pb-4">
                            <h3>ビンゴ済みの番号</h3>
                        </div>
                        <div className="pb-4">
                            <h3>未ビンゴの番号</h3>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-1/3 px-4">
                    <div className="pb-4">
                        <h2>景品管理</h2>
                    </div>
                </div>
            </div>

            {/* <Button onClick={sendData}>sendData</Button>
            
             */}

        </div >
    )
}
