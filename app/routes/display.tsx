import NumberLatest from "~/components/NumberLatest"
import Numbers from "~/components/Numbers"

export default function Display() {
    const a = 1;
    return (
        <>{a == 1 ? <NumberLatest /> : <Numbers />}</>
    )
}
