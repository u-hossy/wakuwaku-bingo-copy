import NumberHistory from "~/components/NumberHistory"
import NumberLatest from "~/components/NumberLatest"
import { useFetchProjectorMode } from "~/libs/fetchRealtimeDatabase";

import "../styles/display.css"

export default function Display() {
    const projectorMode = useFetchProjectorMode();
    return (
        <>{projectorMode === "latest"  ? <NumberLatest /> : <NumberHistory />}</>
    )
}
