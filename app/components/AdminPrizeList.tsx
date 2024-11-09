import { useFetchPrize } from "~/libs/fetchRealtimeDatabase";
import AdminBingoPrizeInput from "./AdminPrizeInput";
import { updatePrizeAmount } from "~/libs/sendRealtimeDatabase";

export default function AdminPrizeList() {
    const fetchPrizes = useFetchPrize();
    return (
        <div>
            {fetchPrizes?.map((p, index) => (
                <AdminBingoPrizeInput
                    name={p.name}
                    amount={p.amount}
                    increaseAmount={() => updatePrizeAmount({ name: p.name, id: p.id, amount: p.amount + 1 })}
                    decreaseAmount={() => updatePrizeAmount({ name: p.name, id: p.id, amount: p.amount > 0 ? p.amount - 1 : 0 })}
                    key={index}
                />
            ))}
        </div>
    )
}
