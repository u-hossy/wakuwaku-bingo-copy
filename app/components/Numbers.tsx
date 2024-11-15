import { useFetchNumber } from "~/libs/fetchRealtimeDatabase";

import NumberBox from "./NumberBox";

export default function Numbers() {

    const styles : {
        ul: React.CSSProperties,
    } = {
        ul: {
            display: "inline-flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            margin: "0 4lvw",
        },
    }

    const numbers = useFetchNumber();
    return (
        <>
            <div className="flex justify-center">
                {numbers && numbers[0] ? <NumberBox size="large" calledNumber={numbers[0].name} /> : <></>}
            </div>
            <ul style={styles.ul}>
                {numbers?.slice(1) ? numbers.slice(1).map((number) => {
                    return <li key={number.name}><NumberBox size="small" calledNumber={number.name} /></li>
                }) : <></>}
            </ul>
        </>
    )
}
