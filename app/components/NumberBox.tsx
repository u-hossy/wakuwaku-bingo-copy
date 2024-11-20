import React, { useState } from "react";

export default function NumberBox({
  calledNumber,
  size,
}: {
  calledNumber: number;
  size: "large" | "medium" | "small";
}) {
  const styles: {
    container: React.CSSProperties;
    image: React.CSSProperties;
    number: React.CSSProperties;
  } = {
    container: {
      position: "relative",
      width:
        size === "large"
          ? "min(85lvw, 85lvh)"
          : size === "medium"
          ? "23lvw"
          : "23lvw",
      height:
        size === "large"
          ? "min(90lvw, 90lvh)"
          : size === "medium"
          ? "23lvw"
          : "23lvw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      position: "absolute",
      top: size === "large" ? "-5%" : "0",
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    number: {
      position: "absolute",
      top: size === "large" ? "45%" : "50%",
      left: "50%",
      translate: "-50% -35%",
      fontSize:
        size === "large"
          ? "min(25lvw, 25lvh)"
          : size === "medium"
          ? "6lvw"
          : "6lvw",
      fontWeight: "bold",
      color: "#000000",
    },
  };

  const [loaded, setLoaded] = useState(false);

  const handleImageLoaded = () => {
    setLoaded(true);
  };

  return (
    <>
      <div style={styles.container}>
        <img
          loading="eager"
          src="number-box.webp"
          alt={"No. " + calledNumber}
          style={styles.image}
          onLoad={handleImageLoaded}
        />
        {loaded && <span style={styles.number}>{calledNumber}</span>}
      </div>
    </>
  );
}
