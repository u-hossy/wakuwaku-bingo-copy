export default function NumberBox({ calledNumber }: { calledNumber: number, size: number }) {
    return (

        <div className="relative h-8 w-8 flex item-center justify-center">
            <img src="./number-box.png" alt={"No. " + calledNumber} className="absolute inset-0 w-full h-full"/>
            <span className="text-black text-2xl font-bold">{calledNumber}</span>
        </div>
    )
}
