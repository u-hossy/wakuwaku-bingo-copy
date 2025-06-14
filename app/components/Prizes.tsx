import PrizeBox from "~/components/PrizeBox";
import { useFetchPrizeRemaining, useFetchPrizeSoldOut } from "~/libs/fetchRealtimeDatabase";


export default function Prizes() {
    const remainingPrizes = useFetchPrizeRemaining();
    const soldOutPrizes = useFetchPrizeSoldOut();

    return (
        <>
            <h3 className="text-2xl font-bold text-slate-50 my-4">在庫あり</h3>
            <ul style={styles.ul}>
                {remainingPrizes && remainingPrizes.map((prize) => {
                    return <li style={styles.li} key={prize.id}><PrizeBox image="pizza_toast.png" name={prize.name} amount={prize.amount} /></li>
                })}
            </ul>
            <h3 className="text-2xl font-bold text-slate-50 my-4">在庫なし</h3>
            <ul style={styles.ul}>
                {soldOutPrizes && soldOutPrizes.map((prize) => {
                    return <li style={styles.li} key={prize.id}><PrizeBox image="pizza_toast.png" name={prize.name} amount={prize.amount} /></li>
                })}
            </ul>
        </>
    )
}

const styles: {
    ul: React.CSSProperties;
    li: React.CSSProperties;
} = {
    ul: {
        display: "flex",
        flexWrap: "wrap",
        padding: "0",
        margin: "0",
        listStyle: "none",
    },
    li: {
        margin: "0.5rem",
    },
};
