import { useState } from "react";

export default function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <ToggleButton label="Power" />
      <br />
      <br />
      <ToggleButton label="Wi-Fi" />
    </div>
  );
}

function ToggleButton({ label }) {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn((prev) => !prev);

  return (
    <div>
      {label && <span style={{ marginRight: "10px" }}>{label}:</span>}

      <button
        onClick={toggle}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          color: isOn ? "green" : "red",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}
