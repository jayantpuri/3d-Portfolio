import { Html, useProgress } from "@react-three/drei";
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <p style={{ fontSize: 14, color: "#f1f1f1", marginTop: 40 }}>
        {progress > 0 ? `${progress.toFixed(2)}%` : "...loading"}
      </p>
    </Html>
  );
};

export default Loader;
