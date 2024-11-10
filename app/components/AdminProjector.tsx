import ToggleSwitch from "./ToggleSwitch";
import { useFetchIsStarted, useFetchProjectorMode } from "~/libs/fetchRealtimeDatabase";
import { sendIsStarted, sendProjectorMode } from "~/libs/sendRealtimeDatabase";

export default function AdminProjector() {
    const isStarted = useFetchIsStarted();
    const projectorMode = useFetchProjectorMode();
    return (
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
    )
}
