export default function NumberBox({ calledNumber, size }: { calledNumber: number, size: "large" | "medium" | "small" }) {
    const styles_small: { container: React.CSSProperties, image: React.CSSProperties, number: React.CSSProperties } = {
        container: {
            position: "relative",
            width: "23vw",
            height: "23vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        image: {
            position: "absolute",
            width: "23vw",
            height: "auto",
        },
        number: {
            position: "absolute",
            top: "8.75vw",
            fontSize: "6vw",
            fontWeight: "bold",
        },
    };
    
    const styles_medium: { container: React.CSSProperties, image: React.CSSProperties, number: React.CSSProperties } = {
        container: {
            position: "relative",
            width: "19vw",
            height: "19vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        image: {
            position: "absolute",
            width: "19vw",
            height: "auto",
        },
        number: {
            position: "absolute",
            top: "9.5vw",
            fontSize: "5vw",
            fontWeight: "bold",
        },
    };

    const styles_large: { container: React.CSSProperties, image: React.CSSProperties, number: React.CSSProperties } = {
        container: {
            position: "relative",
            width: "90vh",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        image: {
            position: "absolute",
            width: "90vh",
            height: "auto",
        },
        number: {
            position: "absolute",
            top: "36vh",
            fontSize: "15vh",
            fontWeight: "bold",
        },
    };


    switch (size) {
        case "small":
            return (
                <div style={styles_small.container}>
                    <img src="./number-box.png" alt={"No. " + calledNumber} style={styles_small.image} />
                    <span style={styles_small.number}>{calledNumber}</span>
                </div>
            );
        case "medium":
            return (
                <div style={styles_medium.container}>
                    <img src="./number-box.png" alt={"No. " + calledNumber} style={styles_medium.image} />
                    <span style={styles_medium.number}>{calledNumber}</span>
                </div>
            );
        case "large":
            return (
                <div style={styles_large.container}>
                    <img src="./number-box.png" alt={"No. " + calledNumber} style={styles_large.image} />
                    <span style={styles_large.number}>{calledNumber}</span>
                </div>
            );
    }
}