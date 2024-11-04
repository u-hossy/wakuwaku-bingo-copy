export default function NumberBox({ calledNumber }: { calledNumber: number, size: number }) {
    return (
        <div style={styles.container}>
            <img src="./number-box.png" alt={"No. " + calledNumber} style={styles.image} />
            <span style={styles.number}>{calledNumber}</span>
        </div>
    )
}

const styles: { container: React.CSSProperties, image: React.CSSProperties, number: React.CSSProperties } = {
    container: {
        position: "relative",
        width: "",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        position: "absolute",
        width: "100px",
        height: "100px",
    },
    number: {
        position: "absolute",
        fontSize: "3em",
        fontWeight: "bold",
    },
};
