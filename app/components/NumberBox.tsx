import React from "react";

export default function NumberBox({ calledNumber, size }: { calledNumber: number, size: "large" | "medium" | "small" }) {
    const styles: {
        container: React.CSSProperties,
        image: React.CSSProperties,
        number: React.CSSProperties,
    } = {
        container: {
            position: "relative",
            width: size === "large" ? "min(90lvw, 90lvh)" : size === "medium" ? "23lvw" : "23lvw",
            height: size === "large" ? "min(90lvw, 90lvh)" : size === "medium" ? "23lvw" : "23lvw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        image: {
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
        number: {
            position: "absolute",
            top: "50%",
            left: "50%",
            translate: "-50% -35%",
            fontSize: size === "large" ? "min(25lvw, 25lvh)" : size === "medium" ? "6lvw" : "6lvw",
            fontWeight: "bold",
            color: "#000000",
        },
    };

    return (
        <div style={styles.container}>
            <img src="./number-box.png" alt={"No. " + calledNumber} style={styles.image} />
            <span style={styles.number}>{calledNumber}</span>
        </div>
    );
}