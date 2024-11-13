export default function NumberBox({ calledNumber, size }: { calledNumber: number, size: "large" | "medium" | "small" }) {
    const styles: { container: React.CSSProperties, image: React.CSSProperties, number: React.CSSProperties } = {
        container: {
            position: "relative",
            width: "11rem",
            height: "11rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        image: {
            position: "absolute",
            width: "11rem",
            height: "11rem",
        },
        number: {
            position: "absolute",
            top: "3.9rem",
            fontSize: "3em",
            fontWeight: "bold",
        },
    };

    switch (size) {
        case "small":
            console.log("Small size");
            break;
        case "medium":
            return (
                <div style={styles.container}>
                    <img src="./number-box.png" alt={"No. " + calledNumber} style={styles.image} />
                    <span style={styles.number}>{calledNumber}</span>
                </div>
            );
        case "large":
            console.log("Large size");
    }
}