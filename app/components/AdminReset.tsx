import { resetAll, resetNumbers, resetPrizes } from "~/libs/sendRealtimeDatabase";

import Button from "./Button"

export default function AdminReset() {
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
    )
}
