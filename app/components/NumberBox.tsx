export default function NumberBox({ calledNumber }: { calledNumber: number, size: number }) {
    return (
        <div className="h-8 w-8">
            <img src="./number-box.png" alt={"No. " + calledNumber} />
        </div>
    )
}
